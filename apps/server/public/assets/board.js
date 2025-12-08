function Jf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tc = { exports: {} }, Si = {}, nc = { exports: {} }, U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var el = Symbol.for("react.element"), Zf = Symbol.for("react.portal"), qf = Symbol.for("react.fragment"), ep = Symbol.for("react.strict_mode"), tp = Symbol.for("react.profiler"), np = Symbol.for("react.provider"), rp = Symbol.for("react.context"), lp = Symbol.for("react.forward_ref"), ip = Symbol.for("react.suspense"), op = Symbol.for("react.memo"), sp = Symbol.for("react.lazy"), Ta = Symbol.iterator;
function ap(e) {
  return e === null || typeof e != "object" ? null : (e = Ta && e[Ta] || e["@@iterator"], typeof e == "function" ? e : null);
}
var rc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, lc = Object.assign, ic = {};
function Jn(e, t, n) {
  this.props = e, this.context = t, this.refs = ic, this.updater = n || rc;
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function oc() {
}
oc.prototype = Jn.prototype;
function ws(e, t, n) {
  this.props = e, this.context = t, this.refs = ic, this.updater = n || rc;
}
var Ss = ws.prototype = new oc();
Ss.constructor = ws;
lc(Ss, Jn.prototype);
Ss.isPureReactComponent = !0;
var La = Array.isArray, sc = Object.prototype.hasOwnProperty, ks = { current: null }, ac = { key: !0, ref: !0, __self: !0, __source: !0 };
function uc(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) sc.call(t, r) && !ac.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var a = Array(s), c = 0; c < s; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) l[r] === void 0 && (l[r] = s[r]);
  return { $$typeof: el, type: e, key: i, ref: o, props: l, _owner: ks.current };
}
function up(e, t) {
  return { $$typeof: el, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Cs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === el;
}
function cp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ia = /\/+/g;
function Qi(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? cp("" + e.key) : t.toString(36);
}
function Pl(e, t, n, r, l) {
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
        case Zf:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Qi(o, 0) : r, La(l) ? (n = "", e != null && (n = e.replace(Ia, "$&/") + "/"), Pl(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Cs(l) && (l = up(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Ia, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", La(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var a = r + Qi(i, s);
    o += Pl(i, t, n, a, l);
  }
  else if (a = ap(e), typeof a == "function") for (e = a.call(e), s = 0; !(i = e.next()).done; ) i = i.value, a = r + Qi(i, s++), o += Pl(i, t, n, a, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function dl(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Pl(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function dp(e) {
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
var Re = { current: null }, _l = { transition: null }, fp = { ReactCurrentDispatcher: Re, ReactCurrentBatchConfig: _l, ReactCurrentOwner: ks };
function cc() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = { map: dl, forEach: function(e, t, n) {
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
U.Component = Jn;
U.Fragment = qf;
U.Profiler = tp;
U.PureComponent = ws;
U.StrictMode = ep;
U.Suspense = ip;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fp;
U.act = cc;
U.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = lc({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = ks.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (a in t) sc.call(t, a) && !ac.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
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
U.createContext = function(e) {
  return e = { $$typeof: rp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: np, _context: e }, e.Consumer = e;
};
U.createElement = uc;
U.createFactory = function(e) {
  var t = uc.bind(null, e);
  return t.type = e, t;
};
U.createRef = function() {
  return { current: null };
};
U.forwardRef = function(e) {
  return { $$typeof: lp, render: e };
};
U.isValidElement = Cs;
U.lazy = function(e) {
  return { $$typeof: sp, _payload: { _status: -1, _result: e }, _init: dp };
};
U.memo = function(e, t) {
  return { $$typeof: op, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function(e) {
  var t = _l.transition;
  _l.transition = {};
  try {
    e();
  } finally {
    _l.transition = t;
  }
};
U.unstable_act = cc;
U.useCallback = function(e, t) {
  return Re.current.useCallback(e, t);
};
U.useContext = function(e) {
  return Re.current.useContext(e);
};
U.useDebugValue = function() {
};
U.useDeferredValue = function(e) {
  return Re.current.useDeferredValue(e);
};
U.useEffect = function(e, t) {
  return Re.current.useEffect(e, t);
};
U.useId = function() {
  return Re.current.useId();
};
U.useImperativeHandle = function(e, t, n) {
  return Re.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function(e, t) {
  return Re.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function(e, t) {
  return Re.current.useLayoutEffect(e, t);
};
U.useMemo = function(e, t) {
  return Re.current.useMemo(e, t);
};
U.useReducer = function(e, t, n) {
  return Re.current.useReducer(e, t, n);
};
U.useRef = function(e) {
  return Re.current.useRef(e);
};
U.useState = function(e) {
  return Re.current.useState(e);
};
U.useSyncExternalStore = function(e, t, n) {
  return Re.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function() {
  return Re.current.useTransition();
};
U.version = "18.3.1";
nc.exports = U;
var v = nc.exports;
const q = /* @__PURE__ */ Jf(v);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pp = v, hp = Symbol.for("react.element"), mp = Symbol.for("react.fragment"), vp = Object.prototype.hasOwnProperty, gp = pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, yp = { key: !0, ref: !0, __self: !0, __source: !0 };
function dc(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) vp.call(t, r) && !yp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: hp, type: e, key: i, ref: o, props: l, _owner: gp.current };
}
Si.Fragment = mp;
Si.jsx = dc;
Si.jsxs = dc;
tc.exports = Si;
var u = tc.exports, Eo = {}, fc = { exports: {} }, He = {}, pc = { exports: {} }, hc = {};
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
  function t(I, M) {
    var z = I.length;
    I.push(M);
    e: for (; 0 < z; ) {
      var V = z - 1 >>> 1, B = I[V];
      if (0 < l(B, M)) I[V] = M, I[z] = B, z = V;
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var M = I[0], z = I.pop();
    if (z !== M) {
      I[0] = z;
      e: for (var V = 0, B = I.length, ae = B >>> 1; V < ae; ) {
        var A = 2 * (V + 1) - 1, j = I[A], _ = A + 1, X = I[_];
        if (0 > l(j, z)) _ < B && 0 > l(X, j) ? (I[V] = X, I[_] = z, V = _) : (I[V] = j, I[A] = z, V = A);
        else if (_ < B && 0 > l(X, z)) I[V] = X, I[_] = z, V = _;
        else break e;
      }
    }
    return M;
  }
  function l(I, M) {
    var z = I.sortIndex - M.sortIndex;
    return z !== 0 ? z : I.id - M.id;
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
  var a = [], c = [], h = 1, f = null, g = 3, y = !1, k = !1, x = !1, T = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(I) {
    for (var M = n(c); M !== null; ) {
      if (M.callback === null) r(c);
      else if (M.startTime <= I) r(c), M.sortIndex = M.expirationTime, t(a, M);
      else break;
      M = n(c);
    }
  }
  function w(I) {
    if (x = !1, m(I), !k) if (n(a) !== null) k = !0, Ee(N);
    else {
      var M = n(c);
      M !== null && H(w, M.startTime - I);
    }
  }
  function N(I, M) {
    k = !1, x && (x = !1, p(S), S = -1), y = !0;
    var z = g;
    try {
      for (m(M), f = n(a); f !== null && (!(f.expirationTime > M) || I && !L()); ) {
        var V = f.callback;
        if (typeof V == "function") {
          f.callback = null, g = f.priorityLevel;
          var B = V(f.expirationTime <= M);
          M = e.unstable_now(), typeof B == "function" ? f.callback = B : f === n(a) && r(a), m(M);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var ae = !0;
      else {
        var A = n(c);
        A !== null && H(w, A.startTime - M), ae = !1;
      }
      return ae;
    } finally {
      f = null, g = z, y = !1;
    }
  }
  var D = !1, C = null, S = -1, P = 5, E = -1;
  function L() {
    return !(e.unstable_now() - E < P);
  }
  function b() {
    if (C !== null) {
      var I = e.unstable_now();
      E = I;
      var M = !0;
      try {
        M = C(!0, I);
      } finally {
        M ? F() : (D = !1, C = null);
      }
    } else D = !1;
  }
  var F;
  if (typeof d == "function") F = function() {
    d(b);
  };
  else if (typeof MessageChannel < "u") {
    var W = new MessageChannel(), oe = W.port2;
    W.port1.onmessage = b, F = function() {
      oe.postMessage(null);
    };
  } else F = function() {
    T(b, 0);
  };
  function Ee(I) {
    C = I, D || (D = !0, F());
  }
  function H(I, M) {
    S = T(function() {
      I(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, e.unstable_continueExecution = function() {
    k || y || (k = !0, Ee(N));
  }, e.unstable_forceFrameRate = function(I) {
    0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < I ? Math.floor(1e3 / I) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return g;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(I) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = g;
    }
    var z = g;
    g = M;
    try {
      return I();
    } finally {
      g = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(I, M) {
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
    var z = g;
    g = I;
    try {
      return M();
    } finally {
      g = z;
    }
  }, e.unstable_scheduleCallback = function(I, M, z) {
    var V = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? V + z : V) : z = V, I) {
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
    return B = z + B, I = { id: h++, callback: M, priorityLevel: I, startTime: z, expirationTime: B, sortIndex: -1 }, z > V ? (I.sortIndex = z, t(c, I), n(a) === null && I === n(c) && (x ? (p(S), S = -1) : x = !0, H(w, z - V))) : (I.sortIndex = B, t(a, I), k || y || (k = !0, Ee(N))), I;
  }, e.unstable_shouldYield = L, e.unstable_wrapCallback = function(I) {
    var M = g;
    return function() {
      var z = g;
      g = M;
      try {
        return I.apply(this, arguments);
      } finally {
        g = z;
      }
    };
  };
})(hc);
pc.exports = hc;
var xp = pc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wp = v, We = xp;
function R(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var mc = /* @__PURE__ */ new Set(), Or = {};
function mn(e, t) {
  Hn(e, t), Hn(e + "Capture", t);
}
function Hn(e, t) {
  for (Or[e] = t, e = 0; e < t.length; e++) mc.add(t[e]);
}
var Et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), No = Object.prototype.hasOwnProperty, Sp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Pa = {}, _a = {};
function kp(e) {
  return No.call(_a, e) ? !0 : No.call(Pa, e) ? !1 : Sp.test(e) ? _a[e] = !0 : (Pa[e] = !0, !1);
}
function Cp(e, t, n, r) {
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
function Ep(e, t, n, r) {
  if (t === null || typeof t > "u" || Cp(e, t, n, r)) return !0;
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
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ye[e] = new Te(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ye[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ye[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ye[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ye[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ye[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ye[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ye[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ye[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  ye[t] = new Te(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Es, Ns);
  ye[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Es, Ns);
  ye[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ye[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ye[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function js(e, t, n, r) {
  var l = ye.hasOwnProperty(t) ? ye[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ep(t, n, l, r) && (n = null), r || l === null ? kp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Rt = wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fl = Symbol.for("react.element"), En = Symbol.for("react.portal"), Nn = Symbol.for("react.fragment"), Ds = Symbol.for("react.strict_mode"), jo = Symbol.for("react.profiler"), vc = Symbol.for("react.provider"), gc = Symbol.for("react.context"), Rs = Symbol.for("react.forward_ref"), Do = Symbol.for("react.suspense"), Ro = Symbol.for("react.suspense_list"), Ts = Symbol.for("react.memo"), Mt = Symbol.for("react.lazy"), yc = Symbol.for("react.offscreen"), Oa = Symbol.iterator;
function ar(e) {
  return e === null || typeof e != "object" ? null : (e = Oa && e[Oa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var re = Object.assign, Ki;
function yr(e) {
  if (Ki === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ki = t && t[1] || "";
  }
  return `
` + Ki + e;
}
var Xi = !1;
function Gi(e, t) {
  if (!e || Xi) return "";
  Xi = !0;
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
    Xi = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? yr(e) : "";
}
function Np(e) {
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
      return e = Gi(e.type, !1), e;
    case 11:
      return e = Gi(e.type.render, !1), e;
    case 1:
      return e = Gi(e.type, !0), e;
    default:
      return "";
  }
}
function To(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Nn:
      return "Fragment";
    case En:
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
    case gc:
      return (e.displayName || "Context") + ".Consumer";
    case vc:
      return (e._context.displayName || "Context") + ".Provider";
    case Rs:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ts:
      return t = e.displayName || null, t !== null ? t : To(e.type) || "Memo";
    case Mt:
      t = e._payload, e = e._init;
      try {
        return To(e(t));
      } catch {
      }
  }
  return null;
}
function jp(e) {
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
function xc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Dp(e) {
  var t = xc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Dp(e));
}
function wc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = xc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Vl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Lo(e, t) {
  var n = t.checked;
  return re({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ma(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Yt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Sc(e, t) {
  t = t.checked, t != null && js(e, "checked", t, !1);
}
function Io(e, t) {
  Sc(e, t);
  var n = Yt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Po(e, t.type, n) : t.hasOwnProperty("defaultValue") && Po(e, t.type, Yt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
  (t !== "number" || Vl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xr = Array.isArray;
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
function _o(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return re({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
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
  e._wrapperState = { initialValue: Yt(n) };
}
function kc(e, t) {
  var n = Yt(t.value), r = Yt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Fa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Cc(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Cc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var hl, Ec = function(e) {
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
var kr = {
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
}, Rp = ["Webkit", "ms", "Moz", "O"];
Object.keys(kr).forEach(function(e) {
  Rp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), kr[t] = kr[e];
  });
});
function Nc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || kr.hasOwnProperty(e) && kr[e] ? ("" + t).trim() : t + "px";
}
function jc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Nc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Tp = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Mo(e, t) {
  if (t) {
    if (Tp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
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
function Ls(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Fo = null, Fn = null, Bn = null;
function Ba(e) {
  if (e = rl(e)) {
    if (typeof Fo != "function") throw Error(R(280));
    var t = e.stateNode;
    t && (t = ji(t), Fo(e.stateNode, e.type, t));
  }
}
function Dc(e) {
  Fn ? Bn ? Bn.push(e) : Bn = [e] : Fn = e;
}
function Rc() {
  if (Fn) {
    var e = Fn, t = Bn;
    if (Bn = Fn = null, Ba(e), t) for (e = 0; e < t.length; e++) Ba(t[e]);
  }
}
function Tc(e, t) {
  return e(t);
}
function Lc() {
}
var Yi = !1;
function Ic(e, t, n) {
  if (Yi) return e(t, n);
  Yi = !0;
  try {
    return Tc(e, t, n);
  } finally {
    Yi = !1, (Fn !== null || Bn !== null) && (Lc(), Rc());
  }
}
function Ar(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ji(n);
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
var Bo = !1;
if (Et) try {
  var ur = {};
  Object.defineProperty(ur, "passive", { get: function() {
    Bo = !0;
  } }), window.addEventListener("test", ur, ur), window.removeEventListener("test", ur, ur);
} catch {
  Bo = !1;
}
function Lp(e, t, n, r, l, i, o, s, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Cr = !1, Ql = null, Kl = !1, Uo = null, Ip = { onError: function(e) {
  Cr = !0, Ql = e;
} };
function Pp(e, t, n, r, l, i, o, s, a) {
  Cr = !1, Ql = null, Lp.apply(Ip, arguments);
}
function _p(e, t, n, r, l, i, o, s, a) {
  if (Pp.apply(this, arguments), Cr) {
    if (Cr) {
      var c = Ql;
      Cr = !1, Ql = null;
    } else throw Error(R(198));
    Kl || (Kl = !0, Uo = c);
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
function Pc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ua(e) {
  if (vn(e) !== e) throw Error(R(188));
}
function Op(e) {
  var t = e.alternate;
  if (!t) {
    if (t = vn(e), t === null) throw Error(R(188));
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
function _c(e) {
  return e = Op(e), e !== null ? Oc(e) : null;
}
function Oc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Oc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mc = We.unstable_scheduleCallback, $a = We.unstable_cancelCallback, Mp = We.unstable_shouldYield, Ap = We.unstable_requestPaint, ie = We.unstable_now, zp = We.unstable_getCurrentPriorityLevel, Is = We.unstable_ImmediatePriority, Ac = We.unstable_UserBlockingPriority, Xl = We.unstable_NormalPriority, Fp = We.unstable_LowPriority, zc = We.unstable_IdlePriority, ki = null, mt = null;
function Bp(e) {
  if (mt && typeof mt.onCommitFiberRoot == "function") try {
    mt.onCommitFiberRoot(ki, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var lt = Math.clz32 ? Math.clz32 : bp, Up = Math.log, $p = Math.LN2;
function bp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Up(e) / $p | 0) | 0;
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
function Gl(e, t) {
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
function Wp(e, t) {
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
function Hp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - lt(i), s = 1 << o, a = l[o];
    a === -1 ? (!(s & n) || s & r) && (l[o] = Wp(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function $o(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Fc() {
  var e = ml;
  return ml <<= 1, !(ml & 4194240) && (ml = 64), e;
}
function Ji(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function tl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - lt(t), e[t] = n;
}
function Vp(e, t) {
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
var G = 0;
function Bc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Uc, _s, $c, bc, Wc, bo = !1, gl = [], bt = null, Wt = null, Ht = null, zr = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Map(), Ft = [], Qp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ba(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      bt = null;
      break;
    case "dragenter":
    case "dragleave":
      Wt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ht = null;
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
function cr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = rl(t), t !== null && _s(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Kp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return bt = cr(bt, e, t, n, r, l), !0;
    case "dragenter":
      return Wt = cr(Wt, e, t, n, r, l), !0;
    case "mouseover":
      return Ht = cr(Ht, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return zr.set(i, cr(zr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Fr.set(i, cr(Fr.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Hc(e) {
  var t = ln(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Pc(n), t !== null) {
          e.blockedOn = t, Wc(e.priority, function() {
            $c(n);
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
function Ol(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Wo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      zo = r, n.target.dispatchEvent(r), zo = null;
    } else return t = rl(n), t !== null && _s(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Wa(e, t, n) {
  Ol(e) && n.delete(t);
}
function Xp() {
  bo = !1, bt !== null && Ol(bt) && (bt = null), Wt !== null && Ol(Wt) && (Wt = null), Ht !== null && Ol(Ht) && (Ht = null), zr.forEach(Wa), Fr.forEach(Wa);
}
function dr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, bo || (bo = !0, We.unstable_scheduleCallback(We.unstable_NormalPriority, Xp)));
}
function Br(e) {
  function t(l) {
    return dr(l, e);
  }
  if (0 < gl.length) {
    dr(gl[0], e);
    for (var n = 1; n < gl.length; n++) {
      var r = gl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (bt !== null && dr(bt, e), Wt !== null && dr(Wt, e), Ht !== null && dr(Ht, e), zr.forEach(t), Fr.forEach(t), n = 0; n < Ft.length; n++) r = Ft[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ft.length && (n = Ft[0], n.blockedOn === null); ) Hc(n), n.blockedOn === null && Ft.shift();
}
var Un = Rt.ReactCurrentBatchConfig, Yl = !0;
function Gp(e, t, n, r) {
  var l = G, i = Un.transition;
  Un.transition = null;
  try {
    G = 1, Os(e, t, n, r);
  } finally {
    G = l, Un.transition = i;
  }
}
function Yp(e, t, n, r) {
  var l = G, i = Un.transition;
  Un.transition = null;
  try {
    G = 4, Os(e, t, n, r);
  } finally {
    G = l, Un.transition = i;
  }
}
function Os(e, t, n, r) {
  if (Yl) {
    var l = Wo(e, t, n, r);
    if (l === null) so(e, t, r, Jl, n), ba(e, r);
    else if (Kp(l, e, t, n, r)) r.stopPropagation();
    else if (ba(e, r), t & 4 && -1 < Qp.indexOf(e)) {
      for (; l !== null; ) {
        var i = rl(l);
        if (i !== null && Uc(i), i = Wo(e, t, n, r), i === null && so(e, t, r, Jl, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else so(e, t, r, null, n);
  }
}
var Jl = null;
function Wo(e, t, n, r) {
  if (Jl = null, e = Ls(r), e = ln(e), e !== null) if (t = vn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Pc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Jl = e, null;
}
function Vc(e) {
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
      switch (zp()) {
        case Is:
          return 1;
        case Ac:
          return 4;
        case Xl:
        case Fp:
          return 16;
        case zc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ut = null, Ms = null, Ml = null;
function Qc() {
  if (Ml) return Ml;
  var e, t = Ms, n = t.length, r, l = "value" in Ut ? Ut.value : Ut.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Ml = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Al(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function yl() {
  return !0;
}
function Ha() {
  return !1;
}
function Ve(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? yl : Ha, this.isPropagationStopped = Ha, this;
  }
  return re(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = yl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = yl);
  }, persist: function() {
  }, isPersistent: yl }), t;
}
var Zn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, As = Ve(Zn), nl = re({}, Zn, { view: 0, detail: 0 }), Jp = Ve(nl), Zi, qi, fr, Ci = re({}, nl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== fr && (fr && e.type === "mousemove" ? (Zi = e.screenX - fr.screenX, qi = e.screenY - fr.screenY) : qi = Zi = 0, fr = e), Zi);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : qi;
} }), Va = Ve(Ci), Zp = re({}, Ci, { dataTransfer: 0 }), qp = Ve(Zp), eh = re({}, nl, { relatedTarget: 0 }), eo = Ve(eh), th = re({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), nh = Ve(th), rh = re({}, Zn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), lh = Ve(rh), ih = re({}, Zn, { data: 0 }), Qa = Ve(ih), oh = {
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
}, sh = {
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
}, ah = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function uh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ah[e]) ? !!t[e] : !1;
}
function zs() {
  return uh;
}
var ch = re({}, nl, { key: function(e) {
  if (e.key) {
    var t = oh[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Al(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zs, charCode: function(e) {
  return e.type === "keypress" ? Al(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Al(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), dh = Ve(ch), fh = re({}, Ci, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ka = Ve(fh), ph = re({}, nl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zs }), hh = Ve(ph), mh = re({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vh = Ve(mh), gh = re({}, Ci, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), yh = Ve(gh), xh = [9, 13, 27, 32], Fs = Et && "CompositionEvent" in window, Er = null;
Et && "documentMode" in document && (Er = document.documentMode);
var wh = Et && "TextEvent" in window && !Er, Kc = Et && (!Fs || Er && 8 < Er && 11 >= Er), Xa = " ", Ga = !1;
function Xc(e, t) {
  switch (e) {
    case "keyup":
      return xh.indexOf(t.keyCode) !== -1;
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
function Gc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var jn = !1;
function Sh(e, t) {
  switch (e) {
    case "compositionend":
      return Gc(t);
    case "keypress":
      return t.which !== 32 ? null : (Ga = !0, Xa);
    case "textInput":
      return e = t.data, e === Xa && Ga ? null : e;
    default:
      return null;
  }
}
function kh(e, t) {
  if (jn) return e === "compositionend" || !Fs && Xc(e, t) ? (e = Qc(), Ml = Ms = Ut = null, jn = !1, e) : null;
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
      return Kc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ch = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ya(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ch[e.type] : t === "textarea";
}
function Yc(e, t, n, r) {
  Dc(r), t = Zl(t, "onChange"), 0 < t.length && (n = new As("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Nr = null, Ur = null;
function Eh(e) {
  sd(e, 0);
}
function Ei(e) {
  var t = Tn(e);
  if (wc(t)) return e;
}
function Nh(e, t) {
  if (e === "change") return t;
}
var Jc = !1;
if (Et) {
  var to;
  if (Et) {
    var no = "oninput" in document;
    if (!no) {
      var Ja = document.createElement("div");
      Ja.setAttribute("oninput", "return;"), no = typeof Ja.oninput == "function";
    }
    to = no;
  } else to = !1;
  Jc = to && (!document.documentMode || 9 < document.documentMode);
}
function Za() {
  Nr && (Nr.detachEvent("onpropertychange", Zc), Ur = Nr = null);
}
function Zc(e) {
  if (e.propertyName === "value" && Ei(Ur)) {
    var t = [];
    Yc(t, Ur, e, Ls(e)), Ic(Eh, t);
  }
}
function jh(e, t, n) {
  e === "focusin" ? (Za(), Nr = t, Ur = n, Nr.attachEvent("onpropertychange", Zc)) : e === "focusout" && Za();
}
function Dh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ei(Ur);
}
function Rh(e, t) {
  if (e === "click") return Ei(t);
}
function Th(e, t) {
  if (e === "input" || e === "change") return Ei(t);
}
function Lh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ot = typeof Object.is == "function" ? Object.is : Lh;
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
function qc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ed() {
  for (var e = window, t = Vl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Vl(e.document);
  }
  return t;
}
function Bs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Ih(e) {
  var t = ed(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && qc(n.ownerDocument.documentElement, n)) {
    if (r !== null && Bs(n)) {
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
var Ph = Et && "documentMode" in document && 11 >= document.documentMode, Dn = null, Ho = null, jr = null, Vo = !1;
function tu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vo || Dn == null || Dn !== Vl(r) || (r = Dn, "selectionStart" in r && Bs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), jr && $r(jr, r) || (jr = r, r = Zl(Ho, "onSelect"), 0 < r.length && (t = new As("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Dn)));
}
function xl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Rn = { animationend: xl("Animation", "AnimationEnd"), animationiteration: xl("Animation", "AnimationIteration"), animationstart: xl("Animation", "AnimationStart"), transitionend: xl("Transition", "TransitionEnd") }, ro = {}, td = {};
Et && (td = document.createElement("div").style, "AnimationEvent" in window || (delete Rn.animationend.animation, delete Rn.animationiteration.animation, delete Rn.animationstart.animation), "TransitionEvent" in window || delete Rn.transitionend.transition);
function Ni(e) {
  if (ro[e]) return ro[e];
  if (!Rn[e]) return e;
  var t = Rn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in td) return ro[e] = t[n];
  return e;
}
var nd = Ni("animationend"), rd = Ni("animationiteration"), ld = Ni("animationstart"), id = Ni("transitionend"), od = /* @__PURE__ */ new Map(), nu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function qt(e, t) {
  od.set(e, t), mn(t, [e]);
}
for (var lo = 0; lo < nu.length; lo++) {
  var io = nu[lo], _h = io.toLowerCase(), Oh = io[0].toUpperCase() + io.slice(1);
  qt(_h, "on" + Oh);
}
qt(nd, "onAnimationEnd");
qt(rd, "onAnimationIteration");
qt(ld, "onAnimationStart");
qt("dblclick", "onDoubleClick");
qt("focusin", "onFocus");
qt("focusout", "onBlur");
qt(id, "onTransitionEnd");
Hn("onMouseEnter", ["mouseout", "mouseover"]);
Hn("onMouseLeave", ["mouseout", "mouseover"]);
Hn("onPointerEnter", ["pointerout", "pointerover"]);
Hn("onPointerLeave", ["pointerout", "pointerover"]);
mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Mh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));
function ru(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, _p(r, t, void 0, e), e.currentTarget = null;
}
function sd(e, t) {
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
  if (Kl) throw e = Uo, Kl = !1, Uo = null, e;
}
function J(e, t) {
  var n = t[Yo];
  n === void 0 && (n = t[Yo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ad(t, e, 2, !1), n.add(r));
}
function oo(e, t, n) {
  var r = 0;
  t && (r |= 4), ad(n, e, r, t);
}
var wl = "_reactListening" + Math.random().toString(36).slice(2);
function br(e) {
  if (!e[wl]) {
    e[wl] = !0, mc.forEach(function(n) {
      n !== "selectionchange" && (Mh.has(n) || oo(n, !1, e), oo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wl] || (t[wl] = !0, oo("selectionchange", !1, t));
  }
}
function ad(e, t, n, r) {
  switch (Vc(t)) {
    case 1:
      var l = Gp;
      break;
    case 4:
      l = Yp;
      break;
    default:
      l = Os;
  }
  n = l.bind(null, t, n, e), l = void 0, !Bo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function so(e, t, n, r, l) {
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
  Ic(function() {
    var c = i, h = Ls(n), f = [];
    e: {
      var g = od.get(e);
      if (g !== void 0) {
        var y = As, k = e;
        switch (e) {
          case "keypress":
            if (Al(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = dh;
            break;
          case "focusin":
            k = "focus", y = eo;
            break;
          case "focusout":
            k = "blur", y = eo;
            break;
          case "beforeblur":
          case "afterblur":
            y = eo;
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
            y = Va;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = qp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = hh;
            break;
          case nd:
          case rd:
          case ld:
            y = nh;
            break;
          case id:
            y = vh;
            break;
          case "scroll":
            y = Jp;
            break;
          case "wheel":
            y = yh;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = lh;
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
        var x = (t & 4) !== 0, T = !x && e === "scroll", p = x ? g !== null ? g + "Capture" : null : g;
        x = [];
        for (var d = c, m; d !== null; ) {
          m = d;
          var w = m.stateNode;
          if (m.tag === 5 && w !== null && (m = w, p !== null && (w = Ar(d, p), w != null && x.push(Wr(d, w, m)))), T) break;
          d = d.return;
        }
        0 < x.length && (g = new y(g, k, null, n, h), f.push({ event: g, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (g = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", g && n !== zo && (k = n.relatedTarget || n.fromElement) && (ln(k) || k[Nt])) break e;
        if ((y || g) && (g = h.window === h ? h : (g = h.ownerDocument) ? g.defaultView || g.parentWindow : window, y ? (k = n.relatedTarget || n.toElement, y = c, k = k ? ln(k) : null, k !== null && (T = vn(k), k !== T || k.tag !== 5 && k.tag !== 6) && (k = null)) : (y = null, k = c), y !== k)) {
          if (x = Va, w = "onMouseLeave", p = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (x = Ka, w = "onPointerLeave", p = "onPointerEnter", d = "pointer"), T = y == null ? g : Tn(y), m = k == null ? g : Tn(k), g = new x(w, d + "leave", y, n, h), g.target = T, g.relatedTarget = m, w = null, ln(h) === c && (x = new x(p, d + "enter", k, n, h), x.target = m, x.relatedTarget = T, w = x), T = w, y && k) t: {
            for (x = y, p = k, d = 0, m = x; m; m = Cn(m)) d++;
            for (m = 0, w = p; w; w = Cn(w)) m++;
            for (; 0 < d - m; ) x = Cn(x), d--;
            for (; 0 < m - d; ) p = Cn(p), m--;
            for (; d--; ) {
              if (x === p || p !== null && x === p.alternate) break t;
              x = Cn(x), p = Cn(p);
            }
            x = null;
          }
          else x = null;
          y !== null && lu(f, g, y, x, !1), k !== null && T !== null && lu(f, T, k, x, !0);
        }
      }
      e: {
        if (g = c ? Tn(c) : window, y = g.nodeName && g.nodeName.toLowerCase(), y === "select" || y === "input" && g.type === "file") var N = Nh;
        else if (Ya(g)) if (Jc) N = Th;
        else {
          N = Dh;
          var D = jh;
        }
        else (y = g.nodeName) && y.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (N = Rh);
        if (N && (N = N(e, c))) {
          Yc(f, N, n, h);
          break e;
        }
        D && D(e, g, c), e === "focusout" && (D = g._wrapperState) && D.controlled && g.type === "number" && Po(g, "number", g.value);
      }
      switch (D = c ? Tn(c) : window, e) {
        case "focusin":
          (Ya(D) || D.contentEditable === "true") && (Dn = D, Ho = c, jr = null);
          break;
        case "focusout":
          jr = Ho = Dn = null;
          break;
        case "mousedown":
          Vo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Vo = !1, tu(f, n, h);
          break;
        case "selectionchange":
          if (Ph) break;
        case "keydown":
        case "keyup":
          tu(f, n, h);
      }
      var C;
      if (Fs) e: {
        switch (e) {
          case "compositionstart":
            var S = "onCompositionStart";
            break e;
          case "compositionend":
            S = "onCompositionEnd";
            break e;
          case "compositionupdate":
            S = "onCompositionUpdate";
            break e;
        }
        S = void 0;
      }
      else jn ? Xc(e, n) && (S = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (S = "onCompositionStart");
      S && (Kc && n.locale !== "ko" && (jn || S !== "onCompositionStart" ? S === "onCompositionEnd" && jn && (C = Qc()) : (Ut = h, Ms = "value" in Ut ? Ut.value : Ut.textContent, jn = !0)), D = Zl(c, S), 0 < D.length && (S = new Qa(S, e, null, n, h), f.push({ event: S, listeners: D }), C ? S.data = C : (C = Gc(n), C !== null && (S.data = C)))), (C = wh ? Sh(e, n) : kh(e, n)) && (c = Zl(c, "onBeforeInput"), 0 < c.length && (h = new Qa("onBeforeInput", "beforeinput", null, n, h), f.push({ event: h, listeners: c }), h.data = C));
    }
    sd(f, t);
  });
}
function Wr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Ar(e, n), i != null && r.unshift(Wr(e, i, l)), i = Ar(e, t), i != null && r.push(Wr(e, i, l))), e = e.return;
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
function lu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, c = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && c !== null && (s = c, l ? (a = Ar(n, i), a != null && o.unshift(Wr(n, a, s))) : l || (a = Ar(n, i), a != null && o.push(Wr(n, a, s)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Ah = /\r\n?/g, zh = /\u0000|\uFFFD/g;
function iu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ah, `
`).replace(zh, "");
}
function Sl(e, t, n) {
  if (t = iu(t), iu(e) !== t && n) throw Error(R(425));
}
function ql() {
}
var Qo = null, Ko = null;
function Xo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Go = typeof setTimeout == "function" ? setTimeout : void 0, Fh = typeof clearTimeout == "function" ? clearTimeout : void 0, ou = typeof Promise == "function" ? Promise : void 0, Bh = typeof queueMicrotask == "function" ? queueMicrotask : typeof ou < "u" ? function(e) {
  return ou.resolve(null).then(e).catch(Uh);
} : Go;
function Uh(e) {
  setTimeout(function() {
    throw e;
  });
}
function ao(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Br(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Br(t);
}
function Vt(e) {
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
var qn = Math.random().toString(36).slice(2), ht = "__reactFiber$" + qn, Hr = "__reactProps$" + qn, Nt = "__reactContainer$" + qn, Yo = "__reactEvents$" + qn, $h = "__reactListeners$" + qn, bh = "__reactHandles$" + qn;
function ln(e) {
  var t = e[ht];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Nt] || n[ht]) {
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
  return e = e[ht] || e[Nt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Tn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function ji(e) {
  return e[Hr] || null;
}
var Jo = [], Ln = -1;
function en(e) {
  return { current: e };
}
function Z(e) {
  0 > Ln || (e.current = Jo[Ln], Jo[Ln] = null, Ln--);
}
function Y(e, t) {
  Ln++, Jo[Ln] = e.current, e.current = t;
}
var Jt = {}, Ce = en(Jt), _e = en(!1), cn = Jt;
function Vn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Oe(e) {
  return e = e.childContextTypes, e != null;
}
function ei() {
  Z(_e), Z(Ce);
}
function au(e, t, n) {
  if (Ce.current !== Jt) throw Error(R(168));
  Y(Ce, t), Y(_e, n);
}
function ud(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(R(108, jp(e) || "Unknown", l));
  return re({}, n, r);
}
function ti(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jt, cn = Ce.current, Y(Ce, e), Y(_e, _e.current), !0;
}
function uu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n ? (e = ud(e, t, cn), r.__reactInternalMemoizedMergedChildContext = e, Z(_e), Z(Ce), Y(Ce, e)) : Z(_e), Y(_e, n);
}
var wt = null, Di = !1, uo = !1;
function cd(e) {
  wt === null ? wt = [e] : wt.push(e);
}
function Wh(e) {
  Di = !0, cd(e);
}
function tn() {
  if (!uo && wt !== null) {
    uo = !0;
    var e = 0, t = G;
    try {
      var n = wt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      wt = null, Di = !1;
    } catch (l) {
      throw wt !== null && (wt = wt.slice(e + 1)), Mc(Is, tn), l;
    } finally {
      G = t, uo = !1;
    }
  }
  return null;
}
var In = [], Pn = 0, ni = null, ri = 0, Xe = [], Ge = 0, dn = null, St = 1, kt = "";
function nn(e, t) {
  In[Pn++] = ri, In[Pn++] = ni, ni = e, ri = t;
}
function dd(e, t, n) {
  Xe[Ge++] = St, Xe[Ge++] = kt, Xe[Ge++] = dn, dn = e;
  var r = St;
  e = kt;
  var l = 32 - lt(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - lt(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, St = 1 << 32 - lt(t) + l | n << l | r, kt = i + e;
  } else St = 1 << i | n << l | r, kt = e;
}
function Us(e) {
  e.return !== null && (nn(e, 1), dd(e, 1, 0));
}
function $s(e) {
  for (; e === ni; ) ni = In[--Pn], In[Pn] = null, ri = In[--Pn], In[Pn] = null;
  for (; e === dn; ) dn = Xe[--Ge], Xe[Ge] = null, kt = Xe[--Ge], Xe[Ge] = null, St = Xe[--Ge], Xe[Ge] = null;
}
var be = null, $e = null, ee = !1, rt = null;
function fd(e, t) {
  var n = Ye(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function cu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, be = e, $e = Vt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, be = e, $e = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = dn !== null ? { id: St, overflow: kt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ye(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, be = e, $e = null, !0) : !1;
    default:
      return !1;
  }
}
function Zo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function qo(e) {
  if (ee) {
    var t = $e;
    if (t) {
      var n = t;
      if (!cu(e, t)) {
        if (Zo(e)) throw Error(R(418));
        t = Vt(n.nextSibling);
        var r = be;
        t && cu(e, t) ? fd(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, be = e);
      }
    } else {
      if (Zo(e)) throw Error(R(418));
      e.flags = e.flags & -4097 | 2, ee = !1, be = e;
    }
  }
}
function du(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  be = e;
}
function kl(e) {
  if (e !== be) return !1;
  if (!ee) return du(e), ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Xo(e.type, e.memoizedProps)), t && (t = $e)) {
    if (Zo(e)) throw pd(), Error(R(418));
    for (; t; ) fd(e, t), t = Vt(t.nextSibling);
  }
  if (du(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $e = Vt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      $e = null;
    }
  } else $e = be ? Vt(e.stateNode.nextSibling) : null;
  return !0;
}
function pd() {
  for (var e = $e; e; ) e = Vt(e.nextSibling);
}
function Qn() {
  $e = be = null, ee = !1;
}
function bs(e) {
  rt === null ? rt = [e] : rt.push(e);
}
var Hh = Rt.ReactCurrentBatchConfig;
function pr(e, t, n) {
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
function hd(e) {
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
    return p = Gt(p, d), p.index = 0, p.sibling = null, p;
  }
  function i(p, d, m) {
    return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < d ? (p.flags |= 2, d) : m) : (p.flags |= 2, d)) : (p.flags |= 1048576, d);
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, d, m, w) {
    return d === null || d.tag !== 6 ? (d = go(m, p.mode, w), d.return = p, d) : (d = l(d, m), d.return = p, d);
  }
  function a(p, d, m, w) {
    var N = m.type;
    return N === Nn ? h(p, d, m.props.children, w, m.key) : d !== null && (d.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Mt && fu(N) === d.type) ? (w = l(d, m.props), w.ref = pr(p, d, m), w.return = p, w) : (w = Wl(m.type, m.key, m.props, null, p.mode, w), w.ref = pr(p, d, m), w.return = p, w);
  }
  function c(p, d, m, w) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = yo(m, p.mode, w), d.return = p, d) : (d = l(d, m.children || []), d.return = p, d);
  }
  function h(p, d, m, w, N) {
    return d === null || d.tag !== 7 ? (d = un(m, p.mode, w, N), d.return = p, d) : (d = l(d, m), d.return = p, d);
  }
  function f(p, d, m) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = go("" + d, p.mode, m), d.return = p, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case fl:
          return m = Wl(d.type, d.key, d.props, null, p.mode, m), m.ref = pr(p, null, d), m.return = p, m;
        case En:
          return d = yo(d, p.mode, m), d.return = p, d;
        case Mt:
          var w = d._init;
          return f(p, w(d._payload), m);
      }
      if (xr(d) || ar(d)) return d = un(d, p.mode, m, null), d.return = p, d;
      Cl(p, d);
    }
    return null;
  }
  function g(p, d, m, w) {
    var N = d !== null ? d.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return N !== null ? null : s(p, d, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case fl:
          return m.key === N ? a(p, d, m, w) : null;
        case En:
          return m.key === N ? c(p, d, m, w) : null;
        case Mt:
          return N = m._init, g(
            p,
            d,
            N(m._payload),
            w
          );
      }
      if (xr(m) || ar(m)) return N !== null ? null : h(p, d, m, w, null);
      Cl(p, m);
    }
    return null;
  }
  function y(p, d, m, w, N) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return p = p.get(m) || null, s(d, p, "" + w, N);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case fl:
          return p = p.get(w.key === null ? m : w.key) || null, a(d, p, w, N);
        case En:
          return p = p.get(w.key === null ? m : w.key) || null, c(d, p, w, N);
        case Mt:
          var D = w._init;
          return y(p, d, m, D(w._payload), N);
      }
      if (xr(w) || ar(w)) return p = p.get(m) || null, h(d, p, w, N, null);
      Cl(d, w);
    }
    return null;
  }
  function k(p, d, m, w) {
    for (var N = null, D = null, C = d, S = d = 0, P = null; C !== null && S < m.length; S++) {
      C.index > S ? (P = C, C = null) : P = C.sibling;
      var E = g(p, C, m[S], w);
      if (E === null) {
        C === null && (C = P);
        break;
      }
      e && C && E.alternate === null && t(p, C), d = i(E, d, S), D === null ? N = E : D.sibling = E, D = E, C = P;
    }
    if (S === m.length) return n(p, C), ee && nn(p, S), N;
    if (C === null) {
      for (; S < m.length; S++) C = f(p, m[S], w), C !== null && (d = i(C, d, S), D === null ? N = C : D.sibling = C, D = C);
      return ee && nn(p, S), N;
    }
    for (C = r(p, C); S < m.length; S++) P = y(C, p, S, m[S], w), P !== null && (e && P.alternate !== null && C.delete(P.key === null ? S : P.key), d = i(P, d, S), D === null ? N = P : D.sibling = P, D = P);
    return e && C.forEach(function(L) {
      return t(p, L);
    }), ee && nn(p, S), N;
  }
  function x(p, d, m, w) {
    var N = ar(m);
    if (typeof N != "function") throw Error(R(150));
    if (m = N.call(m), m == null) throw Error(R(151));
    for (var D = N = null, C = d, S = d = 0, P = null, E = m.next(); C !== null && !E.done; S++, E = m.next()) {
      C.index > S ? (P = C, C = null) : P = C.sibling;
      var L = g(p, C, E.value, w);
      if (L === null) {
        C === null && (C = P);
        break;
      }
      e && C && L.alternate === null && t(p, C), d = i(L, d, S), D === null ? N = L : D.sibling = L, D = L, C = P;
    }
    if (E.done) return n(
      p,
      C
    ), ee && nn(p, S), N;
    if (C === null) {
      for (; !E.done; S++, E = m.next()) E = f(p, E.value, w), E !== null && (d = i(E, d, S), D === null ? N = E : D.sibling = E, D = E);
      return ee && nn(p, S), N;
    }
    for (C = r(p, C); !E.done; S++, E = m.next()) E = y(C, p, S, E.value, w), E !== null && (e && E.alternate !== null && C.delete(E.key === null ? S : E.key), d = i(E, d, S), D === null ? N = E : D.sibling = E, D = E);
    return e && C.forEach(function(b) {
      return t(p, b);
    }), ee && nn(p, S), N;
  }
  function T(p, d, m, w) {
    if (typeof m == "object" && m !== null && m.type === Nn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case fl:
          e: {
            for (var N = m.key, D = d; D !== null; ) {
              if (D.key === N) {
                if (N = m.type, N === Nn) {
                  if (D.tag === 7) {
                    n(p, D.sibling), d = l(D, m.props.children), d.return = p, p = d;
                    break e;
                  }
                } else if (D.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Mt && fu(N) === D.type) {
                  n(p, D.sibling), d = l(D, m.props), d.ref = pr(p, D, m), d.return = p, p = d;
                  break e;
                }
                n(p, D);
                break;
              } else t(p, D);
              D = D.sibling;
            }
            m.type === Nn ? (d = un(m.props.children, p.mode, w, m.key), d.return = p, p = d) : (w = Wl(m.type, m.key, m.props, null, p.mode, w), w.ref = pr(p, d, m), w.return = p, p = w);
          }
          return o(p);
        case En:
          e: {
            for (D = m.key; d !== null; ) {
              if (d.key === D) if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
                n(p, d.sibling), d = l(d, m.children || []), d.return = p, p = d;
                break e;
              } else {
                n(p, d);
                break;
              }
              else t(p, d);
              d = d.sibling;
            }
            d = yo(m, p.mode, w), d.return = p, p = d;
          }
          return o(p);
        case Mt:
          return D = m._init, T(p, d, D(m._payload), w);
      }
      if (xr(m)) return k(p, d, m, w);
      if (ar(m)) return x(p, d, m, w);
      Cl(p, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, d !== null && d.tag === 6 ? (n(p, d.sibling), d = l(d, m), d.return = p, p = d) : (n(p, d), d = go(m, p.mode, w), d.return = p, p = d), o(p)) : n(p, d);
  }
  return T;
}
var Kn = hd(!0), md = hd(!1), li = en(null), ii = null, _n = null, Ws = null;
function Hs() {
  Ws = _n = ii = null;
}
function Vs(e) {
  var t = li.current;
  Z(li), e._currentValue = t;
}
function es(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function $n(e, t) {
  ii = e, Ws = _n = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Pe = !0), e.firstContext = null);
}
function Ze(e) {
  var t = e._currentValue;
  if (Ws !== e) if (e = { context: e, memoizedValue: t, next: null }, _n === null) {
    if (ii === null) throw Error(R(308));
    _n = e, ii.dependencies = { lanes: 0, firstContext: e };
  } else _n = _n.next = e;
  return t;
}
var on = null;
function Qs(e) {
  on === null ? on = [e] : on.push(e);
}
function vd(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Qs(t)) : (n.next = l.next, l.next = n), t.interleaved = n, jt(e, r);
}
function jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function Ks(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function gd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ct(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Q & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, jt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Qs(r)) : (t.next = l.next, l.next = t), r.interleaved = t, jt(e, n);
}
function zl(e, t, n) {
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
function oi(e, t, n, r) {
  var l = e.updateQueue;
  At = !1;
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
          var k = e, x = s;
          switch (g = t, y = n, x.tag) {
            case 1:
              if (k = x.payload, typeof k == "function") {
                f = k.call(y, f, g);
                break e;
              }
              f = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = x.payload, g = typeof k == "function" ? k.call(y, f, g) : k, g == null) break e;
              f = re({}, f, g);
              break e;
            case 2:
              At = !0;
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
    pn |= o, e.lanes = o, e.memoizedState = f;
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
var ll = {}, vt = en(ll), Vr = en(ll), Qr = en(ll);
function sn(e) {
  if (e === ll) throw Error(R(174));
  return e;
}
function Xs(e, t) {
  switch (Y(Qr, t), Y(Vr, e), Y(vt, ll), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Oo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Oo(t, e);
  }
  Z(vt), Y(vt, t);
}
function Xn() {
  Z(vt), Z(Vr), Z(Qr);
}
function yd(e) {
  sn(Qr.current);
  var t = sn(vt.current), n = Oo(t, e.type);
  t !== n && (Y(Vr, e), Y(vt, n));
}
function Gs(e) {
  Vr.current === e && (Z(vt), Z(Vr));
}
var te = en(0);
function si(e) {
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
var co = [];
function Ys() {
  for (var e = 0; e < co.length; e++) co[e]._workInProgressVersionPrimary = null;
  co.length = 0;
}
var Fl = Rt.ReactCurrentDispatcher, fo = Rt.ReactCurrentBatchConfig, fn = 0, ne = null, ue = null, fe = null, ai = !1, Dr = !1, Kr = 0, Vh = 0;
function we() {
  throw Error(R(321));
}
function Js(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ot(e[n], t[n])) return !1;
  return !0;
}
function Zs(e, t, n, r, l, i) {
  if (fn = i, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Fl.current = e === null || e.memoizedState === null ? Gh : Yh, e = n(r, l), Dr) {
    i = 0;
    do {
      if (Dr = !1, Kr = 0, 25 <= i) throw Error(R(301));
      i += 1, fe = ue = null, t.updateQueue = null, Fl.current = Jh, e = n(r, l);
    } while (Dr);
  }
  if (Fl.current = ui, t = ue !== null && ue.next !== null, fn = 0, fe = ue = ne = null, ai = !1, t) throw Error(R(300));
  return e;
}
function qs() {
  var e = Kr !== 0;
  return Kr = 0, e;
}
function pt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return fe === null ? ne.memoizedState = fe = e : fe = fe.next = e, fe;
}
function qe() {
  if (ue === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = fe === null ? ne.memoizedState : fe.next;
  if (t !== null) fe = t, ue = e;
  else {
    if (e === null) throw Error(R(310));
    ue = e, e = { memoizedState: ue.memoizedState, baseState: ue.baseState, baseQueue: ue.baseQueue, queue: ue.queue, next: null }, fe === null ? ne.memoizedState = fe = e : fe = fe.next = e;
  }
  return fe;
}
function Xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function po(e) {
  var t = qe(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ue, l = r.baseQueue, i = n.pending;
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
      if ((fn & h) === h) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var f = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (s = a = f, o = r) : a = a.next = f, ne.lanes |= h, pn |= h;
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? o = r : a.next = s, ot(r, t.memoizedState) || (Pe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, ne.lanes |= i, pn |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ho(e) {
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
function xd() {
}
function wd(e, t) {
  var n = ne, r = qe(), l = t(), i = !ot(r.memoizedState, l);
  if (i && (r.memoizedState = l, Pe = !0), r = r.queue, ea(Cd.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || fe !== null && fe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Gr(9, kd.bind(null, n, r, l, t), void 0, null), he === null) throw Error(R(349));
    fn & 30 || Sd(n, t, l);
  }
  return l;
}
function Sd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function kd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ed(t) && Nd(e);
}
function Cd(e, t, n) {
  return n(function() {
    Ed(t) && Nd(e);
  });
}
function Ed(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function Nd(e) {
  var t = jt(e, 1);
  t !== null && it(t, e, 1, -1);
}
function mu(e) {
  var t = pt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Xh.bind(null, ne, e), [t.memoizedState, e];
}
function Gr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function jd() {
  return qe().memoizedState;
}
function Bl(e, t, n, r) {
  var l = pt();
  ne.flags |= e, l.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ri(e, t, n, r) {
  var l = qe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ue !== null) {
    var o = ue.memoizedState;
    if (i = o.destroy, r !== null && Js(r, o.deps)) {
      l.memoizedState = Gr(t, n, i, r);
      return;
    }
  }
  ne.flags |= e, l.memoizedState = Gr(1 | t, n, i, r);
}
function vu(e, t) {
  return Bl(8390656, 8, e, t);
}
function ea(e, t) {
  return Ri(2048, 8, e, t);
}
function Dd(e, t) {
  return Ri(4, 2, e, t);
}
function Rd(e, t) {
  return Ri(4, 4, e, t);
}
function Td(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ld(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ri(4, 4, Td.bind(null, t, e), n);
}
function ta() {
}
function Id(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Js(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Pd(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Js(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function _d(e, t, n) {
  return fn & 21 ? (ot(n, t) || (n = Fc(), ne.lanes |= n, pn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Pe = !0), e.memoizedState = n);
}
function Qh(e, t) {
  var n = G;
  G = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = fo.transition;
  fo.transition = {};
  try {
    e(!1), t();
  } finally {
    G = n, fo.transition = r;
  }
}
function Od() {
  return qe().memoizedState;
}
function Kh(e, t, n) {
  var r = Xt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Md(e)) Ad(t, n);
  else if (n = vd(e, t, n, r), n !== null) {
    var l = De();
    it(n, e, r, l), zd(n, t, r);
  }
}
function Xh(e, t, n) {
  var r = Xt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Md(e)) Ad(t, l);
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
    n = vd(e, t, l, r), n !== null && (l = De(), it(n, e, r, l), zd(n, t, r));
  }
}
function Md(e) {
  var t = e.alternate;
  return e === ne || t !== null && t === ne;
}
function Ad(e, t) {
  Dr = ai = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function zd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ps(e, n);
  }
}
var ui = { readContext: Ze, useCallback: we, useContext: we, useEffect: we, useImperativeHandle: we, useInsertionEffect: we, useLayoutEffect: we, useMemo: we, useReducer: we, useRef: we, useState: we, useDebugValue: we, useDeferredValue: we, useTransition: we, useMutableSource: we, useSyncExternalStore: we, useId: we, unstable_isNewReconciler: !1 }, Gh = { readContext: Ze, useCallback: function(e, t) {
  return pt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ze, useEffect: vu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Bl(
    4194308,
    4,
    Td.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Bl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Bl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = pt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = pt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Kh.bind(null, ne, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = pt();
  return e = { current: e }, t.memoizedState = e;
}, useState: mu, useDebugValue: ta, useDeferredValue: function(e) {
  return pt().memoizedState = e;
}, useTransition: function() {
  var e = mu(!1), t = e[0];
  return e = Qh.bind(null, e[1]), pt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ne, l = pt();
  if (ee) {
    if (n === void 0) throw Error(R(407));
    n = n();
  } else {
    if (n = t(), he === null) throw Error(R(349));
    fn & 30 || Sd(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, vu(Cd.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Gr(9, kd.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = pt(), t = he.identifierPrefix;
  if (ee) {
    var n = kt, r = St;
    n = (r & ~(1 << 32 - lt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Vh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Yh = {
  readContext: Ze,
  useCallback: Id,
  useContext: Ze,
  useEffect: ea,
  useImperativeHandle: Ld,
  useInsertionEffect: Dd,
  useLayoutEffect: Rd,
  useMemo: Pd,
  useReducer: po,
  useRef: jd,
  useState: function() {
    return po(Xr);
  },
  useDebugValue: ta,
  useDeferredValue: function(e) {
    var t = qe();
    return _d(t, ue.memoizedState, e);
  },
  useTransition: function() {
    var e = po(Xr)[0], t = qe().memoizedState;
    return [e, t];
  },
  useMutableSource: xd,
  useSyncExternalStore: wd,
  useId: Od,
  unstable_isNewReconciler: !1
}, Jh = { readContext: Ze, useCallback: Id, useContext: Ze, useEffect: ea, useImperativeHandle: Ld, useInsertionEffect: Dd, useLayoutEffect: Rd, useMemo: Pd, useReducer: ho, useRef: jd, useState: function() {
  return ho(Xr);
}, useDebugValue: ta, useDeferredValue: function(e) {
  var t = qe();
  return ue === null ? t.memoizedState = e : _d(t, ue.memoizedState, e);
}, useTransition: function() {
  var e = ho(Xr)[0], t = qe().memoizedState;
  return [e, t];
}, useMutableSource: xd, useSyncExternalStore: wd, useId: Od, unstable_isNewReconciler: !1 };
function tt(e, t) {
  if (e && e.defaultProps) {
    t = re({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ts(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : re({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ti = { isMounted: function(e) {
  return (e = e._reactInternals) ? vn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = De(), l = Xt(e), i = Ct(r, l);
  i.payload = t, n != null && (i.callback = n), t = Qt(e, i, l), t !== null && (it(t, e, l, r), zl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = De(), l = Xt(e), i = Ct(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Qt(e, i, l), t !== null && (it(t, e, l, r), zl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = De(), r = Xt(e), l = Ct(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Qt(e, l, r), t !== null && (it(t, e, r, n), zl(t, e, r));
} };
function gu(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !$r(n, r) || !$r(l, i) : !0;
}
function Fd(e, t, n) {
  var r = !1, l = Jt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ze(i) : (l = Oe(t) ? cn : Ce.current, r = t.contextTypes, i = (r = r != null) ? Vn(e, l) : Jt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ti, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function yu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ti.enqueueReplaceState(t, t.state, null);
}
function ns(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ks(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ze(i) : (i = Oe(t) ? cn : Ce.current, l.context = Vn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ts(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ti.enqueueReplaceState(l, l.state, null), oi(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Np(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function mo(e, t, n) {
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
var Zh = typeof WeakMap == "function" ? WeakMap : Map;
function Bd(e, t, n) {
  n = Ct(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    di || (di = !0, ps = r), rs(e, t);
  }, n;
}
function Ud(e, t, n) {
  n = Ct(-1, n), n.tag = 3;
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
    rs(e, t), typeof r != "function" && (Kt === null ? Kt = /* @__PURE__ */ new Set([this]) : Kt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function xu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Zh();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = fm.bind(null, e, t, n), t.then(e, e));
}
function wu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Su(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ct(-1, 1), t.tag = 2, Qt(n, t, 1))), n.lanes |= 1), e);
}
var qh = Rt.ReactCurrentOwner, Pe = !1;
function je(e, t, n, r) {
  t.child = e === null ? md(t, null, n, r) : Kn(t, e.child, n, r);
}
function ku(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return $n(t, l), r = Zs(e, t, n, r, i, l), n = qs(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Dt(e, t, l)) : (ee && n && Us(t), t.flags |= 1, je(e, t, r, l), t.child);
}
function Cu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !ua(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, $d(e, t, i, r, l)) : (e = Wl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : $r, n(o, r) && e.ref === t.ref) return Dt(e, t, l);
  }
  return t.flags |= 1, e = Gt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function $d(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($r(i, r) && e.ref === t.ref) if (Pe = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Pe = !0);
    else return t.lanes = e.lanes, Dt(e, t, l);
  }
  return ls(e, t, n, r, l);
}
function bd(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Y(Mn, Ue), Ue |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Y(Mn, Ue), Ue |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Y(Mn, Ue), Ue |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Y(Mn, Ue), Ue |= r;
  return je(e, t, l, n), t.child;
}
function Wd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ls(e, t, n, r, l) {
  var i = Oe(n) ? cn : Ce.current;
  return i = Vn(t, i), $n(t, l), n = Zs(e, t, n, r, i, l), r = qs(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Dt(e, t, l)) : (ee && r && Us(t), t.flags |= 1, je(e, t, n, l), t.child);
}
function Eu(e, t, n, r, l) {
  if (Oe(n)) {
    var i = !0;
    ti(t);
  } else i = !1;
  if ($n(t, l), t.stateNode === null) Ul(e, t), Fd(t, n, r), ns(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var a = o.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ze(c) : (c = Oe(n) ? cn : Ce.current, c = Vn(t, c));
    var h = n.getDerivedStateFromProps, f = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || a !== c) && yu(t, o, r, c), At = !1;
    var g = t.memoizedState;
    o.state = g, oi(t, r, o, l), a = t.memoizedState, s !== r || g !== a || _e.current || At ? (typeof h == "function" && (ts(t, n, h, r), a = t.memoizedState), (s = At || gu(t, n, s, r, g, a, c)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = c, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, gd(e, t), s = t.memoizedProps, c = t.type === t.elementType ? s : tt(t.type, s), o.props = c, f = t.pendingProps, g = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ze(a) : (a = Oe(n) ? cn : Ce.current, a = Vn(t, a));
    var y = n.getDerivedStateFromProps;
    (h = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== f || g !== a) && yu(t, o, r, a), At = !1, g = t.memoizedState, o.state = g, oi(t, r, o, l);
    var k = t.memoizedState;
    s !== f || g !== k || _e.current || At ? (typeof y == "function" && (ts(t, n, y, r), k = t.memoizedState), (c = At || gu(t, n, c, r, g, k, a) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), o.props = r, o.state = k, o.context = a, r = c) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return is(e, t, n, r, i, l);
}
function is(e, t, n, r, l, i) {
  Wd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && uu(t, n, !1), Dt(e, t, i);
  r = t.stateNode, qh.current = t;
  var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Kn(t, e.child, null, i), t.child = Kn(t, null, s, i)) : je(e, t, s, i), t.memoizedState = r.state, l && uu(t, n, !0), t.child;
}
function Hd(e) {
  var t = e.stateNode;
  t.pendingContext ? au(e, t.pendingContext, t.pendingContext !== t.context) : t.context && au(e, t.context, !1), Xs(e, t.containerInfo);
}
function Nu(e, t, n, r, l) {
  return Qn(), bs(l), t.flags |= 256, je(e, t, n, r), t.child;
}
var os = { dehydrated: null, treeContext: null, retryLane: 0 };
function ss(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vd(e, t, n) {
  var r = t.pendingProps, l = te.current, i = !1, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Y(te, l & 1), e === null)
    return qo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Pi(o, r, 0, null), e = un(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ss(n), t.memoizedState = os, e) : na(t, o));
  if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return em(e, t, o, r, s, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, s = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Gt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? i = Gt(s, i) : (i = un(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? ss(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = os, r;
  }
  return i = e.child, e = i.sibling, r = Gt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function na(e, t) {
  return t = Pi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function El(e, t, n, r) {
  return r !== null && bs(r), Kn(t, e.child, null, n), e = na(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function em(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = mo(Error(R(422))), El(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Pi({ mode: "visible", children: r.children }, l, 0, null), i = un(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Kn(t, e.child, null, o), t.child.memoizedState = ss(o), t.memoizedState = os, i);
  if (!(t.mode & 1)) return El(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(R(419)), r = mo(i, r, void 0), El(e, t, o, r);
  }
  if (s = (o & e.childLanes) !== 0, Pe || s) {
    if (r = he, r !== null) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, jt(e, l), it(r, e, l, -1));
    }
    return aa(), r = mo(Error(R(421))), El(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = pm.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, $e = Vt(l.nextSibling), be = t, ee = !0, rt = null, e !== null && (Xe[Ge++] = St, Xe[Ge++] = kt, Xe[Ge++] = dn, St = e.id, kt = e.overflow, dn = t), t = na(t, r.children), t.flags |= 4096, t);
}
function ju(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), es(e.return, t, n);
}
function vo(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function Qd(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (je(e, t, r.children, n), r = te.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
  if (Y(te, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && si(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), vo(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && si(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      vo(t, !0, n, null, i);
      break;
    case "together":
      vo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ul(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Dt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), pn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Gt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function tm(e, t, n) {
  switch (t.tag) {
    case 3:
      Hd(t), Qn();
      break;
    case 5:
      yd(t);
      break;
    case 1:
      Oe(t.type) && ti(t);
      break;
    case 4:
      Xs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      Y(li, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Y(te, te.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Vd(e, t, n) : (Y(te, te.current & 1), e = Dt(e, t, n), e !== null ? e.sibling : null);
      Y(te, te.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Qd(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Y(te, te.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, bd(e, t, n);
  }
  return Dt(e, t, n);
}
var Kd, as, Xd, Gd;
Kd = function(e, t) {
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
Xd = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, sn(vt.current);
    var i = null;
    switch (n) {
      case "input":
        l = Lo(e, l), r = Lo(e, r), i = [];
        break;
      case "select":
        l = re({}, l, { value: void 0 }), r = re({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = _o(e, l), r = _o(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ql);
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
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Or.hasOwnProperty(c) ? (a != null && c === "onScroll" && J("scroll", e), i || s === a || (i = [])) : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Gd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function hr(e, t) {
  if (!ee) switch (e.tailMode) {
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
function Se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function nm(e, t, n) {
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
      return Se(t), null;
    case 1:
      return Oe(t.type) && ei(), Se(t), null;
    case 3:
      return r = t.stateNode, Xn(), Z(_e), Z(Ce), Ys(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (kl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, rt !== null && (vs(rt), rt = null))), as(e, t), Se(t), null;
    case 5:
      Gs(t);
      var l = sn(Qr.current);
      if (n = t.type, e !== null && t.stateNode != null) Xd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Se(t), null;
        }
        if (e = sn(vt.current), kl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[ht] = t, r[Hr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Sr.length; l++) J(Sr[l], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J(
                "error",
                r
              ), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              Ma(r, i), J("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, J("invalid", r);
              break;
            case "textarea":
              za(r, i), J("invalid", r);
          }
          Mo(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var s = i[o];
            o === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Sl(r.textContent, s, e), l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Sl(
              r.textContent,
              s,
              e
            ), l = ["children", "" + s]) : Or.hasOwnProperty(o) && s != null && o === "onScroll" && J("scroll", r);
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
              typeof i.onClick == "function" && (r.onclick = ql);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Cc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[ht] = t, e[Hr] = r, Kd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Ao(n, r), n) {
              case "dialog":
                J("cancel", e), J("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Sr.length; l++) J(Sr[l], e);
                l = r;
                break;
              case "source":
                J("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                J(
                  "error",
                  e
                ), J("load", e), l = r;
                break;
              case "details":
                J("toggle", e), l = r;
                break;
              case "input":
                Ma(e, r), l = Lo(e, r), J("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = re({}, r, { value: void 0 }), J("invalid", e);
                break;
              case "textarea":
                za(e, r), l = _o(e, r), J("invalid", e);
                break;
              default:
                l = r;
            }
            Mo(n, l), s = l;
            for (i in s) if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "style" ? jc(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ec(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Mr(e, a) : typeof a == "number" && Mr(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Or.hasOwnProperty(i) ? a != null && i === "onScroll" && J("scroll", e) : a != null && js(e, i, a, o));
            }
            switch (n) {
              case "input":
                pl(e), Aa(e, r, !1);
                break;
              case "textarea":
                pl(e), Fa(e);
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
                typeof l.onClick == "function" && (e.onclick = ql);
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
      return Se(t), null;
    case 6:
      if (e && t.stateNode != null) Gd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (n = sn(Qr.current), sn(vt.current), kl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ht] = t, (i = r.nodeValue !== n) && (e = be, e !== null)) switch (e.tag) {
            case 3:
              Sl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Sl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ht] = t, t.stateNode = r;
      }
      return Se(t), null;
    case 13:
      if (Z(te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && $e !== null && t.mode & 1 && !(t.flags & 128)) pd(), Qn(), t.flags |= 98560, i = !1;
        else if (i = kl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(R(317));
            i[ht] = t;
          } else Qn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Se(t), i = !1;
        } else rt !== null && (vs(rt), rt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || te.current & 1 ? de === 0 && (de = 3) : aa())), t.updateQueue !== null && (t.flags |= 4), Se(t), null);
    case 4:
      return Xn(), as(e, t), e === null && br(t.stateNode.containerInfo), Se(t), null;
    case 10:
      return Vs(t.type._context), Se(t), null;
    case 17:
      return Oe(t.type) && ei(), Se(t), null;
    case 19:
      if (Z(te), i = t.memoizedState, i === null) return Se(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) hr(i, !1);
      else {
        if (de !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = si(e), o !== null) {
            for (t.flags |= 128, hr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Y(te, te.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ie() > Yn && (t.flags |= 128, r = !0, hr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = si(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), hr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !ee) return Se(t), null;
        } else 2 * ie() - i.renderingStartTime > Yn && n !== 1073741824 && (t.flags |= 128, r = !0, hr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ie(), t.sibling = null, n = te.current, Y(te, r ? n & 1 | 2 : n & 1), t) : (Se(t), null);
    case 22:
    case 23:
      return sa(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ue & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Se(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function rm(e, t) {
  switch ($s(t), t.tag) {
    case 1:
      return Oe(t.type) && ei(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Xn(), Z(_e), Z(Ce), Ys(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Gs(t), null;
    case 13:
      if (Z(te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(R(340));
        Qn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Z(te), null;
    case 4:
      return Xn(), null;
    case 10:
      return Vs(t.type._context), null;
    case 22:
    case 23:
      return sa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nl = !1, ke = !1, lm = typeof WeakSet == "function" ? WeakSet : Set, O = null;
function On(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    le(e, t, r);
  }
  else n.current = null;
}
function us(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var Du = !1;
function im(e, t) {
  if (Qo = Yl, e = ed(), Bs(e)) {
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
  for (Ko = { focusedElem: e, selectionRange: n }, Yl = !1, O = t; O !== null; ) if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, O = e;
  else for (; O !== null; ) {
    t = O;
    try {
      var k = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (k !== null) {
            var x = k.memoizedProps, T = k.memoizedState, p = t.stateNode, d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? x : tt(t.type, x), T);
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
    } catch (w) {
      le(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, O = e;
      break;
    }
    O = t.return;
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
function Li(e, t) {
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
function Yd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Yd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ht], delete t[Hr], delete t[Yo], delete t[$h], delete t[bh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Jd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ru(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Jd(e.return)) return null;
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
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ql));
  else if (r !== 4 && (e = e.child, e !== null)) for (ds(e, t, n), e = e.sibling; e !== null; ) ds(e, t, n), e = e.sibling;
}
function fs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (fs(e, t, n), e = e.sibling; e !== null; ) fs(e, t, n), e = e.sibling;
}
var ve = null, nt = !1;
function Ot(e, t, n) {
  for (n = n.child; n !== null; ) Zd(e, t, n), n = n.sibling;
}
function Zd(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == "function") try {
    mt.onCommitFiberUnmount(ki, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ke || On(n, t);
    case 6:
      var r = ve, l = nt;
      ve = null, Ot(e, t, n), ve = r, nt = l, ve !== null && (nt ? (e = ve, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ve.removeChild(n.stateNode));
      break;
    case 18:
      ve !== null && (nt ? (e = ve, n = n.stateNode, e.nodeType === 8 ? ao(e.parentNode, n) : e.nodeType === 1 && ao(e, n), Br(e)) : ao(ve, n.stateNode));
      break;
    case 4:
      r = ve, l = nt, ve = n.stateNode.containerInfo, nt = !0, Ot(e, t, n), ve = r, nt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ke && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && us(n, t, o), l = l.next;
        } while (l !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (!ke && (On(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        le(n, t, s);
      }
      Ot(e, t, n);
      break;
    case 21:
      Ot(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ke = (r = ke) || n.memoizedState !== null, Ot(e, t, n), ke = r) : Ot(e, t, n);
      break;
    default:
      Ot(e, t, n);
  }
}
function Tu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new lm()), t.forEach(function(r) {
      var l = hm.bind(null, e, r);
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
            ve = s.stateNode, nt = !1;
            break e;
          case 3:
            ve = s.stateNode.containerInfo, nt = !0;
            break e;
          case 4:
            ve = s.stateNode.containerInfo, nt = !0;
            break e;
        }
        s = s.return;
      }
      if (ve === null) throw Error(R(160));
      Zd(i, o, l), ve = null, nt = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (c) {
      le(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) qd(t, e), t = t.sibling;
}
function qd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (et(t, e), ft(e), r & 4) {
        try {
          Rr(3, e, e.return), Li(3, e);
        } catch (x) {
          le(e, e.return, x);
        }
        try {
          Rr(5, e, e.return);
        } catch (x) {
          le(e, e.return, x);
        }
      }
      break;
    case 1:
      et(t, e), ft(e), r & 512 && n !== null && On(n, n.return);
      break;
    case 5:
      if (et(t, e), ft(e), r & 512 && n !== null && On(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Mr(l, "");
        } catch (x) {
          le(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          s === "input" && i.type === "radio" && i.name != null && Sc(l, i), Ao(s, o);
          var c = Ao(s, i);
          for (o = 0; o < a.length; o += 2) {
            var h = a[o], f = a[o + 1];
            h === "style" ? jc(l, f) : h === "dangerouslySetInnerHTML" ? Ec(l, f) : h === "children" ? Mr(l, f) : js(l, h, f, c);
          }
          switch (s) {
            case "input":
              Io(l, i);
              break;
            case "textarea":
              kc(l, i);
              break;
            case "select":
              var g = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var y = i.value;
              y != null ? zn(l, !!i.multiple, y, !1) : g !== !!i.multiple && (i.defaultValue != null ? zn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : zn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[Hr] = i;
        } catch (x) {
          le(e, e.return, x);
        }
      }
      break;
    case 6:
      if (et(t, e), ft(e), r & 4) {
        if (e.stateNode === null) throw Error(R(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (x) {
          le(e, e.return, x);
        }
      }
      break;
    case 3:
      if (et(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Br(t.containerInfo);
      } catch (x) {
        le(e, e.return, x);
      }
      break;
    case 4:
      et(t, e), ft(e);
      break;
    case 13:
      et(t, e), ft(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (ia = ie())), r & 4 && Tu(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ke = (c = ke) || h, et(t, e), ke = c) : et(t, e), ft(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (O = e, h = e.child; h !== null; ) {
          for (f = O = h; O !== null; ) {
            switch (g = O, y = g.child, g.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Rr(4, g, g.return);
                break;
              case 1:
                On(g, g.return);
                var k = g.stateNode;
                if (typeof k.componentWillUnmount == "function") {
                  r = g, n = g.return;
                  try {
                    t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                  } catch (x) {
                    le(r, n, x);
                  }
                }
                break;
              case 5:
                On(g, g.return);
                break;
              case 22:
                if (g.memoizedState !== null) {
                  Iu(f);
                  continue;
                }
            }
            y !== null ? (y.return = g, O = y) : Iu(f);
          }
          h = h.sibling;
        }
        e: for (h = null, f = e; ; ) {
          if (f.tag === 5) {
            if (h === null) {
              h = f;
              try {
                l = f.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = f.stateNode, a = f.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Nc("display", o));
              } catch (x) {
                le(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (h === null) try {
              f.stateNode.nodeValue = c ? "" : f.memoizedProps;
            } catch (x) {
              le(e, e.return, x);
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
          if (Jd(n)) {
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
      le(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function om(e, t, n) {
  O = e, ef(e);
}
function ef(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var l = O, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Nl;
      if (!o) {
        var s = l.alternate, a = s !== null && s.memoizedState !== null || ke;
        s = Nl;
        var c = ke;
        if (Nl = o, (ke = a) && !c) for (O = l; O !== null; ) o = O, a = o.child, o.tag === 22 && o.memoizedState !== null ? Pu(l) : a !== null ? (a.return = o, O = a) : Pu(l);
        for (; i !== null; ) O = i, ef(i), i = i.sibling;
        O = l, Nl = s, ke = c;
      }
      Lu(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, O = i) : Lu(e);
  }
}
function Lu(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ke || Li(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ke) if (n === null) r.componentDidMount();
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
                  f !== null && Br(f);
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
        ke || t.flags & 512 && cs(t);
      } catch (g) {
        le(t, t.return, g);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, O = n;
      break;
    }
    O = t.return;
  }
}
function Iu(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, O = n;
      break;
    }
    O = t.return;
  }
}
function Pu(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Li(4, t);
          } catch (a) {
            le(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              le(t, l, a);
            }
          }
          var i = t.return;
          try {
            cs(t);
          } catch (a) {
            le(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            cs(t);
          } catch (a) {
            le(t, o, a);
          }
      }
    } catch (a) {
      le(t, t.return, a);
    }
    if (t === e) {
      O = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, O = s;
      break;
    }
    O = t.return;
  }
}
var sm = Math.ceil, ci = Rt.ReactCurrentDispatcher, ra = Rt.ReactCurrentOwner, Je = Rt.ReactCurrentBatchConfig, Q = 0, he = null, se = null, ge = 0, Ue = 0, Mn = en(0), de = 0, Yr = null, pn = 0, Ii = 0, la = 0, Tr = null, Ie = null, ia = 0, Yn = 1 / 0, xt = null, di = !1, ps = null, Kt = null, jl = !1, $t = null, fi = 0, Lr = 0, hs = null, $l = -1, bl = 0;
function De() {
  return Q & 6 ? ie() : $l !== -1 ? $l : $l = ie();
}
function Xt(e) {
  return e.mode & 1 ? Q & 2 && ge !== 0 ? ge & -ge : Hh.transition !== null ? (bl === 0 && (bl = Fc()), bl) : (e = G, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Vc(e.type)), e) : 1;
}
function it(e, t, n, r) {
  if (50 < Lr) throw Lr = 0, hs = null, Error(R(185));
  tl(e, n, r), (!(Q & 2) || e !== he) && (e === he && (!(Q & 2) && (Ii |= n), de === 4 && Bt(e, ge)), Me(e, r), n === 1 && Q === 0 && !(t.mode & 1) && (Yn = ie() + 500, Di && tn()));
}
function Me(e, t) {
  var n = e.callbackNode;
  Hp(e, t);
  var r = Gl(e, e === he ? ge : 0);
  if (r === 0) n !== null && $a(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && $a(n), t === 1) e.tag === 0 ? Wh(_u.bind(null, e)) : cd(_u.bind(null, e)), Bh(function() {
      !(Q & 6) && tn();
    }), n = null;
    else {
      switch (Bc(r)) {
        case 1:
          n = Is;
          break;
        case 4:
          n = Ac;
          break;
        case 16:
          n = Xl;
          break;
        case 536870912:
          n = zc;
          break;
        default:
          n = Xl;
      }
      n = uf(n, tf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function tf(e, t) {
  if ($l = -1, bl = 0, Q & 6) throw Error(R(327));
  var n = e.callbackNode;
  if (bn() && e.callbackNode !== n) return null;
  var r = Gl(e, e === he ? ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = pi(e, r);
  else {
    t = r;
    var l = Q;
    Q |= 2;
    var i = rf();
    (he !== e || ge !== t) && (xt = null, Yn = ie() + 500, an(e, t));
    do
      try {
        cm();
        break;
      } catch (s) {
        nf(e, s);
      }
    while (!0);
    Hs(), ci.current = i, Q = l, se !== null ? t = 0 : (he = null, ge = 0, t = de);
  }
  if (t !== 0) {
    if (t === 2 && (l = $o(e), l !== 0 && (r = l, t = ms(e, l))), t === 1) throw n = Yr, an(e, 0), Bt(e, r), Me(e, ie()), n;
    if (t === 6) Bt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !am(l) && (t = pi(e, r), t === 2 && (i = $o(e), i !== 0 && (r = i, t = ms(e, i))), t === 1)) throw n = Yr, an(e, 0), Bt(e, r), Me(e, ie()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          rn(e, Ie, xt);
          break;
        case 3:
          if (Bt(e, r), (r & 130023424) === r && (t = ia + 500 - ie(), 10 < t)) {
            if (Gl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              De(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Go(rn.bind(null, e, Ie, xt), t);
            break;
          }
          rn(e, Ie, xt);
          break;
        case 4:
          if (Bt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - lt(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * sm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Go(rn.bind(null, e, Ie, xt), r);
            break;
          }
          rn(e, Ie, xt);
          break;
        case 5:
          rn(e, Ie, xt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Me(e, ie()), e.callbackNode === n ? tf.bind(null, e) : null;
}
function ms(e, t) {
  var n = Tr;
  return e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256), e = pi(e, t), e !== 2 && (t = Ie, Ie = n, t !== null && vs(t)), e;
}
function vs(e) {
  Ie === null ? Ie = e : Ie.push.apply(Ie, e);
}
function am(e) {
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
function Bt(e, t) {
  for (t &= ~la, t &= ~Ii, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - lt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function _u(e) {
  if (Q & 6) throw Error(R(327));
  bn();
  var t = Gl(e, 0);
  if (!(t & 1)) return Me(e, ie()), null;
  var n = pi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = $o(e);
    r !== 0 && (t = r, n = ms(e, r));
  }
  if (n === 1) throw n = Yr, an(e, 0), Bt(e, t), Me(e, ie()), n;
  if (n === 6) throw Error(R(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, rn(e, Ie, xt), Me(e, ie()), null;
}
function oa(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    Q = n, Q === 0 && (Yn = ie() + 500, Di && tn());
  }
}
function hn(e) {
  $t !== null && $t.tag === 0 && !(Q & 6) && bn();
  var t = Q;
  Q |= 1;
  var n = Je.transition, r = G;
  try {
    if (Je.transition = null, G = 1, e) return e();
  } finally {
    G = r, Je.transition = n, Q = t, !(Q & 6) && tn();
  }
}
function sa() {
  Ue = Mn.current, Z(Mn);
}
function an(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Fh(n)), se !== null) for (n = se.return; n !== null; ) {
    var r = n;
    switch ($s(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ei();
        break;
      case 3:
        Xn(), Z(_e), Z(Ce), Ys();
        break;
      case 5:
        Gs(r);
        break;
      case 4:
        Xn();
        break;
      case 13:
        Z(te);
        break;
      case 19:
        Z(te);
        break;
      case 10:
        Vs(r.type._context);
        break;
      case 22:
      case 23:
        sa();
    }
    n = n.return;
  }
  if (he = e, se = e = Gt(e.current, null), ge = Ue = t, de = 0, Yr = null, la = Ii = pn = 0, Ie = Tr = null, on !== null) {
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
function nf(e, t) {
  do {
    var n = se;
    try {
      if (Hs(), Fl.current = ui, ai) {
        for (var r = ne.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ai = !1;
      }
      if (fn = 0, fe = ue = ne = null, Dr = !1, Kr = 0, ra.current = null, n === null || n.return === null) {
        de = 1, Yr = t, se = null;
        break;
      }
      e: {
        var i = e, o = n.return, s = n, a = t;
        if (t = ge, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, h = s, f = h.tag;
          if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var g = h.alternate;
            g ? (h.updateQueue = g.updateQueue, h.memoizedState = g.memoizedState, h.lanes = g.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var y = wu(o);
          if (y !== null) {
            y.flags &= -257, Su(y, o, s, i, t), y.mode & 1 && xu(i, c, t), t = y, a = c;
            var k = t.updateQueue;
            if (k === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(a), t.updateQueue = x;
            } else k.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              xu(i, c, t), aa();
              break e;
            }
            a = Error(R(426));
          }
        } else if (ee && s.mode & 1) {
          var T = wu(o);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), Su(T, o, s, i, t), bs(Gn(a, s));
            break e;
          }
        }
        i = a = Gn(a, s), de !== 4 && (de = 2), Tr === null ? Tr = [i] : Tr.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = Bd(i, a, t);
              pu(i, p);
              break e;
            case 1:
              s = a;
              var d = i.type, m = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Kt === null || !Kt.has(m)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Ud(i, s, t);
                pu(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      of(n);
    } catch (N) {
      t = N, se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function rf() {
  var e = ci.current;
  return ci.current = ui, e === null ? ui : e;
}
function aa() {
  (de === 0 || de === 3 || de === 2) && (de = 4), he === null || !(pn & 268435455) && !(Ii & 268435455) || Bt(he, ge);
}
function pi(e, t) {
  var n = Q;
  Q |= 2;
  var r = rf();
  (he !== e || ge !== t) && (xt = null, an(e, t));
  do
    try {
      um();
      break;
    } catch (l) {
      nf(e, l);
    }
  while (!0);
  if (Hs(), Q = n, ci.current = r, se !== null) throw Error(R(261));
  return he = null, ge = 0, de;
}
function um() {
  for (; se !== null; ) lf(se);
}
function cm() {
  for (; se !== null && !Mp(); ) lf(se);
}
function lf(e) {
  var t = af(e.alternate, e, Ue);
  e.memoizedProps = e.pendingProps, t === null ? of(e) : se = t, ra.current = null;
}
function of(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = rm(n, t), n !== null) {
        n.flags &= 32767, se = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        de = 6, se = null;
        return;
      }
    } else if (n = nm(n, t, Ue), n !== null) {
      se = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  de === 0 && (de = 5);
}
function rn(e, t, n) {
  var r = G, l = Je.transition;
  try {
    Je.transition = null, G = 1, dm(e, t, n, r);
  } finally {
    Je.transition = l, G = r;
  }
  return null;
}
function dm(e, t, n, r) {
  do
    bn();
  while ($t !== null);
  if (Q & 6) throw Error(R(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(R(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Vp(e, i), e === he && (se = he = null, ge = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jl || (jl = !0, uf(Xl, function() {
    return bn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Je.transition, Je.transition = null;
    var o = G;
    G = 1;
    var s = Q;
    Q |= 4, ra.current = null, im(e, n), qd(n, e), Ih(Ko), Yl = !!Qo, Ko = Qo = null, e.current = n, om(n), Ap(), Q = s, G = o, Je.transition = i;
  } else e.current = n;
  if (jl && (jl = !1, $t = e, fi = l), i = e.pendingLanes, i === 0 && (Kt = null), Bp(n.stateNode), Me(e, ie()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (di) throw di = !1, e = ps, ps = null, e;
  return fi & 1 && e.tag !== 0 && bn(), i = e.pendingLanes, i & 1 ? e === hs ? Lr++ : (Lr = 0, hs = e) : Lr = 0, tn(), null;
}
function bn() {
  if ($t !== null) {
    var e = Bc(fi), t = Je.transition, n = G;
    try {
      if (Je.transition = null, G = 16 > e ? 16 : e, $t === null) var r = !1;
      else {
        if (e = $t, $t = null, fi = 0, Q & 6) throw Error(R(331));
        var l = Q;
        for (Q |= 4, O = e.current; O !== null; ) {
          var i = O, o = i.child;
          if (O.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var c = s[a];
                for (O = c; O !== null; ) {
                  var h = O;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rr(8, h, i);
                  }
                  var f = h.child;
                  if (f !== null) f.return = h, O = f;
                  else for (; O !== null; ) {
                    h = O;
                    var g = h.sibling, y = h.return;
                    if (Yd(h), h === c) {
                      O = null;
                      break;
                    }
                    if (g !== null) {
                      g.return = y, O = g;
                      break;
                    }
                    O = y;
                  }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var x = k.child;
                if (x !== null) {
                  k.child = null;
                  do {
                    var T = x.sibling;
                    x.sibling = null, x = T;
                  } while (x !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, O = o;
          else e: for (; O !== null; ) {
            if (i = O, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Rr(9, i, i.return);
            }
            var p = i.sibling;
            if (p !== null) {
              p.return = i.return, O = p;
              break e;
            }
            O = i.return;
          }
        }
        var d = e.current;
        for (O = d; O !== null; ) {
          o = O;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) m.return = o, O = m;
          else e: for (o = d; O !== null; ) {
            if (s = O, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Li(9, s);
              }
            } catch (N) {
              le(s, s.return, N);
            }
            if (s === o) {
              O = null;
              break e;
            }
            var w = s.sibling;
            if (w !== null) {
              w.return = s.return, O = w;
              break e;
            }
            O = s.return;
          }
        }
        if (Q = l, tn(), mt && typeof mt.onPostCommitFiberRoot == "function") try {
          mt.onPostCommitFiberRoot(ki, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      G = n, Je.transition = t;
    }
  }
  return !1;
}
function Ou(e, t, n) {
  t = Gn(n, t), t = Bd(e, t, 1), e = Qt(e, t, 1), t = De(), e !== null && (tl(e, 1, t), Me(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) Ou(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ou(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Kt === null || !Kt.has(r))) {
        e = Gn(n, e), e = Ud(t, e, 1), t = Qt(t, e, 1), e = De(), t !== null && (tl(t, 1, e), Me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function fm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = De(), e.pingedLanes |= e.suspendedLanes & n, he === e && (ge & n) === n && (de === 4 || de === 3 && (ge & 130023424) === ge && 500 > ie() - ia ? an(e, 0) : la |= n), Me(e, t);
}
function sf(e, t) {
  t === 0 && (e.mode & 1 ? (t = vl, vl <<= 1, !(vl & 130023424) && (vl = 4194304)) : t = 1);
  var n = De();
  e = jt(e, t), e !== null && (tl(e, t, n), Me(e, n));
}
function pm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), sf(e, n);
}
function hm(e, t) {
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
  r !== null && r.delete(t), sf(e, n);
}
var af;
af = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || _e.current) Pe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Pe = !1, tm(e, t, n);
    Pe = !!(e.flags & 131072);
  }
  else Pe = !1, ee && t.flags & 1048576 && dd(t, ri, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ul(e, t), e = t.pendingProps;
      var l = Vn(t, Ce.current);
      $n(t, n), l = Zs(null, t, r, e, l, n);
      var i = qs();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oe(r) ? (i = !0, ti(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ks(t), l.updater = Ti, t.stateNode = l, l._reactInternals = t, ns(t, r, e, n), t = is(null, t, r, !0, i, n)) : (t.tag = 0, ee && i && Us(t), je(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ul(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = vm(r), e = tt(r, e), l) {
          case 0:
            t = ls(null, t, r, e, n);
            break e;
          case 1:
            t = Eu(null, t, r, e, n);
            break e;
          case 11:
            t = ku(null, t, r, e, n);
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
        if (Hd(t), e === null) throw Error(R(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, gd(e, t), oi(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = Gn(Error(R(423)), t), t = Nu(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Gn(Error(R(424)), t), t = Nu(e, t, r, n, l);
          break e;
        } else for ($e = Vt(t.stateNode.containerInfo.firstChild), be = t, ee = !0, rt = null, n = md(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Qn(), r === l) {
            t = Dt(e, t, n);
            break e;
          }
          je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return yd(t), e === null && qo(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Xo(r, l) ? o = null : i !== null && Xo(r, i) && (t.flags |= 32), Wd(e, t), je(e, t, o, n), t.child;
    case 6:
      return e === null && qo(t), null;
    case 13:
      return Vd(e, t, n);
    case 4:
      return Xs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Kn(t, null, r, n) : je(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : tt(r, l), ku(e, t, r, l, n);
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, Y(li, r._currentValue), r._currentValue = o, i !== null) if (ot(i.value, o)) {
          if (i.children === l.children && !_e.current) {
            t = Dt(e, t, n);
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
      return l = t.type, r = t.pendingProps.children, $n(t, n), l = Ze(l), r = r(l), t.flags |= 1, je(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = tt(r, t.pendingProps), l = tt(r.type, l), Cu(e, t, r, l, n);
    case 15:
      return $d(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : tt(r, l), Ul(e, t), t.tag = 1, Oe(r) ? (e = !0, ti(t)) : e = !1, $n(t, n), Fd(t, r, l), ns(t, r, l, n), is(null, t, r, !0, e, n);
    case 19:
      return Qd(e, t, n);
    case 22:
      return bd(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function uf(e, t) {
  return Mc(e, t);
}
function mm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ye(e, t, n, r) {
  return new mm(e, t, n, r);
}
function ua(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function vm(e) {
  if (typeof e == "function") return ua(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Rs) return 11;
    if (e === Ts) return 14;
  }
  return 2;
}
function Gt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ye(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Wl(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") ua(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Nn:
      return un(n.children, l, i, t);
    case Ds:
      o = 8, l |= 8;
      break;
    case jo:
      return e = Ye(12, n, t, l | 2), e.elementType = jo, e.lanes = i, e;
    case Do:
      return e = Ye(13, n, t, l), e.elementType = Do, e.lanes = i, e;
    case Ro:
      return e = Ye(19, n, t, l), e.elementType = Ro, e.lanes = i, e;
    case yc:
      return Pi(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case vc:
          o = 10;
          break e;
        case gc:
          o = 9;
          break e;
        case Rs:
          o = 11;
          break e;
        case Ts:
          o = 14;
          break e;
        case Mt:
          o = 16, r = null;
          break e;
      }
      throw Error(R(130, e == null ? e : typeof e, ""));
  }
  return t = Ye(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function un(e, t, n, r) {
  return e = Ye(7, e, r, t), e.lanes = n, e;
}
function Pi(e, t, n, r) {
  return e = Ye(22, e, r, t), e.elementType = yc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function go(e, t, n) {
  return e = Ye(6, e, null, t), e.lanes = n, e;
}
function yo(e, t, n) {
  return t = Ye(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function gm(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ji(0), this.expirationTimes = Ji(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ji(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ca(e, t, n, r, l, i, o, s, a) {
  return e = new gm(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ye(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ks(i), e;
}
function ym(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: En, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function cf(e) {
  if (!e) return Jt;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(R(170));
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
    if (Oe(n)) return ud(e, n, t);
  }
  return t;
}
function df(e, t, n, r, l, i, o, s, a) {
  return e = ca(n, r, !0, e, l, i, o, s, a), e.context = cf(null), n = e.current, r = De(), l = Xt(n), i = Ct(r, l), i.callback = t ?? null, Qt(n, i, l), e.current.lanes = l, tl(e, l, r), Me(e, r), e;
}
function _i(e, t, n, r) {
  var l = t.current, i = De(), o = Xt(l);
  return n = cf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ct(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qt(l, t, o), e !== null && (it(e, l, o, i), zl(e, l, o)), o;
}
function hi(e) {
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
function xm() {
  return null;
}
var ff = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function fa(e) {
  this._internalRoot = e;
}
Oi.prototype.render = fa.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  _i(e, t, null, null);
};
Oi.prototype.unmount = fa.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function() {
      _i(null, e, null, null);
    }), t[Nt] = null;
  }
};
function Oi(e) {
  this._internalRoot = e;
}
Oi.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = bc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++) ;
    Ft.splice(n, 0, e), n === 0 && Hc(e);
  }
};
function pa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Mi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Au() {
}
function wm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = hi(o);
        i.call(c);
      };
    }
    var o = df(t, r, e, 0, null, !1, !1, "", Au);
    return e._reactRootContainer = o, e[Nt] = o.current, br(e.nodeType === 8 ? e.parentNode : e), hn(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var c = hi(a);
      s.call(c);
    };
  }
  var a = ca(e, 0, !1, null, null, !1, !1, "", Au);
  return e._reactRootContainer = a, e[Nt] = a.current, br(e.nodeType === 8 ? e.parentNode : e), hn(function() {
    _i(t, a, n, r);
  }), a;
}
function Ai(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function() {
        var a = hi(o);
        s.call(a);
      };
    }
    _i(t, o, e, l);
  } else o = wm(n, t, e, l, r);
  return hi(o);
}
Uc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wr(t.pendingLanes);
        n !== 0 && (Ps(t, n | 1), Me(t, ie()), !(Q & 6) && (Yn = ie() + 500, tn()));
      }
      break;
    case 13:
      hn(function() {
        var r = jt(e, 1);
        if (r !== null) {
          var l = De();
          it(r, e, 1, l);
        }
      }), da(e, 1);
  }
};
_s = function(e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = De();
      it(t, e, 134217728, n);
    }
    da(e, 134217728);
  }
};
$c = function(e) {
  if (e.tag === 13) {
    var t = Xt(e), n = jt(e, t);
    if (n !== null) {
      var r = De();
      it(n, e, t, r);
    }
    da(e, t);
  }
};
bc = function() {
  return G;
};
Wc = function(e, t) {
  var n = G;
  try {
    return G = e, t();
  } finally {
    G = n;
  }
};
Fo = function(e, t, n) {
  switch (t) {
    case "input":
      if (Io(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ji(r);
            if (!l) throw Error(R(90));
            wc(r), Io(r, l);
          }
        }
      }
      break;
    case "textarea":
      kc(e, n);
      break;
    case "select":
      t = n.value, t != null && zn(e, !!n.multiple, t, !1);
  }
};
Tc = oa;
Lc = hn;
var Sm = { usingClientEntryPoint: !1, Events: [rl, Tn, ji, Dc, Rc, oa] }, mr = { findFiberByHostInstance: ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, km = { bundleType: mr.bundleType, version: mr.version, rendererPackageName: mr.rendererPackageName, rendererConfig: mr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Rt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = _c(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: mr.findFiberByHostInstance || xm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Dl.isDisabled && Dl.supportsFiber) try {
    ki = Dl.inject(km), mt = Dl;
  } catch {
  }
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sm;
He.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pa(t)) throw Error(R(200));
  return ym(e, t, null, n);
};
He.createRoot = function(e, t) {
  if (!pa(e)) throw Error(R(299));
  var n = !1, r = "", l = ff;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ca(e, 1, !1, null, null, n, !1, r, l), e[Nt] = t.current, br(e.nodeType === 8 ? e.parentNode : e), new fa(t);
};
He.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","), Error(R(268, e)));
  return e = _c(t), e = e === null ? null : e.stateNode, e;
};
He.flushSync = function(e) {
  return hn(e);
};
He.hydrate = function(e, t, n) {
  if (!Mi(t)) throw Error(R(200));
  return Ai(null, e, t, !0, n);
};
He.hydrateRoot = function(e, t, n) {
  if (!pa(e)) throw Error(R(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = ff;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = df(t, null, e, 1, n ?? null, l, !1, i, o), e[Nt] = t.current, br(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Oi(t);
};
He.render = function(e, t, n) {
  if (!Mi(t)) throw Error(R(200));
  return Ai(null, e, t, !1, n);
};
He.unmountComponentAtNode = function(e) {
  if (!Mi(e)) throw Error(R(40));
  return e._reactRootContainer ? (hn(function() {
    Ai(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Nt] = null;
    });
  }), !0) : !1;
};
He.unstable_batchedUpdates = oa;
He.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Mi(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Ai(e, t, n, !1, r);
};
He.version = "18.3.1-next-f1338f8080-20240426";
function pf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pf);
    } catch (e) {
      console.error(e);
    }
}
pf(), fc.exports = He;
var An = fc.exports, zu = An;
Eo.createRoot = zu.createRoot, Eo.hydrateRoot = zu.hydrateRoot;
function Cm() {
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
const zi = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function er(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function ha(e) {
  return "nodeType" in e;
}
function Le(e) {
  var t, n;
  return e ? er(e) ? e : ha(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function ma(e) {
  const {
    Document: t
  } = Le(e);
  return e instanceof t;
}
function il(e) {
  return er(e) ? !1 : e instanceof Le(e).HTMLElement;
}
function hf(e) {
  return e instanceof Le(e).SVGElement;
}
function tr(e) {
  return e ? er(e) ? e.document : ha(e) ? ma(e) ? e : il(e) || hf(e) ? e.ownerDocument : document : document : document;
}
const st = zi ? v.useLayoutEffect : v.useEffect;
function Fi(e) {
  const t = v.useRef(e);
  return st(() => {
    t.current = e;
  }), v.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
      r[l] = arguments[l];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Em() {
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
function mi(e) {
  const t = Fi(e), n = v.useRef(null), r = v.useCallback(
    (l) => {
      l !== n.current && (t == null || t(l, n.current)), n.current = l;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function vi(e) {
  const t = v.useRef();
  return v.useEffect(() => {
    t.current = e;
  }, [e]), t.current;
}
let xo = {};
function sl(e, t) {
  return v.useMemo(() => {
    if (t)
      return t;
    const n = xo[e] == null ? 0 : xo[e] + 1;
    return xo[e] = n, e + "-" + n;
  }, [e, t]);
}
function mf(e) {
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
const Wn = /* @__PURE__ */ mf(1), Zr = /* @__PURE__ */ mf(-1);
function Nm(e) {
  return "clientX" in e && "clientY" in e;
}
function Bi(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Le(e.target);
  return t && e instanceof t;
}
function jm(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Le(e.target);
  return t && e instanceof t;
}
function gi(e) {
  if (jm(e)) {
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
  return Nm(e) ? {
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
}), Fu = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Dm(e) {
  return e.matches(Fu) ? e : e.querySelector(Fu);
}
const Rm = {
  display: "none"
};
function Tm(e) {
  let {
    id: t,
    value: n
  } = e;
  return q.createElement("div", {
    id: t,
    style: Rm
  }, n);
}
function Lm(e) {
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
  return q.createElement("div", {
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
const vf = /* @__PURE__ */ v.createContext(null);
function Pm(e) {
  const t = v.useContext(vf);
  v.useEffect(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function _m() {
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
const Om = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Mm = {
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
function Am(e) {
  let {
    announcements: t = Mm,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: l = Om
  } = e;
  const {
    announce: i,
    announcement: o
  } = Im(), s = sl("DndLiveRegion"), [a, c] = v.useState(!1);
  if (v.useEffect(() => {
    c(!0);
  }, []), Pm(v.useMemo(() => ({
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
  const h = q.createElement(q.Fragment, null, q.createElement(Tm, {
    id: r,
    value: l.draggable
  }), q.createElement(Lm, {
    id: s,
    announcement: o
  }));
  return n ? An.createPortal(h, n) : h;
}
var ce;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(ce || (ce = {}));
function yi() {
}
function Bu(e, t) {
  return v.useMemo(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function zm() {
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
function Fm(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Bm(e, t) {
  const n = gi(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
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
  return n - r;
}
function $m(e, t) {
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
function gf(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
const yf = (e) => {
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
      const c = Uu(a), h = l.reduce((g, y, k) => g + Fm(c[k], y), 0), f = Number((h / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: o,
          value: f
        }
      });
    }
  }
  return i.sort(Um);
};
function bm(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), l = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), o = l - r, s = i - n;
  if (r < l && n < i) {
    const a = t.width * t.height, c = e.width * e.height, h = o * s, f = h / (a + c - h);
    return Number(f.toFixed(4));
  }
  return 0;
}
const Wm = (e) => {
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
      const a = bm(s, t);
      a > 0 && l.push({
        id: o,
        data: {
          droppableContainer: i,
          value: a
        }
      });
    }
  }
  return l.sort($m);
};
function Hm(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function xf(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : at;
}
function Vm(e) {
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
const Qm = /* @__PURE__ */ Vm(1);
function wf(e) {
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
function Km(e, t, n) {
  const r = wf(t);
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
const Xm = {
  ignoreTransform: !1
};
function nr(e, t) {
  t === void 0 && (t = Xm);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: h
    } = Le(e).getComputedStyle(e);
    c && (n = Km(n, c, h));
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
  return nr(e, {
    ignoreTransform: !0
  });
}
function Gm(e) {
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
function Ym(e, t) {
  return t === void 0 && (t = Le(e).getComputedStyle(e)), t.position === "fixed";
}
function Jm(e, t) {
  t === void 0 && (t = Le(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((l) => {
    const i = t[l];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function Ui(e, t) {
  const n = [];
  function r(l) {
    if (t != null && n.length >= t || !l)
      return n;
    if (ma(l) && l.scrollingElement != null && !n.includes(l.scrollingElement))
      return n.push(l.scrollingElement), n;
    if (!il(l) || hf(l) || n.includes(l))
      return n;
    const i = Le(e).getComputedStyle(l);
    return l !== e && Jm(l, i) && n.push(l), Ym(l, i) ? n : r(l.parentNode);
  }
  return e ? r(e) : n;
}
function Sf(e) {
  const [t] = Ui(e, 1);
  return t ?? null;
}
function wo(e) {
  return !zi || !e ? null : er(e) ? e : ha(e) ? ma(e) || e === tr(e).scrollingElement ? window : il(e) ? e : null : null;
}
function kf(e) {
  return er(e) ? e.scrollX : e.scrollLeft;
}
function Cf(e) {
  return er(e) ? e.scrollY : e.scrollTop;
}
function gs(e) {
  return {
    x: kf(e),
    y: Cf(e)
  };
}
var pe;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(pe || (pe = {}));
function Ef(e) {
  return !zi || !e ? !1 : e === document.scrollingElement;
}
function Nf(e) {
  const t = {
    x: 0,
    y: 0
  }, n = Ef(e) ? {
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
const Zm = {
  x: 0.2,
  y: 0.2
};
function qm(e, t, n, r, l) {
  let {
    top: i,
    left: o,
    right: s,
    bottom: a
  } = n;
  r === void 0 && (r = 10), l === void 0 && (l = Zm);
  const {
    isTop: c,
    isBottom: h,
    isLeft: f,
    isRight: g
  } = Nf(e), y = {
    x: 0,
    y: 0
  }, k = {
    x: 0,
    y: 0
  }, x = {
    height: t.height * l.y,
    width: t.width * l.x
  };
  return !c && i <= t.top + x.height ? (y.y = pe.Backward, k.y = r * Math.abs((t.top + x.height - i) / x.height)) : !h && a >= t.bottom - x.height && (y.y = pe.Forward, k.y = r * Math.abs((t.bottom - x.height - a) / x.height)), !g && s >= t.right - x.width ? (y.x = pe.Forward, k.x = r * Math.abs((t.right - x.width - s) / x.width)) : !f && o <= t.left + x.width && (y.x = pe.Backward, k.x = r * Math.abs((t.left + x.width - o) / x.width)), {
    direction: y,
    speed: k
  };
}
function ev(e) {
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
function jf(e) {
  return e.reduce((t, n) => Wn(t, gs(n)), at);
}
function tv(e) {
  return e.reduce((t, n) => t + kf(n), 0);
}
function nv(e) {
  return e.reduce((t, n) => t + Cf(n), 0);
}
function Df(e, t) {
  if (t === void 0 && (t = nr), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: l,
    right: i
  } = t(e);
  Sf(e) && (l <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const rv = [["x", ["left", "right"], tv], ["y", ["top", "bottom"], nv]];
class va {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Ui(n), l = jf(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, o, s] of rv)
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
function lv(e) {
  const {
    EventTarget: t
  } = Le(e);
  return e instanceof t ? e : tr(e);
}
function So(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var Ke;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(Ke || (Ke = {}));
function bu(e) {
  e.preventDefault();
}
function iv(e) {
  e.stopPropagation();
}
var $;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})($ || ($ = {}));
const Rf = {
  start: [$.Space, $.Enter],
  cancel: [$.Esc],
  end: [$.Space, $.Enter, $.Tab]
}, ov = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case $.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case $.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case $.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case $.Up:
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
    this.props = t, this.listeners = new Ir(tr(n)), this.windowListeners = new Ir(Le(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ke.Resize, this.handleCancel), this.windowListeners.add(Ke.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ke.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && Df(r), n(at);
  }
  handleKeyDown(t) {
    if (Bi(t)) {
      const {
        active: n,
        context: r,
        options: l
      } = this.props, {
        keyboardCodes: i = Rf,
        coordinateGetter: o = ov,
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
        for (const x of k) {
          const T = t.code, {
            isTop: p,
            isRight: d,
            isLeft: m,
            isBottom: w,
            maxScroll: N,
            minScroll: D
          } = Nf(x), C = ev(x), S = {
            x: Math.min(T === $.Right ? C.right - C.width / 2 : C.right, Math.max(T === $.Right ? C.left : C.left + C.width / 2, f.x)),
            y: Math.min(T === $.Down ? C.bottom - C.height / 2 : C.bottom, Math.max(T === $.Down ? C.top : C.top + C.height / 2, f.y))
          }, P = T === $.Right && !d || T === $.Left && !m, E = T === $.Down && !w || T === $.Up && !p;
          if (P && S.x !== f.x) {
            const L = x.scrollLeft + g.x, b = T === $.Right && L <= N.x || T === $.Left && L >= D.x;
            if (b && !g.y) {
              x.scrollTo({
                left: L,
                behavior: s
              });
              return;
            }
            b ? y.x = x.scrollLeft - L : y.x = T === $.Right ? x.scrollLeft - N.x : x.scrollLeft - D.x, y.x && x.scrollBy({
              left: -y.x,
              behavior: s
            });
            break;
          } else if (E && S.y !== f.y) {
            const L = x.scrollTop + g.y, b = T === $.Down && L <= N.y || T === $.Up && L >= D.y;
            if (b && !g.x) {
              x.scrollTo({
                top: L,
                behavior: s
              });
              return;
            }
            b ? y.y = x.scrollTop - L : y.y = T === $.Down ? x.scrollTop - N.y : x.scrollTop - D.y, y.y && x.scrollBy({
              top: -y.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, Wn(Zr(f, this.referenceCoordinates), y));
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
      keyboardCodes: r = Rf,
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
function Wu(e) {
  return !!(e && "distance" in e);
}
function Hu(e) {
  return !!(e && "delay" in e);
}
class ya {
  constructor(t, n, r) {
    var l;
    r === void 0 && (r = lv(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: o
    } = i;
    this.props = t, this.events = n, this.document = tr(o), this.documentListeners = new Ir(this.document), this.listeners = new Ir(r), this.windowListeners = new Ir(Le(o)), this.initialCoordinates = (l = gi(i)) != null ? l : at, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(Ke.Resize, this.handleCancel), this.windowListeners.add(Ke.DragStart, bu), this.windowListeners.add(Ke.VisibilityChange, this.handleCancel), this.windowListeners.add(Ke.ContextMenu, bu), this.documentListeners.add(Ke.Keydown, this.handleKeydown), n) {
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
      if (Wu(n)) {
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
    t && (this.activated = !0, this.documentListeners.add(Ke.Click, iv, {
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
    const a = (n = gi(t)) != null ? n : at, c = Zr(l, a);
    if (!r && s) {
      if (Wu(s)) {
        if (s.tolerance != null && So(c, s.tolerance))
          return this.handleCancel();
        if (So(c, s.distance))
          return this.handleStart();
      }
      if (Hu(s) && So(c, s.tolerance))
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
    t.code === $.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const sv = {
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
    } = t, r = tr(n.target);
    super(t, sv, r);
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
const av = {
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
class uv extends ya {
  constructor(t) {
    super(t, av, tr(t.event.target));
  }
}
uv.activators = [{
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
class cv extends ya {
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
cv.activators = [{
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
var xi;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(xi || (xi = {}));
function dv(e) {
  let {
    acceleration: t,
    activator: n = Pr.Pointer,
    canScroll: r,
    draggingRect: l,
    enabled: i,
    interval: o = 5,
    order: s = xi.TreeOrder,
    pointerCoordinates: a,
    scrollableAncestors: c,
    scrollableAncestorRects: h,
    delta: f,
    threshold: g
  } = e;
  const y = pv({
    delta: f,
    disabled: !i
  }), [k, x] = Em(), T = v.useRef({
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
  }, [n, l, a]), m = v.useRef(null), w = v.useCallback(() => {
    const D = m.current;
    if (!D)
      return;
    const C = T.current.x * p.current.x, S = T.current.y * p.current.y;
    D.scrollBy(C, S);
  }, []), N = v.useMemo(() => s === xi.TreeOrder ? [...c].reverse() : c, [s, c]);
  v.useEffect(
    () => {
      if (!i || !c.length || !d) {
        x();
        return;
      }
      for (const D of N) {
        if ((r == null ? void 0 : r(D)) === !1)
          continue;
        const C = c.indexOf(D), S = h[C];
        if (!S)
          continue;
        const {
          direction: P,
          speed: E
        } = qm(D, S, d, t, g);
        for (const L of ["x", "y"])
          y[L][P[L]] || (E[L] = 0, P[L] = 0);
        if (E.x > 0 || E.y > 0) {
          x(), m.current = D, k(w, o), T.current = E, p.current = P;
          return;
        }
      }
      T.current = {
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
      i,
      o,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(d),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(y),
      k,
      c,
      N,
      h,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(g)
    ]
  );
}
const fv = {
  x: {
    [pe.Backward]: !1,
    [pe.Forward]: !1
  },
  y: {
    [pe.Backward]: !1,
    [pe.Forward]: !1
  }
};
function pv(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = vi(t);
  return ol((l) => {
    if (n || !r || !l)
      return fv;
    const i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [pe.Backward]: l.x[pe.Backward] || i.x === -1,
        [pe.Forward]: l.x[pe.Forward] || i.x === 1
      },
      y: {
        [pe.Backward]: l.y[pe.Backward] || i.y === -1,
        [pe.Forward]: l.y[pe.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function hv(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return ol((l) => {
    var i;
    return t == null ? null : (i = r ?? l) != null ? i : null;
  }, [r, t]);
}
function mv(e, t) {
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
const Vu = /* @__PURE__ */ new Map();
function vv(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: l
  } = t;
  const [i, o] = v.useState(null), {
    frequency: s,
    measure: a,
    strategy: c
  } = l, h = v.useRef(e), f = T(), g = Jr(f), y = v.useCallback(function(p) {
    p === void 0 && (p = []), !g.current && o((d) => d === null ? p : d.concat(p.filter((m) => !d.includes(m))));
  }, [g]), k = v.useRef(null), x = ol((p) => {
    if (f && !n)
      return Vu;
    if (!p || p === Vu || h.current !== e || i != null) {
      const d = /* @__PURE__ */ new Map();
      for (let m of e) {
        if (!m)
          continue;
        if (i && i.length > 0 && !i.includes(m.id) && m.rect.current) {
          d.set(m.id, m.rect.current);
          continue;
        }
        const w = m.node.current, N = w ? new va(a(w), w) : null;
        m.rect.current = N, N && d.set(m.id, N);
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
    droppableRects: x,
    measureDroppableContainers: y,
    measuringScheduled: i != null
  };
  function T() {
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
function gv(e, t) {
  return wa(e, t);
}
function yv(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Fi(t), l = v.useMemo(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return v.useEffect(() => () => l == null ? void 0 : l.disconnect(), [l]), l;
}
function $i(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Fi(t), l = v.useMemo(
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
function xv(e) {
  return new va(nr(e), e);
}
function Qu(e, t, n) {
  t === void 0 && (t = xv);
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
  const o = yv({
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
  }), s = $i({
    callback: i
  });
  return st(() => {
    i(), e ? (s == null || s.observe(e), o == null || o.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (s == null || s.disconnect(), o == null || o.disconnect());
  }, [e]), r;
}
function wv(e) {
  const t = wa(e);
  return xf(e, t);
}
const Ku = [];
function Sv(e) {
  const t = v.useRef(e), n = ol((r) => e ? r && r !== Ku && e && t.current && e.parentNode === t.current.parentNode ? r : Ui(e) : Ku, [e]);
  return v.useEffect(() => {
    t.current = e;
  }, [e]), n;
}
function kv(e) {
  const [t, n] = v.useState(null), r = v.useRef(e), l = v.useCallback((i) => {
    const o = wo(i.target);
    o && n((s) => s ? (s.set(o, gs(o)), new Map(s)) : null);
  }, []);
  return v.useEffect(() => {
    const i = r.current;
    if (e !== i) {
      o(i);
      const s = e.map((a) => {
        const c = wo(a);
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
        const c = wo(a);
        c == null || c.removeEventListener("scroll", l);
      });
    }
  }, [l, e]), v.useMemo(() => e.length ? t ? Array.from(t.values()).reduce((i, o) => Wn(i, o), at) : jf(e) : at, [e, t]);
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
function Cv(e) {
  v.useEffect(
    () => {
      if (!zi)
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
function Ev(e, t) {
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
function Tf(e) {
  return v.useMemo(() => e ? Gm(e) : null, [e]);
}
const Gu = [];
function Nv(e, t) {
  t === void 0 && (t = nr);
  const [n] = e, r = Tf(n ? Le(n) : null), [l, i] = v.useState(Gu);
  function o() {
    i(() => e.length ? e.map((a) => Ef(a) ? r : new va(t(a), a)) : Gu);
  }
  const s = $i({
    callback: o
  });
  return st(() => {
    s == null || s.disconnect(), o(), e.forEach((a) => s == null ? void 0 : s.observe(a));
  }, [e]), l;
}
function Lf(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return il(t) ? t : e;
}
function jv(e) {
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
  }, [t]), i = $i({
    callback: l
  }), o = v.useCallback((c) => {
    const h = Lf(c);
    i == null || i.disconnect(), h && (i == null || i.observe(h)), r(h ? t(h) : null);
  }, [t, i]), [s, a] = mi(o);
  return v.useMemo(() => ({
    nodeRef: s,
    rect: n,
    setRef: a
  }), [n, s, a]);
}
const Dv = [{
  sensor: xa,
  options: {}
}, {
  sensor: ga,
  options: {}
}], Rv = {
  current: {}
}, Hl = {
  draggable: {
    measure: $u
  },
  droppable: {
    measure: $u,
    strategy: qr.WhileDragging,
    frequency: xs.Optimized
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
const Tv = {
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
    setRef: yi
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Hl,
  measureDroppableContainers: yi,
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
  dispatch: yi,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: yi
}, al = /* @__PURE__ */ v.createContext(If), Pf = /* @__PURE__ */ v.createContext(Tv);
function Lv() {
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
    case ce.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case ce.DragMove:
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
    case ce.DragEnd:
    case ce.DragCancel:
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
    case ce.RegisterDroppable: {
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
    case ce.SetDroppableDisabled: {
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
    case ce.UnregisterDroppable: {
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
function Pv(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: l
  } = v.useContext(al), i = vi(r), o = vi(n == null ? void 0 : n.id);
  return v.useEffect(() => {
    if (!t && !r && i && o != null) {
      if (!Bi(i) || document.activeElement === i.target)
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
          const f = Dm(h);
          if (f) {
            f.focus();
            break;
          }
        }
      });
    }
  }, [r, t, l, o, i]), null;
}
function _f(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((l, i) => i({
    transform: l,
    ...r
  }), n) : n;
}
function _v(e) {
  return v.useMemo(
    () => ({
      draggable: {
        ...Hl.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...Hl.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...Hl.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function Ov(e) {
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
    const h = n(c), f = xf(h, r);
    if (o || (f.x = 0), s || (f.y = 0), i.current = !0, Math.abs(f.x) > 0 || Math.abs(f.y) > 0) {
      const g = Sf(c);
      g && g.scrollBy({
        top: f.y,
        left: f.x
      });
    }
  }, [t, o, s, r, n]);
}
const bi = /* @__PURE__ */ v.createContext({
  ...at,
  scaleX: 1,
  scaleY: 1
});
var zt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(zt || (zt = {}));
const Mv = /* @__PURE__ */ v.memo(function(t) {
  var n, r, l, i;
  let {
    id: o,
    accessibility: s,
    autoScroll: a = !0,
    children: c,
    sensors: h = Dv,
    collisionDetection: f = Wm,
    measuring: g,
    modifiers: y,
    ...k
  } = t;
  const x = v.useReducer(Iv, void 0, Lv), [T, p] = x, [d, m] = _m(), [w, N] = v.useState(zt.Uninitialized), D = w === zt.Initialized, {
    draggable: {
      active: C,
      nodes: S,
      translate: P
    },
    droppable: {
      containers: E
    }
  } = T, L = C != null ? S.get(C) : null, b = v.useRef({
    initial: null,
    translated: null
  }), F = v.useMemo(() => {
    var xe;
    return C != null ? {
      id: C,
      // It's possible for the active node to unmount while dragging
      data: (xe = L == null ? void 0 : L.data) != null ? xe : Rv,
      rect: b
    } : null;
  }, [C, L]), W = v.useRef(null), [oe, Ee] = v.useState(null), [H, I] = v.useState(null), M = Jr(k, Object.values(k)), z = sl("DndDescribedBy", o), V = v.useMemo(() => E.getEnabled(), [E]), B = _v(g), {
    droppableRects: ae,
    measureDroppableContainers: A,
    measuringScheduled: j
  } = vv(V, {
    dragging: D,
    dependencies: [P.x, P.y],
    config: B.droppable
  }), _ = hv(S, C), X = v.useMemo(() => H ? gi(H) : null, [H]), Ne = Yf(), Ae = gv(_, B.draggable.measure);
  Ov({
    activeNode: C != null ? S.get(C) : null,
    config: Ne.layoutShiftCompensation,
    initialRect: Ae,
    measure: B.draggable.measure
  });
  const K = Qu(_, B.draggable.measure, Ae), rr = Qu(_ ? _.parentElement : null), ut = v.useRef({
    activatorEvent: null,
    active: null,
    activeNode: _,
    collisionRect: null,
    collisions: null,
    droppableRects: ae,
    draggableNodes: S,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: E,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), gn = E.getNodeFor((n = ut.current.over) == null ? void 0 : n.id), gt = jv({
    measure: B.dragOverlay.measure
  }), yn = (r = gt.nodeRef.current) != null ? r : _, xn = D ? (l = gt.rect) != null ? l : K : null, Sa = !!(gt.nodeRef.current && gt.rect), ka = wv(Sa ? null : K), Wi = Tf(yn ? Le(yn) : null), Tt = Sv(D ? gn ?? _ : null), ul = Nv(Tt), cl = _f(y, {
    transform: {
      x: P.x - ka.x,
      y: P.y - ka.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: H,
    active: F,
    activeNodeRect: K,
    containerNodeRect: rr,
    draggingNodeRect: xn,
    over: ut.current.over,
    overlayNodeRect: gt.rect,
    scrollableAncestors: Tt,
    scrollableAncestorRects: ul,
    windowRect: Wi
  }), Ca = X ? Wn(X, P) : null, Ea = kv(Tt), Wf = Xu(Ea), Hf = Xu(Ea, [K]), wn = Wn(cl, Wf), Sn = xn ? Qm(xn, cl) : null, lr = F && Sn ? f({
    active: F,
    collisionRect: Sn,
    droppableRects: ae,
    droppableContainers: V,
    pointerCoordinates: Ca
  }) : null, Na = gf(lr, "id"), [Lt, ja] = v.useState(null), Vf = Sa ? cl : Wn(cl, Hf), Qf = Hm(Vf, (i = Lt == null ? void 0 : Lt.rect) != null ? i : null, K), Hi = v.useRef(null), Da = v.useCallback(
    (xe, ze) => {
      let {
        sensor: Fe,
        options: It
      } = ze;
      if (W.current == null)
        return;
      const Qe = S.get(W.current);
      if (!Qe)
        return;
      const Be = xe.nativeEvent, ct = new Fe({
        active: W.current,
        activeNode: Qe,
        event: Be,
        options: It,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ut,
        onAbort(me) {
          if (!S.get(me))
            return;
          const {
            onDragAbort: dt
          } = M.current, yt = {
            id: me
          };
          dt == null || dt(yt), d({
            type: "onDragAbort",
            event: yt
          });
        },
        onPending(me, Pt, dt, yt) {
          if (!S.get(me))
            return;
          const {
            onDragPending: or
          } = M.current, _t = {
            id: me,
            constraint: Pt,
            initialCoordinates: dt,
            offset: yt
          };
          or == null || or(_t), d({
            type: "onDragPending",
            event: _t
          });
        },
        onStart(me) {
          const Pt = W.current;
          if (Pt == null)
            return;
          const dt = S.get(Pt);
          if (!dt)
            return;
          const {
            onDragStart: yt
          } = M.current, ir = {
            activatorEvent: Be,
            active: {
              id: Pt,
              data: dt.data,
              rect: b
            }
          };
          An.unstable_batchedUpdates(() => {
            yt == null || yt(ir), N(zt.Initializing), p({
              type: ce.DragStart,
              initialCoordinates: me,
              active: Pt
            }), d({
              type: "onDragStart",
              event: ir
            }), Ee(Hi.current), I(Be);
          });
        },
        onMove(me) {
          p({
            type: ce.DragMove,
            coordinates: me
          });
        },
        onEnd: kn(ce.DragEnd),
        onCancel: kn(ce.DragCancel)
      });
      Hi.current = ct;
      function kn(me) {
        return async function() {
          const {
            active: dt,
            collisions: yt,
            over: ir,
            scrollAdjustedTranslate: or
          } = ut.current;
          let _t = null;
          if (dt && or) {
            const {
              cancelDrop: sr
            } = M.current;
            _t = {
              activatorEvent: Be,
              active: dt,
              collisions: yt,
              delta: or,
              over: ir
            }, me === ce.DragEnd && typeof sr == "function" && await Promise.resolve(sr(_t)) && (me = ce.DragCancel);
          }
          W.current = null, An.unstable_batchedUpdates(() => {
            p({
              type: me
            }), N(zt.Uninitialized), ja(null), Ee(null), I(null), Hi.current = null;
            const sr = me === ce.DragEnd ? "onDragEnd" : "onDragCancel";
            if (_t) {
              const Vi = M.current[sr];
              Vi == null || Vi(_t), d({
                type: sr,
                event: _t
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [S]
  ), Kf = v.useCallback((xe, ze) => (Fe, It) => {
    const Qe = Fe.nativeEvent, Be = S.get(It);
    if (
      // Another sensor is already instantiating
      W.current !== null || // No active draggable
      !Be || // Event has already been captured
      Qe.dndKit || Qe.defaultPrevented
    )
      return;
    const ct = {
      active: Be
    };
    xe(Fe, ze.options, ct) === !0 && (Qe.dndKit = {
      capturedBy: ze.sensor
    }, W.current = It, Da(Fe, ze));
  }, [S, Da]), Ra = mv(h, Kf);
  Cv(h), st(() => {
    K && w === zt.Initializing && N(zt.Initialized);
  }, [K, w]), v.useEffect(
    () => {
      const {
        onDragMove: xe
      } = M.current, {
        active: ze,
        activatorEvent: Fe,
        collisions: It,
        over: Qe
      } = ut.current;
      if (!ze || !Fe)
        return;
      const Be = {
        active: ze,
        activatorEvent: Fe,
        collisions: It,
        delta: {
          x: wn.x,
          y: wn.y
        },
        over: Qe
      };
      An.unstable_batchedUpdates(() => {
        xe == null || xe(Be), d({
          type: "onDragMove",
          event: Be
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [wn.x, wn.y]
  ), v.useEffect(
    () => {
      const {
        active: xe,
        activatorEvent: ze,
        collisions: Fe,
        droppableContainers: It,
        scrollAdjustedTranslate: Qe
      } = ut.current;
      if (!xe || W.current == null || !ze || !Qe)
        return;
      const {
        onDragOver: Be
      } = M.current, ct = It.get(Na), kn = ct && ct.rect.current ? {
        id: ct.id,
        rect: ct.rect.current,
        data: ct.data,
        disabled: ct.disabled
      } : null, me = {
        active: xe,
        activatorEvent: ze,
        collisions: Fe,
        delta: {
          x: Qe.x,
          y: Qe.y
        },
        over: kn
      };
      An.unstable_batchedUpdates(() => {
        ja(kn), Be == null || Be(me), d({
          type: "onDragOver",
          event: me
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Na]
  ), st(() => {
    ut.current = {
      activatorEvent: H,
      active: F,
      activeNode: _,
      collisionRect: Sn,
      collisions: lr,
      droppableRects: ae,
      draggableNodes: S,
      draggingNode: yn,
      draggingNodeRect: xn,
      droppableContainers: E,
      over: Lt,
      scrollableAncestors: Tt,
      scrollAdjustedTranslate: wn
    }, b.current = {
      initial: xn,
      translated: Sn
    };
  }, [F, _, lr, Sn, S, yn, xn, ae, E, Lt, Tt, wn]), dv({
    ...Ne,
    delta: P,
    draggingRect: Sn,
    pointerCoordinates: Ca,
    scrollableAncestors: Tt,
    scrollableAncestorRects: ul
  });
  const Xf = v.useMemo(() => ({
    active: F,
    activeNode: _,
    activeNodeRect: K,
    activatorEvent: H,
    collisions: lr,
    containerNodeRect: rr,
    dragOverlay: gt,
    draggableNodes: S,
    droppableContainers: E,
    droppableRects: ae,
    over: Lt,
    measureDroppableContainers: A,
    scrollableAncestors: Tt,
    scrollableAncestorRects: ul,
    measuringConfiguration: B,
    measuringScheduled: j,
    windowRect: Wi
  }), [F, _, K, H, lr, rr, gt, S, E, ae, Lt, A, Tt, ul, B, j, Wi]), Gf = v.useMemo(() => ({
    activatorEvent: H,
    activators: Ra,
    active: F,
    activeNodeRect: K,
    ariaDescribedById: {
      draggable: z
    },
    dispatch: p,
    draggableNodes: S,
    over: Lt,
    measureDroppableContainers: A
  }), [H, Ra, F, K, p, z, S, Lt, A]);
  return q.createElement(vf.Provider, {
    value: m
  }, q.createElement(al.Provider, {
    value: Gf
  }, q.createElement(Pf.Provider, {
    value: Xf
  }, q.createElement(bi.Provider, {
    value: Qf
  }, c)), q.createElement(Pv, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), q.createElement(Am, {
    ...s,
    hiddenTextDescribedById: z
  }));
  function Yf() {
    const xe = (oe == null ? void 0 : oe.autoScrollEnabled) === !1, ze = typeof a == "object" ? a.enabled === !1 : a === !1, Fe = D && !xe && !ze;
    return typeof a == "object" ? {
      ...a,
      enabled: Fe
    } : {
      enabled: Fe
    };
  }
}), Av = /* @__PURE__ */ v.createContext(null), Yu = "button", zv = "Draggable";
function Fv(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: l
  } = e;
  const i = sl(zv), {
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
    tabIndex: x = 0
  } = l ?? {}, T = (a == null ? void 0 : a.id) === t, p = v.useContext(T ? bi : Av), [d, m] = mi(), [w, N] = mi(), D = Ev(o, t), C = Jr(n);
  st(
    () => (f.set(t, {
      id: t,
      key: i,
      node: d,
      activatorNode: w,
      data: C
    }), () => {
      const P = f.get(t);
      P && P.key === i && f.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f, t]
  );
  const S = v.useMemo(() => ({
    role: y,
    tabIndex: x,
    "aria-disabled": r,
    "aria-pressed": T && y === Yu ? !0 : void 0,
    "aria-roledescription": k,
    "aria-describedby": h.draggable
  }), [r, y, x, T, k, h.draggable]);
  return {
    active: a,
    activatorEvent: s,
    activeNodeRect: c,
    attributes: S,
    isDragging: T,
    listeners: r ? void 0 : D,
    node: d,
    over: g,
    setNodeRef: m,
    setActivatorNodeRef: N,
    transform: p
  };
}
function Of() {
  return v.useContext(Pf);
}
const Bv = "Droppable", Uv = {
  timeout: 25
};
function Mf(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: l
  } = e;
  const i = sl(Bv), {
    active: o,
    dispatch: s,
    over: a,
    measureDroppableContainers: c
  } = v.useContext(al), h = v.useRef({
    disabled: n
  }), f = v.useRef(!1), g = v.useRef(null), y = v.useRef(null), {
    disabled: k,
    updateMeasurementsFor: x,
    timeout: T
  } = {
    ...Uv,
    ...l
  }, p = Jr(x ?? r), d = v.useCallback(
    () => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      y.current != null && clearTimeout(y.current), y.current = setTimeout(() => {
        c(Array.isArray(p.current) ? p.current : [p.current]), y.current = null;
      }, T);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [T]
  ), m = $i({
    callback: d,
    disabled: k || !o
  }), w = v.useCallback((S, P) => {
    m && (P && (m.unobserve(P), f.current = !1), S && m.observe(S));
  }, [m]), [N, D] = mi(w), C = Jr(t);
  return v.useEffect(() => {
    !m || !N.current || (m.disconnect(), f.current = !1, m.observe(N.current));
  }, [N, m]), v.useEffect(
    () => (s({
      type: ce.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: N,
        rect: g,
        data: C
      }
    }), () => s({
      type: ce.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), v.useEffect(() => {
    n !== h.current.disabled && (s({
      type: ce.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), h.current.disabled = n);
  }, [r, i, n, s]), {
    active: o,
    rect: g,
    isOver: (a == null ? void 0 : a.id) === r,
    node: N,
    over: a,
    setNodeRef: D
  };
}
function $v(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, l] = v.useState(null), [i, o] = v.useState(null), s = vi(n);
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
  }, [t, r, i]), q.createElement(q.Fragment, null, n, r ? v.cloneElement(r, {
    ref: o
  }) : null);
}
const bv = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Wv(e) {
  let {
    children: t
  } = e;
  return q.createElement(al.Provider, {
    value: If
  }, q.createElement(bi.Provider, {
    value: bv
  }, t));
}
const Hv = {
  position: "fixed",
  touchAction: "none"
}, Vv = (e) => Bi(e) ? "transform 250ms ease" : void 0, Qv = /* @__PURE__ */ v.forwardRef((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: l,
    children: i,
    className: o,
    rect: s,
    style: a,
    transform: c,
    transition: h = Vv
  } = e;
  if (!s)
    return null;
  const f = l ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, g = {
    ...Hv,
    width: s.width,
    height: s.height,
    top: s.top,
    left: s.left,
    transform: Zt.Transform.toString(f),
    transformOrigin: l && r ? Bm(r, s) : void 0,
    transition: typeof h == "function" ? h(r) : h,
    ...a
  };
  return q.createElement(n, {
    className: o,
    style: g,
    ref: t
  }, i);
}), Kv = (e) => (t) => {
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
}, Xv = (e) => {
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
}, Gv = {
  duration: 250,
  easing: "ease",
  keyframes: Xv,
  sideEffects: /* @__PURE__ */ Kv({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Yv(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: l
  } = e;
  return Fi((i, o) => {
    if (t === null)
      return;
    const s = n.get(i);
    if (!s)
      return;
    const a = s.node.current;
    if (!a)
      return;
    const c = Lf(o);
    if (!c)
      return;
    const {
      transform: h
    } = Le(o).getComputedStyle(o), f = wf(h);
    if (!f)
      return;
    const g = typeof t == "function" ? t : Jv(t);
    return Df(a, l.draggable.measure), g({
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
function Jv(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: l
  } = {
    ...Gv,
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
    }), [k] = y, x = y[y.length - 1];
    if (JSON.stringify(k) === JSON.stringify(x))
      return;
    const T = r == null ? void 0 : r({
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
        T == null || T(), d();
      };
    });
  };
}
let Ju = 0;
function Zv(e) {
  return v.useMemo(() => {
    if (e != null)
      return Ju++, Ju;
  }, [e]);
}
const qv = /* @__PURE__ */ q.memo((e) => {
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
    droppableContainers: x,
    dragOverlay: T,
    over: p,
    measuringConfiguration: d,
    scrollableAncestors: m,
    scrollableAncestorRects: w,
    windowRect: N
  } = Of(), D = v.useContext(bi), C = Zv(f == null ? void 0 : f.id), S = _f(o, {
    activatorEvent: h,
    active: f,
    activeNodeRect: g,
    containerNodeRect: y,
    draggingNodeRect: T.rect,
    over: p,
    overlayNodeRect: T.rect,
    scrollableAncestors: m,
    scrollableAncestorRects: w,
    transform: D,
    windowRect: N
  }), P = wa(g), E = Yv({
    config: r,
    draggableNodes: k,
    droppableContainers: x,
    measuringConfiguration: d
  }), L = P ? T.setRef : void 0;
  return q.createElement(Wv, null, q.createElement($v, {
    animation: E
  }, f && C ? q.createElement(Qv, {
    key: C,
    id: f.id,
    ref: L,
    as: s,
    activatorEvent: h,
    adjustScale: t,
    className: a,
    transition: i,
    rect: P,
    style: {
      zIndex: c,
      ...l
    },
    transform: S
  }, n) : null));
});
function Af(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function eg(e, t) {
  return e.reduce((n, r, l) => {
    const i = t.get(r);
    return i && (n[l] = i), n;
  }, Array(e.length));
}
function Rl(e) {
  return e !== null && e >= 0;
}
function tg(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function ng(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const zf = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: l
  } = e;
  const i = Af(t, r, n), o = t[l], s = i[l];
  return !s || !o ? null : {
    x: s.left - o.left,
    y: s.top - o.top,
    scaleX: s.width / o.width,
    scaleY: s.height / o.height
  };
}, Tl = {
  scaleX: 1,
  scaleY: 1
}, rg = (e) => {
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
  const a = lg(i, l, n);
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
function lg(e, t, n) {
  const r = e[t], l = e[t - 1], i = e[t + 1];
  return r ? n < t ? l ? r.top - (l.top + l.height) : i ? i.top - (r.top + r.height) : 0 : i ? i.top - (r.top + r.height) : l ? r.top - (l.top + l.height) : 0 : 0;
}
const Ff = "Sortable", Bf = /* @__PURE__ */ q.createContext({
  activeIndex: -1,
  containerId: Ff,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: zf,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function ig(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: l = zf,
    disabled: i = !1
  } = e;
  const {
    active: o,
    dragOverlay: s,
    droppableRects: a,
    over: c,
    measureDroppableContainers: h
  } = Of(), f = sl(Ff, n), g = s.rect !== null, y = v.useMemo(() => r.map((D) => typeof D == "object" && "id" in D ? D.id : D), [r]), k = o != null, x = o ? y.indexOf(o.id) : -1, T = c ? y.indexOf(c.id) : -1, p = v.useRef(y), d = !tg(y, p.current), m = T !== -1 && x === -1 || d, w = ng(i);
  st(() => {
    d && k && h(y);
  }, [d, y, k, h]), v.useEffect(() => {
    p.current = y;
  }, [y]);
  const N = v.useMemo(
    () => ({
      activeIndex: x,
      containerId: f,
      disabled: w,
      disableTransforms: m,
      items: y,
      overIndex: T,
      useDragOverlay: g,
      sortedRects: eg(y, a),
      strategy: l
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [x, f, w.draggable, w.droppable, m, y, T, a, g, l]
  );
  return q.createElement(Bf.Provider, {
    value: N
  }, t);
}
const og = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: l
  } = e;
  return Af(n, r, l).indexOf(t);
}, sg = (e) => {
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
}, ag = {
  duration: 200,
  easing: "ease"
}, Uf = "transform", ug = /* @__PURE__ */ Zt.Transition.toString({
  property: Uf,
  duration: 0,
  easing: "linear"
}), cg = {
  roleDescription: "sortable"
};
function dg(e) {
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
        const c = nr(r.current, {
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
function fg(e) {
  let {
    animateLayoutChanges: t = sg,
    attributes: n,
    disabled: r,
    data: l,
    getNewIndex: i = og,
    id: o,
    strategy: s,
    resizeObserverConfig: a,
    transition: c = ag
  } = e;
  const {
    items: h,
    containerId: f,
    activeIndex: g,
    disabled: y,
    disableTransforms: k,
    sortedRects: x,
    overIndex: T,
    useDragOverlay: p,
    strategy: d
  } = v.useContext(Bf), m = pg(r, y), w = h.indexOf(o), N = v.useMemo(() => ({
    sortable: {
      containerId: f,
      index: w,
      items: h
    },
    ...l
  }), [f, l, w, h]), D = v.useMemo(() => h.slice(h.indexOf(o)), [h, o]), {
    rect: C,
    node: S,
    isOver: P,
    setNodeRef: E
  } = Mf({
    id: o,
    data: N,
    disabled: m.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: D,
      ...a
    }
  }), {
    active: L,
    activatorEvent: b,
    activeNodeRect: F,
    attributes: W,
    setNodeRef: oe,
    listeners: Ee,
    isDragging: H,
    over: I,
    setActivatorNodeRef: M,
    transform: z
  } = Fv({
    id: o,
    data: N,
    attributes: {
      ...cg,
      ...n
    },
    disabled: m.draggable
  }), V = Cm(E, oe), B = !!L, ae = B && !k && Rl(g) && Rl(T), A = !p && H, j = A && ae ? z : null, X = ae ? j ?? (s ?? d)({
    rects: x,
    activeNodeRect: F,
    activeIndex: g,
    overIndex: T,
    index: w
  }) : null, Ne = Rl(g) && Rl(T) ? i({
    id: o,
    items: h,
    activeIndex: g,
    overIndex: T
  }) : w, Ae = L == null ? void 0 : L.id, K = v.useRef({
    activeId: Ae,
    items: h,
    newIndex: Ne,
    containerId: f
  }), rr = h !== K.current.items, ut = t({
    active: L,
    containerId: f,
    isDragging: H,
    isSorting: B,
    id: o,
    index: w,
    items: h,
    newIndex: K.current.newIndex,
    previousItems: K.current.items,
    previousContainerId: K.current.containerId,
    transition: c,
    wasDragging: K.current.activeId != null
  }), gn = dg({
    disabled: !ut,
    index: w,
    node: S,
    rect: C
  });
  return v.useEffect(() => {
    B && K.current.newIndex !== Ne && (K.current.newIndex = Ne), f !== K.current.containerId && (K.current.containerId = f), h !== K.current.items && (K.current.items = h);
  }, [B, Ne, f, h]), v.useEffect(() => {
    if (Ae === K.current.activeId)
      return;
    if (Ae && !K.current.activeId) {
      K.current.activeId = Ae;
      return;
    }
    const yn = setTimeout(() => {
      K.current.activeId = Ae;
    }, 50);
    return () => clearTimeout(yn);
  }, [Ae]), {
    active: L,
    activeIndex: g,
    attributes: W,
    data: N,
    rect: C,
    index: w,
    newIndex: Ne,
    items: h,
    isOver: P,
    isSorting: B,
    isDragging: H,
    listeners: Ee,
    node: S,
    overIndex: T,
    over: I,
    setNodeRef: V,
    setActivatorNodeRef: M,
    setDroppableNodeRef: E,
    setDraggableNodeRef: oe,
    transform: gn ?? X,
    transition: gt()
  };
  function gt() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      gn || // Or to prevent items jumping to back to their "new" position when items change
      rr && K.current.newIndex === w
    )
      return ug;
    if (!(A && !Bi(b) || !c) && (B || ut))
      return Zt.Transition.toString({
        ...c,
        property: Uf
      });
  }
}
function pg(e, t) {
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
function wi(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const hg = [$.Down, $.Right, $.Up, $.Left], mg = (e, t) => {
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
  if (hg.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const a = [];
    i.getEnabled().forEach((f) => {
      if (!f || f != null && f.disabled)
        return;
      const g = l.get(f.id);
      if (g)
        switch (e.code) {
          case $.Down:
            r.top < g.top && a.push(f);
            break;
          case $.Up:
            r.top > g.top && a.push(f);
            break;
          case $.Left:
            r.left > g.left && a.push(f);
            break;
          case $.Right:
            r.left < g.left && a.push(f);
            break;
        }
    });
    const c = yf({
      collisionRect: r,
      droppableRects: l,
      droppableContainers: a
    });
    let h = gf(c, "id");
    if (h === (o == null ? void 0 : o.id) && c.length > 1 && (h = c[1].id), h != null) {
      const f = i.get(n.id), g = i.get(h), y = g ? l.get(g.id) : null, k = g == null ? void 0 : g.node.current;
      if (k && y && f && g) {
        const T = Ui(k).some((D, C) => s[C] !== D), p = $f(f, g), d = vg(f, g), m = T || !p ? {
          x: 0,
          y: 0
        } : {
          x: d ? r.width - y.width : 0,
          y: d ? r.height - y.height : 0
        }, w = {
          x: y.left,
          y: y.top
        };
        return m.x && m.y ? w : Zr(w, m);
      }
    }
  }
};
function $f(e, t) {
  return !wi(e) || !wi(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function vg(e, t) {
  return !wi(e) || !wi(t) || !$f(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
const gg = {
  LOW: "priority-low",
  MEDIUM: "priority-medium",
  HIGH: "priority-high",
  URGENT: "priority-urgent"
};
function bf({ ticket: e, isDragging: t = !1, onClick: n }) {
  const {
    attributes: r,
    listeners: l,
    setNodeRef: i,
    transform: o,
    transition: s,
    isDragging: a
  } = fg({ id: e.id }), c = {
    transform: Zt.Transform.toString(o),
    transition: s
  }, h = e.status === "HANDLE" || e.status === "AI_PROCESSING", f = e.status === "TO_REVIEW" && e.prLink;
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: i,
      style: c,
      className: `ticket-card ${t || a ? "dragging" : ""} ${f ? "success-glow" : ""}`,
      onClick: n,
      ...r,
      ...l,
      children: [
        /* @__PURE__ */ u.jsx("h4", { className: "ticket-title", children: e.title }),
        e.description && /* @__PURE__ */ u.jsx("p", { className: "ticket-description", children: e.description }),
        /* @__PURE__ */ u.jsxs("div", { className: "ticket-meta", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ u.jsx("span", { className: `ticket-priority ${gg[e.priority]}`, children: e.priority }),
            e.targetBranch && /* @__PURE__ */ u.jsxs("span", { className: "ticket-branch", title: `Target: ${e.targetBranch}`, children: [
              /* @__PURE__ */ u.jsx(xg, {}),
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
        h && /* @__PURE__ */ u.jsxs("div", { className: `ticket-ai-status ${e.status === "AI_PROCESSING" ? "processing" : ""}`, children: [
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
            onClick: (g) => g.stopPropagation(),
            children: [
              /* @__PURE__ */ u.jsx(yg, {}),
              "View Pull Request"
            ]
          }
        ),
        e.aiSummary && /* @__PURE__ */ u.jsxs("div", { className: "ticket-ai-summary", children: [
          /* @__PURE__ */ u.jsx("strong", { children: "AI Summary:" }),
          " ",
          e.aiSummary
        ] })
      ]
    }
  );
}
function yg() {
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
function xg() {
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
const wg = {
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
  onTicketClick: i
}) {
  const { setNodeRef: o, isOver: s } = Mf({ id: e });
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: `kanban-column ${wg[e]} ${l ? "active" : ""}`,
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: "column-header", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "column-title", children: [
            /* @__PURE__ */ u.jsx("span", { className: "icon", role: "img", "aria-label": t, children: n }),
            /* @__PURE__ */ u.jsx("span", { children: t })
          ] }),
          /* @__PURE__ */ u.jsx("span", { className: "column-count", children: r.length })
        ] }),
        /* @__PURE__ */ u.jsx(ig, { items: r.map((a) => a.id), strategy: rg, children: /* @__PURE__ */ u.jsx(
          "div",
          {
            ref: o,
            className: `column-body ${s ? "drop-target" : ""}`,
            children: r.length === 0 ? /* @__PURE__ */ u.jsxs("div", { className: "column-empty", children: [
              /* @__PURE__ */ u.jsx("span", { className: "mb-1 text-lg", children: n }),
              /* @__PURE__ */ u.jsx("span", { children: "Drop tickets here" }),
              e === "HANDLE" && /* @__PURE__ */ u.jsx("span", { className: "text-xs mt-1", children: "AI will process these" })
            ] }) : r.map((a) => /* @__PURE__ */ u.jsx(
              bf,
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
const kg = [
  { value: "LOW", label: "Low", icon: "↓", color: "text-slate-400" },
  { value: "MEDIUM", label: "Medium", icon: "→", color: "text-blue-400" },
  { value: "HIGH", label: "High", icon: "↑", color: "text-amber-400" },
  { value: "URGENT", label: "Urgent", icon: "⚡", color: "text-red-400" }
], Cg = {
  auto: { value: "auto", label: "Auto (Recommended)", description: "Let Cursor choose the best model" },
  "claude-4-sonnet-thinking": { value: "claude-4-sonnet-thinking", label: "Claude 4 Sonnet", description: "Fast & capable" },
  "claude-4-opus-thinking": { value: "claude-4-opus-thinking", label: "Claude 4 Opus", description: "Most powerful" },
  o3: { value: "o3", label: "O3", description: "OpenAI reasoning model" }
}, Eg = `## What needs to be done
Describe the task clearly. What is the expected outcome?

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Technical Details
Any specific implementation details, files to modify, or constraints?

## Additional Context
Links, screenshots, or references that might help.`;
function Ng({
  projectId: e,
  projectName: t,
  branchPresets: n,
  defaultBranch: r,
  members: l = [],
  onClose: i,
  onSubmit: o
}) {
  const [s, a] = v.useState(""), [c, h] = v.useState(Eg), [f, g] = v.useState("MEDIUM"), [y, k] = v.useState(r), [x, T] = v.useState(""), [p, d] = v.useState([]), [m, w] = v.useState(""), [N, D] = v.useState(!1), [C, S] = v.useState(!1), [P, E] = v.useState(""), [L, b] = v.useState("auto"), [F, W] = v.useState(["auto"]), [oe, Ee] = v.useState(!0), H = v.useRef(null), I = v.useRef(null);
  v.useEffect(() => {
    var j;
    (j = H.current) == null || j.focus();
  }, []), v.useEffect(() => {
    (async () => {
      try {
        const _ = Zu(), X = await fetch("/api/cursor/models", {
          headers: { "X-CSRF-Token": _ }
        });
        if (X.ok) {
          const Ne = await X.json();
          W(Ne.models || ["auto"]);
        }
      } catch (_) {
        console.error("Failed to fetch models:", _);
      } finally {
        Ee(!1);
      }
    })();
  }, []), v.useEffect(() => {
    const j = (_) => {
      _.key === "Escape" && i(), (_.metaKey || _.ctrlKey) && _.key === "Enter" && (_.preventDefault(), z(_));
    };
    return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }, [i, s, c, f, y]);
  const M = (j) => {
    if (!j || j.trim().length < 30) return !1;
    const _ = [
      "Describe the task clearly",
      "What is the expected outcome?",
      "Criterion 1",
      "Criterion 2",
      "Criterion 3",
      "Any specific implementation details",
      "files to modify, or constraints?",
      "Links, screenshots, or references"
    ];
    let X = 0;
    for (const Ae of _)
      j.includes(Ae) && X++;
    return X >= 5 ? !1 : j.replace(/##\s*[A-Za-z ]+\s*/g, "").replace(/-\s*\[\s*\]\s*/g, "").replace(/\s+/g, " ").trim().length >= 15;
  }, z = v.useCallback(
    async (j) => {
      var _;
      if (j.preventDefault(), E(""), !s.trim()) {
        E("Title is required"), (_ = H.current) == null || _.focus();
        return;
      }
      if (!c.trim()) {
        E("Description is required - the AI needs context to work!");
        return;
      }
      if (!M(c)) {
        E("Please fill in the description template with actual task details. The AI needs this information to implement the feature correctly.");
        return;
      }
      S(!0);
      try {
        const X = Zu(), Ne = await fetch(`/api/tickets/${e}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": X
          },
          body: JSON.stringify({
            title: s.trim(),
            description: c.trim(),
            priority: f,
            status: "BACKLOG",
            targetBranch: y,
            assigneeId: x || void 0,
            labels: p,
            aiModel: L !== "auto" ? L : void 0
          })
        });
        if (!Ne.ok) {
          const K = await Ne.json().catch(() => ({}));
          throw new Error(K.message || "Failed to create ticket");
        }
        const Ae = await Ne.json();
        o(Ae);
      } catch (X) {
        E(X instanceof Error ? X.message : "Failed to create ticket");
      } finally {
        S(!1);
      }
    },
    [e, s, c, f, y, x, p, L, o]
  ), V = v.useCallback(() => {
    const j = m.trim().toLowerCase();
    j && !p.includes(j) && (d([...p, j]), w(""));
  }, [m, p]), B = v.useCallback((j) => {
    d(p.filter((_) => _ !== j));
  }, [p]), ae = v.useCallback((j) => {
    j.key === "Enter" && (j.preventDefault(), V());
  }, [V]), A = M(c);
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: "modal-overlay",
      onClick: (j) => {
        j.target === j.currentTarget && i();
      },
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "new-ticket-title",
      children: /* @__PURE__ */ u.jsxs("div", { ref: I, className: "ticket-modal", onClick: (j) => j.stopPropagation(), children: [
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
        /* @__PURE__ */ u.jsxs("form", { onSubmit: z, className: "ticket-modal-form", children: [
          P && /* @__PURE__ */ u.jsxs("div", { className: "ticket-error", children: [
            /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ u.jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ u.jsx("path", { d: "M12 8v4M12 16h.01" })
            ] }),
            P
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
            /* @__PURE__ */ u.jsxs("label", { className: "ticket-label", children: [
              "Title ",
              /* @__PURE__ */ u.jsx("span", { className: "text-red-400", children: "*" })
            ] }),
            /* @__PURE__ */ u.jsx(
              "input",
              {
                ref: H,
                id: "ticket-title",
                name: "title",
                type: "text",
                className: "ticket-title-input",
                placeholder: "Brief summary of the task",
                value: s,
                onChange: (j) => a(j.target.value),
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
                className: `ticket-description-input ${A ? "" : "ticket-description-warning"}`,
                value: c,
                onChange: (j) => h(j.target.value),
                rows: 12,
                autoComplete: "off",
                required: !0
              }
            ),
            !A && /* @__PURE__ */ u.jsx("p", { className: "ticket-warning-hint", children: "⚠️ Fill in the template with actual task details" })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "ticket-meta-grid", children: [
            /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ u.jsx("label", { className: "ticket-label", children: "Priority" }),
              /* @__PURE__ */ u.jsx("div", { className: "ticket-priority-selector", children: kg.map((j) => /* @__PURE__ */ u.jsxs(
                "button",
                {
                  type: "button",
                  className: `ticket-priority-btn ${f === j.value ? "active" : ""} ${j.color}`,
                  onClick: () => g(j.value),
                  title: j.label,
                  children: [
                    /* @__PURE__ */ u.jsx("span", { className: "ticket-priority-icon", children: j.icon }),
                    /* @__PURE__ */ u.jsx("span", { className: "ticket-priority-label", children: j.label })
                  ]
                },
                j.value
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
              oe ? /* @__PURE__ */ u.jsxs("div", { className: "ticket-model-loading", children: [
                /* @__PURE__ */ u.jsx("span", { className: "ticket-spinner-small" }),
                "Loading models..."
              ] }) : /* @__PURE__ */ u.jsx(
                "select",
                {
                  className: "ticket-select",
                  value: L,
                  onChange: (j) => b(j.target.value),
                  children: F.map((j) => {
                    const _ = Cg[j] || {
                      label: j.replace(/-/g, " ").replace(/\b\w/g, (X) => X.toUpperCase()),
                      description: ""
                    };
                    return /* @__PURE__ */ u.jsxs("option", { value: j, children: [
                      _.label,
                      _.description ? ` - ${_.description}` : ""
                    ] }, j);
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
              n.length > 0 ? /* @__PURE__ */ u.jsx("div", { className: "ticket-branch-presets", children: n.map((j) => /* @__PURE__ */ u.jsxs(
                "button",
                {
                  type: "button",
                  className: `ticket-branch-btn ${y === j.branch ? "active" : ""}`,
                  onClick: () => k(j.branch),
                  children: [
                    /* @__PURE__ */ u.jsx("span", { className: "font-medium", children: j.name }),
                    /* @__PURE__ */ u.jsx("code", { children: j.branch })
                  ]
                },
                j.branch
              )) }) : /* @__PURE__ */ u.jsx(
                "input",
                {
                  type: "text",
                  className: "ticket-input",
                  placeholder: "main",
                  value: y,
                  onChange: (j) => k(j.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs(
            "button",
            {
              type: "button",
              className: "ticket-advanced-toggle",
              onClick: () => D(!N),
              children: [
                /* @__PURE__ */ u.jsx(
                  "svg",
                  {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    className: `w-4 h-4 transition-transform ${N ? "rotate-90" : ""}`,
                    children: /* @__PURE__ */ u.jsx("path", { d: "M9 18l6-6-6-6" })
                  }
                ),
                /* @__PURE__ */ u.jsx("span", { children: "More options" })
              ]
            }
          ),
          N && /* @__PURE__ */ u.jsxs("div", { className: "ticket-advanced-section", children: [
            l.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ u.jsx("label", { className: "ticket-label", children: "Assignee" }),
              /* @__PURE__ */ u.jsxs("div", { className: "ticket-assignee-selector", children: [
                /* @__PURE__ */ u.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `ticket-assignee-btn ${x ? "" : "active"}`,
                    onClick: () => T(""),
                    children: [
                      /* @__PURE__ */ u.jsx("div", { className: "ticket-assignee-avatar unassigned", children: "?" }),
                      /* @__PURE__ */ u.jsx("span", { children: "Unassigned" })
                    ]
                  }
                ),
                l.map((j) => /* @__PURE__ */ u.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `ticket-assignee-btn ${x === j.id ? "active" : ""}`,
                    onClick: () => T(j.id),
                    children: [
                      /* @__PURE__ */ u.jsx("div", { className: "ticket-assignee-avatar", children: j.avatarUrl ? /* @__PURE__ */ u.jsx("img", { src: j.avatarUrl, alt: j.name }) : j.name.substring(0, 2).toUpperCase() }),
                      /* @__PURE__ */ u.jsx("span", { children: j.name })
                    ]
                  },
                  j.id
                ))
              ] })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ u.jsx("label", { className: "ticket-label", children: "Labels" }),
              /* @__PURE__ */ u.jsxs("div", { className: "ticket-labels-input", children: [
                /* @__PURE__ */ u.jsx("div", { className: "ticket-labels-list", children: p.map((j) => /* @__PURE__ */ u.jsxs("span", { className: "ticket-label-tag", children: [
                  j,
                  /* @__PURE__ */ u.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => B(j),
                      className: "ticket-label-remove",
                      children: "×"
                    }
                  )
                ] }, j)) }),
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "text",
                    className: "ticket-label-input",
                    placeholder: "Add label...",
                    value: m,
                    onChange: (j) => w(j.target.value),
                    onKeyDown: ae,
                    onBlur: V
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
                  onChange: (j) => k(j.target.value)
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
                disabled: C,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                type: "submit",
                className: "ticket-btn-primary",
                disabled: C || !s.trim(),
                children: C ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
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
const jg = {
  QUEUED: "text-amber-400",
  RUNNING: "text-blue-400",
  FINISHED: "text-emerald-400",
  ERROR: "text-red-400",
  CANCELLED: "text-slate-400"
}, Dg = {
  QUEUED: "⏳",
  RUNNING: "🔄",
  FINISHED: "✅",
  ERROR: "❌",
  CANCELLED: "🚫"
}, Rg = {
  QUEUED: "Queued",
  RUNNING: "Running",
  FINISHED: "Completed",
  ERROR: "Failed",
  CANCELLED: "Cancelled"
};
function Tg({
  agentId: e,
  ticketId: t,
  ticketTitle: n,
  ticketStatus: r,
  onStatusChange: l,
  onStop: i,
  onFollowupSent: o,
  onValidate: s
}) {
  var M, z, V, B, ae;
  const [a, c] = v.useState(null), [h, f] = v.useState([]), [g, y] = v.useState(!0), [k, x] = v.useState(null), [T, p] = v.useState(!0), [d, m] = v.useState(!1), [w, N] = v.useState(!1), [D, C] = v.useState(""), [S, P] = v.useState(!1), E = v.useRef(null), L = v.useRef(null), b = v.useCallback(async () => {
    if (!(w || !window.confirm("Mark this ticket as Done? This confirms the AI work is complete and accepted."))) {
      N(!0);
      try {
        const j = vr(), _ = await fetch(`/api/tickets/${t}/validate`, {
          method: "POST",
          headers: {
            "X-CSRF-Token": j,
            "Content-Type": "application/json"
          }
        });
        if (!_.ok) {
          const X = await _.json();
          throw new Error(X.error || "Failed to validate ticket");
        }
        L.current && (clearInterval(L.current), L.current = null), s && s();
      } catch (j) {
        console.error("Validate error:", j), x(j instanceof Error ? j.message : "Failed to validate ticket");
      } finally {
        N(!1);
      }
    }
  }, [t, w, s]), F = v.useCallback(async () => {
    if (!(d || !window.confirm("Are you sure you want to stop the AI agent? This cannot be undone."))) {
      m(!0);
      try {
        const j = vr(), _ = await fetch(`/api/cursor/agents/${e}/stop`, {
          method: "POST",
          headers: {
            "X-CSRF-Token": j,
            "Content-Type": "application/json"
          }
        });
        if (!_.ok) {
          const X = await _.json();
          throw new Error(X.error || "Failed to stop agent");
        }
        c((X) => X ? { ...X, status: "CANCELLED" } : null), L.current && (clearInterval(L.current), L.current = null), l && l("CANCELLED"), i && i();
      } catch (j) {
        console.error("Stop agent error:", j), x(j instanceof Error ? j.message : "Failed to stop agent");
      } finally {
        m(!1);
      }
    }
  }, [e, d, l, i]), W = v.useCallback(async () => {
    if (!(!D.trim() || S)) {
      P(!0);
      try {
        const A = vr(), j = await fetch(`/api/cursor/agents/${e}/followup`, {
          method: "POST",
          headers: {
            "X-CSRF-Token": A,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: { text: D.trim() }
          })
        });
        if (!j.ok) {
          const _ = await j.json();
          throw new Error(_.error || "Failed to send follow-up");
        }
        f((_) => [
          ..._,
          {
            id: `local-${Date.now()}`,
            type: "user_message",
            text: D.trim()
          }
        ]), C(""), c((_) => _ ? { ..._, status: "RUNNING" } : null), L.current || (L.current = setInterval(() => {
          oe(), Ee();
        }, 3e3)), o && o();
      } catch (A) {
        console.error("Follow-up error:", A), x(A instanceof Error ? A.message : "Failed to send follow-up");
      } finally {
        P(!1);
      }
    }
  }, [e, D, S, o]), oe = v.useCallback(async () => {
    try {
      const A = vr(), j = await fetch(`/api/cursor/agents/${e}/status`, {
        headers: { "X-CSRF-Token": A }
      });
      if (!j.ok) {
        if (j.status === 404) {
          x("Agent not found. It may have been deleted.");
          return;
        }
        throw new Error("Failed to fetch status");
      }
      const _ = await j.json();
      c(_), l && _.status && l(_.status), (_.status === "FINISHED" || _.status === "ERROR" || _.status === "CANCELLED") && L.current && (clearInterval(L.current), L.current = null);
    } catch (A) {
      console.error("Status fetch error:", A), x("Failed to fetch agent status");
    }
  }, [e, l]), Ee = v.useCallback(async () => {
    try {
      const A = vr(), j = await fetch(`/api/cursor/agents/${e}/conversation`, {
        headers: { "X-CSRF-Token": A }
      });
      if (!j.ok) {
        if (j.status === 404) return;
        throw new Error("Failed to fetch conversation");
      }
      const _ = await j.json();
      _.messages && _.messages.length > 0 && f(_.messages), E.current && setTimeout(() => {
        E.current && (E.current.scrollTop = E.current.scrollHeight);
      }, 100);
    } catch (A) {
      console.error("Conversation fetch error:", A);
    }
  }, [e]);
  if (v.useEffect(() => (y(!0), x(null), (async () => {
    await Promise.all([oe(), Ee()]), y(!1);
  })(), L.current = setInterval(() => {
    oe(), Ee();
  }, 3e3), () => {
    L.current && clearInterval(L.current);
  }), [e, oe, Ee]), v.useEffect(() => {
    E.current && h.length > 0 && (E.current.scrollTop = E.current.scrollHeight);
  }, [h]), g)
    return /* @__PURE__ */ u.jsx("div", { className: "agent-status-panel loading", children: /* @__PURE__ */ u.jsxs("div", { className: "agent-status-header", children: [
      /* @__PURE__ */ u.jsx("div", { className: "agent-spinner" }),
      /* @__PURE__ */ u.jsx("span", { children: "Connecting to Cursor Agent..." })
    ] }) });
  if (k) {
    const A = r === "TO_REVIEW";
    return /* @__PURE__ */ u.jsxs("div", { className: "agent-status-panel error", children: [
      /* @__PURE__ */ u.jsx("div", { className: "agent-status-header", children: /* @__PURE__ */ u.jsxs("span", { className: "text-red-400", children: [
        "❌ ",
        k
      ] }) }),
      A && /* @__PURE__ */ u.jsx("div", { className: "agent-review-actions", style: { padding: "1rem" }, children: /* @__PURE__ */ u.jsx(
        "button",
        {
          className: "validate-btn",
          onClick: b,
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
  const H = (a == null ? void 0 : a.status) || "QUEUED", I = H === "FINISHED" || r === "TO_REVIEW";
  return /* @__PURE__ */ u.jsxs("div", { className: `agent-status-panel ${H.toLowerCase()}`, children: [
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        className: "agent-status-header",
        onClick: () => p(!T),
        "aria-expanded": T,
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: "agent-status-info", children: [
            /* @__PURE__ */ u.jsx("span", { className: "agent-status-indicator", children: H === "RUNNING" ? /* @__PURE__ */ u.jsx("span", { className: "agent-spinner-small" }) : Dg[H] }),
            /* @__PURE__ */ u.jsx("span", { className: `agent-status-text ${jg[H]}`, children: Rg[H] }),
            ((M = a == null ? void 0 : a.target) == null ? void 0 : M.branchName) && /* @__PURE__ */ u.jsxs("span", { className: "agent-branch", children: [
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
            (H === "RUNNING" || H === "QUEUED") && /* @__PURE__ */ u.jsxs(
              "button",
              {
                className: "agent-stop-btn",
                onClick: (A) => {
                  A.stopPropagation(), F();
                },
                disabled: d,
                title: "Emergency Stop - Stop the AI agent immediately",
                children: [
                  d ? /* @__PURE__ */ u.jsx("span", { className: "agent-spinner-small" }) : /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ u.jsx("rect", { x: "6", y: "6", width: "12", height: "12", rx: "1" }) }),
                  /* @__PURE__ */ u.jsx("span", { children: d ? "Stopping..." : "Stop" })
                ]
              }
            ),
            ((z = a == null ? void 0 : a.target) == null ? void 0 : z.url) && /* @__PURE__ */ u.jsx(
              "a",
              {
                href: a.target.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "agent-link",
                onClick: (A) => A.stopPropagation(),
                children: "View in Cursor ↗"
              }
            ),
            ((V = a == null ? void 0 : a.target) == null ? void 0 : V.prUrl) && /* @__PURE__ */ u.jsx(
              "a",
              {
                href: a.target.prUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "agent-link pr",
                onClick: (A) => A.stopPropagation(),
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
                className: `agent-expand-icon ${T ? "expanded" : ""}`,
                children: /* @__PURE__ */ u.jsx("path", { d: "M6 9l6 6 6-6" })
              }
            )
          ] })
        ]
      }
    ),
    T && /* @__PURE__ */ u.jsxs("div", { className: "agent-status-content", children: [
      (a == null ? void 0 : a.summary) && /* @__PURE__ */ u.jsxs("div", { className: "agent-summary", children: [
        /* @__PURE__ */ u.jsx("h4", { children: "Summary" }),
        /* @__PURE__ */ u.jsx("p", { children: a.summary })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "agent-terminal", ref: E, children: [
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
            H === "QUEUED" ? "Waiting for agent to start..." : H === "RUNNING" ? "Agent is processing..." : "No conversation data available.",
            /* @__PURE__ */ u.jsx("span", { className: "cursor-blink", children: "▋" })
          ] }) : h.map((A, j) => /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: `terminal-message ${A.type}`,
              children: [
                /* @__PURE__ */ u.jsx("span", { className: "terminal-prompt", children: A.type === "user_message" ? /* @__PURE__ */ u.jsx("span", { className: "prompt-user", children: "You :>" }) : /* @__PURE__ */ u.jsx("span", { className: "prompt-agent", children: "Cloud Agent :>" }) }),
                /* @__PURE__ */ u.jsx("pre", { className: "terminal-text", children: A.text })
              ]
            },
            A.id || j
          )),
          H === "RUNNING" && h.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "terminal-cursor", children: [
            /* @__PURE__ */ u.jsx("span", { className: "prompt-agent", children: "Cloud Agent :>" }),
            /* @__PURE__ */ u.jsx("span", { className: "cursor-blink", children: "▋" })
          ] })
        ] })
      ] }),
      I && /* @__PURE__ */ u.jsxs("div", { className: "agent-review-actions", children: [
        /* @__PURE__ */ u.jsx(
          "button",
          {
            className: "validate-btn",
            onClick: b,
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
                value: D,
                onChange: (A) => C(A.target.value),
                placeholder: "Please also add unit tests for the translation changes...",
                rows: 3,
                disabled: S,
                onKeyDown: (A) => {
                  A.key === "Enter" && !A.shiftKey && D.trim() && (A.preventDefault(), W());
                }
              }
            ),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                className: "followup-btn",
                onClick: W,
                disabled: !D.trim() || S,
                children: S ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
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
        ((B = a == null ? void 0 : a.source) == null ? void 0 : B.repository) && /* @__PURE__ */ u.jsxs("div", { className: "agent-meta-item", children: [
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
        ((ae = a == null ? void 0 : a.source) == null ? void 0 : ae.ref) && /* @__PURE__ */ u.jsxs("div", { className: "agent-meta-item", children: [
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
function vr() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
function Ll(e, t = "success") {
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
function Ig({
  ticket: e,
  projectId: t,
  onClose: n,
  onUpdate: r
}) {
  const [l, i] = v.useState(!1), [o, s] = v.useState(e.title), [a, c] = v.useState(e.description || ""), [h, f] = v.useState(e.priority), [g, y] = v.useState(e.status), [k, x] = v.useState(!1), [T, p] = v.useState(""), [d, m] = v.useState(null), w = v.useCallback((E) => {
    m(E), E === "FINISHED" && e.status === "AI_PROCESSING" ? r({ ...e, status: "TO_REVIEW" }) : E === "ERROR" && e.status === "AI_PROCESSING" && r({ ...e, status: "TODO" });
  }, [e, r]), N = v.useCallback(async () => {
    if (!o.trim()) {
      p("Title is required");
      return;
    }
    x(!0), p("");
    try {
      const E = Co(), L = await fetch(`/api/tickets/${t}/${e.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": E
        },
        body: JSON.stringify({
          title: o.trim(),
          description: a.trim(),
          priority: h,
          status: g
        })
      });
      if (!L.ok)
        throw new Error("Failed to update ticket");
      const b = await L.json();
      r(b);
    } catch (E) {
      p(E instanceof Error ? E.message : "Failed to update ticket");
    } finally {
      x(!1);
    }
  }, [t, e.id, o, a, h, g, r]), D = v.useCallback(async () => {
    if (confirm("Are you sure you want to delete this ticket? This action cannot be undone.")) {
      x(!0);
      try {
        const E = Co();
        if (!(await fetch(`/api/tickets/${t}/${e.id}`, {
          method: "DELETE",
          headers: {
            "X-CSRF-Token": E
          }
        })).ok)
          throw new Error("Failed to delete ticket");
        Ll(`Ticket "${e.title}" deleted successfully`, "success"), r({ ...e, status: "CANCELLED" }), n();
      } catch (E) {
        const L = E instanceof Error ? E.message : "Failed to delete ticket";
        p(L), Ll(L, "error");
      } finally {
        x(!1);
      }
    }
  }, [t, e, r, n]), C = v.useCallback(async () => {
    if (confirm("Archive this ticket? It will be moved to the Archive tab.")) {
      x(!0);
      try {
        const E = Co();
        if (!(await fetch(`/api/tickets/${e.id}/archive`, {
          method: "POST",
          headers: {
            "X-CSRF-Token": E
          }
        })).ok)
          throw new Error("Failed to archive ticket");
        Ll(`Ticket "${e.title}" archived`, "success"), r({ ...e, isArchived: !0 }), n();
      } catch (E) {
        const L = E instanceof Error ? E.message : "Failed to archive ticket";
        p(L), Ll(L, "error");
      } finally {
        x(!1);
      }
    }
  }, [e, r, n]), S = v.useCallback(
    (E) => {
      E.key === "Escape" && n();
    },
    [n]
  ), P = e.status === "HANDLE" || e.status === "AI_PROCESSING";
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: "modal-overlay",
      onClick: n,
      onKeyDown: S,
      role: "dialog",
      "aria-modal": "true",
      children: /* @__PURE__ */ u.jsxs(
        "div",
        {
          className: "modal-content modal-lg",
          onClick: (E) => E.stopPropagation(),
          children: [
            /* @__PURE__ */ u.jsxs("div", { className: "modal-header", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "flex-1", children: [
                l ? /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-input text-lg font-semibold",
                    value: o,
                    onChange: (E) => s(E.target.value),
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
              T && /* @__PURE__ */ u.jsx("div", { className: "mb-4 p-3 text-sm rounded-md bg-destructive/10 text-destructive border border-destructive/20", children: T }),
              e.agentId && /* @__PURE__ */ u.jsx("div", { className: "mb-4", children: /* @__PURE__ */ u.jsx(
                Tg,
                {
                  agentId: e.agentId,
                  ticketId: e.id,
                  ticketTitle: e.title,
                  ticketStatus: e.status,
                  onStatusChange: w,
                  onFollowupSent: () => {
                    r({ ...e, status: "AI_PROCESSING" });
                  },
                  onValidate: () => {
                    r({ ...e, status: "DONE" }), n();
                  }
                }
              ) }),
              P && !e.agentId && /* @__PURE__ */ u.jsxs("div", { className: "mb-4 p-4 rounded-md bg-status-processing/10 border border-status-processing/20", children: [
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
                    onChange: (E) => c(E.target.value),
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
                      onChange: (E) => f(E.target.value),
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
                      onChange: (E) => y(E.target.value),
                      disabled: P,
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
            /* @__PURE__ */ u.jsx("div", { className: "modal-actions", children: l ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-destructive",
                  onClick: D,
                  disabled: k,
                  title: "Permanently delete this ticket",
                  children: "Delete"
                }
              ),
              /* @__PURE__ */ u.jsxs(
                "button",
                {
                  type: "button",
                  className: "btn btn-secondary",
                  onClick: C,
                  disabled: k,
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
                  onClick: N,
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
                  disabled: P,
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
function Co() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
function Il(e, t = "success") {
  typeof window < "u" && window.showToast && window.showToast(e, t);
}
function qu() {
  return typeof window < "u" && window.getCsrfToken ? window.getCsrfToken() : "";
}
const Pg = {
  LOW: "text-muted-foreground",
  MEDIUM: "text-blue-400",
  HIGH: "text-amber-400",
  URGENT: "text-red-400"
};
function _g({ projectId: e, onRestore: t, onClose: n }) {
  const [r, l] = v.useState([]), [i, o] = v.useState(!0), [s, a] = v.useState(null), [c, h] = v.useState(null);
  v.useEffect(() => {
    (async () => {
      try {
        const k = await fetch(`/api/projects/${e}/archived`);
        if (!k.ok)
          throw new Error("Failed to load archived tickets");
        const x = await k.json();
        l(x);
      } catch (k) {
        a(k instanceof Error ? k.message : "Failed to load archived tickets");
      } finally {
        o(!1);
      }
    })();
  }, [e]);
  const f = v.useCallback(async (y) => {
    h(y.id);
    try {
      const k = qu();
      if (!(await fetch(`/api/tickets/${y.id}/restore`, {
        method: "POST",
        headers: {
          "X-CSRF-Token": k
        }
      })).ok)
        throw new Error("Failed to restore ticket");
      Il(`Ticket "${y.title}" restored`, "success"), l((T) => T.filter((p) => p.id !== y.id)), t({ ...y, isArchived: !1 });
    } catch (k) {
      Il(k instanceof Error ? k.message : "Failed to restore ticket", "error");
    } finally {
      h(null);
    }
  }, [t]), g = v.useCallback(async (y) => {
    if (confirm(`Permanently delete "${y.title}"? This cannot be undone.`)) {
      h(y.id);
      try {
        const k = qu();
        if (!(await fetch(`/api/tickets/${e}/${y.id}`, {
          method: "DELETE",
          headers: {
            "X-CSRF-Token": k
          }
        })).ok)
          throw new Error("Failed to delete ticket");
        Il(`Ticket "${y.title}" deleted permanently`, "success"), l((T) => T.filter((p) => p.id !== y.id));
      } catch (k) {
        Il(k instanceof Error ? k.message : "Failed to delete ticket", "error");
      } finally {
        h(null);
      }
    }
  }, [e]);
  return /* @__PURE__ */ u.jsxs("div", { className: "archive-panel", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "archive-header", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "archive-header-content", children: [
        /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-5 h-5", children: [
          /* @__PURE__ */ u.jsx("path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }),
          /* @__PURE__ */ u.jsx("path", { d: "M3.26 8.26 8 3l4 4" }),
          /* @__PURE__ */ u.jsx("rect", { x: "3", y: "10", width: "18", height: "12", rx: "2" }),
          /* @__PURE__ */ u.jsx("path", { d: "M10 15h4" })
        ] }),
        /* @__PURE__ */ u.jsx("h2", { children: "Archive" }),
        /* @__PURE__ */ u.jsx("span", { className: "archive-count", children: r.length })
      ] }),
      /* @__PURE__ */ u.jsx("button", { className: "archive-close-btn", onClick: n, title: "Close archive", children: /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-5 h-5", children: [
        /* @__PURE__ */ u.jsx("path", { d: "M18 6 6 18" }),
        /* @__PURE__ */ u.jsx("path", { d: "m6 6 12 12" })
      ] }) })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "archive-content", children: i ? /* @__PURE__ */ u.jsxs("div", { className: "archive-loading", children: [
      /* @__PURE__ */ u.jsxs("svg", { className: "w-6 h-6 animate-spin", viewBox: "0 0 24 24", fill: "none", children: [
        /* @__PURE__ */ u.jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", className: "opacity-25" }),
        /* @__PURE__ */ u.jsx("path", { fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
      ] }),
      /* @__PURE__ */ u.jsx("span", { children: "Loading archived tickets..." })
    ] }) : s ? /* @__PURE__ */ u.jsxs("div", { className: "archive-error", children: [
      /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-5 h-5", children: [
        /* @__PURE__ */ u.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ u.jsx("path", { d: "m15 9-6 6" }),
        /* @__PURE__ */ u.jsx("path", { d: "m9 9 6 6" })
      ] }),
      /* @__PURE__ */ u.jsx("span", { children: s })
    ] }) : r.length === 0 ? /* @__PURE__ */ u.jsxs("div", { className: "archive-empty", children: [
      /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-12 h-12 opacity-50", children: [
        /* @__PURE__ */ u.jsx("path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }),
        /* @__PURE__ */ u.jsx("rect", { x: "3", y: "10", width: "18", height: "12", rx: "2" }),
        /* @__PURE__ */ u.jsx("path", { d: "M10 15h4" })
      ] }),
      /* @__PURE__ */ u.jsx("p", { children: "No archived tickets" }),
      /* @__PURE__ */ u.jsx("span", { className: "text-sm text-muted-foreground", children: "Archived tickets will appear here" })
    ] }) : /* @__PURE__ */ u.jsx("div", { className: "archive-list", children: r.map((y) => /* @__PURE__ */ u.jsxs("div", { className: "archive-item", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "archive-item-content", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "archive-item-header", children: [
          /* @__PURE__ */ u.jsx("span", { className: `archive-item-priority ${Pg[y.priority]}`, children: y.priority }),
          /* @__PURE__ */ u.jsx("span", { className: "archive-item-status", children: y.status }),
          y.archivedAt && /* @__PURE__ */ u.jsxs("span", { className: "archive-item-date", children: [
            "Archived ",
            new Date(y.archivedAt).toLocaleDateString()
          ] })
        ] }),
        /* @__PURE__ */ u.jsx("h3", { className: "archive-item-title", children: y.title }),
        y.description && /* @__PURE__ */ u.jsx("p", { className: "archive-item-description", children: y.description.length > 100 ? y.description.substring(0, 100) + "..." : y.description }),
        y.prLink && /* @__PURE__ */ u.jsxs(
          "a",
          {
            href: y.prLink,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "archive-item-pr",
            children: [
              /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-3.5 h-3.5", children: [
                /* @__PURE__ */ u.jsx("circle", { cx: "18", cy: "18", r: "3" }),
                /* @__PURE__ */ u.jsx("circle", { cx: "6", cy: "6", r: "3" }),
                /* @__PURE__ */ u.jsx("path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }),
                /* @__PURE__ */ u.jsx("path", { d: "M6 9v12" })
              ] }),
              "View PR"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "archive-item-actions", children: [
        /* @__PURE__ */ u.jsxs(
          "button",
          {
            className: "archive-restore-btn",
            onClick: () => f(y),
            disabled: c === y.id,
            title: "Restore to board",
            children: [
              c === y.id ? /* @__PURE__ */ u.jsxs("svg", { className: "w-4 h-4 animate-spin", viewBox: "0 0 24 24", fill: "none", children: [
                /* @__PURE__ */ u.jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", className: "opacity-25" }),
                /* @__PURE__ */ u.jsx("path", { fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
              ] }) : /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-4 h-4", children: [
                /* @__PURE__ */ u.jsx("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
                /* @__PURE__ */ u.jsx("path", { d: "M3 3v5h5" })
              ] }),
              /* @__PURE__ */ u.jsx("span", { children: "Restore" })
            ]
          }
        ),
        /* @__PURE__ */ u.jsx(
          "button",
          {
            className: "archive-delete-btn",
            onClick: () => g(y),
            disabled: c === y.id,
            title: "Delete permanently",
            children: /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-4 h-4", children: [
              /* @__PURE__ */ u.jsx("path", { d: "M3 6h18" }),
              /* @__PURE__ */ u.jsx("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
              /* @__PURE__ */ u.jsx("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }),
              /* @__PURE__ */ u.jsx("line", { x1: "10", x2: "10", y1: "11", y2: "17" }),
              /* @__PURE__ */ u.jsx("line", { x1: "14", x2: "14", y1: "11", y2: "17" })
            ] })
          }
        )
      ] })
    ] }, y.id)) }) })
  ] });
}
const Og = [
  { id: "BACKLOG", title: "Backlog", icon: "📋" },
  { id: "TODO", title: "To Do", icon: "📝" },
  { id: "HANDLE", title: "Handle", icon: "🤖" },
  { id: "AI_PROCESSING", title: "AI Processing", icon: "⚡" },
  { id: "TO_REVIEW", title: "To Review", icon: "👀" },
  { id: "DONE", title: "Done", icon: "✅" }
];
function Mg() {
  const [e, t] = v.useState(null), [n, r] = v.useState(null), [l, i] = v.useState(null), [o, s] = v.useState(!1), [a, c] = v.useState(!1), [h, f] = v.useState(0), [g, y] = v.useState("BACKLOG");
  v.useEffect(() => {
    const C = document.getElementById("board-state");
    if (C != null && C.textContent)
      try {
        const E = JSON.parse(C.textContent);
        t(E), f(E.archivedCount || 0);
      } catch (E) {
        console.error("Failed to parse board state:", E);
      }
    const S = document.getElementById("new-ticket-btn");
    S && S.addEventListener("click", () => s(!0));
    const P = document.getElementById("archive-btn");
    return P && P.addEventListener("click", () => c((E) => !E)), document.querySelectorAll(".tab-btn").forEach((E) => {
      E.addEventListener("click", (L) => {
        const b = L.target.dataset.column;
        b && (y(b), document.querySelectorAll(".tab-btn").forEach((F) => {
          F.classList.remove("bg-muted"), F.classList.add("hover:bg-muted");
        }), L.target.classList.add("bg-muted"), L.target.classList.remove("hover:bg-muted"));
      });
    }), () => {
      S && S.removeEventListener("click", () => s(!0));
    };
  }, []), v.useEffect(() => {
    if (!(e != null && e.projectId)) return;
    const C = setInterval(async () => {
      var S, P;
      if (!(n || l || o))
        try {
          const E = await fetch(`/project/${e.projectId}/board/state`);
          if (!E.ok) return;
          const L = await E.json();
          (L.tickets.length !== e.tickets.length || L.tickets.some((F) => {
            const W = e.tickets.find((oe) => oe.id === F.id);
            return !W || W.status !== F.status || W.title !== F.title || W.assigneeId !== F.assigneeId;
          }) || ((S = L.members) == null ? void 0 : S.length) !== ((P = e.members) == null ? void 0 : P.length)) && (t(L), gr("Board updated", "success"));
        } catch (E) {
          console.debug("Sync poll failed:", E);
        }
    }, 5e3);
    return () => clearInterval(C);
  }, [e == null ? void 0 : e.projectId, e == null ? void 0 : e.tickets, n, l, o]);
  const k = zm(
    Bu(xa, {
      activationConstraint: { distance: 8 }
    }),
    Bu(ga, {
      coordinateGetter: mg
    })
  ), x = v.useCallback(
    (C) => {
      const S = C.active.id, P = e == null ? void 0 : e.tickets.find((E) => E.id === S);
      P && r(P);
    },
    [e]
  ), T = v.useCallback((C) => {
  }, []), p = v.useCallback(
    async (C) => {
      const { active: S, over: P } = C;
      if (r(null), !P || !e) return;
      const E = S.id, L = P.id, b = e.tickets.find((F) => F.id === E);
      if (!(!b || b.status === L)) {
        t((F) => F && {
          ...F,
          tickets: F.tickets.map(
            (W) => W.id === E ? { ...W, status: L } : W
          )
        }), L === "HANDLE" && gr(`Ticket #${b.id.slice(-4)} dispatched to Cursor Agent`, "warning");
        try {
          const F = Ag();
          if (!(await fetch(
            `/api/tickets/${e.projectId}/${E}/status`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": F
              },
              body: JSON.stringify({ status: L })
            }
          )).ok)
            throw new Error("Failed to update ticket status");
          L === "HANDLE" && gr("AI agent started processing", "success");
        } catch (F) {
          console.error("Failed to update ticket:", F), gr("Failed to update ticket", "error"), t((W) => W && {
            ...W,
            tickets: W.tickets.map(
              (oe) => oe.id === E ? { ...oe, status: b.status } : oe
            )
          });
        }
      }
    },
    [e]
  ), d = v.useCallback((C) => {
    i(C);
  }, []), m = v.useCallback((C) => {
    t((S) => S && {
      ...S,
      tickets: S.tickets.map(
        (P) => P.id === C.id ? C : P
      )
    }), i(null);
  }, []), w = v.useCallback((C) => {
    t((S) => S && {
      ...S,
      tickets: [...S.tickets, C]
    }), s(!1), gr("Ticket created successfully", "success");
  }, []), N = v.useCallback((C) => {
    t((S) => S && {
      ...S,
      tickets: [...S.tickets, C]
    }), f((S) => Math.max(0, S - 1));
  }, []), D = v.useCallback((C) => {
    C.isArchived ? (t((S) => S && {
      ...S,
      tickets: S.tickets.filter((P) => P.id !== C.id)
    }), f((S) => S + 1), i(null)) : m(C);
  }, [m]);
  return v.useEffect(() => {
    const C = document.getElementById("archive-count");
    C && (C.textContent = String(h), C.classList.toggle("hidden", h === 0));
    const S = document.getElementById("archive-btn");
    S && (a ? S.classList.add("bg-accent", "text-accent-foreground") : S.classList.remove("bg-accent", "text-accent-foreground"));
  }, [h, a]), e ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs("div", { className: `board-with-archive ${a ? "archive-open" : ""}`, children: [
      /* @__PURE__ */ u.jsx("div", { className: "board-main", children: /* @__PURE__ */ u.jsxs(
        Mv,
        {
          sensors: k,
          collisionDetection: yf,
          onDragStart: x,
          onDragOver: T,
          onDragEnd: p,
          children: [
            /* @__PURE__ */ u.jsx("div", { className: "kanban-container", children: Og.map((C) => /* @__PURE__ */ u.jsx(
              Sg,
              {
                id: C.id,
                title: C.title,
                icon: C.icon,
                tickets: e.tickets.filter((S) => S.status === C.id),
                isActive: g === C.id,
                onTicketClick: d
              },
              C.id
            )) }),
            /* @__PURE__ */ u.jsx(qv, { children: n ? /* @__PURE__ */ u.jsx(
              bf,
              {
                ticket: n,
                isDragging: !0,
                onClick: () => {
                }
              }
            ) : null })
          ]
        }
      ) }),
      a && /* @__PURE__ */ u.jsx("div", { className: "board-archive", children: /* @__PURE__ */ u.jsx(
        _g,
        {
          projectId: e.projectId,
          onRestore: N,
          onClose: () => c(!1)
        }
      ) })
    ] }),
    o && /* @__PURE__ */ u.jsx(
      Ng,
      {
        projectId: e.projectId,
        projectName: e.projectName,
        branchPresets: e.branchPresets || [],
        defaultBranch: e.defaultBranch || "main",
        members: e.members || [],
        onClose: () => s(!1),
        onSubmit: w
      }
    ),
    l && /* @__PURE__ */ u.jsx(
      Ig,
      {
        ticket: l,
        projectId: e.projectId,
        onClose: () => i(null),
        onUpdate: D
      }
    )
  ] }) : /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ u.jsx("div", { className: "ai-spinner" }) });
}
function Ag() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
function gr(e, t = "success") {
  typeof window < "u" && window.showToast && window.showToast(e, t);
}
function ec() {
  const e = document.getElementById("kanban-board");
  if (!e) {
    console.warn("Kanban board container not found");
    return;
  }
  Eo.createRoot(e).render(
    /* @__PURE__ */ u.jsx(q.StrictMode, { children: /* @__PURE__ */ u.jsx(Mg, {}) })
  );
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ec) : ec();
