function Xf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zu = { exports: {} }, xo = {}, qu = { exports: {} }, U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var el = Symbol.for("react.element"), Gf = Symbol.for("react.portal"), Yf = Symbol.for("react.fragment"), Jf = Symbol.for("react.strict_mode"), Zf = Symbol.for("react.profiler"), qf = Symbol.for("react.provider"), ep = Symbol.for("react.context"), tp = Symbol.for("react.forward_ref"), np = Symbol.for("react.suspense"), rp = Symbol.for("react.memo"), lp = Symbol.for("react.lazy"), ja = Symbol.iterator;
function op(e) {
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
var Da = Array.isArray, lc = Object.prototype.hasOwnProperty, ws = { current: null }, oc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ic(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) lc.call(t, r) && !oc.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var a = Array(s), c = 0; c < s; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) l[r] === void 0 && (l[r] = s[r]);
  return { $$typeof: el, type: e, key: o, ref: i, props: l, _owner: ws.current };
}
function ip(e, t) {
  return { $$typeof: el, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function xs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === el;
}
function sp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ra = /\/+/g;
function Wo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? sp("" + e.key) : t.toString(36);
}
function Il(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case el:
        case Gf:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Wo(i, 0) : r, Da(l) ? (n = "", e != null && (n = e.replace(Ra, "$&/") + "/"), Il(l, t, n, "", function(c) {
    return c;
  })) : l != null && (xs(l) && (l = ip(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ra, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Da(e)) for (var s = 0; s < e.length; s++) {
    o = e[s];
    var a = r + Wo(o, s);
    i += Il(o, t, n, a, l);
  }
  else if (a = op(e), typeof a == "function") for (e = a.call(e), s = 0; !(o = e.next()).done; ) o = o.value, a = r + Wo(o, s++), i += Il(o, t, n, a, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function dl(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Il(e, r, "", "", function(o) {
    return t.call(n, o, l++);
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
var De = { current: null }, Ll = { transition: null }, up = { ReactCurrentDispatcher: De, ReactCurrentBatchConfig: Ll, ReactCurrentOwner: ws };
function sc() {
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
  if (!xs(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
U.Component = Jn;
U.Fragment = Yf;
U.Profiler = Zf;
U.PureComponent = gs;
U.StrictMode = Jf;
U.Suspense = np;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = up;
U.act = sc;
U.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = tc({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = ws.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (a in t) lc.call(t, a) && !oc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var c = 0; c < a; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: el, type: e.type, key: l, ref: o, props: r, _owner: i };
};
U.createContext = function(e) {
  return e = { $$typeof: ep, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: qf, _context: e }, e.Consumer = e;
};
U.createElement = ic;
U.createFactory = function(e) {
  var t = ic.bind(null, e);
  return t.type = e, t;
};
U.createRef = function() {
  return { current: null };
};
U.forwardRef = function(e) {
  return { $$typeof: tp, render: e };
};
U.isValidElement = xs;
U.lazy = function(e) {
  return { $$typeof: lp, _payload: { _status: -1, _result: e }, _init: ap };
};
U.memo = function(e, t) {
  return { $$typeof: rp, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function(e) {
  var t = Ll.transition;
  Ll.transition = {};
  try {
    e();
  } finally {
    Ll.transition = t;
  }
};
U.unstable_act = sc;
U.useCallback = function(e, t) {
  return De.current.useCallback(e, t);
};
U.useContext = function(e) {
  return De.current.useContext(e);
};
U.useDebugValue = function() {
};
U.useDeferredValue = function(e) {
  return De.current.useDeferredValue(e);
};
U.useEffect = function(e, t) {
  return De.current.useEffect(e, t);
};
U.useId = function() {
  return De.current.useId();
};
U.useImperativeHandle = function(e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function(e, t) {
  return De.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function(e, t) {
  return De.current.useLayoutEffect(e, t);
};
U.useMemo = function(e, t) {
  return De.current.useMemo(e, t);
};
U.useReducer = function(e, t, n) {
  return De.current.useReducer(e, t, n);
};
U.useRef = function(e) {
  return De.current.useRef(e);
};
U.useState = function(e) {
  return De.current.useState(e);
};
U.useSyncExternalStore = function(e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function() {
  return De.current.useTransition();
};
U.version = "18.3.1";
qu.exports = U;
var g = qu.exports;
const Y = /* @__PURE__ */ Xf(g);
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
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) pp.call(t, r) && !mp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: dp, type: e, key: o, ref: i, props: l, _owner: hp.current };
}
xo.Fragment = fp;
xo.jsx = ac;
xo.jsxs = ac;
Zu.exports = xo;
var u = Zu.exports, Si = {}, uc = { exports: {} }, He = {}, cc = { exports: {} }, dc = {};
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
  function t(L, M) {
    var z = L.length;
    L.push(M);
    e: for (; 0 < z; ) {
      var b = z - 1 >>> 1, F = L[b];
      if (0 < l(F, M)) L[b] = M, L[z] = F, z = b;
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var M = L[0], z = L.pop();
    if (z !== M) {
      L[0] = z;
      e: for (var b = 0, F = L.length, ie = F >>> 1; b < ie; ) {
        var A = 2 * (b + 1) - 1, j = L[A], _ = A + 1, W = L[_];
        if (0 > l(j, z)) _ < F && 0 > l(W, j) ? (L[b] = W, L[_] = z, b = _) : (L[b] = j, L[A] = z, b = A);
        else if (_ < F && 0 > l(W, z)) L[b] = W, L[_] = z, b = _;
        else break e;
      }
    }
    return M;
  }
  function l(L, M) {
    var z = L.sortIndex - M.sortIndex;
    return z !== 0 ? z : L.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, s = i.now();
    e.unstable_now = function() {
      return i.now() - s;
    };
  }
  var a = [], c = [], m = 1, h = null, v = 3, y = !1, S = !1, x = !1, R = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(L) {
    for (var M = n(c); M !== null; ) {
      if (M.callback === null) r(c);
      else if (M.startTime <= L) r(c), M.sortIndex = M.expirationTime, t(a, M);
      else break;
      M = n(c);
    }
  }
  function w(L) {
    if (x = !1, p(L), !S) if (n(a) !== null) S = !0, Ce(k);
    else {
      var M = n(c);
      M !== null && $(w, M.startTime - L);
    }
  }
  function k(L, M) {
    S = !1, x && (x = !1, f(E), E = -1), y = !0;
    var z = v;
    try {
      for (p(M), h = n(a); h !== null && (!(h.expirationTime > M) || L && !O()); ) {
        var b = h.callback;
        if (typeof b == "function") {
          h.callback = null, v = h.priorityLevel;
          var F = b(h.expirationTime <= M);
          M = e.unstable_now(), typeof F == "function" ? h.callback = F : h === n(a) && r(a), p(M);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var ie = !0;
      else {
        var A = n(c);
        A !== null && $(w, A.startTime - M), ie = !1;
      }
      return ie;
    } finally {
      h = null, v = z, y = !1;
    }
  }
  var N = !1, C = null, E = -1, T = 5, I = -1;
  function O() {
    return !(e.unstable_now() - I < T);
  }
  function te() {
    if (C !== null) {
      var L = e.unstable_now();
      I = L;
      var M = !0;
      try {
        M = C(!0, L);
      } finally {
        M ? re() : (N = !1, C = null);
      }
    } else N = !1;
  }
  var re;
  if (typeof d == "function") re = function() {
    d(te);
  };
  else if (typeof MessageChannel < "u") {
    var ce = new MessageChannel(), Ie = ce.port2;
    ce.port1.onmessage = te, re = function() {
      Ie.postMessage(null);
    };
  } else re = function() {
    R(te, 0);
  };
  function Ce(L) {
    C = L, N || (N = !0, re());
  }
  function $(L, M) {
    E = R(function() {
      L(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(L) {
    L.callback = null;
  }, e.unstable_continueExecution = function() {
    S || y || (S = !0, Ce(k));
  }, e.unstable_forceFrameRate = function(L) {
    0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < L ? Math.floor(1e3 / L) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(L) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = v;
    }
    var z = v;
    v = M;
    try {
      return L();
    } finally {
      v = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(L, M) {
    switch (L) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        L = 3;
    }
    var z = v;
    v = L;
    try {
      return M();
    } finally {
      v = z;
    }
  }, e.unstable_scheduleCallback = function(L, M, z) {
    var b = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? b + z : b) : z = b, L) {
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
    return F = z + F, L = { id: m++, callback: M, priorityLevel: L, startTime: z, expirationTime: F, sortIndex: -1 }, z > b ? (L.sortIndex = z, t(c, L), n(a) === null && L === n(c) && (x ? (f(E), E = -1) : x = !0, $(w, z - b))) : (L.sortIndex = F, t(a, L), S || y || (S = !0, Ce(k))), L;
  }, e.unstable_shouldYield = O, e.unstable_wrapCallback = function(L) {
    var M = v;
    return function() {
      var z = v;
      v = M;
      try {
        return L.apply(this, arguments);
      } finally {
        v = z;
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
var gp = g, Ve = vp;
function D(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var fc = /* @__PURE__ */ new Set(), Or = {};
function mn(e, t) {
  Hn(e, t), Hn(e + "Capture", t);
}
function Hn(e, t) {
  for (Or[e] = t, e = 0; e < t.length; e++) fc.add(t[e]);
}
var Et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ki = Object.prototype.hasOwnProperty, yp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ta = {}, Ia = {};
function wp(e) {
  return ki.call(Ia, e) ? !0 : ki.call(Ta, e) ? !1 : yp.test(e) ? Ia[e] = !0 : (Ta[e] = !0, !1);
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
function Re(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ge[e] = new Re(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ge[t] = new Re(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ge[e] = new Re(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ge[e] = new Re(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ge[e] = new Re(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ge[e] = new Re(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ge[e] = new Re(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ge[e] = new Re(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ge[e] = new Re(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  ge[t] = new Re(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ss, ks);
  ge[t] = new Re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ss, ks);
  ge[t] = new Re(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ge[e] = new Re(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ge[e] = new Re(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Cs(e, t, n, r) {
  var l = ge.hasOwnProperty(t) ? ge[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Sp(t, n, l, r) && (n = null), r || l === null ? wp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Rt = gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fl = Symbol.for("react.element"), En = Symbol.for("react.portal"), Nn = Symbol.for("react.fragment"), Es = Symbol.for("react.strict_mode"), Ci = Symbol.for("react.profiler"), pc = Symbol.for("react.provider"), hc = Symbol.for("react.context"), Ns = Symbol.for("react.forward_ref"), Ei = Symbol.for("react.suspense"), Ni = Symbol.for("react.suspense_list"), js = Symbol.for("react.memo"), Mt = Symbol.for("react.lazy"), mc = Symbol.for("react.offscreen"), La = Symbol.iterator;
function ar(e) {
  return e === null || typeof e != "object" ? null : (e = La && e[La] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ee = Object.assign, Qo;
function yr(e) {
  if (Qo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Qo = t && t[1] || "";
  }
  return `
` + Qo + e;
}
var Ko = !1;
function Xo(e, t) {
  if (!e || Ko) return "";
  Ko = !0;
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
`), o = r.stack.split(`
`), i = l.length - 1, s = o.length - 1; 1 <= i && 0 <= s && l[i] !== o[s]; ) s--;
      for (; 1 <= i && 0 <= s; i--, s--) if (l[i] !== o[s]) {
        if (i !== 1 || s !== 1)
          do
            if (i--, s--, 0 > s || l[i] !== o[s]) {
              var a = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= i && 0 <= s);
        break;
      }
    }
  } finally {
    Ko = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? yr(e) : "";
}
function kp(e) {
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
      return e = Xo(e.type, !1), e;
    case 11:
      return e = Xo(e.type.render, !1), e;
    case 1:
      return e = Xo(e.type, !0), e;
    default:
      return "";
  }
}
function ji(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Nn:
      return "Fragment";
    case En:
      return "Portal";
    case Ci:
      return "Profiler";
    case Es:
      return "StrictMode";
    case Ei:
      return "Suspense";
    case Ni:
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
      return t = e.displayName || null, t !== null ? t : ji(e.type) || "Memo";
    case Mt:
      t = e._payload, e = e._init;
      try {
        return ji(e(t));
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
      return ji(t);
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
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function pl(e) {
  e._valueTracker || (e._valueTracker = Ep(e));
}
function gc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = vc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Vl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Di(e, t) {
  var n = t.checked;
  return ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function _a(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Yt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function yc(e, t) {
  t = t.checked, t != null && Cs(e, "checked", t, !1);
}
function Ri(e, t) {
  yc(e, t);
  var n = Yt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ti(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ti(e, t.type, Yt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Pa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ti(e, t, n) {
  (t !== "number" || Vl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var wr = Array.isArray;
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
function Ii(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Oa(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(D(92));
      if (wr(n)) {
        if (1 < n.length) throw Error(D(93));
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
function Li(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? xc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var hl, Sc = function(e) {
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
}, Np = ["Webkit", "ms", "Moz", "O"];
Object.keys(kr).forEach(function(e) {
  Np.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), kr[t] = kr[e];
  });
});
function kc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || kr.hasOwnProperty(e) && kr[e] ? ("" + t).trim() : t + "px";
}
function Cc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = kc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var jp = ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function _i(e, t) {
  if (t) {
    if (jp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(D(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(D(62));
  }
}
function Pi(e, t) {
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
var Oi = null;
function Ds(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Mi = null, Fn = null, Un = null;
function Aa(e) {
  if (e = rl(e)) {
    if (typeof Mi != "function") throw Error(D(280));
    var t = e.stateNode;
    t && (t = No(t), Mi(e.stateNode, e.type, t));
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
function Dc() {
}
var Go = !1;
function Rc(e, t, n) {
  if (Go) return e(t, n);
  Go = !0;
  try {
    return jc(e, t, n);
  } finally {
    Go = !1, (Fn !== null || Un !== null) && (Dc(), Nc());
  }
}
function Ar(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = No(n);
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
  if (n && typeof n != "function") throw Error(D(231, t, typeof n));
  return n;
}
var Ai = !1;
if (Et) try {
  var ur = {};
  Object.defineProperty(ur, "passive", { get: function() {
    Ai = !0;
  } }), window.addEventListener("test", ur, ur), window.removeEventListener("test", ur, ur);
} catch {
  Ai = !1;
}
function Dp(e, t, n, r, l, o, i, s, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Cr = !1, Hl = null, Wl = !1, zi = null, Rp = { onError: function(e) {
  Cr = !0, Hl = e;
} };
function Tp(e, t, n, r, l, o, i, s, a) {
  Cr = !1, Hl = null, Dp.apply(Rp, arguments);
}
function Ip(e, t, n, r, l, o, i, s, a) {
  if (Tp.apply(this, arguments), Cr) {
    if (Cr) {
      var c = Hl;
      Cr = !1, Hl = null;
    } else throw Error(D(198));
    Wl || (Wl = !0, zi = c);
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
  if (vn(e) !== e) throw Error(D(188));
}
function Lp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = vn(e), t === null) throw Error(D(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return za(l), e;
        if (o === r) return za(l), t;
        o = o.sibling;
      }
      throw Error(D(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (s === r) {
          i = !0, r = l, n = o;
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (s === r) {
            i = !0, r = o, n = l;
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(D(189));
      }
    }
    if (n.alternate !== r) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
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
var _c = Ve.unstable_scheduleCallback, Fa = Ve.unstable_cancelCallback, _p = Ve.unstable_shouldYield, Pp = Ve.unstable_requestPaint, le = Ve.unstable_now, Op = Ve.unstable_getCurrentPriorityLevel, Rs = Ve.unstable_ImmediatePriority, Pc = Ve.unstable_UserBlockingPriority, Ql = Ve.unstable_NormalPriority, Mp = Ve.unstable_LowPriority, Oc = Ve.unstable_IdlePriority, So = null, mt = null;
function Ap(e) {
  if (mt && typeof mt.onCommitFiberRoot == "function") try {
    mt.onCommitFiberRoot(So, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var lt = Math.clz32 ? Math.clz32 : Up, zp = Math.log, Fp = Math.LN2;
function Up(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zp(e) / Fp | 0) | 0;
}
var ml = 64, vl = 4194304;
function xr(e) {
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
function Kl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? r = xr(s) : (o &= i, o !== 0 && (r = xr(o)));
  } else i = n & ~l, i !== 0 ? r = xr(i) : o !== 0 && (r = xr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
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
function $p(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - lt(o), s = 1 << i, a = l[i];
    a === -1 ? (!(s & n) || s & r) && (l[i] = Bp(s, t)) : a <= t && (e.expiredLanes |= s), o &= ~s;
  }
}
function Fi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Mc() {
  var e = ml;
  return ml <<= 1, !(ml & 4194240) && (ml = 64), e;
}
function Yo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function tl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - lt(t), e[t] = n;
}
function bp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - lt(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function Ts(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - lt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var Q = 0;
function Ac(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var zc, Is, Fc, Uc, Bc, Ui = !1, gl = [], bt = null, Vt = null, Ht = null, zr = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Map(), Ft = [], Vp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ua(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      bt = null;
      break;
    case "dragenter":
    case "dragleave":
      Vt = null;
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
function cr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = rl(t), t !== null && Is(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Hp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return bt = cr(bt, e, t, n, r, l), !0;
    case "dragenter":
      return Vt = cr(Vt, e, t, n, r, l), !0;
    case "mouseover":
      return Ht = cr(Ht, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return zr.set(o, cr(zr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Fr.set(o, cr(Fr.get(o) || null, e, t, n, r, l)), !0;
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
function _l(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Bi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Oi = r, n.target.dispatchEvent(r), Oi = null;
    } else return t = rl(n), t !== null && Is(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ba(e, t, n) {
  _l(e) && n.delete(t);
}
function Wp() {
  Ui = !1, bt !== null && _l(bt) && (bt = null), Vt !== null && _l(Vt) && (Vt = null), Ht !== null && _l(Ht) && (Ht = null), zr.forEach(Ba), Fr.forEach(Ba);
}
function dr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ui || (Ui = !0, Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, Wp)));
}
function Ur(e) {
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
  for (bt !== null && dr(bt, e), Vt !== null && dr(Vt, e), Ht !== null && dr(Ht, e), zr.forEach(t), Fr.forEach(t), n = 0; n < Ft.length; n++) r = Ft[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ft.length && (n = Ft[0], n.blockedOn === null); ) $c(n), n.blockedOn === null && Ft.shift();
}
var Bn = Rt.ReactCurrentBatchConfig, Xl = !0;
function Qp(e, t, n, r) {
  var l = Q, o = Bn.transition;
  Bn.transition = null;
  try {
    Q = 1, Ls(e, t, n, r);
  } finally {
    Q = l, Bn.transition = o;
  }
}
function Kp(e, t, n, r) {
  var l = Q, o = Bn.transition;
  Bn.transition = null;
  try {
    Q = 4, Ls(e, t, n, r);
  } finally {
    Q = l, Bn.transition = o;
  }
}
function Ls(e, t, n, r) {
  if (Xl) {
    var l = Bi(e, t, n, r);
    if (l === null) ii(e, t, r, Gl, n), Ua(e, r);
    else if (Hp(l, e, t, n, r)) r.stopPropagation();
    else if (Ua(e, r), t & 4 && -1 < Vp.indexOf(e)) {
      for (; l !== null; ) {
        var o = rl(l);
        if (o !== null && zc(o), o = Bi(e, t, n, r), o === null && ii(e, t, r, Gl, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ii(e, t, r, null, n);
  }
}
var Gl = null;
function Bi(e, t, n, r) {
  if (Gl = null, e = Ds(r), e = ln(e), e !== null) if (t = vn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Tc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Gl = e, null;
}
function bc(e) {
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
        case Ql:
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
var Bt = null, _s = null, Pl = null;
function Vc() {
  if (Pl) return Pl;
  var e, t = _s, n = t.length, r, l = "value" in Bt ? Bt.value : Bt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Pl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Ol(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function yl() {
  return !0;
}
function $a() {
  return !1;
}
function We(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(o) : o[s]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? yl : $a, this.isPropagationStopped = $a, this;
  }
  return ee(t.prototype, { preventDefault: function() {
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
}, defaultPrevented: 0, isTrusted: 0 }, Ps = We(Zn), nl = ee({}, Zn, { view: 0, detail: 0 }), Xp = We(nl), Jo, Zo, fr, ko = ee({}, nl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Os, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== fr && (fr && e.type === "mousemove" ? (Jo = e.screenX - fr.screenX, Zo = e.screenY - fr.screenY) : Zo = Jo = 0, fr = e), Jo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Zo;
} }), ba = We(ko), Gp = ee({}, ko, { dataTransfer: 0 }), Yp = We(Gp), Jp = ee({}, nl, { relatedTarget: 0 }), qo = We(Jp), Zp = ee({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qp = We(Zp), eh = ee({}, Zn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), th = We(eh), nh = ee({}, Zn, { data: 0 }), Va = We(nh), rh = {
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
}, oh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ih(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = oh[e]) ? !!t[e] : !1;
}
function Os() {
  return ih;
}
var sh = ee({}, nl, { key: function(e) {
  if (e.key) {
    var t = rh[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ol(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? lh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Os, charCode: function(e) {
  return e.type === "keypress" ? Ol(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ol(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ah = We(sh), uh = ee({}, ko, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ha = We(uh), ch = ee({}, nl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Os }), dh = We(ch), fh = ee({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ph = We(fh), hh = ee({}, ko, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), mh = We(hh), vh = [9, 13, 27, 32], Ms = Et && "CompositionEvent" in window, Er = null;
Et && "documentMode" in document && (Er = document.documentMode);
var gh = Et && "TextEvent" in window && !Er, Hc = Et && (!Ms || Er && 8 < Er && 11 >= Er), Wa = " ", Qa = !1;
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
  if (jn) return e === "compositionend" || !Ms && Wc(e, t) ? (e = Vc(), Pl = _s = Bt = null, jn = !1, e) : null;
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
      return Hc && t.locale !== "ko" ? null : t.data;
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
  Ec(r), t = Yl(t, "onChange"), 0 < t.length && (n = new Ps("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Nr = null, Br = null;
function Sh(e) {
  ld(e, 0);
}
function Co(e) {
  var t = Tn(e);
  if (gc(t)) return e;
}
function kh(e, t) {
  if (e === "change") return t;
}
var Xc = !1;
if (Et) {
  var ei;
  if (Et) {
    var ti = "oninput" in document;
    if (!ti) {
      var Xa = document.createElement("div");
      Xa.setAttribute("oninput", "return;"), ti = typeof Xa.oninput == "function";
    }
    ei = ti;
  } else ei = !1;
  Xc = ei && (!document.documentMode || 9 < document.documentMode);
}
function Ga() {
  Nr && (Nr.detachEvent("onpropertychange", Gc), Br = Nr = null);
}
function Gc(e) {
  if (e.propertyName === "value" && Co(Br)) {
    var t = [];
    Kc(t, Br, e, Ds(e)), Rc(Sh, t);
  }
}
function Ch(e, t, n) {
  e === "focusin" ? (Ga(), Nr = t, Br = n, Nr.attachEvent("onpropertychange", Gc)) : e === "focusout" && Ga();
}
function Eh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Co(Br);
}
function Nh(e, t) {
  if (e === "click") return Co(t);
}
function jh(e, t) {
  if (e === "input" || e === "change") return Co(t);
}
function Dh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var it = typeof Object.is == "function" ? Object.is : Dh;
function $r(e, t) {
  if (it(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ki.call(t, l) || !it(e[l], t[l])) return !1;
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
function As(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Rh(e) {
  var t = Jc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Yc(n.ownerDocument.documentElement, n)) {
    if (r !== null && As(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ja(n, o);
        var i = Ja(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Th = Et && "documentMode" in document && 11 >= document.documentMode, Dn = null, $i = null, jr = null, bi = !1;
function Za(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bi || Dn == null || Dn !== Vl(r) || (r = Dn, "selectionStart" in r && As(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), jr && $r(jr, r) || (jr = r, r = Yl($i, "onSelect"), 0 < r.length && (t = new Ps("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Dn)));
}
function wl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Rn = { animationend: wl("Animation", "AnimationEnd"), animationiteration: wl("Animation", "AnimationIteration"), animationstart: wl("Animation", "AnimationStart"), transitionend: wl("Transition", "TransitionEnd") }, ni = {}, Zc = {};
Et && (Zc = document.createElement("div").style, "AnimationEvent" in window || (delete Rn.animationend.animation, delete Rn.animationiteration.animation, delete Rn.animationstart.animation), "TransitionEvent" in window || delete Rn.transitionend.transition);
function Eo(e) {
  if (ni[e]) return ni[e];
  if (!Rn[e]) return e;
  var t = Rn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zc) return ni[e] = t[n];
  return e;
}
var qc = Eo("animationend"), ed = Eo("animationiteration"), td = Eo("animationstart"), nd = Eo("transitionend"), rd = /* @__PURE__ */ new Map(), qa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function qt(e, t) {
  rd.set(e, t), mn(t, [e]);
}
for (var ri = 0; ri < qa.length; ri++) {
  var li = qa[ri], Ih = li.toLowerCase(), Lh = li[0].toUpperCase() + li.slice(1);
  qt(Ih, "on" + Lh);
}
qt(qc, "onAnimationEnd");
qt(ed, "onAnimationIteration");
qt(td, "onAnimationStart");
qt("dblclick", "onDoubleClick");
qt("focusin", "onFocus");
qt("focusout", "onBlur");
qt(nd, "onTransitionEnd");
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
var Sr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), _h = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));
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
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var s = r[i], a = s.instance, c = s.currentTarget;
        if (s = s.listener, a !== o && l.isPropagationStopped()) break e;
        eu(l, s, c), o = a;
      }
      else for (i = 0; i < r.length; i++) {
        if (s = r[i], a = s.instance, c = s.currentTarget, s = s.listener, a !== o && l.isPropagationStopped()) break e;
        eu(l, s, c), o = a;
      }
    }
  }
  if (Wl) throw e = zi, Wl = !1, zi = null, e;
}
function X(e, t) {
  var n = t[Ki];
  n === void 0 && (n = t[Ki] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (od(t, e, 2, !1), n.add(r));
}
function oi(e, t, n) {
  var r = 0;
  t && (r |= 4), od(n, e, r, t);
}
var xl = "_reactListening" + Math.random().toString(36).slice(2);
function br(e) {
  if (!e[xl]) {
    e[xl] = !0, fc.forEach(function(n) {
      n !== "selectionchange" && (_h.has(n) || oi(n, !1, e), oi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xl] || (t[xl] = !0, oi("selectionchange", !1, t));
  }
}
function od(e, t, n, r) {
  switch (bc(t)) {
    case 1:
      var l = Qp;
      break;
    case 4:
      l = Kp;
      break;
    default:
      l = Ls;
  }
  n = l.bind(null, t, n, e), l = void 0, !Ai || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ii(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var s = r.stateNode.containerInfo;
      if (s === l || s.nodeType === 8 && s.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var a = i.tag;
        if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
        i = i.return;
      }
      for (; s !== null; ) {
        if (i = ln(s), i === null) return;
        if (a = i.tag, a === 5 || a === 6) {
          r = o = i;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  Rc(function() {
    var c = o, m = Ds(n), h = [];
    e: {
      var v = rd.get(e);
      if (v !== void 0) {
        var y = Ps, S = e;
        switch (e) {
          case "keypress":
            if (Ol(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = ah;
            break;
          case "focusin":
            S = "focus", y = qo;
            break;
          case "focusout":
            S = "blur", y = qo;
            break;
          case "beforeblur":
          case "afterblur":
            y = qo;
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
            y = ba;
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
            y = Ha;
        }
        var x = (t & 4) !== 0, R = !x && e === "scroll", f = x ? v !== null ? v + "Capture" : null : v;
        x = [];
        for (var d = c, p; d !== null; ) {
          p = d;
          var w = p.stateNode;
          if (p.tag === 5 && w !== null && (p = w, f !== null && (w = Ar(d, f), w != null && x.push(Vr(d, w, p)))), R) break;
          d = d.return;
        }
        0 < x.length && (v = new y(v, S, null, n, m), h.push({ event: v, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", v && n !== Oi && (S = n.relatedTarget || n.fromElement) && (ln(S) || S[Nt])) break e;
        if ((y || v) && (v = m.window === m ? m : (v = m.ownerDocument) ? v.defaultView || v.parentWindow : window, y ? (S = n.relatedTarget || n.toElement, y = c, S = S ? ln(S) : null, S !== null && (R = vn(S), S !== R || S.tag !== 5 && S.tag !== 6) && (S = null)) : (y = null, S = c), y !== S)) {
          if (x = ba, w = "onMouseLeave", f = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (x = Ha, w = "onPointerLeave", f = "onPointerEnter", d = "pointer"), R = y == null ? v : Tn(y), p = S == null ? v : Tn(S), v = new x(w, d + "leave", y, n, m), v.target = R, v.relatedTarget = p, w = null, ln(m) === c && (x = new x(f, d + "enter", S, n, m), x.target = p, x.relatedTarget = R, w = x), R = w, y && S) t: {
            for (x = y, f = S, d = 0, p = x; p; p = Cn(p)) d++;
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
          y !== null && tu(h, v, y, x, !1), S !== null && R !== null && tu(h, R, S, x, !0);
        }
      }
      e: {
        if (v = c ? Tn(c) : window, y = v.nodeName && v.nodeName.toLowerCase(), y === "select" || y === "input" && v.type === "file") var k = kh;
        else if (Ka(v)) if (Xc) k = jh;
        else {
          k = Eh;
          var N = Ch;
        }
        else (y = v.nodeName) && y.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (k = Nh);
        if (k && (k = k(e, c))) {
          Kc(h, k, n, m);
          break e;
        }
        N && N(e, v, c), e === "focusout" && (N = v._wrapperState) && N.controlled && v.type === "number" && Ti(v, "number", v.value);
      }
      switch (N = c ? Tn(c) : window, e) {
        case "focusin":
          (Ka(N) || N.contentEditable === "true") && (Dn = N, $i = c, jr = null);
          break;
        case "focusout":
          jr = $i = Dn = null;
          break;
        case "mousedown":
          bi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          bi = !1, Za(h, n, m);
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
      E && (Hc && n.locale !== "ko" && (jn || E !== "onCompositionStart" ? E === "onCompositionEnd" && jn && (C = Vc()) : (Bt = m, _s = "value" in Bt ? Bt.value : Bt.textContent, jn = !0)), N = Yl(c, E), 0 < N.length && (E = new Va(E, e, null, n, m), h.push({ event: E, listeners: N }), C ? E.data = C : (C = Qc(n), C !== null && (E.data = C)))), (C = gh ? yh(e, n) : wh(e, n)) && (c = Yl(c, "onBeforeInput"), 0 < c.length && (m = new Va("onBeforeInput", "beforeinput", null, n, m), h.push({ event: m, listeners: c }), m.data = C));
    }
    ld(h, t);
  });
}
function Vr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Ar(e, n), o != null && r.unshift(Vr(e, o, l)), o = Ar(e, t), o != null && r.push(Vr(e, o, l))), e = e.return;
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
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, c = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && c !== null && (s = c, l ? (a = Ar(n, o), a != null && i.unshift(Vr(n, a, s))) : l || (a = Ar(n, o), a != null && i.push(Vr(n, a, s)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Ph = /\r\n?/g, Oh = /\u0000|\uFFFD/g;
function nu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ph, `
`).replace(Oh, "");
}
function Sl(e, t, n) {
  if (t = nu(t), nu(e) !== t && n) throw Error(D(425));
}
function Jl() {
}
var Vi = null, Hi = null;
function Wi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Qi = typeof setTimeout == "function" ? setTimeout : void 0, Mh = typeof clearTimeout == "function" ? clearTimeout : void 0, ru = typeof Promise == "function" ? Promise : void 0, Ah = typeof queueMicrotask == "function" ? queueMicrotask : typeof ru < "u" ? function(e) {
  return ru.resolve(null).then(e).catch(zh);
} : Qi;
function zh(e) {
  setTimeout(function() {
    throw e;
  });
}
function si(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Ur(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Ur(t);
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
var qn = Math.random().toString(36).slice(2), ht = "__reactFiber$" + qn, Hr = "__reactProps$" + qn, Nt = "__reactContainer$" + qn, Ki = "__reactEvents$" + qn, Fh = "__reactListeners$" + qn, Uh = "__reactHandles$" + qn;
function ln(e) {
  var t = e[ht];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Nt] || n[ht]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = lu(e); e !== null; ) {
        if (n = e[ht]) return n;
        e = lu(e);
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
  throw Error(D(33));
}
function No(e) {
  return e[Hr] || null;
}
var Xi = [], In = -1;
function en(e) {
  return { current: e };
}
function G(e) {
  0 > In || (e.current = Xi[In], Xi[In] = null, In--);
}
function K(e, t) {
  In++, Xi[In] = e.current, e.current = t;
}
var Jt = {}, ke = en(Jt), Pe = en(!1), cn = Jt;
function Wn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Oe(e) {
  return e = e.childContextTypes, e != null;
}
function Zl() {
  G(Pe), G(ke);
}
function ou(e, t, n) {
  if (ke.current !== Jt) throw Error(D(168));
  K(ke, t), K(Pe, n);
}
function id(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(D(108, Cp(e) || "Unknown", l));
  return ee({}, n, r);
}
function ql(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jt, cn = ke.current, K(ke, e), K(Pe, Pe.current), !0;
}
function iu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  n ? (e = id(e, t, cn), r.__reactInternalMemoizedMergedChildContext = e, G(Pe), G(ke), K(ke, e)) : G(Pe), K(Pe, n);
}
var xt = null, jo = !1, ai = !1;
function sd(e) {
  xt === null ? xt = [e] : xt.push(e);
}
function Bh(e) {
  jo = !0, sd(e);
}
function tn() {
  if (!ai && xt !== null) {
    ai = !0;
    var e = 0, t = Q;
    try {
      var n = xt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      xt = null, jo = !1;
    } catch (l) {
      throw xt !== null && (xt = xt.slice(e + 1)), _c(Rs, tn), l;
    } finally {
      Q = t, ai = !1;
    }
  }
  return null;
}
var Ln = [], _n = 0, eo = null, to = 0, Xe = [], Ge = 0, dn = null, St = 1, kt = "";
function nn(e, t) {
  Ln[_n++] = to, Ln[_n++] = eo, eo = e, to = t;
}
function ad(e, t, n) {
  Xe[Ge++] = St, Xe[Ge++] = kt, Xe[Ge++] = dn, dn = e;
  var r = St;
  e = kt;
  var l = 32 - lt(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - lt(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, St = 1 << 32 - lt(t) + l | n << l | r, kt = o + e;
  } else St = 1 << o | n << l | r, kt = e;
}
function zs(e) {
  e.return !== null && (nn(e, 1), ad(e, 1, 0));
}
function Fs(e) {
  for (; e === eo; ) eo = Ln[--_n], Ln[_n] = null, to = Ln[--_n], Ln[_n] = null;
  for (; e === dn; ) dn = Xe[--Ge], Xe[Ge] = null, kt = Xe[--Ge], Xe[Ge] = null, St = Xe[--Ge], Xe[Ge] = null;
}
var be = null, $e = null, J = !1, rt = null;
function ud(e, t) {
  var n = Ye(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function su(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, be = e, $e = Wt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, be = e, $e = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = dn !== null ? { id: St, overflow: kt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ye(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, be = e, $e = null, !0) : !1;
    default:
      return !1;
  }
}
function Gi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yi(e) {
  if (J) {
    var t = $e;
    if (t) {
      var n = t;
      if (!su(e, t)) {
        if (Gi(e)) throw Error(D(418));
        t = Wt(n.nextSibling);
        var r = be;
        t && su(e, t) ? ud(r, n) : (e.flags = e.flags & -4097 | 2, J = !1, be = e);
      }
    } else {
      if (Gi(e)) throw Error(D(418));
      e.flags = e.flags & -4097 | 2, J = !1, be = e;
    }
  }
}
function au(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  be = e;
}
function kl(e) {
  if (e !== be) return !1;
  if (!J) return au(e), J = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Wi(e.type, e.memoizedProps)), t && (t = $e)) {
    if (Gi(e)) throw cd(), Error(D(418));
    for (; t; ) ud(e, t), t = Wt(t.nextSibling);
  }
  if (au(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(D(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $e = Wt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      $e = null;
    }
  } else $e = be ? Wt(e.stateNode.nextSibling) : null;
  return !0;
}
function cd() {
  for (var e = $e; e; ) e = Wt(e.nextSibling);
}
function Qn() {
  $e = be = null, J = !1;
}
function Us(e) {
  rt === null ? rt = [e] : rt.push(e);
}
var $h = Rt.ReactCurrentBatchConfig;
function pr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(D(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(D(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var s = l.refs;
        i === null ? delete s[o] : s[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(D(284));
    if (!n._owner) throw Error(D(290, e));
  }
  return e;
}
function Cl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
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
  function o(f, d, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < d ? (f.flags |= 2, d) : p) : (f.flags |= 2, d)) : (f.flags |= 1048576, d);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, d, p, w) {
    return d === null || d.tag !== 6 ? (d = mi(p, f.mode, w), d.return = f, d) : (d = l(d, p), d.return = f, d);
  }
  function a(f, d, p, w) {
    var k = p.type;
    return k === Nn ? m(f, d, p.props.children, w, p.key) : d !== null && (d.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Mt && uu(k) === d.type) ? (w = l(d, p.props), w.ref = pr(f, d, p), w.return = f, w) : (w = $l(p.type, p.key, p.props, null, f.mode, w), w.ref = pr(f, d, p), w.return = f, w);
  }
  function c(f, d, p, w) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = vi(p, f.mode, w), d.return = f, d) : (d = l(d, p.children || []), d.return = f, d);
  }
  function m(f, d, p, w, k) {
    return d === null || d.tag !== 7 ? (d = un(p, f.mode, w, k), d.return = f, d) : (d = l(d, p), d.return = f, d);
  }
  function h(f, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = mi("" + d, f.mode, p), d.return = f, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case fl:
          return p = $l(d.type, d.key, d.props, null, f.mode, p), p.ref = pr(f, null, d), p.return = f, p;
        case En:
          return d = vi(d, f.mode, p), d.return = f, d;
        case Mt:
          var w = d._init;
          return h(f, w(d._payload), p);
      }
      if (wr(d) || ar(d)) return d = un(d, f.mode, p, null), d.return = f, d;
      Cl(f, d);
    }
    return null;
  }
  function v(f, d, p, w) {
    var k = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return k !== null ? null : s(f, d, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case fl:
          return p.key === k ? a(f, d, p, w) : null;
        case En:
          return p.key === k ? c(f, d, p, w) : null;
        case Mt:
          return k = p._init, v(
            f,
            d,
            k(p._payload),
            w
          );
      }
      if (wr(p) || ar(p)) return k !== null ? null : m(f, d, p, w, null);
      Cl(f, p);
    }
    return null;
  }
  function y(f, d, p, w, k) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(p) || null, s(d, f, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case fl:
          return f = f.get(w.key === null ? p : w.key) || null, a(d, f, w, k);
        case En:
          return f = f.get(w.key === null ? p : w.key) || null, c(d, f, w, k);
        case Mt:
          var N = w._init;
          return y(f, d, p, N(w._payload), k);
      }
      if (wr(w) || ar(w)) return f = f.get(p) || null, m(d, f, w, k, null);
      Cl(d, w);
    }
    return null;
  }
  function S(f, d, p, w) {
    for (var k = null, N = null, C = d, E = d = 0, T = null; C !== null && E < p.length; E++) {
      C.index > E ? (T = C, C = null) : T = C.sibling;
      var I = v(f, C, p[E], w);
      if (I === null) {
        C === null && (C = T);
        break;
      }
      e && C && I.alternate === null && t(f, C), d = o(I, d, E), N === null ? k = I : N.sibling = I, N = I, C = T;
    }
    if (E === p.length) return n(f, C), J && nn(f, E), k;
    if (C === null) {
      for (; E < p.length; E++) C = h(f, p[E], w), C !== null && (d = o(C, d, E), N === null ? k = C : N.sibling = C, N = C);
      return J && nn(f, E), k;
    }
    for (C = r(f, C); E < p.length; E++) T = y(C, f, E, p[E], w), T !== null && (e && T.alternate !== null && C.delete(T.key === null ? E : T.key), d = o(T, d, E), N === null ? k = T : N.sibling = T, N = T);
    return e && C.forEach(function(O) {
      return t(f, O);
    }), J && nn(f, E), k;
  }
  function x(f, d, p, w) {
    var k = ar(p);
    if (typeof k != "function") throw Error(D(150));
    if (p = k.call(p), p == null) throw Error(D(151));
    for (var N = k = null, C = d, E = d = 0, T = null, I = p.next(); C !== null && !I.done; E++, I = p.next()) {
      C.index > E ? (T = C, C = null) : T = C.sibling;
      var O = v(f, C, I.value, w);
      if (O === null) {
        C === null && (C = T);
        break;
      }
      e && C && O.alternate === null && t(f, C), d = o(O, d, E), N === null ? k = O : N.sibling = O, N = O, C = T;
    }
    if (I.done) return n(
      f,
      C
    ), J && nn(f, E), k;
    if (C === null) {
      for (; !I.done; E++, I = p.next()) I = h(f, I.value, w), I !== null && (d = o(I, d, E), N === null ? k = I : N.sibling = I, N = I);
      return J && nn(f, E), k;
    }
    for (C = r(f, C); !I.done; E++, I = p.next()) I = y(C, f, E, I.value, w), I !== null && (e && I.alternate !== null && C.delete(I.key === null ? E : I.key), d = o(I, d, E), N === null ? k = I : N.sibling = I, N = I);
    return e && C.forEach(function(te) {
      return t(f, te);
    }), J && nn(f, E), k;
  }
  function R(f, d, p, w) {
    if (typeof p == "object" && p !== null && p.type === Nn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case fl:
          e: {
            for (var k = p.key, N = d; N !== null; ) {
              if (N.key === k) {
                if (k = p.type, k === Nn) {
                  if (N.tag === 7) {
                    n(f, N.sibling), d = l(N, p.props.children), d.return = f, f = d;
                    break e;
                  }
                } else if (N.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Mt && uu(k) === N.type) {
                  n(f, N.sibling), d = l(N, p.props), d.ref = pr(f, N, p), d.return = f, f = d;
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            p.type === Nn ? (d = un(p.props.children, f.mode, w, p.key), d.return = f, f = d) : (w = $l(p.type, p.key, p.props, null, f.mode, w), w.ref = pr(f, d, p), w.return = f, f = w);
          }
          return i(f);
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
            d = vi(p, f.mode, w), d.return = f, f = d;
          }
          return i(f);
        case Mt:
          return N = p._init, R(f, d, N(p._payload), w);
      }
      if (wr(p)) return S(f, d, p, w);
      if (ar(p)) return x(f, d, p, w);
      Cl(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(f, d.sibling), d = l(d, p), d.return = f, f = d) : (n(f, d), d = mi(p, f.mode, w), d.return = f, f = d), i(f)) : n(f, d);
  }
  return R;
}
var Kn = dd(!0), fd = dd(!1), no = en(null), ro = null, Pn = null, Bs = null;
function $s() {
  Bs = Pn = ro = null;
}
function bs(e) {
  var t = no.current;
  G(no), e._currentValue = t;
}
function Ji(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function $n(e, t) {
  ro = e, Bs = Pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_e = !0), e.firstContext = null);
}
function Ze(e) {
  var t = e._currentValue;
  if (Bs !== e) if (e = { context: e, memoizedValue: t, next: null }, Pn === null) {
    if (ro === null) throw Error(D(308));
    Pn = e, ro.dependencies = { lanes: 0, firstContext: e };
  } else Pn = Pn.next = e;
  return t;
}
var on = null;
function Vs(e) {
  on === null ? on = [e] : on.push(e);
}
function pd(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Vs(t)) : (n.next = l.next, l.next = n), t.interleaved = n, jt(e, r);
}
function jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function Hs(e) {
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
  if (r = r.shared, V & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, jt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Vs(r)) : (t.next = l.next, l.next = t), r.interleaved = t, jt(e, n);
}
function Ml(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ts(e, n);
  }
}
function cu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function lo(e, t, n, r) {
  var l = e.updateQueue;
  At = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s, c = a.next;
    a.next = null, i === null ? o = c : i.next = c, i = a;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, s = m.lastBaseUpdate, s !== i && (s === null ? m.firstBaseUpdate = c : s.next = c, m.lastBaseUpdate = a));
  }
  if (o !== null) {
    var h = l.baseState;
    i = 0, m = c = a = null, s = o;
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
          var S = e, x = s;
          switch (v = t, y = n, x.tag) {
            case 1:
              if (S = x.payload, typeof S == "function") {
                h = S.call(y, h, v);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = x.payload, v = typeof S == "function" ? S.call(y, h, v) : S, v == null) break e;
              h = ee({}, h, v);
              break e;
            case 2:
              At = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [s] : v.push(s));
      } else y = { eventTime: y, lane: v, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, m === null ? (c = m = y, a = h) : m = m.next = y, i |= v;
      if (s = s.next, s === null) {
        if (s = l.shared.pending, s === null) break;
        v = s, s = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
      }
    } while (!0);
    if (m === null && (a = h), l.baseState = a, l.firstBaseUpdate = c, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    pn |= i, e.lanes = i, e.memoizedState = h;
  }
}
function du(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(D(191, l));
      l.call(r);
    }
  }
}
var ll = {}, vt = en(ll), Wr = en(ll), Qr = en(ll);
function sn(e) {
  if (e === ll) throw Error(D(174));
  return e;
}
function Ws(e, t) {
  switch (K(Qr, t), K(Wr, e), K(vt, ll), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Li(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Li(t, e);
  }
  G(vt), K(vt, t);
}
function Xn() {
  G(vt), G(Wr), G(Qr);
}
function md(e) {
  sn(Qr.current);
  var t = sn(vt.current), n = Li(t, e.type);
  t !== n && (K(Wr, e), K(vt, n));
}
function Qs(e) {
  Wr.current === e && (G(vt), G(Wr));
}
var Z = en(0);
function oo(e) {
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
var ui = [];
function Ks() {
  for (var e = 0; e < ui.length; e++) ui[e]._workInProgressVersionPrimary = null;
  ui.length = 0;
}
var Al = Rt.ReactCurrentDispatcher, ci = Rt.ReactCurrentBatchConfig, fn = 0, q = null, se = null, de = null, io = !1, Dr = !1, Kr = 0, bh = 0;
function we() {
  throw Error(D(321));
}
function Xs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!it(e[n], t[n])) return !1;
  return !0;
}
function Gs(e, t, n, r, l, o) {
  if (fn = o, q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Al.current = e === null || e.memoizedState === null ? Qh : Kh, e = n(r, l), Dr) {
    o = 0;
    do {
      if (Dr = !1, Kr = 0, 25 <= o) throw Error(D(301));
      o += 1, de = se = null, t.updateQueue = null, Al.current = Xh, e = n(r, l);
    } while (Dr);
  }
  if (Al.current = so, t = se !== null && se.next !== null, fn = 0, de = se = q = null, io = !1, t) throw Error(D(300));
  return e;
}
function Ys() {
  var e = Kr !== 0;
  return Kr = 0, e;
}
function pt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return de === null ? q.memoizedState = de = e : de = de.next = e, de;
}
function qe() {
  if (se === null) {
    var e = q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = de === null ? q.memoizedState : de.next;
  if (t !== null) de = t, se = e;
  else {
    if (e === null) throw Error(D(310));
    se = e, e = { memoizedState: se.memoizedState, baseState: se.baseState, baseQueue: se.baseQueue, queue: se.queue, next: null }, de === null ? q.memoizedState = de = e : de = de.next = e;
  }
  return de;
}
function Xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function di(e) {
  var t = qe(), n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = se, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var s = i = null, a = null, c = o;
    do {
      var m = c.lane;
      if ((fn & m) === m) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (s = a = h, i = r) : a = a.next = h, q.lanes |= m, pn |= m;
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? i = r : a.next = s, it(r, t.memoizedState) || (_e = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, q.lanes |= o, pn |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fi(e) {
  var t = qe(), n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    it(o, t.memoizedState) || (_e = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function vd() {
}
function gd(e, t) {
  var n = q, r = qe(), l = t(), o = !it(r.memoizedState, l);
  if (o && (r.memoizedState = l, _e = !0), r = r.queue, Js(xd.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || de !== null && de.memoizedState.tag & 1) {
    if (n.flags |= 2048, Gr(9, wd.bind(null, n, r, l, t), void 0, null), pe === null) throw Error(D(349));
    fn & 30 || yd(n, t, l);
  }
  return l;
}
function yd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
    return !it(e, n);
  } catch {
    return !0;
  }
}
function kd(e) {
  var t = jt(e, 1);
  t !== null && ot(t, e, 1, -1);
}
function fu(e) {
  var t = pt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Wh.bind(null, q, e), [t.memoizedState, e];
}
function Gr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Cd() {
  return qe().memoizedState;
}
function zl(e, t, n, r) {
  var l = pt();
  q.flags |= e, l.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Do(e, t, n, r) {
  var l = qe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (se !== null) {
    var i = se.memoizedState;
    if (o = i.destroy, r !== null && Xs(r, i.deps)) {
      l.memoizedState = Gr(t, n, o, r);
      return;
    }
  }
  q.flags |= e, l.memoizedState = Gr(1 | t, n, o, r);
}
function pu(e, t) {
  return zl(8390656, 8, e, t);
}
function Js(e, t) {
  return Do(2048, 8, e, t);
}
function Ed(e, t) {
  return Do(4, 2, e, t);
}
function Nd(e, t) {
  return Do(4, 4, e, t);
}
function jd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Dd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Do(4, 4, jd.bind(null, t, e), n);
}
function Zs() {
}
function Rd(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Td(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Id(e, t, n) {
  return fn & 21 ? (it(n, t) || (n = Mc(), q.lanes |= n, pn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _e = !0), e.memoizedState = n);
}
function Vh(e, t) {
  var n = Q;
  Q = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ci.transition;
  ci.transition = {};
  try {
    e(!1), t();
  } finally {
    Q = n, ci.transition = r;
  }
}
function Ld() {
  return qe().memoizedState;
}
function Hh(e, t, n) {
  var r = Xt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, _d(e)) Pd(t, n);
  else if (n = pd(e, t, n, r), n !== null) {
    var l = je();
    ot(n, e, r, l), Od(n, t, r);
  }
}
function Wh(e, t, n) {
  var r = Xt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_d(e)) Pd(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, s = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = s, it(s, i)) {
        var a = t.interleaved;
        a === null ? (l.next = l, Vs(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = pd(e, t, l, r), n !== null && (l = je(), ot(n, e, r, l), Od(n, t, r));
  }
}
function _d(e) {
  var t = e.alternate;
  return e === q || t !== null && t === q;
}
function Pd(e, t) {
  Dr = io = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Od(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ts(e, n);
  }
}
var so = { readContext: Ze, useCallback: we, useContext: we, useEffect: we, useImperativeHandle: we, useInsertionEffect: we, useLayoutEffect: we, useMemo: we, useReducer: we, useRef: we, useState: we, useDebugValue: we, useDeferredValue: we, useTransition: we, useMutableSource: we, useSyncExternalStore: we, useId: we, unstable_isNewReconciler: !1 }, Qh = { readContext: Ze, useCallback: function(e, t) {
  return pt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ze, useEffect: pu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, zl(
    4194308,
    4,
    jd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return zl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return zl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = pt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = pt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Hh.bind(null, q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = pt();
  return e = { current: e }, t.memoizedState = e;
}, useState: fu, useDebugValue: Zs, useDeferredValue: function(e) {
  return pt().memoizedState = e;
}, useTransition: function() {
  var e = fu(!1), t = e[0];
  return e = Vh.bind(null, e[1]), pt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = q, l = pt();
  if (J) {
    if (n === void 0) throw Error(D(407));
    n = n();
  } else {
    if (n = t(), pe === null) throw Error(D(349));
    fn & 30 || yd(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, pu(xd.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Gr(9, wd.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = pt(), t = pe.identifierPrefix;
  if (J) {
    var n = kt, r = St;
    n = (r & ~(1 << 32 - lt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = bh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Kh = {
  readContext: Ze,
  useCallback: Rd,
  useContext: Ze,
  useEffect: Js,
  useImperativeHandle: Dd,
  useInsertionEffect: Ed,
  useLayoutEffect: Nd,
  useMemo: Td,
  useReducer: di,
  useRef: Cd,
  useState: function() {
    return di(Xr);
  },
  useDebugValue: Zs,
  useDeferredValue: function(e) {
    var t = qe();
    return Id(t, se.memoizedState, e);
  },
  useTransition: function() {
    var e = di(Xr)[0], t = qe().memoizedState;
    return [e, t];
  },
  useMutableSource: vd,
  useSyncExternalStore: gd,
  useId: Ld,
  unstable_isNewReconciler: !1
}, Xh = { readContext: Ze, useCallback: Rd, useContext: Ze, useEffect: Js, useImperativeHandle: Dd, useInsertionEffect: Ed, useLayoutEffect: Nd, useMemo: Td, useReducer: fi, useRef: Cd, useState: function() {
  return fi(Xr);
}, useDebugValue: Zs, useDeferredValue: function(e) {
  var t = qe();
  return se === null ? t.memoizedState = e : Id(t, se.memoizedState, e);
}, useTransition: function() {
  var e = fi(Xr)[0], t = qe().memoizedState;
  return [e, t];
}, useMutableSource: vd, useSyncExternalStore: gd, useId: Ld, unstable_isNewReconciler: !1 };
function tt(e, t) {
  if (e && e.defaultProps) {
    t = ee({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Zi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ro = { isMounted: function(e) {
  return (e = e._reactInternals) ? vn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = je(), l = Xt(e), o = Ct(r, l);
  o.payload = t, n != null && (o.callback = n), t = Qt(e, o, l), t !== null && (ot(t, e, l, r), Ml(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = je(), l = Xt(e), o = Ct(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Qt(e, o, l), t !== null && (ot(t, e, l, r), Ml(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = je(), r = Xt(e), l = Ct(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Qt(e, l, r), t !== null && (ot(t, e, r, n), Ml(t, e, r));
} };
function hu(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !$r(n, r) || !$r(l, o) : !0;
}
function Md(e, t, n) {
  var r = !1, l = Jt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ze(o) : (l = Oe(t) ? cn : ke.current, r = t.contextTypes, o = (r = r != null) ? Wn(e, l) : Jt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ro, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function mu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ro.enqueueReplaceState(t, t.state, null);
}
function qi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Hs(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Ze(o) : (o = Oe(t) ? cn : ke.current, l.context = Wn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Zi(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ro.enqueueReplaceState(l, l.state, null), lo(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gn(e, t) {
  try {
    var n = "", r = t;
    do
      n += kp(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function pi(e, t, n) {
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
    uo || (uo = !0, cs = r), es(e, t);
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
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    es(e, t), typeof r != "function" && (Kt === null ? Kt = /* @__PURE__ */ new Set([this]) : Kt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
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
var Yh = Rt.ReactCurrentOwner, _e = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? fd(t, null, n, r) : Kn(t, e.child, n, r);
}
function wu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return $n(t, l), r = Gs(e, t, n, r, o, l), n = Ys(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Dt(e, t, l)) : (J && n && zs(t), t.flags |= 1, Ne(e, t, r, l), t.child);
}
function xu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !ia(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Fd(e, t, o, r, l)) : (e = $l(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : $r, n(i, r) && e.ref === t.ref) return Dt(e, t, l);
  }
  return t.flags |= 1, e = Gt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Fd(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if ($r(o, r) && e.ref === t.ref) if (_e = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (_e = !0);
    else return t.lanes = e.lanes, Dt(e, t, l);
  }
  return ts(e, t, n, r, l);
}
function Ud(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(Mn, Be), Be |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(Mn, Be), Be |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, K(Mn, Be), Be |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, K(Mn, Be), Be |= r;
  return Ne(e, t, l, n), t.child;
}
function Bd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ts(e, t, n, r, l) {
  var o = Oe(n) ? cn : ke.current;
  return o = Wn(t, o), $n(t, l), n = Gs(e, t, n, r, o, l), r = Ys(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Dt(e, t, l)) : (J && r && zs(t), t.flags |= 1, Ne(e, t, n, l), t.child);
}
function Su(e, t, n, r, l) {
  if (Oe(n)) {
    var o = !0;
    ql(t);
  } else o = !1;
  if ($n(t, l), t.stateNode === null) Fl(e, t), Md(t, n, r), qi(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, s = t.memoizedProps;
    i.props = s;
    var a = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ze(c) : (c = Oe(n) ? cn : ke.current, c = Wn(t, c));
    var m = n.getDerivedStateFromProps, h = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || a !== c) && mu(t, i, r, c), At = !1;
    var v = t.memoizedState;
    i.state = v, lo(t, r, i, l), a = t.memoizedState, s !== r || v !== a || Pe.current || At ? (typeof m == "function" && (Zi(t, n, m, r), a = t.memoizedState), (s = At || hu(t, n, s, r, v, a, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = c, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, hd(e, t), s = t.memoizedProps, c = t.type === t.elementType ? s : tt(t.type, s), i.props = c, h = t.pendingProps, v = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ze(a) : (a = Oe(n) ? cn : ke.current, a = Wn(t, a));
    var y = n.getDerivedStateFromProps;
    (m = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== h || v !== a) && mu(t, i, r, a), At = !1, v = t.memoizedState, i.state = v, lo(t, r, i, l);
    var S = t.memoizedState;
    s !== h || v !== S || Pe.current || At ? (typeof y == "function" && (Zi(t, n, y, r), S = t.memoizedState), (c = At || hu(t, n, c, r, v, S, a) || !1) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), i.props = r, i.state = S, i.context = a, r = c) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ns(e, t, n, r, o, l);
}
function ns(e, t, n, r, l, o) {
  Bd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && iu(t, n, !1), Dt(e, t, o);
  r = t.stateNode, Yh.current = t;
  var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Kn(t, e.child, null, o), t.child = Kn(t, null, s, o)) : Ne(e, t, s, o), t.memoizedState = r.state, l && iu(t, n, !0), t.child;
}
function $d(e) {
  var t = e.stateNode;
  t.pendingContext ? ou(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ou(e, t.context, !1), Ws(e, t.containerInfo);
}
function ku(e, t, n, r, l) {
  return Qn(), Us(l), t.flags |= 256, Ne(e, t, n, r), t.child;
}
var rs = { dehydrated: null, treeContext: null, retryLane: 0 };
function ls(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bd(e, t, n) {
  var r = t.pendingProps, l = Z.current, o = !1, i = (t.flags & 128) !== 0, s;
  if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), K(Z, l & 1), e === null)
    return Yi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Lo(i, r, 0, null), e = un(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ls(n), t.memoizedState = rs, e) : qs(t, i));
  if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return Jh(e, t, i, r, s, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, s = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Gt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? o = Gt(s, o) : (o = un(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? ls(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = rs, r;
  }
  return o = e.child, e = o.sibling, r = Gt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function qs(e, t) {
  return t = Lo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function El(e, t, n, r) {
  return r !== null && Us(r), Kn(t, e.child, null, n), e = qs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Jh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = pi(Error(D(422))), El(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Lo({ mode: "visible", children: r.children }, l, 0, null), o = un(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Kn(t, e.child, null, i), t.child.memoizedState = ls(i), t.memoizedState = rs, o);
  if (!(t.mode & 1)) return El(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
    return r = s, o = Error(D(419)), r = pi(o, r, void 0), El(e, t, i, r);
  }
  if (s = (i & e.childLanes) !== 0, _e || s) {
    if (r = pe, r !== null) {
      switch (i & -i) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, jt(e, l), ot(r, e, l, -1));
    }
    return oa(), r = pi(Error(D(421))), El(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = cm.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, $e = Wt(l.nextSibling), be = t, J = !0, rt = null, e !== null && (Xe[Ge++] = St, Xe[Ge++] = kt, Xe[Ge++] = dn, St = e.id, kt = e.overflow, dn = t), t = qs(t, r.children), t.flags |= 4096, t);
}
function Cu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ji(e.return, t, n);
}
function hi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Vd(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (Ne(e, t, r.children, n), r = Z.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
  if (K(Z, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && oo(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), hi(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && oo(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      hi(t, !0, n, null, o);
      break;
    case "together":
      hi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Fl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Dt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), pn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(D(153));
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
      Oe(t.type) && ql(t);
      break;
    case 4:
      Ws(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      K(no, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (K(Z, Z.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? bd(e, t, n) : (K(Z, Z.current & 1), e = Dt(e, t, n), e !== null ? e.sibling : null);
      K(Z, Z.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Vd(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), K(Z, Z.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ud(e, t, n);
  }
  return Dt(e, t, n);
}
var Hd, os, Wd, Qd;
Hd = function(e, t) {
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
os = function() {
};
Wd = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, sn(vt.current);
    var o = null;
    switch (n) {
      case "input":
        l = Di(e, l), r = Di(e, r), o = [];
        break;
      case "select":
        l = ee({}, l, { value: void 0 }), r = ee({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = Ii(e, l), r = Ii(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Jl);
    }
    _i(n, r);
    var i;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var s = l[c];
      for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Or.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (s = l != null ? l[c] : void 0, r.hasOwnProperty(c) && a !== s && (a != null || s != null)) if (c === "style") if (s) {
        for (i in s) !s.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in a) a.hasOwnProperty(i) && s[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
      } else n || (o || (o = []), o.push(
        c,
        n
      )), n = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (o = o || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Or.hasOwnProperty(c) ? (a != null && c === "onScroll" && X("scroll", e), o || s === a || (o = [])) : (o = o || []).push(c, a));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Qd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function hr(e, t) {
  if (!J) switch (e.tailMode) {
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
      return Oe(t.type) && Zl(), xe(t), null;
    case 3:
      return r = t.stateNode, Xn(), G(Pe), G(ke), Ks(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (kl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, rt !== null && (ps(rt), rt = null))), os(e, t), xe(t), null;
    case 5:
      Qs(t);
      var l = sn(Qr.current);
      if (n = t.type, e !== null && t.stateNode != null) Wd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return xe(t), null;
        }
        if (e = sn(vt.current), kl(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[ht] = t, r[Hr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Sr.length; l++) X(Sr[l], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X(
                "error",
                r
              ), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              _a(r, o), X("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, X("invalid", r);
              break;
            case "textarea":
              Oa(r, o), X("invalid", r);
          }
          _i(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var s = o[i];
            i === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && Sl(r.textContent, s, e), l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && Sl(
              r.textContent,
              s,
              e
            ), l = ["children", "" + s]) : Or.hasOwnProperty(i) && s != null && i === "onScroll" && X("scroll", r);
          }
          switch (n) {
            case "input":
              pl(r), Pa(r, o, !0);
              break;
            case "textarea":
              pl(r), Ma(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Jl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[ht] = t, e[Hr] = r, Hd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Pi(n, r), n) {
              case "dialog":
                X("cancel", e), X("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Sr.length; l++) X(Sr[l], e);
                l = r;
                break;
              case "source":
                X("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                X(
                  "error",
                  e
                ), X("load", e), l = r;
                break;
              case "details":
                X("toggle", e), l = r;
                break;
              case "input":
                _a(e, r), l = Di(e, r), X("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = ee({}, r, { value: void 0 }), X("invalid", e);
                break;
              case "textarea":
                Oa(e, r), l = Ii(e, r), X("invalid", e);
                break;
              default:
                l = r;
            }
            _i(n, l), s = l;
            for (o in s) if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "style" ? Cc(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Sc(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Mr(e, a) : typeof a == "number" && Mr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Or.hasOwnProperty(o) ? a != null && o === "onScroll" && X("scroll", e) : a != null && Cs(e, o, a, i));
            }
            switch (n) {
              case "input":
                pl(e), Pa(e, r, !1);
                break;
              case "textarea":
                pl(e), Ma(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Yt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? zn(e, !!r.multiple, o, !1) : r.defaultValue != null && zn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Jl);
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
        if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
        if (n = sn(Qr.current), sn(vt.current), kl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ht] = t, (o = r.nodeValue !== n) && (e = be, e !== null)) switch (e.tag) {
            case 3:
              Sl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Sl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ht] = t, t.stateNode = r;
      }
      return xe(t), null;
    case 13:
      if (G(Z), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (J && $e !== null && t.mode & 1 && !(t.flags & 128)) cd(), Qn(), t.flags |= 98560, o = !1;
        else if (o = kl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(D(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(D(317));
            o[ht] = t;
          } else Qn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          xe(t), o = !1;
        } else rt !== null && (ps(rt), rt = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Z.current & 1 ? ue === 0 && (ue = 3) : oa())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
    case 4:
      return Xn(), os(e, t), e === null && br(t.stateNode.containerInfo), xe(t), null;
    case 10:
      return bs(t.type._context), xe(t), null;
    case 17:
      return Oe(t.type) && Zl(), xe(t), null;
    case 19:
      if (G(Z), o = t.memoizedState, o === null) return xe(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) hr(o, !1);
      else {
        if (ue !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = oo(e), i !== null) {
            for (t.flags |= 128, hr(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return K(Z, Z.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && le() > Yn && (t.flags |= 128, r = !0, hr(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = oo(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), hr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !J) return xe(t), null;
        } else 2 * le() - o.renderingStartTime > Yn && n !== 1073741824 && (t.flags |= 128, r = !0, hr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = le(), t.sibling = null, n = Z.current, K(Z, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
    case 22:
    case 23:
      return la(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Be & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function em(e, t) {
  switch (Fs(t), t.tag) {
    case 1:
      return Oe(t.type) && Zl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Xn(), G(Pe), G(ke), Ks(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Qs(t), null;
    case 13:
      if (G(Z), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(D(340));
        Qn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return G(Z), null;
    case 4:
      return Xn(), null;
    case 10:
      return bs(t.type._context), null;
    case 22:
    case 23:
      return la(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nl = !1, Se = !1, tm = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function On(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ne(e, t, r);
  }
  else n.current = null;
}
function is(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var Eu = !1;
function nm(e, t) {
  if (Vi = Xl, e = Jc(), As(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, s = -1, a = -1, c = 0, m = 0, h = e, v = null;
        t: for (; ; ) {
          for (var y; h !== n || l !== 0 && h.nodeType !== 3 || (s = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (a = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (y = h.firstChild) !== null; )
            v = h, h = y;
          for (; ; ) {
            if (h === e) break t;
            if (v === n && ++c === l && (s = i), v === o && ++m === r && (a = i), (y = h.nextSibling) !== null) break;
            h = v, v = h.parentNode;
          }
          h = y;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Hi = { focusedElem: e, selectionRange: n }, Xl = !1, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
  else for (; P !== null; ) {
    t = P;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var x = S.memoizedProps, R = S.memoizedState, f = t.stateNode, d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : tt(t.type, x), R);
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
          throw Error(D(163));
      }
    } catch (w) {
      ne(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, P = e;
      break;
    }
    P = t.return;
  }
  return S = Eu, Eu = !1, S;
}
function Rr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && is(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function To(e, t) {
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
  t !== null && (e.alternate = null, Kd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ht], delete t[Hr], delete t[Ki], delete t[Fh], delete t[Uh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Jl));
  else if (r !== 4 && (e = e.child, e !== null)) for (as(e, t, n), e = e.sibling; e !== null; ) as(e, t, n), e = e.sibling;
}
function us(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (us(e, t, n), e = e.sibling; e !== null; ) us(e, t, n), e = e.sibling;
}
var me = null, nt = !1;
function Ot(e, t, n) {
  for (n = n.child; n !== null; ) Gd(e, t, n), n = n.sibling;
}
function Gd(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == "function") try {
    mt.onCommitFiberUnmount(So, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Se || On(n, t);
    case 6:
      var r = me, l = nt;
      me = null, Ot(e, t, n), me = r, nt = l, me !== null && (nt ? (e = me, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null && (nt ? (e = me, n = n.stateNode, e.nodeType === 8 ? si(e.parentNode, n) : e.nodeType === 1 && si(e, n), Ur(e)) : si(me, n.stateNode));
      break;
    case 4:
      r = me, l = nt, me = n.stateNode.containerInfo, nt = !0, Ot(e, t, n), me = r, nt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Se && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && is(n, t, i), l = l.next;
        } while (l !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (!Se && (On(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        ne(n, t, s);
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
function et(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, s = i;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            me = s.stateNode, nt = !1;
            break e;
          case 3:
            me = s.stateNode.containerInfo, nt = !0;
            break e;
          case 4:
            me = s.stateNode.containerInfo, nt = !0;
            break e;
        }
        s = s.return;
      }
      if (me === null) throw Error(D(160));
      Gd(o, i, l), me = null, nt = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (c) {
      ne(l, t, c);
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
      if (et(t, e), ft(e), r & 4) {
        try {
          Rr(3, e, e.return), To(3, e);
        } catch (x) {
          ne(e, e.return, x);
        }
        try {
          Rr(5, e, e.return);
        } catch (x) {
          ne(e, e.return, x);
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
          ne(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          s === "input" && o.type === "radio" && o.name != null && yc(l, o), Pi(s, i);
          var c = Pi(s, o);
          for (i = 0; i < a.length; i += 2) {
            var m = a[i], h = a[i + 1];
            m === "style" ? Cc(l, h) : m === "dangerouslySetInnerHTML" ? Sc(l, h) : m === "children" ? Mr(l, h) : Cs(l, m, h, c);
          }
          switch (s) {
            case "input":
              Ri(l, o);
              break;
            case "textarea":
              wc(l, o);
              break;
            case "select":
              var v = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var y = o.value;
              y != null ? zn(l, !!o.multiple, y, !1) : v !== !!o.multiple && (o.defaultValue != null ? zn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : zn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Hr] = o;
        } catch (x) {
          ne(e, e.return, x);
        }
      }
      break;
    case 6:
      if (et(t, e), ft(e), r & 4) {
        if (e.stateNode === null) throw Error(D(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (x) {
          ne(e, e.return, x);
        }
      }
      break;
    case 3:
      if (et(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ur(t.containerInfo);
      } catch (x) {
        ne(e, e.return, x);
      }
      break;
    case 4:
      et(t, e), ft(e);
      break;
    case 13:
      et(t, e), ft(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (na = le())), r & 4 && ju(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (Se = (c = Se) || m, et(t, e), Se = c) : et(t, e), ft(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1) for (P = e, m = e.child; m !== null; ) {
          for (h = P = m; P !== null; ) {
            switch (v = P, y = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Rr(4, v, v.return);
                break;
              case 1:
                On(v, v.return);
                var S = v.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (x) {
                    ne(r, n, x);
                  }
                }
                break;
              case 5:
                On(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  Ru(h);
                  continue;
                }
            }
            y !== null ? (y.return = v, P = y) : Ru(h);
          }
          m = m.sibling;
        }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = h.stateNode, a = h.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = kc("display", i));
              } catch (x) {
                ne(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (m === null) try {
              h.stateNode.nodeValue = c ? "" : h.memoizedProps;
            } catch (x) {
              ne(e, e.return, x);
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
      et(t, e), ft(e), r & 4 && ju(e);
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
          if (Xd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Mr(l, ""), r.flags &= -33);
          var o = Nu(e);
          us(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, s = Nu(e);
          as(e, s, i);
          break;
        default:
          throw Error(D(161));
      }
    } catch (a) {
      ne(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rm(e, t, n) {
  P = e, Jd(e);
}
function Jd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Nl;
      if (!i) {
        var s = l.alternate, a = s !== null && s.memoizedState !== null || Se;
        s = Nl;
        var c = Se;
        if (Nl = i, (Se = a) && !c) for (P = l; P !== null; ) i = P, a = i.child, i.tag === 22 && i.memoizedState !== null ? Tu(l) : a !== null ? (a.return = i, P = a) : Tu(l);
        for (; o !== null; ) P = o, Jd(o), o = o.sibling;
        P = l, Nl = s, Se = c;
      }
      Du(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, P = o) : Du(e);
  }
}
function Du(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Se || To(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Se) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : tt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && du(t, o, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              du(t, i, n);
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
                var m = c.memoizedState;
                if (m !== null) {
                  var h = m.dehydrated;
                  h !== null && Ur(h);
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
            throw Error(D(163));
        }
        Se || t.flags & 512 && ss(t);
      } catch (v) {
        ne(t, t.return, v);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function Ru(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function Tu(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            To(4, t);
          } catch (a) {
            ne(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ne(t, l, a);
            }
          }
          var o = t.return;
          try {
            ss(t);
          } catch (a) {
            ne(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ss(t);
          } catch (a) {
            ne(t, i, a);
          }
      }
    } catch (a) {
      ne(t, t.return, a);
    }
    if (t === e) {
      P = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, P = s;
      break;
    }
    P = t.return;
  }
}
var lm = Math.ceil, ao = Rt.ReactCurrentDispatcher, ea = Rt.ReactCurrentOwner, Je = Rt.ReactCurrentBatchConfig, V = 0, pe = null, oe = null, ve = 0, Be = 0, Mn = en(0), ue = 0, Yr = null, pn = 0, Io = 0, ta = 0, Tr = null, Le = null, na = 0, Yn = 1 / 0, wt = null, uo = !1, cs = null, Kt = null, jl = !1, $t = null, co = 0, Ir = 0, ds = null, Ul = -1, Bl = 0;
function je() {
  return V & 6 ? le() : Ul !== -1 ? Ul : Ul = le();
}
function Xt(e) {
  return e.mode & 1 ? V & 2 && ve !== 0 ? ve & -ve : $h.transition !== null ? (Bl === 0 && (Bl = Mc()), Bl) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : bc(e.type)), e) : 1;
}
function ot(e, t, n, r) {
  if (50 < Ir) throw Ir = 0, ds = null, Error(D(185));
  tl(e, n, r), (!(V & 2) || e !== pe) && (e === pe && (!(V & 2) && (Io |= n), ue === 4 && Ut(e, ve)), Me(e, r), n === 1 && V === 0 && !(t.mode & 1) && (Yn = le() + 500, jo && tn()));
}
function Me(e, t) {
  var n = e.callbackNode;
  $p(e, t);
  var r = Kl(e, e === pe ? ve : 0);
  if (r === 0) n !== null && Fa(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Fa(n), t === 1) e.tag === 0 ? Bh(Iu.bind(null, e)) : sd(Iu.bind(null, e)), Ah(function() {
      !(V & 6) && tn();
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
          n = Ql;
          break;
        case 536870912:
          n = Oc;
          break;
        default:
          n = Ql;
      }
      n = of(n, Zd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Zd(e, t) {
  if (Ul = -1, Bl = 0, V & 6) throw Error(D(327));
  var n = e.callbackNode;
  if (bn() && e.callbackNode !== n) return null;
  var r = Kl(e, e === pe ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fo(e, r);
  else {
    t = r;
    var l = V;
    V |= 2;
    var o = ef();
    (pe !== e || ve !== t) && (wt = null, Yn = le() + 500, an(e, t));
    do
      try {
        sm();
        break;
      } catch (s) {
        qd(e, s);
      }
    while (!0);
    $s(), ao.current = o, V = l, oe !== null ? t = 0 : (pe = null, ve = 0, t = ue);
  }
  if (t !== 0) {
    if (t === 2 && (l = Fi(e), l !== 0 && (r = l, t = fs(e, l))), t === 1) throw n = Yr, an(e, 0), Ut(e, r), Me(e, le()), n;
    if (t === 6) Ut(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !om(l) && (t = fo(e, r), t === 2 && (o = Fi(e), o !== 0 && (r = o, t = fs(e, o))), t === 1)) throw n = Yr, an(e, 0), Ut(e, r), Me(e, le()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          rn(e, Le, wt);
          break;
        case 3:
          if (Ut(e, r), (r & 130023424) === r && (t = na + 500 - le(), 10 < t)) {
            if (Kl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              je(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Qi(rn.bind(null, e, Le, wt), t);
            break;
          }
          rn(e, Le, wt);
          break;
        case 4:
          if (Ut(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - lt(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * lm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Qi(rn.bind(null, e, Le, wt), r);
            break;
          }
          rn(e, Le, wt);
          break;
        case 5:
          rn(e, Le, wt);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return Me(e, le()), e.callbackNode === n ? Zd.bind(null, e) : null;
}
function fs(e, t) {
  var n = Tr;
  return e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256), e = fo(e, t), e !== 2 && (t = Le, Le = n, t !== null && ps(t)), e;
}
function ps(e) {
  Le === null ? Le = e : Le.push.apply(Le, e);
}
function om(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!it(o(), l)) return !1;
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
  for (t &= ~ta, t &= ~Io, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - lt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Iu(e) {
  if (V & 6) throw Error(D(327));
  bn();
  var t = Kl(e, 0);
  if (!(t & 1)) return Me(e, le()), null;
  var n = fo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fi(e);
    r !== 0 && (t = r, n = fs(e, r));
  }
  if (n === 1) throw n = Yr, an(e, 0), Ut(e, t), Me(e, le()), n;
  if (n === 6) throw Error(D(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, rn(e, Le, wt), Me(e, le()), null;
}
function ra(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    V = n, V === 0 && (Yn = le() + 500, jo && tn());
  }
}
function hn(e) {
  $t !== null && $t.tag === 0 && !(V & 6) && bn();
  var t = V;
  V |= 1;
  var n = Je.transition, r = Q;
  try {
    if (Je.transition = null, Q = 1, e) return e();
  } finally {
    Q = r, Je.transition = n, V = t, !(V & 6) && tn();
  }
}
function la() {
  Be = Mn.current, G(Mn);
}
function an(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Mh(n)), oe !== null) for (n = oe.return; n !== null; ) {
    var r = n;
    switch (Fs(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Zl();
        break;
      case 3:
        Xn(), G(Pe), G(ke), Ks();
        break;
      case 5:
        Qs(r);
        break;
      case 4:
        Xn();
        break;
      case 13:
        G(Z);
        break;
      case 19:
        G(Z);
        break;
      case 10:
        bs(r.type._context);
        break;
      case 22:
      case 23:
        la();
    }
    n = n.return;
  }
  if (pe = e, oe = e = Gt(e.current, null), ve = Be = t, ue = 0, Yr = null, ta = Io = pn = 0, Le = Tr = null, on !== null) {
    for (t = 0; t < on.length; t++) if (n = on[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    on = null;
  }
  return e;
}
function qd(e, t) {
  do {
    var n = oe;
    try {
      if ($s(), Al.current = so, io) {
        for (var r = q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        io = !1;
      }
      if (fn = 0, de = se = q = null, Dr = !1, Kr = 0, ea.current = null, n === null || n.return === null) {
        ue = 1, Yr = t, oe = null;
        break;
      }
      e: {
        var o = e, i = n.return, s = n, a = t;
        if (t = ve, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, m = s, h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var v = m.alternate;
            v ? (m.updateQueue = v.updateQueue, m.memoizedState = v.memoizedState, m.lanes = v.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var y = gu(i);
          if (y !== null) {
            y.flags &= -257, yu(y, i, s, o, t), y.mode & 1 && vu(o, c, t), t = y, a = c;
            var S = t.updateQueue;
            if (S === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(a), t.updateQueue = x;
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              vu(o, c, t), oa();
              break e;
            }
            a = Error(D(426));
          }
        } else if (J && s.mode & 1) {
          var R = gu(i);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), yu(R, i, s, o, t), Us(Gn(a, s));
            break e;
          }
        }
        o = a = Gn(a, s), ue !== 4 && (ue = 2), Tr === null ? Tr = [o] : Tr.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Ad(o, a, t);
              cu(o, f);
              break e;
            case 1:
              s = a;
              var d = o.type, p = o.stateNode;
              if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Kt === null || !Kt.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var w = zd(o, s, t);
                cu(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      nf(n);
    } catch (k) {
      t = k, oe === n && n !== null && (oe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ef() {
  var e = ao.current;
  return ao.current = so, e === null ? so : e;
}
function oa() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4), pe === null || !(pn & 268435455) && !(Io & 268435455) || Ut(pe, ve);
}
function fo(e, t) {
  var n = V;
  V |= 2;
  var r = ef();
  (pe !== e || ve !== t) && (wt = null, an(e, t));
  do
    try {
      im();
      break;
    } catch (l) {
      qd(e, l);
    }
  while (!0);
  if ($s(), V = n, ao.current = r, oe !== null) throw Error(D(261));
  return pe = null, ve = 0, ue;
}
function im() {
  for (; oe !== null; ) tf(oe);
}
function sm() {
  for (; oe !== null && !_p(); ) tf(oe);
}
function tf(e) {
  var t = lf(e.alternate, e, Be);
  e.memoizedProps = e.pendingProps, t === null ? nf(e) : oe = t, ea.current = null;
}
function nf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = em(n, t), n !== null) {
        n.flags &= 32767, oe = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ue = 6, oe = null;
        return;
      }
    } else if (n = qh(n, t, Be), n !== null) {
      oe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      oe = t;
      return;
    }
    oe = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function rn(e, t, n) {
  var r = Q, l = Je.transition;
  try {
    Je.transition = null, Q = 1, am(e, t, n, r);
  } finally {
    Je.transition = l, Q = r;
  }
  return null;
}
function am(e, t, n, r) {
  do
    bn();
  while ($t !== null);
  if (V & 6) throw Error(D(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(D(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (bp(e, o), e === pe && (oe = pe = null, ve = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jl || (jl = !0, of(Ql, function() {
    return bn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Je.transition, Je.transition = null;
    var i = Q;
    Q = 1;
    var s = V;
    V |= 4, ea.current = null, nm(e, n), Yd(n, e), Rh(Hi), Xl = !!Vi, Hi = Vi = null, e.current = n, rm(n), Pp(), V = s, Q = i, Je.transition = o;
  } else e.current = n;
  if (jl && (jl = !1, $t = e, co = l), o = e.pendingLanes, o === 0 && (Kt = null), Ap(n.stateNode), Me(e, le()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (uo) throw uo = !1, e = cs, cs = null, e;
  return co & 1 && e.tag !== 0 && bn(), o = e.pendingLanes, o & 1 ? e === ds ? Ir++ : (Ir = 0, ds = e) : Ir = 0, tn(), null;
}
function bn() {
  if ($t !== null) {
    var e = Ac(co), t = Je.transition, n = Q;
    try {
      if (Je.transition = null, Q = 16 > e ? 16 : e, $t === null) var r = !1;
      else {
        if (e = $t, $t = null, co = 0, V & 6) throw Error(D(331));
        var l = V;
        for (V |= 4, P = e.current; P !== null; ) {
          var o = P, i = o.child;
          if (P.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var c = s[a];
                for (P = c; P !== null; ) {
                  var m = P;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rr(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null) h.return = m, P = h;
                  else for (; P !== null; ) {
                    m = P;
                    var v = m.sibling, y = m.return;
                    if (Kd(m), m === c) {
                      P = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = y, P = v;
                      break;
                    }
                    P = y;
                  }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var x = S.child;
                if (x !== null) {
                  S.child = null;
                  do {
                    var R = x.sibling;
                    x.sibling = null, x = R;
                  } while (x !== null);
                }
              }
              P = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, P = i;
          else e: for (; P !== null; ) {
            if (o = P, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Rr(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, P = f;
              break e;
            }
            P = o.return;
          }
        }
        var d = e.current;
        for (P = d; P !== null; ) {
          i = P;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) p.return = i, P = p;
          else e: for (i = d; P !== null; ) {
            if (s = P, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  To(9, s);
              }
            } catch (k) {
              ne(s, s.return, k);
            }
            if (s === i) {
              P = null;
              break e;
            }
            var w = s.sibling;
            if (w !== null) {
              w.return = s.return, P = w;
              break e;
            }
            P = s.return;
          }
        }
        if (V = l, tn(), mt && typeof mt.onPostCommitFiberRoot == "function") try {
          mt.onPostCommitFiberRoot(So, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Q = n, Je.transition = t;
    }
  }
  return !1;
}
function Lu(e, t, n) {
  t = Gn(n, t), t = Ad(e, t, 1), e = Qt(e, t, 1), t = je(), e !== null && (tl(e, 1, t), Me(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) Lu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Lu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Kt === null || !Kt.has(r))) {
        e = Gn(n, e), e = zd(t, e, 1), t = Qt(t, e, 1), e = je(), t !== null && (tl(t, 1, e), Me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function um(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = je(), e.pingedLanes |= e.suspendedLanes & n, pe === e && (ve & n) === n && (ue === 4 || ue === 3 && (ve & 130023424) === ve && 500 > le() - na ? an(e, 0) : ta |= n), Me(e, t);
}
function rf(e, t) {
  t === 0 && (e.mode & 1 ? (t = vl, vl <<= 1, !(vl & 130023424) && (vl = 4194304)) : t = 1);
  var n = je();
  e = jt(e, t), e !== null && (tl(e, t, n), Me(e, n));
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
      throw Error(D(314));
  }
  r !== null && r.delete(t), rf(e, n);
}
var lf;
lf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Pe.current) _e = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return _e = !1, Zh(e, t, n);
    _e = !!(e.flags & 131072);
  }
  else _e = !1, J && t.flags & 1048576 && ad(t, to, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Fl(e, t), e = t.pendingProps;
      var l = Wn(t, ke.current);
      $n(t, n), l = Gs(null, t, r, e, l, n);
      var o = Ys();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oe(r) ? (o = !0, ql(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Hs(t), l.updater = Ro, t.stateNode = l, l._reactInternals = t, qi(t, r, e, n), t = ns(null, t, r, !0, o, n)) : (t.tag = 0, J && o && zs(t), Ne(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Fl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = pm(r), e = tt(r, e), l) {
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
            t = xu(null, t, r, tt(r.type, e), n);
            break e;
        }
        throw Error(D(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : tt(r, l), ts(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : tt(r, l), Su(e, t, r, l, n);
    case 3:
      e: {
        if ($d(t), e === null) throw Error(D(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, hd(e, t), lo(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = Gn(Error(D(423)), t), t = ku(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Gn(Error(D(424)), t), t = ku(e, t, r, n, l);
          break e;
        } else for ($e = Wt(t.stateNode.containerInfo.firstChild), be = t, J = !0, rt = null, n = fd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Qn(), r === l) {
            t = Dt(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return md(t), e === null && Yi(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Wi(r, l) ? i = null : o !== null && Wi(r, o) && (t.flags |= 32), Bd(e, t), Ne(e, t, i, n), t.child;
    case 6:
      return e === null && Yi(t), null;
    case 13:
      return bd(e, t, n);
    case 4:
      return Ws(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Kn(t, null, r, n) : Ne(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : tt(r, l), wu(e, t, r, l, n);
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, K(no, r._currentValue), r._currentValue = i, o !== null) if (it(o.value, i)) {
          if (o.children === l.children && !Pe.current) {
            t = Dt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var s = o.dependencies;
          if (s !== null) {
            i = o.child;
            for (var a = s.firstContext; a !== null; ) {
              if (a.context === r) {
                if (o.tag === 1) {
                  a = Ct(-1, n & -n), a.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var m = c.pending;
                    m === null ? a.next = a : (a.next = m.next, m.next = a), c.pending = a;
                  }
                }
                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Ji(
                  o.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(D(341));
            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Ji(i, n, t), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        Ne(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, $n(t, n), l = Ze(l), r = r(l), t.flags |= 1, Ne(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = tt(r, t.pendingProps), l = tt(r.type, l), xu(e, t, r, l, n);
    case 15:
      return Fd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : tt(r, l), Fl(e, t), t.tag = 1, Oe(r) ? (e = !0, ql(t)) : e = !1, $n(t, n), Md(t, r, l), qi(t, r, l, n), ns(null, t, r, !0, e, n);
    case 19:
      return Vd(e, t, n);
    case 22:
      return Ud(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function of(e, t) {
  return _c(e, t);
}
function fm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ye(e, t, n, r) {
  return new fm(e, t, n, r);
}
function ia(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function pm(e) {
  if (typeof e == "function") return ia(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ns) return 11;
    if (e === js) return 14;
  }
  return 2;
}
function Gt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ye(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function $l(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") ia(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Nn:
      return un(n.children, l, o, t);
    case Es:
      i = 8, l |= 8;
      break;
    case Ci:
      return e = Ye(12, n, t, l | 2), e.elementType = Ci, e.lanes = o, e;
    case Ei:
      return e = Ye(13, n, t, l), e.elementType = Ei, e.lanes = o, e;
    case Ni:
      return e = Ye(19, n, t, l), e.elementType = Ni, e.lanes = o, e;
    case mc:
      return Lo(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case pc:
          i = 10;
          break e;
        case hc:
          i = 9;
          break e;
        case Ns:
          i = 11;
          break e;
        case js:
          i = 14;
          break e;
        case Mt:
          i = 16, r = null;
          break e;
      }
      throw Error(D(130, e == null ? e : typeof e, ""));
  }
  return t = Ye(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function un(e, t, n, r) {
  return e = Ye(7, e, r, t), e.lanes = n, e;
}
function Lo(e, t, n, r) {
  return e = Ye(22, e, r, t), e.elementType = mc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function mi(e, t, n) {
  return e = Ye(6, e, null, t), e.lanes = n, e;
}
function vi(e, t, n) {
  return t = Ye(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function hm(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yo(0), this.expirationTimes = Yo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function sa(e, t, n, r, l, o, i, s, a) {
  return e = new hm(e, t, n, s, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ye(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Hs(o), e;
}
function mm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: En, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function sf(e) {
  if (!e) return Jt;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(D(170));
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
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n)) return id(e, n, t);
  }
  return t;
}
function af(e, t, n, r, l, o, i, s, a) {
  return e = sa(n, r, !0, e, l, o, i, s, a), e.context = sf(null), n = e.current, r = je(), l = Xt(n), o = Ct(r, l), o.callback = t ?? null, Qt(n, o, l), e.current.lanes = l, tl(e, l, r), Me(e, r), e;
}
function _o(e, t, n, r) {
  var l = t.current, o = je(), i = Xt(l);
  return n = sf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ct(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qt(l, t, i), e !== null && (ot(e, l, i, o), Ml(e, l, i)), i;
}
function po(e) {
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
Po.prototype.render = ua.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  _o(e, t, null, null);
};
Po.prototype.unmount = ua.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function() {
      _o(null, e, null, null);
    }), t[Nt] = null;
  }
};
function Po(e) {
  this._internalRoot = e;
}
Po.prototype.unstable_scheduleHydration = function(e) {
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
function Oo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Pu() {
}
function gm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = po(i);
        o.call(c);
      };
    }
    var i = af(t, r, e, 0, null, !1, !1, "", Pu);
    return e._reactRootContainer = i, e[Nt] = i.current, br(e.nodeType === 8 ? e.parentNode : e), hn(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var c = po(a);
      s.call(c);
    };
  }
  var a = sa(e, 0, !1, null, null, !1, !1, "", Pu);
  return e._reactRootContainer = a, e[Nt] = a.current, br(e.nodeType === 8 ? e.parentNode : e), hn(function() {
    _o(t, a, n, r);
  }), a;
}
function Mo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function() {
        var a = po(i);
        s.call(a);
      };
    }
    _o(t, i, e, l);
  } else i = gm(n, t, e, l, r);
  return po(i);
}
zc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xr(t.pendingLanes);
        n !== 0 && (Ts(t, n | 1), Me(t, le()), !(V & 6) && (Yn = le() + 500, tn()));
      }
      break;
    case 13:
      hn(function() {
        var r = jt(e, 1);
        if (r !== null) {
          var l = je();
          ot(r, e, 1, l);
        }
      }), aa(e, 1);
  }
};
Is = function(e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = je();
      ot(t, e, 134217728, n);
    }
    aa(e, 134217728);
  }
};
Fc = function(e) {
  if (e.tag === 13) {
    var t = Xt(e), n = jt(e, t);
    if (n !== null) {
      var r = je();
      ot(n, e, t, r);
    }
    aa(e, t);
  }
};
Uc = function() {
  return Q;
};
Bc = function(e, t) {
  var n = Q;
  try {
    return Q = e, t();
  } finally {
    Q = n;
  }
};
Mi = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ri(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = No(r);
            if (!l) throw Error(D(90));
            gc(r), Ri(r, l);
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
Dc = hn;
var ym = { usingClientEntryPoint: !1, Events: [rl, Tn, No, Ec, Nc, ra] }, mr = { findFiberByHostInstance: ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, wm = { bundleType: mr.bundleType, version: mr.version, rendererPackageName: mr.rendererPackageName, rendererConfig: mr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Rt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ic(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: mr.findFiberByHostInstance || vm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Dl.isDisabled && Dl.supportsFiber) try {
    So = Dl.inject(wm), mt = Dl;
  } catch {
  }
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ym;
He.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ca(t)) throw Error(D(200));
  return mm(e, t, null, n);
};
He.createRoot = function(e, t) {
  if (!ca(e)) throw Error(D(299));
  var n = !1, r = "", l = uf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = sa(e, 1, !1, null, null, n, !1, r, l), e[Nt] = t.current, br(e.nodeType === 8 ? e.parentNode : e), new ua(t);
};
He.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(D(188)) : (e = Object.keys(e).join(","), Error(D(268, e)));
  return e = Ic(t), e = e === null ? null : e.stateNode, e;
};
He.flushSync = function(e) {
  return hn(e);
};
He.hydrate = function(e, t, n) {
  if (!Oo(t)) throw Error(D(200));
  return Mo(null, e, t, !0, n);
};
He.hydrateRoot = function(e, t, n) {
  if (!ca(e)) throw Error(D(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = uf;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = af(t, null, e, 1, n ?? null, l, !1, o, i), e[Nt] = t.current, br(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Po(t);
};
He.render = function(e, t, n) {
  if (!Oo(t)) throw Error(D(200));
  return Mo(null, e, t, !1, n);
};
He.unmountComponentAtNode = function(e) {
  if (!Oo(e)) throw Error(D(40));
  return e._reactRootContainer ? (hn(function() {
    Mo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Nt] = null;
    });
  }), !0) : !1;
};
He.unstable_batchedUpdates = ra;
He.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Oo(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return Mo(e, t, n, !1, r);
};
He.version = "18.3.1-next-f1338f8080-20240426";
function cf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cf);
    } catch (e) {
      console.error(e);
    }
}
cf(), uc.exports = He;
var An = uc.exports, Ou = An;
Si.createRoot = Ou.createRoot, Si.hydrateRoot = Ou.hydrateRoot;
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
const Ao = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function er(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function da(e) {
  return "nodeType" in e;
}
function Te(e) {
  var t, n;
  return e ? er(e) ? e : da(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function fa(e) {
  const {
    Document: t
  } = Te(e);
  return e instanceof t;
}
function ol(e) {
  return er(e) ? !1 : e instanceof Te(e).HTMLElement;
}
function df(e) {
  return e instanceof Te(e).SVGElement;
}
function tr(e) {
  return e ? er(e) ? e.document : da(e) ? fa(e) ? e : ol(e) || df(e) ? e.ownerDocument : document : document : document;
}
const st = Ao ? g.useLayoutEffect : g.useEffect;
function zo(e) {
  const t = g.useRef(e);
  return st(() => {
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
function Jr(e, t) {
  t === void 0 && (t = [e]);
  const n = g.useRef(e);
  return st(() => {
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
function ho(e) {
  const t = zo(e), n = g.useRef(null), r = g.useCallback(
    (l) => {
      l !== n.current && (t == null || t(l, n.current)), n.current = l;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function mo(e) {
  const t = g.useRef();
  return g.useEffect(() => {
    t.current = e;
  }, [e]), t.current;
}
let gi = {};
function sl(e, t) {
  return g.useMemo(() => {
    if (t)
      return t;
    const n = gi[e] == null ? 0 : gi[e] + 1;
    return gi[e] = n, e + "-" + n;
  }, [e, t]);
}
function ff(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
      r[l - 1] = arguments[l];
    return r.reduce((o, i) => {
      const s = Object.entries(i);
      for (const [a, c] of s) {
        const m = o[a];
        m != null && (o[a] = m + e * c);
      }
      return o;
    }, {
      ...t
    });
  };
}
const Vn = /* @__PURE__ */ ff(1), Zr = /* @__PURE__ */ ff(-1);
function km(e) {
  return "clientX" in e && "clientY" in e;
}
function Fo(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Te(e.target);
  return t && e instanceof t;
}
function Cm(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Te(e.target);
  return t && e instanceof t;
}
function vo(e) {
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
  return Y.createElement("div", {
    id: t,
    style: Nm
  }, n);
}
function Dm(e) {
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
  return Y.createElement("div", {
    id: t,
    style: l,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function Rm() {
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
      event: o
    } = r;
    e.forEach((i) => {
      var s;
      return (s = i[l]) == null ? void 0 : s.call(i, o);
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
    announce: o,
    announcement: i
  } = Rm(), s = sl("DndLiveRegion"), [a, c] = g.useState(!1);
  if (g.useEffect(() => {
    c(!0);
  }, []), Tm(g.useMemo(() => ({
    onDragStart(h) {
      let {
        active: v
      } = h;
      o(t.onDragStart({
        active: v
      }));
    },
    onDragMove(h) {
      let {
        active: v,
        over: y
      } = h;
      t.onDragMove && o(t.onDragMove({
        active: v,
        over: y
      }));
    },
    onDragOver(h) {
      let {
        active: v,
        over: y
      } = h;
      o(t.onDragOver({
        active: v,
        over: y
      }));
    },
    onDragEnd(h) {
      let {
        active: v,
        over: y
      } = h;
      o(t.onDragEnd({
        active: v,
        over: y
      }));
    },
    onDragCancel(h) {
      let {
        active: v,
        over: y
      } = h;
      o(t.onDragCancel({
        active: v,
        over: y
      }));
    }
  }), [o, t])), !a)
    return null;
  const m = Y.createElement(Y.Fragment, null, Y.createElement(jm, {
    id: r,
    value: l.draggable
  }), Y.createElement(Dm, {
    id: s,
    announcement: i
  }));
  return n ? An.createPortal(m, n) : m;
}
var ae;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(ae || (ae = {}));
function go() {
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
const at = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Mm(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Am(e, t) {
  const n = vo(e);
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
  const l = zu(t), o = [];
  for (const i of r) {
    const {
      id: s
    } = i, a = n.get(s);
    if (a) {
      const c = zu(a), m = l.reduce((v, y, S) => v + Mm(c[S], y), 0), h = Number((m / 4).toFixed(4));
      o.push({
        id: s,
        data: {
          droppableContainer: i,
          value: h
        }
      });
    }
  }
  return o.sort(zm);
};
function Um(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), l = Math.min(t.left + t.width, e.left + e.width), o = Math.min(t.top + t.height, e.top + e.height), i = l - r, s = o - n;
  if (r < l && n < o) {
    const a = t.width * t.height, c = e.width * e.height, m = i * s, h = m / (a + c - m);
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
  for (const o of r) {
    const {
      id: i
    } = o, s = n.get(i);
    if (s) {
      const a = Um(s, t);
      a > 0 && l.push({
        id: i,
        data: {
          droppableContainer: o,
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
  } : at;
}
function bm(e) {
  return function(n) {
    for (var r = arguments.length, l = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      l[o - 1] = arguments[o];
    return l.reduce((i, s) => ({
      ...i,
      top: i.top + e * s.y,
      bottom: i.bottom + e * s.y,
      left: i.left + e * s.x,
      right: i.right + e * s.x
    }), {
      ...n
    });
  };
}
const Vm = /* @__PURE__ */ bm(1);
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
function Hm(e, t, n) {
  const r = gf(t);
  if (!r)
    return e;
  const {
    scaleX: l,
    scaleY: o,
    x: i,
    y: s
  } = r, a = e.left - i - (1 - l) * parseFloat(n), c = e.top - s - (1 - o) * parseFloat(n.slice(n.indexOf(" ") + 1)), m = l ? e.width / l : e.width, h = o ? e.height / o : e.height;
  return {
    width: m,
    height: h,
    top: c,
    right: a + m,
    bottom: c + h,
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
      transform: c,
      transformOrigin: m
    } = Te(e).getComputedStyle(e);
    c && (n = Hm(n, c, m));
  }
  const {
    top: r,
    left: l,
    width: o,
    height: i,
    bottom: s,
    right: a
  } = n;
  return {
    top: r,
    left: l,
    width: o,
    height: i,
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
  return t === void 0 && (t = Te(e).getComputedStyle(e)), t.position === "fixed";
}
function Xm(e, t) {
  t === void 0 && (t = Te(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((l) => {
    const o = t[l];
    return typeof o == "string" ? n.test(o) : !1;
  });
}
function Uo(e, t) {
  const n = [];
  function r(l) {
    if (t != null && n.length >= t || !l)
      return n;
    if (fa(l) && l.scrollingElement != null && !n.includes(l.scrollingElement))
      return n.push(l.scrollingElement), n;
    if (!ol(l) || df(l) || n.includes(l))
      return n;
    const o = Te(e).getComputedStyle(l);
    return l !== e && Xm(l, o) && n.push(l), Km(l, o) ? n : r(l.parentNode);
  }
  return e ? r(e) : n;
}
function yf(e) {
  const [t] = Uo(e, 1);
  return t ?? null;
}
function yi(e) {
  return !Ao || !e ? null : er(e) ? e : da(e) ? fa(e) || e === tr(e).scrollingElement ? window : ol(e) ? e : null : null;
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
var fe;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(fe || (fe = {}));
function Sf(e) {
  return !Ao || !e ? !1 : e === document.scrollingElement;
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
  }, l = e.scrollTop <= t.y, o = e.scrollLeft <= t.x, i = e.scrollTop >= r.y, s = e.scrollLeft >= r.x;
  return {
    isTop: l,
    isLeft: o,
    isBottom: i,
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
    top: o,
    left: i,
    right: s,
    bottom: a
  } = n;
  r === void 0 && (r = 10), l === void 0 && (l = Gm);
  const {
    isTop: c,
    isBottom: m,
    isLeft: h,
    isRight: v
  } = kf(e), y = {
    x: 0,
    y: 0
  }, S = {
    x: 0,
    y: 0
  }, x = {
    height: t.height * l.y,
    width: t.width * l.x
  };
  return !c && o <= t.top + x.height ? (y.y = fe.Backward, S.y = r * Math.abs((t.top + x.height - o) / x.height)) : !m && a >= t.bottom - x.height && (y.y = fe.Forward, S.y = r * Math.abs((t.bottom - x.height - a) / x.height)), !v && s >= t.right - x.width ? (y.x = fe.Forward, S.x = r * Math.abs((t.right - x.width - s) / x.width)) : !h && i <= t.left + x.width && (y.x = fe.Backward, S.x = r * Math.abs((t.left + x.width - i) / x.width)), {
    direction: y,
    speed: S
  };
}
function Jm(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: o,
      innerHeight: i
    } = window;
    return {
      top: 0,
      left: 0,
      right: o,
      bottom: i,
      width: o,
      height: i
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
  return e.reduce((t, n) => Vn(t, hs(n)), at);
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
    right: o
  } = t(e);
  yf(e) && (l <= 0 || o <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const ev = [["x", ["left", "right"], Zm], ["y", ["top", "bottom"], qm]];
class pa {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Uo(n), l = Cf(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [o, i, s] of ev)
      for (const a of i)
        Object.defineProperty(this, a, {
          get: () => {
            const c = s(r), m = l[o] - c;
            return this.rect[a] + m;
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
function tv(e) {
  const {
    EventTarget: t
  } = Te(e);
  return e instanceof t ? e : tr(e);
}
function wi(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var Ke;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(Ke || (Ke = {}));
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
    this.props = t, this.listeners = new Lr(tr(n)), this.windowListeners = new Lr(Te(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ke.Resize, this.handleCancel), this.windowListeners.add(Ke.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ke.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && Ef(r), n(at);
  }
  handleKeyDown(t) {
    if (Fo(t)) {
      const {
        active: n,
        context: r,
        options: l
      } = this.props, {
        keyboardCodes: o = Nf,
        coordinateGetter: i = rv,
        scrollBehavior: s = "smooth"
      } = l, {
        code: a
      } = t;
      if (o.end.includes(a)) {
        this.handleEnd(t);
        return;
      }
      if (o.cancel.includes(a)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: c
      } = r.current, m = c ? {
        x: c.left,
        y: c.top
      } : at;
      this.referenceCoordinates || (this.referenceCoordinates = m);
      const h = i(t, {
        active: n,
        context: r.current,
        currentCoordinates: m
      });
      if (h) {
        const v = Zr(h, m), y = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: S
        } = r.current;
        for (const x of S) {
          const R = t.code, {
            isTop: f,
            isRight: d,
            isLeft: p,
            isBottom: w,
            maxScroll: k,
            minScroll: N
          } = kf(x), C = Jm(x), E = {
            x: Math.min(R === B.Right ? C.right - C.width / 2 : C.right, Math.max(R === B.Right ? C.left : C.left + C.width / 2, h.x)),
            y: Math.min(R === B.Down ? C.bottom - C.height / 2 : C.bottom, Math.max(R === B.Down ? C.top : C.top + C.height / 2, h.y))
          }, T = R === B.Right && !d || R === B.Left && !p, I = R === B.Down && !w || R === B.Up && !f;
          if (T && E.x !== h.x) {
            const O = x.scrollLeft + v.x, te = R === B.Right && O <= k.x || R === B.Left && O >= N.x;
            if (te && !v.y) {
              x.scrollTo({
                left: O,
                behavior: s
              });
              return;
            }
            te ? y.x = x.scrollLeft - O : y.x = R === B.Right ? x.scrollLeft - k.x : x.scrollLeft - N.x, y.x && x.scrollBy({
              left: -y.x,
              behavior: s
            });
            break;
          } else if (I && E.y !== h.y) {
            const O = x.scrollTop + v.y, te = R === B.Down && O <= k.y || R === B.Up && O >= N.y;
            if (te && !v.x) {
              x.scrollTo({
                top: O,
                behavior: s
              });
              return;
            }
            te ? y.y = x.scrollTop - O : y.y = R === B.Down ? x.scrollTop - k.y : x.scrollTop - N.y, y.y && x.scrollBy({
              top: -y.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, Vn(Zr(h, this.referenceCoordinates), y));
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
      active: o
    } = n;
    const {
      code: i
    } = e.nativeEvent;
    if (r.start.includes(i)) {
      const s = o.activatorNode.current;
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
      event: o
    } = t, {
      target: i
    } = o;
    this.props = t, this.events = n, this.document = tr(i), this.documentListeners = new Lr(this.document), this.listeners = new Lr(r), this.windowListeners = new Lr(Te(i)), this.initialCoordinates = (l = vo(o)) != null ? l : at, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(Ke.Resize, this.handleCancel), this.windowListeners.add(Ke.DragStart, Uu), this.windowListeners.add(Ke.VisibilityChange, this.handleCancel), this.windowListeners.add(Ke.ContextMenu, Uu), this.documentListeners.add(Ke.Keydown, this.handleKeydown), n) {
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
    t && (this.activated = !0, this.documentListeners.add(Ke.Click, nv, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Ke.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: l,
      props: o
    } = this, {
      onMove: i,
      options: {
        activationConstraint: s
      }
    } = o;
    if (!l)
      return;
    const a = (n = vo(t)) != null ? n : at, c = Zr(l, a);
    if (!r && s) {
      if (Bu(s)) {
        if (s.tolerance != null && wi(c, s.tolerance))
          return this.handleCancel();
        if (wi(c, s.distance))
          return this.handleStart();
      }
      if ($u(s) && wi(c, s.tolerance))
        return this.handleCancel();
      this.handlePending(s, c);
      return;
    }
    t.cancelable && t.preventDefault(), i(a);
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
const ov = {
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
class iv extends ma {
  constructor(t) {
    super(t, ov, tr(t.event.target));
  }
}
iv.activators = [{
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
const xi = {
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
    super(t, xi);
  }
  static setup() {
    return window.addEventListener(xi.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(xi.move.name, t);
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
var _r;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(_r || (_r = {}));
var yo;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(yo || (yo = {}));
function av(e) {
  let {
    acceleration: t,
    activator: n = _r.Pointer,
    canScroll: r,
    draggingRect: l,
    enabled: o,
    interval: i = 5,
    order: s = yo.TreeOrder,
    pointerCoordinates: a,
    scrollableAncestors: c,
    scrollableAncestorRects: m,
    delta: h,
    threshold: v
  } = e;
  const y = cv({
    delta: h,
    disabled: !o
  }), [S, x] = Sm(), R = g.useRef({
    x: 0,
    y: 0
  }), f = g.useRef({
    x: 0,
    y: 0
  }), d = g.useMemo(() => {
    switch (n) {
      case _r.Pointer:
        return a ? {
          top: a.y,
          bottom: a.y,
          left: a.x,
          right: a.x
        } : null;
      case _r.DraggableRect:
        return l;
    }
  }, [n, l, a]), p = g.useRef(null), w = g.useCallback(() => {
    const N = p.current;
    if (!N)
      return;
    const C = R.current.x * f.current.x, E = R.current.y * f.current.y;
    N.scrollBy(C, E);
  }, []), k = g.useMemo(() => s === yo.TreeOrder ? [...c].reverse() : c, [s, c]);
  g.useEffect(
    () => {
      if (!o || !c.length || !d) {
        x();
        return;
      }
      for (const N of k) {
        if ((r == null ? void 0 : r(N)) === !1)
          continue;
        const C = c.indexOf(N), E = m[C];
        if (!E)
          continue;
        const {
          direction: T,
          speed: I
        } = Ym(N, E, d, t, v);
        for (const O of ["x", "y"])
          y[O][T[O]] || (I[O] = 0, T[O] = 0);
        if (I.x > 0 || I.y > 0) {
          x(), p.current = N, S(w, i), R.current = I, f.current = T;
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
      o,
      i,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(d),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(y),
      S,
      c,
      k,
      m,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
const uv = {
  x: {
    [fe.Backward]: !1,
    [fe.Forward]: !1
  },
  y: {
    [fe.Backward]: !1,
    [fe.Forward]: !1
  }
};
function cv(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = mo(t);
  return il((l) => {
    if (n || !r || !l)
      return uv;
    const o = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [fe.Backward]: l.x[fe.Backward] || o.x === -1,
        [fe.Forward]: l.x[fe.Forward] || o.x === 1
      },
      y: {
        [fe.Backward]: l.y[fe.Backward] || o.y === -1,
        [fe.Forward]: l.y[fe.Forward] || o.y === 1
      }
    };
  }, [n, t, r]);
}
function dv(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return il((l) => {
    var o;
    return t == null ? null : (o = r ?? l) != null ? o : null;
  }, [r, t]);
}
function fv(e, t) {
  return g.useMemo(() => e.reduce((n, r) => {
    const {
      sensor: l
    } = r, o = l.activators.map((i) => ({
      eventName: i.eventName,
      handler: t(i.handler, r)
    }));
    return [...n, ...o];
  }, []), [e, t]);
}
var qr;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(qr || (qr = {}));
var vs;
(function(e) {
  e.Optimized = "optimized";
})(vs || (vs = {}));
const bu = /* @__PURE__ */ new Map();
function pv(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: l
  } = t;
  const [o, i] = g.useState(null), {
    frequency: s,
    measure: a,
    strategy: c
  } = l, m = g.useRef(e), h = R(), v = Jr(h), y = g.useCallback(function(f) {
    f === void 0 && (f = []), !v.current && i((d) => d === null ? f : d.concat(f.filter((p) => !d.includes(p))));
  }, [v]), S = g.useRef(null), x = il((f) => {
    if (h && !n)
      return bu;
    if (!f || f === bu || m.current !== e || o != null) {
      const d = /* @__PURE__ */ new Map();
      for (let p of e) {
        if (!p)
          continue;
        if (o && o.length > 0 && !o.includes(p.id) && p.rect.current) {
          d.set(p.id, p.rect.current);
          continue;
        }
        const w = p.node.current, k = w ? new pa(a(w), w) : null;
        p.rect.current = k, k && d.set(p.id, k);
      }
      return d;
    }
    return f;
  }, [e, o, n, h, a]);
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
      o && o.length > 0 && i(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(o)]
  ), g.useEffect(
    () => {
      h || typeof s != "number" || S.current !== null || (S.current = setTimeout(() => {
        y(), S.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, h, y, ...r]
  ), {
    droppableRects: x,
    measureDroppableContainers: y,
    measuringScheduled: o != null
  };
  function R() {
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
  const r = zo(t), l = g.useMemo(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: o
    } = window;
    return new o(r);
  }, [r, n]);
  return g.useEffect(() => () => l == null ? void 0 : l.disconnect(), [l]), l;
}
function Bo(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = zo(t), l = g.useMemo(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: o
      } = window;
      return new o(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return g.useEffect(() => () => l == null ? void 0 : l.disconnect(), [l]), l;
}
function vv(e) {
  return new pa(nr(e), e);
}
function Vu(e, t, n) {
  t === void 0 && (t = vv);
  const [r, l] = g.useState(null);
  function o() {
    l((a) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var c;
        return (c = a ?? n) != null ? c : null;
      }
      const m = t(e);
      return JSON.stringify(a) === JSON.stringify(m) ? a : m;
    });
  }
  const i = mv({
    callback(a) {
      if (e)
        for (const c of a) {
          const {
            type: m,
            target: h
          } = c;
          if (m === "childList" && h instanceof HTMLElement && h.contains(e)) {
            o();
            break;
          }
        }
    }
  }), s = Bo({
    callback: o
  });
  return st(() => {
    o(), e ? (s == null || s.observe(e), i == null || i.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (s == null || s.disconnect(), i == null || i.disconnect());
  }, [e]), r;
}
function gv(e) {
  const t = ga(e);
  return vf(e, t);
}
const Hu = [];
function yv(e) {
  const t = g.useRef(e), n = il((r) => e ? r && r !== Hu && e && t.current && e.parentNode === t.current.parentNode ? r : Uo(e) : Hu, [e]);
  return g.useEffect(() => {
    t.current = e;
  }, [e]), n;
}
function wv(e) {
  const [t, n] = g.useState(null), r = g.useRef(e), l = g.useCallback((o) => {
    const i = yi(o.target);
    i && n((s) => s ? (s.set(i, hs(i)), new Map(s)) : null);
  }, []);
  return g.useEffect(() => {
    const o = r.current;
    if (e !== o) {
      i(o);
      const s = e.map((a) => {
        const c = yi(a);
        return c ? (c.addEventListener("scroll", l, {
          passive: !0
        }), [c, hs(c)]) : null;
      }).filter((a) => a != null);
      n(s.length ? new Map(s) : null), r.current = e;
    }
    return () => {
      i(e), i(o);
    };
    function i(s) {
      s.forEach((a) => {
        const c = yi(a);
        c == null || c.removeEventListener("scroll", l);
      });
    }
  }, [l, e]), g.useMemo(() => e.length ? t ? Array.from(t.values()).reduce((o, i) => Vn(o, i), at) : Cf(e) : at, [e, t]);
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
    const r = e !== at;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? Zr(e, n.current) : at;
}
function xv(e) {
  g.useEffect(
    () => {
      if (!Ao)
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
      handler: o
    } = r;
    return n[l] = (i) => {
      o(i, t);
    }, n;
  }, {}), [e, t]);
}
function jf(e) {
  return g.useMemo(() => e ? Qm(e) : null, [e]);
}
const Qu = [];
function kv(e, t) {
  t === void 0 && (t = nr);
  const [n] = e, r = jf(n ? Te(n) : null), [l, o] = g.useState(Qu);
  function i() {
    o(() => e.length ? e.map((a) => Sf(a) ? r : new pa(t(a), a)) : Qu);
  }
  const s = Bo({
    callback: i
  });
  return st(() => {
    s == null || s.disconnect(), i(), e.forEach((a) => s == null ? void 0 : s.observe(a));
  }, [e]), l;
}
function Df(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return ol(t) ? t : e;
}
function Cv(e) {
  let {
    measure: t
  } = e;
  const [n, r] = g.useState(null), l = g.useCallback((c) => {
    for (const {
      target: m
    } of c)
      if (ol(m)) {
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
  }, [t]), o = Bo({
    callback: l
  }), i = g.useCallback((c) => {
    const m = Df(c);
    o == null || o.disconnect(), m && (o == null || o.observe(m)), r(m ? t(m) : null);
  }, [t, o]), [s, a] = ho(i);
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
}, bl = {
  draggable: {
    measure: Fu
  },
  droppable: {
    measure: Fu,
    strategy: qr.WhileDragging,
    frequency: vs.Optimized
  },
  dragOverlay: {
    measure: nr
  }
};
class Pr extends Map {
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
  droppableContainers: /* @__PURE__ */ new Pr(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: go
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: bl,
  measureDroppableContainers: go,
  windowRect: null,
  measuringScheduled: !1
}, Rf = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: go,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: go
}, al = /* @__PURE__ */ g.createContext(Rf), Tf = /* @__PURE__ */ g.createContext(jv);
function Dv() {
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
      containers: new Pr()
    }
  };
}
function Rv(e, t) {
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
      } = n, l = new Pr(e.droppable.containers);
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
      } = t, o = e.droppable.containers.get(n);
      if (!o || r !== o.key)
        return e;
      const i = new Pr(e.droppable.containers);
      return i.set(n, {
        ...o,
        disabled: l
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
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
      const o = new Pr(e.droppable.containers);
      return o.delete(n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: o
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
  } = g.useContext(al), o = mo(r), i = mo(n == null ? void 0 : n.id);
  return g.useEffect(() => {
    if (!t && !r && o && i != null) {
      if (!Fo(o) || document.activeElement === o.target)
        return;
      const s = l.get(i);
      if (!s)
        return;
      const {
        activatorNode: a,
        node: c
      } = s;
      if (!a.current && !c.current)
        return;
      requestAnimationFrame(() => {
        for (const m of [a.current, c.current]) {
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
  }, [r, t, l, i, o]), null;
}
function If(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((l, o) => o({
    transform: l,
    ...r
  }), n) : n;
}
function Iv(e) {
  return g.useMemo(
    () => ({
      draggable: {
        ...bl.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...bl.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...bl.dragOverlay,
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
  const o = g.useRef(!1), {
    x: i,
    y: s
  } = typeof l == "boolean" ? {
    x: l,
    y: l
  } : l;
  st(() => {
    if (!i && !s || !t) {
      o.current = !1;
      return;
    }
    if (o.current || !r)
      return;
    const c = t == null ? void 0 : t.node.current;
    if (!c || c.isConnected === !1)
      return;
    const m = n(c), h = vf(m, r);
    if (i || (h.x = 0), s || (h.y = 0), o.current = !0, Math.abs(h.x) > 0 || Math.abs(h.y) > 0) {
      const v = yf(c);
      v && v.scrollBy({
        top: h.y,
        left: h.x
      });
    }
  }, [t, i, s, r, n]);
}
const $o = /* @__PURE__ */ g.createContext({
  ...at,
  scaleX: 1,
  scaleY: 1
});
var zt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(zt || (zt = {}));
const _v = /* @__PURE__ */ g.memo(function(t) {
  var n, r, l, o;
  let {
    id: i,
    accessibility: s,
    autoScroll: a = !0,
    children: c,
    sensors: m = Ev,
    collisionDetection: h = Bm,
    measuring: v,
    modifiers: y,
    ...S
  } = t;
  const x = g.useReducer(Rv, void 0, Dv), [R, f] = x, [d, p] = Im(), [w, k] = g.useState(zt.Uninitialized), N = w === zt.Initialized, {
    draggable: {
      active: C,
      nodes: E,
      translate: T
    },
    droppable: {
      containers: I
    }
  } = R, O = C != null ? E.get(C) : null, te = g.useRef({
    initial: null,
    translated: null
  }), re = g.useMemo(() => {
    var ye;
    return C != null ? {
      id: C,
      // It's possible for the active node to unmount while dragging
      data: (ye = O == null ? void 0 : O.data) != null ? ye : Nv,
      rect: te
    } : null;
  }, [C, O]), ce = g.useRef(null), [Ie, Ce] = g.useState(null), [$, L] = g.useState(null), M = Jr(S, Object.values(S)), z = sl("DndDescribedBy", i), b = g.useMemo(() => I.getEnabled(), [I]), F = Iv(v), {
    droppableRects: ie,
    measureDroppableContainers: A,
    measuringScheduled: j
  } = pv(b, {
    dragging: N,
    dependencies: [T.x, T.y],
    config: F.droppable
  }), _ = dv(E, C), W = g.useMemo(() => $ ? vo($) : null, [$]), Ee = Kf(), Ae = hv(_, F.draggable.measure);
  Lv({
    activeNode: C != null ? E.get(C) : null,
    config: Ee.layoutShiftCompensation,
    initialRect: Ae,
    measure: F.draggable.measure
  });
  const H = Vu(_, F.draggable.measure, Ae), rr = Vu(_ ? _.parentElement : null), ut = g.useRef({
    activatorEvent: null,
    active: null,
    activeNode: _,
    collisionRect: null,
    collisions: null,
    droppableRects: ie,
    draggableNodes: E,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: I,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), gn = I.getNodeFor((n = ut.current.over) == null ? void 0 : n.id), gt = Cv({
    measure: F.dragOverlay.measure
  }), yn = (r = gt.nodeRef.current) != null ? r : _, wn = N ? (l = gt.rect) != null ? l : H : null, ya = !!(gt.nodeRef.current && gt.rect), wa = gv(ya ? null : H), bo = jf(yn ? Te(yn) : null), Tt = yv(N ? gn ?? _ : null), ul = kv(Tt), cl = If(y, {
    transform: {
      x: T.x - wa.x,
      y: T.y - wa.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: $,
    active: re,
    activeNodeRect: H,
    containerNodeRect: rr,
    draggingNodeRect: wn,
    over: ut.current.over,
    overlayNodeRect: gt.rect,
    scrollableAncestors: Tt,
    scrollableAncestorRects: ul,
    windowRect: bo
  }), xa = W ? Vn(W, T) : null, Sa = wv(Tt), Bf = Wu(Sa), $f = Wu(Sa, [H]), xn = Vn(cl, Bf), Sn = wn ? Vm(wn, cl) : null, lr = re && Sn ? h({
    active: re,
    collisionRect: Sn,
    droppableRects: ie,
    droppableContainers: b,
    pointerCoordinates: xa
  }) : null, ka = hf(lr, "id"), [It, Ca] = g.useState(null), bf = ya ? cl : Vn(cl, $f), Vf = $m(bf, (o = It == null ? void 0 : It.rect) != null ? o : null, H), Vo = g.useRef(null), Ea = g.useCallback(
    (ye, ze) => {
      let {
        sensor: Fe,
        options: Lt
      } = ze;
      if (ce.current == null)
        return;
      const Qe = E.get(ce.current);
      if (!Qe)
        return;
      const Ue = ye.nativeEvent, ct = new Fe({
        active: ce.current,
        activeNode: Qe,
        event: Ue,
        options: Lt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ut,
        onAbort(he) {
          if (!E.get(he))
            return;
          const {
            onDragAbort: dt
          } = M.current, yt = {
            id: he
          };
          dt == null || dt(yt), d({
            type: "onDragAbort",
            event: yt
          });
        },
        onPending(he, _t, dt, yt) {
          if (!E.get(he))
            return;
          const {
            onDragPending: ir
          } = M.current, Pt = {
            id: he,
            constraint: _t,
            initialCoordinates: dt,
            offset: yt
          };
          ir == null || ir(Pt), d({
            type: "onDragPending",
            event: Pt
          });
        },
        onStart(he) {
          const _t = ce.current;
          if (_t == null)
            return;
          const dt = E.get(_t);
          if (!dt)
            return;
          const {
            onDragStart: yt
          } = M.current, or = {
            activatorEvent: Ue,
            active: {
              id: _t,
              data: dt.data,
              rect: te
            }
          };
          An.unstable_batchedUpdates(() => {
            yt == null || yt(or), k(zt.Initializing), f({
              type: ae.DragStart,
              initialCoordinates: he,
              active: _t
            }), d({
              type: "onDragStart",
              event: or
            }), Ce(Vo.current), L(Ue);
          });
        },
        onMove(he) {
          f({
            type: ae.DragMove,
            coordinates: he
          });
        },
        onEnd: kn(ae.DragEnd),
        onCancel: kn(ae.DragCancel)
      });
      Vo.current = ct;
      function kn(he) {
        return async function() {
          const {
            active: dt,
            collisions: yt,
            over: or,
            scrollAdjustedTranslate: ir
          } = ut.current;
          let Pt = null;
          if (dt && ir) {
            const {
              cancelDrop: sr
            } = M.current;
            Pt = {
              activatorEvent: Ue,
              active: dt,
              collisions: yt,
              delta: ir,
              over: or
            }, he === ae.DragEnd && typeof sr == "function" && await Promise.resolve(sr(Pt)) && (he = ae.DragCancel);
          }
          ce.current = null, An.unstable_batchedUpdates(() => {
            f({
              type: he
            }), k(zt.Uninitialized), Ca(null), Ce(null), L(null), Vo.current = null;
            const sr = he === ae.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Pt) {
              const Ho = M.current[sr];
              Ho == null || Ho(Pt), d({
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
  ), Hf = g.useCallback((ye, ze) => (Fe, Lt) => {
    const Qe = Fe.nativeEvent, Ue = E.get(Lt);
    if (
      // Another sensor is already instantiating
      ce.current !== null || // No active draggable
      !Ue || // Event has already been captured
      Qe.dndKit || Qe.defaultPrevented
    )
      return;
    const ct = {
      active: Ue
    };
    ye(Fe, ze.options, ct) === !0 && (Qe.dndKit = {
      capturedBy: ze.sensor
    }, ce.current = Lt, Ea(Fe, ze));
  }, [E, Ea]), Na = fv(m, Hf);
  xv(m), st(() => {
    H && w === zt.Initializing && k(zt.Initialized);
  }, [H, w]), g.useEffect(
    () => {
      const {
        onDragMove: ye
      } = M.current, {
        active: ze,
        activatorEvent: Fe,
        collisions: Lt,
        over: Qe
      } = ut.current;
      if (!ze || !Fe)
        return;
      const Ue = {
        active: ze,
        activatorEvent: Fe,
        collisions: Lt,
        delta: {
          x: xn.x,
          y: xn.y
        },
        over: Qe
      };
      An.unstable_batchedUpdates(() => {
        ye == null || ye(Ue), d({
          type: "onDragMove",
          event: Ue
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [xn.x, xn.y]
  ), g.useEffect(
    () => {
      const {
        active: ye,
        activatorEvent: ze,
        collisions: Fe,
        droppableContainers: Lt,
        scrollAdjustedTranslate: Qe
      } = ut.current;
      if (!ye || ce.current == null || !ze || !Qe)
        return;
      const {
        onDragOver: Ue
      } = M.current, ct = Lt.get(ka), kn = ct && ct.rect.current ? {
        id: ct.id,
        rect: ct.rect.current,
        data: ct.data,
        disabled: ct.disabled
      } : null, he = {
        active: ye,
        activatorEvent: ze,
        collisions: Fe,
        delta: {
          x: Qe.x,
          y: Qe.y
        },
        over: kn
      };
      An.unstable_batchedUpdates(() => {
        Ca(kn), Ue == null || Ue(he), d({
          type: "onDragOver",
          event: he
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ka]
  ), st(() => {
    ut.current = {
      activatorEvent: $,
      active: re,
      activeNode: _,
      collisionRect: Sn,
      collisions: lr,
      droppableRects: ie,
      draggableNodes: E,
      draggingNode: yn,
      draggingNodeRect: wn,
      droppableContainers: I,
      over: It,
      scrollableAncestors: Tt,
      scrollAdjustedTranslate: xn
    }, te.current = {
      initial: wn,
      translated: Sn
    };
  }, [re, _, lr, Sn, E, yn, wn, ie, I, It, Tt, xn]), av({
    ...Ee,
    delta: T,
    draggingRect: Sn,
    pointerCoordinates: xa,
    scrollableAncestors: Tt,
    scrollableAncestorRects: ul
  });
  const Wf = g.useMemo(() => ({
    active: re,
    activeNode: _,
    activeNodeRect: H,
    activatorEvent: $,
    collisions: lr,
    containerNodeRect: rr,
    dragOverlay: gt,
    draggableNodes: E,
    droppableContainers: I,
    droppableRects: ie,
    over: It,
    measureDroppableContainers: A,
    scrollableAncestors: Tt,
    scrollableAncestorRects: ul,
    measuringConfiguration: F,
    measuringScheduled: j,
    windowRect: bo
  }), [re, _, H, $, lr, rr, gt, E, I, ie, It, A, Tt, ul, F, j, bo]), Qf = g.useMemo(() => ({
    activatorEvent: $,
    activators: Na,
    active: re,
    activeNodeRect: H,
    ariaDescribedById: {
      draggable: z
    },
    dispatch: f,
    draggableNodes: E,
    over: It,
    measureDroppableContainers: A
  }), [$, Na, re, H, f, z, E, It, A]);
  return Y.createElement(pf.Provider, {
    value: p
  }, Y.createElement(al.Provider, {
    value: Qf
  }, Y.createElement(Tf.Provider, {
    value: Wf
  }, Y.createElement($o.Provider, {
    value: Vf
  }, c)), Y.createElement(Tv, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), Y.createElement(Pm, {
    ...s,
    hiddenTextDescribedById: z
  }));
  function Kf() {
    const ye = (Ie == null ? void 0 : Ie.autoScrollEnabled) === !1, ze = typeof a == "object" ? a.enabled === !1 : a === !1, Fe = N && !ye && !ze;
    return typeof a == "object" ? {
      ...a,
      enabled: Fe
    } : {
      enabled: Fe
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
  const o = sl(Ov), {
    activators: i,
    activatorEvent: s,
    active: a,
    activeNodeRect: c,
    ariaDescribedById: m,
    draggableNodes: h,
    over: v
  } = g.useContext(al), {
    role: y = Ku,
    roleDescription: S = "draggable",
    tabIndex: x = 0
  } = l ?? {}, R = (a == null ? void 0 : a.id) === t, f = g.useContext(R ? $o : Pv), [d, p] = ho(), [w, k] = ho(), N = Sv(i, t), C = Jr(n);
  st(
    () => (h.set(t, {
      id: t,
      key: o,
      node: d,
      activatorNode: w,
      data: C
    }), () => {
      const T = h.get(t);
      T && T.key === o && h.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [h, t]
  );
  const E = g.useMemo(() => ({
    role: y,
    tabIndex: x,
    "aria-disabled": r,
    "aria-pressed": R && y === Ku ? !0 : void 0,
    "aria-roledescription": S,
    "aria-describedby": m.draggable
  }), [r, y, x, R, S, m.draggable]);
  return {
    active: a,
    activatorEvent: s,
    activeNodeRect: c,
    attributes: E,
    isDragging: R,
    listeners: r ? void 0 : N,
    node: d,
    over: v,
    setNodeRef: p,
    setActivatorNodeRef: k,
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
  const o = sl(Av), {
    active: i,
    dispatch: s,
    over: a,
    measureDroppableContainers: c
  } = g.useContext(al), m = g.useRef({
    disabled: n
  }), h = g.useRef(!1), v = g.useRef(null), y = g.useRef(null), {
    disabled: S,
    updateMeasurementsFor: x,
    timeout: R
  } = {
    ...zv,
    ...l
  }, f = Jr(x ?? r), d = g.useCallback(
    () => {
      if (!h.current) {
        h.current = !0;
        return;
      }
      y.current != null && clearTimeout(y.current), y.current = setTimeout(() => {
        c(Array.isArray(f.current) ? f.current : [f.current]), y.current = null;
      }, R);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [R]
  ), p = Bo({
    callback: d,
    disabled: S || !i
  }), w = g.useCallback((E, T) => {
    p && (T && (p.unobserve(T), h.current = !1), E && p.observe(E));
  }, [p]), [k, N] = ho(w), C = Jr(t);
  return g.useEffect(() => {
    !p || !k.current || (p.disconnect(), h.current = !1, p.observe(k.current));
  }, [k, p]), g.useEffect(
    () => (s({
      type: ae.RegisterDroppable,
      element: {
        id: r,
        key: o,
        disabled: n,
        node: k,
        rect: v,
        data: C
      }
    }), () => s({
      type: ae.UnregisterDroppable,
      key: o,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), g.useEffect(() => {
    n !== m.current.disabled && (s({
      type: ae.SetDroppableDisabled,
      id: r,
      key: o,
      disabled: n
    }), m.current.disabled = n);
  }, [r, o, n, s]), {
    active: i,
    rect: v,
    isOver: (a == null ? void 0 : a.id) === r,
    node: k,
    over: a,
    setNodeRef: N
  };
}
function Fv(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, l] = g.useState(null), [o, i] = g.useState(null), s = mo(n);
  return !n && !r && s && l(s), st(() => {
    if (!o)
      return;
    const a = r == null ? void 0 : r.key, c = r == null ? void 0 : r.props.id;
    if (a == null || c == null) {
      l(null);
      return;
    }
    Promise.resolve(t(c, o)).then(() => {
      l(null);
    });
  }, [t, r, o]), Y.createElement(Y.Fragment, null, n, r ? g.cloneElement(r, {
    ref: i
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
  return Y.createElement(al.Provider, {
    value: Rf
  }, Y.createElement($o.Provider, {
    value: Uv
  }, t));
}
const $v = {
  position: "fixed",
  touchAction: "none"
}, bv = (e) => Fo(e) ? "transform 250ms ease" : void 0, Vv = /* @__PURE__ */ g.forwardRef((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: l,
    children: o,
    className: i,
    rect: s,
    style: a,
    transform: c,
    transition: m = bv
  } = e;
  if (!s)
    return null;
  const h = l ? c : {
    ...c,
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
  return Y.createElement(n, {
    className: i,
    style: v,
    ref: t
  }, o);
}), Hv = (e) => (t) => {
  let {
    active: n,
    dragOverlay: r
  } = t;
  const l = {}, {
    styles: o,
    className: i
  } = e;
  if (o != null && o.active)
    for (const [s, a] of Object.entries(o.active))
      a !== void 0 && (l[s] = n.node.style.getPropertyValue(s), n.node.style.setProperty(s, a));
  if (o != null && o.dragOverlay)
    for (const [s, a] of Object.entries(o.dragOverlay))
      a !== void 0 && r.node.style.setProperty(s, a);
  return i != null && i.active && n.node.classList.add(i.active), i != null && i.dragOverlay && r.node.classList.add(i.dragOverlay), function() {
    for (const [a, c] of Object.entries(l))
      n.node.style.setProperty(a, c);
    i != null && i.active && n.node.classList.remove(i.active);
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
  sideEffects: /* @__PURE__ */ Hv({
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
  return zo((o, i) => {
    if (t === null)
      return;
    const s = n.get(o);
    if (!s)
      return;
    const a = s.node.current;
    if (!a)
      return;
    const c = Df(i);
    if (!c)
      return;
    const {
      transform: m
    } = Te(i).getComputedStyle(i), h = gf(m);
    if (!h)
      return;
    const v = typeof t == "function" ? t : Xv(t);
    return Ef(a, l.draggable.measure), v({
      active: {
        id: o,
        data: s.data,
        node: a,
        rect: l.draggable.measure(a)
      },
      draggableNodes: n,
      dragOverlay: {
        node: i,
        rect: l.dragOverlay.measure(c)
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
  return (o) => {
    let {
      active: i,
      dragOverlay: s,
      transform: a,
      ...c
    } = o;
    if (!t)
      return;
    const m = {
      x: s.rect.left - i.rect.left,
      y: s.rect.top - i.rect.top
    }, h = {
      scaleX: a.scaleX !== 1 ? i.rect.width * a.scaleX / s.rect.width : 1,
      scaleY: a.scaleY !== 1 ? i.rect.height * a.scaleY / s.rect.height : 1
    }, v = {
      x: a.x - m.x,
      y: a.y - m.y,
      ...h
    }, y = l({
      ...c,
      active: i,
      dragOverlay: s,
      transform: {
        initial: a,
        final: v
      }
    }), [S] = y, x = y[y.length - 1];
    if (JSON.stringify(S) === JSON.stringify(x))
      return;
    const R = r == null ? void 0 : r({
      active: i,
      dragOverlay: s,
      ...c
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
const Yv = /* @__PURE__ */ Y.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: l,
    transition: o,
    modifiers: i,
    wrapperElement: s = "div",
    className: a,
    zIndex: c = 999
  } = e;
  const {
    activatorEvent: m,
    active: h,
    activeNodeRect: v,
    containerNodeRect: y,
    draggableNodes: S,
    droppableContainers: x,
    dragOverlay: R,
    over: f,
    measuringConfiguration: d,
    scrollableAncestors: p,
    scrollableAncestorRects: w,
    windowRect: k
  } = Lf(), N = g.useContext($o), C = Gv(h == null ? void 0 : h.id), E = If(i, {
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
    windowRect: k
  }), T = ga(v), I = Kv({
    config: r,
    draggableNodes: S,
    droppableContainers: x,
    measuringConfiguration: d
  }), O = T ? R.setRef : void 0;
  return Y.createElement(Bv, null, Y.createElement(Fv, {
    animation: I
  }, h && C ? Y.createElement(Vv, {
    key: C,
    id: h.id,
    ref: O,
    as: s,
    activatorEvent: m,
    adjustScale: t,
    className: a,
    transition: o,
    rect: T,
    style: {
      zIndex: c,
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
    const o = t.get(r);
    return o && (n[l] = o), n;
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
  const o = Pf(t, r, n), i = t[l], s = o[l];
  return !s || !i ? null : {
    x: s.left - i.left,
    y: s.top - i.top,
    scaleX: s.width / i.width,
    scaleY: s.height / i.height
  };
}, Tl = {
  scaleX: 1,
  scaleY: 1
}, eg = (e) => {
  var t;
  let {
    activeIndex: n,
    activeNodeRect: r,
    index: l,
    rects: o,
    overIndex: i
  } = e;
  const s = (t = o[n]) != null ? t : r;
  if (!s)
    return null;
  if (l === n) {
    const c = o[i];
    return c ? {
      x: 0,
      y: n < i ? c.top + c.height - (s.top + s.height) : c.top - s.top,
      ...Tl
    } : null;
  }
  const a = tg(o, l, n);
  return l > n && l <= i ? {
    x: 0,
    y: -s.height - a,
    ...Tl
  } : l < n && l >= i ? {
    x: 0,
    y: s.height + a,
    ...Tl
  } : {
    x: 0,
    y: 0,
    ...Tl
  };
};
function tg(e, t, n) {
  const r = e[t], l = e[t - 1], o = e[t + 1];
  return r ? n < t ? l ? r.top - (l.top + l.height) : o ? o.top - (r.top + r.height) : 0 : o ? o.top - (r.top + r.height) : l ? r.top - (l.top + l.height) : 0 : 0;
}
const Mf = "Sortable", Af = /* @__PURE__ */ Y.createContext({
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
    disabled: o = !1
  } = e;
  const {
    active: i,
    dragOverlay: s,
    droppableRects: a,
    over: c,
    measureDroppableContainers: m
  } = Lf(), h = sl(Mf, n), v = s.rect !== null, y = g.useMemo(() => r.map((N) => typeof N == "object" && "id" in N ? N.id : N), [r]), S = i != null, x = i ? y.indexOf(i.id) : -1, R = c ? y.indexOf(c.id) : -1, f = g.useRef(y), d = !Zv(y, f.current), p = R !== -1 && x === -1 || d, w = qv(o);
  st(() => {
    d && S && m(y);
  }, [d, y, S, m]), g.useEffect(() => {
    f.current = y;
  }, [y]);
  const k = g.useMemo(
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
  return Y.createElement(Af.Provider, {
    value: k
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
    items: o,
    newIndex: i,
    previousItems: s,
    previousContainerId: a,
    transition: c
  } = e;
  return !c || !r || s !== o && l === i ? !1 : n ? !0 : i !== l && t === a;
}, og = {
  duration: 200,
  easing: "ease"
}, zf = "transform", ig = /* @__PURE__ */ Zt.Transition.toString({
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
  const [o, i] = g.useState(null), s = g.useRef(n);
  return st(() => {
    if (!t && n !== s.current && r.current) {
      const a = l.current;
      if (a) {
        const c = nr(r.current, {
          ignoreTransform: !0
        }), m = {
          x: a.left - c.left,
          y: a.top - c.top,
          scaleX: a.width / c.width,
          scaleY: a.height / c.height
        };
        (m.x || m.y) && i(m);
      }
    }
    n !== s.current && (s.current = n);
  }, [t, n, r, l]), g.useEffect(() => {
    o && i(null);
  }, [o]), o;
}
function ug(e) {
  let {
    animateLayoutChanges: t = lg,
    attributes: n,
    disabled: r,
    data: l,
    getNewIndex: o = rg,
    id: i,
    strategy: s,
    resizeObserverConfig: a,
    transition: c = og
  } = e;
  const {
    items: m,
    containerId: h,
    activeIndex: v,
    disabled: y,
    disableTransforms: S,
    sortedRects: x,
    overIndex: R,
    useDragOverlay: f,
    strategy: d
  } = g.useContext(Af), p = cg(r, y), w = m.indexOf(i), k = g.useMemo(() => ({
    sortable: {
      containerId: h,
      index: w,
      items: m
    },
    ...l
  }), [h, l, w, m]), N = g.useMemo(() => m.slice(m.indexOf(i)), [m, i]), {
    rect: C,
    node: E,
    isOver: T,
    setNodeRef: I
  } = _f({
    id: i,
    data: k,
    disabled: p.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: N,
      ...a
    }
  }), {
    active: O,
    activatorEvent: te,
    activeNodeRect: re,
    attributes: ce,
    setNodeRef: Ie,
    listeners: Ce,
    isDragging: $,
    over: L,
    setActivatorNodeRef: M,
    transform: z
  } = Mv({
    id: i,
    data: k,
    attributes: {
      ...sg,
      ...n
    },
    disabled: p.draggable
  }), b = xm(I, Ie), F = !!O, ie = F && !S && Rl(v) && Rl(R), A = !f && $, j = A && ie ? z : null, W = ie ? j ?? (s ?? d)({
    rects: x,
    activeNodeRect: re,
    activeIndex: v,
    overIndex: R,
    index: w
  }) : null, Ee = Rl(v) && Rl(R) ? o({
    id: i,
    items: m,
    activeIndex: v,
    overIndex: R
  }) : w, Ae = O == null ? void 0 : O.id, H = g.useRef({
    activeId: Ae,
    items: m,
    newIndex: Ee,
    containerId: h
  }), rr = m !== H.current.items, ut = t({
    active: O,
    containerId: h,
    isDragging: $,
    isSorting: F,
    id: i,
    index: w,
    items: m,
    newIndex: H.current.newIndex,
    previousItems: H.current.items,
    previousContainerId: H.current.containerId,
    transition: c,
    wasDragging: H.current.activeId != null
  }), gn = ag({
    disabled: !ut,
    index: w,
    node: E,
    rect: C
  });
  return g.useEffect(() => {
    F && H.current.newIndex !== Ee && (H.current.newIndex = Ee), h !== H.current.containerId && (H.current.containerId = h), m !== H.current.items && (H.current.items = m);
  }, [F, Ee, h, m]), g.useEffect(() => {
    if (Ae === H.current.activeId)
      return;
    if (Ae && !H.current.activeId) {
      H.current.activeId = Ae;
      return;
    }
    const yn = setTimeout(() => {
      H.current.activeId = Ae;
    }, 50);
    return () => clearTimeout(yn);
  }, [Ae]), {
    active: O,
    activeIndex: v,
    attributes: ce,
    data: k,
    rect: C,
    index: w,
    newIndex: Ee,
    items: m,
    isOver: T,
    isSorting: F,
    isDragging: $,
    listeners: Ce,
    node: E,
    overIndex: R,
    over: L,
    setNodeRef: b,
    setActivatorNodeRef: M,
    setDroppableNodeRef: I,
    setDraggableNodeRef: Ie,
    transform: gn ?? W,
    transition: gt()
  };
  function gt() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      gn || // Or to prevent items jumping to back to their "new" position when items change
      rr && H.current.newIndex === w
    )
      return ig;
    if (!(A && !Fo(te) || !c) && (F || ut))
      return Zt.Transition.toString({
        ...c,
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
function wo(e) {
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
      droppableContainers: o,
      over: i,
      scrollableAncestors: s
    }
  } = t;
  if (dg.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const a = [];
    o.getEnabled().forEach((h) => {
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
    const c = mf({
      collisionRect: r,
      droppableRects: l,
      droppableContainers: a
    });
    let m = hf(c, "id");
    if (m === (i == null ? void 0 : i.id) && c.length > 1 && (m = c[1].id), m != null) {
      const h = o.get(n.id), v = o.get(m), y = v ? l.get(v.id) : null, S = v == null ? void 0 : v.node.current;
      if (S && y && h && v) {
        const R = Uo(S).some((N, C) => s[C] !== N), f = Ff(h, v), d = pg(h, v), p = R || !f ? {
          x: 0,
          y: 0
        } : {
          x: d ? r.width - y.width : 0,
          y: d ? r.height - y.height : 0
        }, w = {
          x: y.left,
          y: y.top
        };
        return p.x && p.y ? w : Zr(w, p);
      }
    }
  }
};
function Ff(e, t) {
  return !wo(e) || !wo(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function pg(e, t) {
  return !wo(e) || !wo(t) || !Ff(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
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
    setNodeRef: o,
    transform: i,
    transition: s,
    isDragging: a
  } = ug({ id: e.id }), c = {
    transform: Zt.Transform.toString(i),
    transition: s
  }, m = e.status === "HANDLE" || e.status === "AI_PROCESSING", h = e.status === "TO_REVIEW" && e.prLink;
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: o,
      style: c,
      className: `ticket-card ${t || a ? "dragging" : ""} ${h ? "success-glow" : ""}`,
      onClick: n,
      ...r,
      ...l,
      children: [
        /* @__PURE__ */ u.jsx("h4", { className: "ticket-title", children: e.title }),
        e.description && /* @__PURE__ */ u.jsx("p", { className: "ticket-description", children: e.description }),
        /* @__PURE__ */ u.jsxs("div", { className: "ticket-meta", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ u.jsx("span", { className: `ticket-priority ${hg[e.priority]}`, children: e.priority }),
            e.targetBranch && /* @__PURE__ */ u.jsxs("span", { className: "ticket-branch", title: `Target: ${e.targetBranch}`, children: [
              /* @__PURE__ */ u.jsx(vg, {}),
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
            onClick: (v) => v.stopPropagation(),
            children: [
              /* @__PURE__ */ u.jsx(mg, {}),
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
function mg() {
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
function vg() {
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
const gg = {
  BACKLOG: "",
  TODO: "",
  HANDLE: "column-handle",
  AI_PROCESSING: "column-ai-processing",
  TO_REVIEW: "column-to-review",
  DONE: "column-done",
  CANCELLED: ""
};
function yg({
  id: e,
  title: t,
  icon: n,
  tickets: r,
  isActive: l = !1,
  onTicketClick: o
}) {
  const { setNodeRef: i, isOver: s } = _f({ id: e });
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: `kanban-column ${gg[e]} ${l ? "active" : ""}`,
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: "column-header", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "column-title", children: [
            /* @__PURE__ */ u.jsx("span", { className: "icon", role: "img", "aria-label": t, children: n }),
            /* @__PURE__ */ u.jsx("span", { children: t })
          ] }),
          /* @__PURE__ */ u.jsx("span", { className: "column-count", children: r.length })
        ] }),
        /* @__PURE__ */ u.jsx(ng, { items: r.map((a) => a.id), strategy: eg, children: /* @__PURE__ */ u.jsx(
          "div",
          {
            ref: i,
            className: `column-body ${s ? "drop-target" : ""}`,
            children: r.length === 0 ? /* @__PURE__ */ u.jsxs("div", { className: "column-empty", children: [
              /* @__PURE__ */ u.jsx("span", { className: "mb-1 text-lg", children: n }),
              /* @__PURE__ */ u.jsx("span", { children: "Drop tickets here" }),
              e === "HANDLE" && /* @__PURE__ */ u.jsx("span", { className: "text-xs mt-1", children: "AI will process these" })
            ] }) : r.map((a) => /* @__PURE__ */ u.jsx(
              Uf,
              {
                ticket: a,
                onClick: () => o(a)
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
  onClose: o,
  onSubmit: i
}) {
  const [s, a] = g.useState(""), [c, m] = g.useState(Sg), [h, v] = g.useState("MEDIUM"), [y, S] = g.useState(r), [x, R] = g.useState(""), [f, d] = g.useState([]), [p, w] = g.useState(""), [k, N] = g.useState(!1), [C, E] = g.useState(!1), [T, I] = g.useState(""), [O, te] = g.useState("auto"), [re, ce] = g.useState(["auto"]), [Ie, Ce] = g.useState(!0), $ = g.useRef(null), L = g.useRef(null);
  g.useEffect(() => {
    var j;
    (j = $.current) == null || j.focus();
  }, []), g.useEffect(() => {
    (async () => {
      try {
        const _ = Gu(), W = await fetch("/api/cursor/models", {
          headers: { "X-CSRF-Token": _ }
        });
        if (W.ok) {
          const Ee = await W.json();
          ce(Ee.models || ["auto"]);
        }
      } catch (_) {
        console.error("Failed to fetch models:", _);
      } finally {
        Ce(!1);
      }
    })();
  }, []), g.useEffect(() => {
    const j = (_) => {
      _.key === "Escape" && o(), (_.metaKey || _.ctrlKey) && _.key === "Enter" && (_.preventDefault(), z(_));
    };
    return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }, [o, s, c, h, y]);
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
    let W = 0;
    for (const Ae of _)
      j.includes(Ae) && W++;
    return W >= 5 ? !1 : j.replace(/##\s*[A-Za-z ]+\s*/g, "").replace(/-\s*\[\s*\]\s*/g, "").replace(/\s+/g, " ").trim().length >= 15;
  }, z = g.useCallback(
    async (j) => {
      var _;
      if (j.preventDefault(), I(""), !s.trim()) {
        I("Title is required"), (_ = $.current) == null || _.focus();
        return;
      }
      if (!c.trim()) {
        I("Description is required - the AI needs context to work!");
        return;
      }
      if (!M(c)) {
        I("Please fill in the description template with actual task details. The AI needs this information to implement the feature correctly.");
        return;
      }
      E(!0);
      try {
        const W = Gu(), Ee = await fetch(`/api/tickets/${e}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": W
          },
          body: JSON.stringify({
            title: s.trim(),
            description: c.trim(),
            priority: h,
            status: "BACKLOG",
            targetBranch: y,
            assigneeId: x || void 0,
            labels: f,
            aiModel: O !== "auto" ? O : void 0
          })
        });
        if (!Ee.ok) {
          const H = await Ee.json().catch(() => ({}));
          throw new Error(H.message || "Failed to create ticket");
        }
        const Ae = await Ee.json();
        i(Ae);
      } catch (W) {
        I(W instanceof Error ? W.message : "Failed to create ticket");
      } finally {
        E(!1);
      }
    },
    [e, s, c, h, y, x, f, O, i]
  ), b = g.useCallback(() => {
    const j = p.trim().toLowerCase();
    j && !f.includes(j) && (d([...f, j]), w(""));
  }, [p, f]), F = g.useCallback((j) => {
    d(f.filter((_) => _ !== j));
  }, [f]), ie = g.useCallback((j) => {
    j.key === "Enter" && (j.preventDefault(), b());
  }, [b]), A = M(c);
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: "modal-overlay",
      onClick: (j) => {
        j.target === j.currentTarget && o();
      },
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "new-ticket-title",
      children: /* @__PURE__ */ u.jsxs("div", { ref: L, className: "ticket-modal", onClick: (j) => j.stopPropagation(), children: [
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
                onClick: o,
                "aria-label": "Close modal",
                children: /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ u.jsx("path", { d: "M18 6L6 18M6 6l12 12" }) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("form", { onSubmit: z, className: "ticket-modal-form", children: [
          T && /* @__PURE__ */ u.jsxs("div", { className: "ticket-error", children: [
            /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ u.jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ u.jsx("path", { d: "M12 8v4M12 16h.01" })
            ] }),
            T
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
            /* @__PURE__ */ u.jsxs("label", { className: "ticket-label", children: [
              "Title ",
              /* @__PURE__ */ u.jsx("span", { className: "text-red-400", children: "*" })
            ] }),
            /* @__PURE__ */ u.jsx(
              "input",
              {
                ref: $,
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
                onChange: (j) => m(j.target.value),
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
              /* @__PURE__ */ u.jsx("div", { className: "ticket-priority-selector", children: wg.map((j) => /* @__PURE__ */ u.jsxs(
                "button",
                {
                  type: "button",
                  className: `ticket-priority-btn ${h === j.value ? "active" : ""} ${j.color}`,
                  onClick: () => v(j.value),
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
              Ie ? /* @__PURE__ */ u.jsxs("div", { className: "ticket-model-loading", children: [
                /* @__PURE__ */ u.jsx("span", { className: "ticket-spinner-small" }),
                "Loading models..."
              ] }) : /* @__PURE__ */ u.jsx(
                "select",
                {
                  className: "ticket-select",
                  value: O,
                  onChange: (j) => te(j.target.value),
                  children: re.map((j) => {
                    const _ = xg[j] || {
                      label: j.replace(/-/g, " ").replace(/\b\w/g, (W) => W.toUpperCase()),
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
                  onClick: () => S(j.branch),
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
                  onChange: (j) => S(j.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs(
            "button",
            {
              type: "button",
              className: "ticket-advanced-toggle",
              onClick: () => N(!k),
              children: [
                /* @__PURE__ */ u.jsx(
                  "svg",
                  {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    className: `w-4 h-4 transition-transform ${k ? "rotate-90" : ""}`,
                    children: /* @__PURE__ */ u.jsx("path", { d: "M9 18l6-6-6-6" })
                  }
                ),
                /* @__PURE__ */ u.jsx("span", { children: "More options" })
              ]
            }
          ),
          k && /* @__PURE__ */ u.jsxs("div", { className: "ticket-advanced-section", children: [
            l.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ u.jsx("label", { className: "ticket-label", children: "Assignee" }),
              /* @__PURE__ */ u.jsxs("div", { className: "ticket-assignee-selector", children: [
                /* @__PURE__ */ u.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `ticket-assignee-btn ${x ? "" : "active"}`,
                    onClick: () => R(""),
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
                    onClick: () => R(j.id),
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
                /* @__PURE__ */ u.jsx("div", { className: "ticket-labels-list", children: f.map((j) => /* @__PURE__ */ u.jsxs("span", { className: "ticket-label-tag", children: [
                  j,
                  /* @__PURE__ */ u.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => F(j),
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
                    value: p,
                    onChange: (j) => w(j.target.value),
                    onKeyDown: ie,
                    onBlur: b
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
                  onChange: (j) => S(j.target.value)
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
                onClick: o,
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
function jg({
  agentId: e,
  ticketId: t,
  ticketTitle: n,
  ticketStatus: r,
  onStatusChange: l,
  onStop: o,
  onFollowupSent: i,
  onValidate: s
}) {
  var M, z, b, F, ie;
  const [a, c] = g.useState(null), [m, h] = g.useState([]), [v, y] = g.useState(!0), [S, x] = g.useState(null), [R, f] = g.useState(!0), [d, p] = g.useState(!1), [w, k] = g.useState(!1), [N, C] = g.useState(""), [E, T] = g.useState(!1), I = g.useRef(null), O = g.useRef(null), te = g.useCallback(async () => {
    if (!(w || !window.confirm("Mark this ticket as Done? This confirms the AI work is complete and accepted."))) {
      k(!0);
      try {
        const j = vr(), _ = await fetch(`/api/tickets/${t}/validate`, {
          method: "POST",
          headers: {
            "X-CSRF-Token": j,
            "Content-Type": "application/json"
          }
        });
        if (!_.ok) {
          const W = await _.json();
          throw new Error(W.error || "Failed to validate ticket");
        }
        O.current && (clearInterval(O.current), O.current = null), s && s();
      } catch (j) {
        console.error("Validate error:", j), x(j instanceof Error ? j.message : "Failed to validate ticket");
      } finally {
        k(!1);
      }
    }
  }, [t, w, s]), re = g.useCallback(async () => {
    if (!(d || !window.confirm("Are you sure you want to stop the AI agent? This cannot be undone."))) {
      p(!0);
      try {
        const j = vr(), _ = await fetch(`/api/cursor/agents/${e}/stop`, {
          method: "POST",
          headers: {
            "X-CSRF-Token": j,
            "Content-Type": "application/json"
          }
        });
        if (!_.ok) {
          const W = await _.json();
          throw new Error(W.error || "Failed to stop agent");
        }
        c((W) => W ? { ...W, status: "CANCELLED" } : null), O.current && (clearInterval(O.current), O.current = null), l && l("CANCELLED"), o && o();
      } catch (j) {
        console.error("Stop agent error:", j), x(j instanceof Error ? j.message : "Failed to stop agent");
      } finally {
        p(!1);
      }
    }
  }, [e, d, l, o]), ce = g.useCallback(async () => {
    if (!(!N.trim() || E)) {
      T(!0);
      try {
        const A = vr(), j = await fetch(`/api/cursor/agents/${e}/followup`, {
          method: "POST",
          headers: {
            "X-CSRF-Token": A,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: { text: N.trim() }
          })
        });
        if (!j.ok) {
          const _ = await j.json();
          throw new Error(_.error || "Failed to send follow-up");
        }
        h((_) => [
          ..._,
          {
            id: `local-${Date.now()}`,
            type: "user_message",
            text: N.trim()
          }
        ]), C(""), c((_) => _ ? { ..._, status: "RUNNING" } : null), O.current || (O.current = setInterval(() => {
          Ie(), Ce();
        }, 3e3)), i && i();
      } catch (A) {
        console.error("Follow-up error:", A), x(A instanceof Error ? A.message : "Failed to send follow-up");
      } finally {
        T(!1);
      }
    }
  }, [e, N, E, i]), Ie = g.useCallback(async () => {
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
      c(_), l && _.status && l(_.status), (_.status === "FINISHED" || _.status === "ERROR" || _.status === "CANCELLED") && O.current && (clearInterval(O.current), O.current = null);
    } catch (A) {
      console.error("Status fetch error:", A), x("Failed to fetch agent status");
    }
  }, [e, l]), Ce = g.useCallback(async () => {
    try {
      const A = vr(), j = await fetch(`/api/cursor/agents/${e}/conversation`, {
        headers: { "X-CSRF-Token": A }
      });
      if (!j.ok) {
        if (j.status === 404) return;
        throw new Error("Failed to fetch conversation");
      }
      const _ = await j.json();
      _.messages && _.messages.length > 0 && h(_.messages), I.current && setTimeout(() => {
        I.current && (I.current.scrollTop = I.current.scrollHeight);
      }, 100);
    } catch (A) {
      console.error("Conversation fetch error:", A);
    }
  }, [e]);
  if (g.useEffect(() => (y(!0), x(null), (async () => {
    await Promise.all([Ie(), Ce()]), y(!1);
  })(), O.current = setInterval(() => {
    Ie(), Ce();
  }, 3e3), () => {
    O.current && clearInterval(O.current);
  }), [e, Ie, Ce]), g.useEffect(() => {
    I.current && m.length > 0 && (I.current.scrollTop = I.current.scrollHeight);
  }, [m]), v)
    return /* @__PURE__ */ u.jsx("div", { className: "agent-status-panel loading", children: /* @__PURE__ */ u.jsxs("div", { className: "agent-status-header", children: [
      /* @__PURE__ */ u.jsx("div", { className: "agent-spinner" }),
      /* @__PURE__ */ u.jsx("span", { children: "Connecting to Cursor Agent..." })
    ] }) });
  if (S) {
    const A = r === "TO_REVIEW";
    return /* @__PURE__ */ u.jsxs("div", { className: "agent-status-panel error", children: [
      /* @__PURE__ */ u.jsx("div", { className: "agent-status-header", children: /* @__PURE__ */ u.jsxs("span", { className: "text-red-400", children: [
        "❌ ",
        S
      ] }) }),
      A && /* @__PURE__ */ u.jsx("div", { className: "agent-review-actions", style: { padding: "1rem" }, children: /* @__PURE__ */ u.jsx(
        "button",
        {
          className: "validate-btn",
          onClick: te,
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
  const $ = (a == null ? void 0 : a.status) || "QUEUED", L = $ === "FINISHED" || r === "TO_REVIEW";
  return /* @__PURE__ */ u.jsxs("div", { className: `agent-status-panel ${$.toLowerCase()}`, children: [
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        className: "agent-status-header",
        onClick: () => f(!R),
        "aria-expanded": R,
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: "agent-status-info", children: [
            /* @__PURE__ */ u.jsx("span", { className: "agent-status-indicator", children: $ === "RUNNING" ? /* @__PURE__ */ u.jsx("span", { className: "agent-spinner-small" }) : Eg[$] }),
            /* @__PURE__ */ u.jsx("span", { className: `agent-status-text ${Cg[$]}`, children: Ng[$] }),
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
            ($ === "RUNNING" || $ === "QUEUED") && /* @__PURE__ */ u.jsxs(
              "button",
              {
                className: "agent-stop-btn",
                onClick: (A) => {
                  A.stopPropagation(), re();
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
            ((b = a == null ? void 0 : a.target) == null ? void 0 : b.prUrl) && /* @__PURE__ */ u.jsx(
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
                className: `agent-expand-icon ${R ? "expanded" : ""}`,
                children: /* @__PURE__ */ u.jsx("path", { d: "M6 9l6 6 6-6" })
              }
            )
          ] })
        ]
      }
    ),
    R && /* @__PURE__ */ u.jsxs("div", { className: "agent-status-content", children: [
      (a == null ? void 0 : a.summary) && /* @__PURE__ */ u.jsxs("div", { className: "agent-summary", children: [
        /* @__PURE__ */ u.jsx("h4", { children: "Summary" }),
        /* @__PURE__ */ u.jsx("p", { children: a.summary })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "agent-terminal", ref: I, children: [
        /* @__PURE__ */ u.jsxs("div", { className: "agent-terminal-header", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "terminal-dots", children: [
            /* @__PURE__ */ u.jsx("span", { className: "dot red" }),
            /* @__PURE__ */ u.jsx("span", { className: "dot yellow" }),
            /* @__PURE__ */ u.jsx("span", { className: "dot green" })
          ] }),
          /* @__PURE__ */ u.jsx("span", { className: "terminal-title", children: "Agent Conversation" })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "agent-terminal-body", children: [
          m.length === 0 ? /* @__PURE__ */ u.jsxs("div", { className: "terminal-empty", children: [
            $ === "QUEUED" ? "Waiting for agent to start..." : $ === "RUNNING" ? "Agent is processing..." : "No conversation data available.",
            /* @__PURE__ */ u.jsx("span", { className: "cursor-blink", children: "▋" })
          ] }) : m.map((A, j) => /* @__PURE__ */ u.jsxs(
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
          $ === "RUNNING" && m.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "terminal-cursor", children: [
            /* @__PURE__ */ u.jsx("span", { className: "prompt-agent", children: "Cloud Agent :>" }),
            /* @__PURE__ */ u.jsx("span", { className: "cursor-blink", children: "▋" })
          ] })
        ] })
      ] }),
      L && /* @__PURE__ */ u.jsxs("div", { className: "agent-review-actions", children: [
        /* @__PURE__ */ u.jsx(
          "button",
          {
            className: "validate-btn",
            onClick: te,
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
                value: N,
                onChange: (A) => C(A.target.value),
                placeholder: "Please also add unit tests for the translation changes...",
                rows: 3,
                disabled: E,
                onKeyDown: (A) => {
                  A.key === "Enter" && !A.shiftKey && N.trim() && (A.preventDefault(), ce());
                }
              }
            ),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                className: "followup-btn",
                onClick: ce,
                disabled: !N.trim() || E,
                children: E ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
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
        ((F = a == null ? void 0 : a.source) == null ? void 0 : F.repository) && /* @__PURE__ */ u.jsxs("div", { className: "agent-meta-item", children: [
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
        ((ie = a == null ? void 0 : a.source) == null ? void 0 : ie.ref) && /* @__PURE__ */ u.jsxs("div", { className: "agent-meta-item", children: [
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
const Dg = {
  BACKLOG: "Backlog",
  TODO: "To Do",
  HANDLE: "Handle (AI Queue)",
  AI_PROCESSING: "AI Processing",
  TO_REVIEW: "To Review",
  DONE: "Done",
  CANCELLED: "Cancelled"
};
function Rg({
  ticket: e,
  projectId: t,
  onClose: n,
  onUpdate: r
}) {
  const [l, o] = g.useState(!1), [i, s] = g.useState(e.title), [a, c] = g.useState(e.description || ""), [m, h] = g.useState(e.priority), [v, y] = g.useState(e.status), [S, x] = g.useState(!1), [R, f] = g.useState(""), [d, p] = g.useState(null), w = g.useCallback((T) => {
    p(T), T === "FINISHED" && e.status === "AI_PROCESSING" ? r({ ...e, status: "TO_REVIEW" }) : T === "ERROR" && e.status === "AI_PROCESSING" && r({ ...e, status: "TODO" });
  }, [e, r]), k = g.useCallback(async () => {
    if (!i.trim()) {
      f("Title is required");
      return;
    }
    x(!0), f("");
    try {
      const T = Yu(), I = await fetch(`/api/tickets/${t}/${e.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": T
        },
        body: JSON.stringify({
          title: i.trim(),
          description: a.trim(),
          priority: m,
          status: v
        })
      });
      if (!I.ok)
        throw new Error("Failed to update ticket");
      const O = await I.json();
      r(O);
    } catch (T) {
      f(T instanceof Error ? T.message : "Failed to update ticket");
    } finally {
      x(!1);
    }
  }, [t, e.id, i, a, m, v, r]), N = g.useCallback(async () => {
    if (confirm("Are you sure you want to delete this ticket?")) {
      x(!0);
      try {
        const T = Yu();
        if (!(await fetch(`/api/tickets/${t}/${e.id}`, {
          method: "DELETE",
          headers: {
            "X-CSRF-Token": T
          }
        })).ok)
          throw new Error("Failed to delete ticket");
        r({ ...e, status: "CANCELLED" }), n();
      } catch (T) {
        f(T instanceof Error ? T.message : "Failed to delete ticket");
      } finally {
        x(!1);
      }
    }
  }, [t, e, r, n]), C = g.useCallback(
    (T) => {
      T.key === "Escape" && n();
    },
    [n]
  ), E = e.status === "HANDLE" || e.status === "AI_PROCESSING";
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
          onClick: (T) => T.stopPropagation(),
          children: [
            /* @__PURE__ */ u.jsxs("div", { className: "modal-header", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "flex-1", children: [
                l ? /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-input text-lg font-semibold",
                    value: i,
                    onChange: (T) => s(T.target.value),
                    autoFocus: !0
                  }
                ) : /* @__PURE__ */ u.jsx("h2", { className: "text-lg font-semibold", children: e.title }),
                /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
                  /* @__PURE__ */ u.jsx("span", { className: `status-badge status-${e.status.toLowerCase()}`, children: Dg[e.status] }),
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
              R && /* @__PURE__ */ u.jsx("div", { className: "mb-4 p-3 text-sm rounded-md bg-destructive/10 text-destructive border border-destructive/20", children: R }),
              e.agentId && /* @__PURE__ */ u.jsx("div", { className: "mb-4", children: /* @__PURE__ */ u.jsx(
                jg,
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
              E && !e.agentId && /* @__PURE__ */ u.jsxs("div", { className: "mb-4 p-4 rounded-md bg-status-processing/10 border border-status-processing/20", children: [
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
                    onChange: (T) => c(T.target.value),
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
                      value: m,
                      onChange: (T) => h(T.target.value),
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
                      value: v,
                      onChange: (T) => y(T.target.value),
                      disabled: E,
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
                  onClick: N,
                  disabled: S,
                  children: "Delete"
                }
              ),
              /* @__PURE__ */ u.jsx("div", { className: "flex-1" }),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-secondary",
                  onClick: () => {
                    o(!1), s(e.title), c(e.description || ""), h(e.priority), y(e.status);
                  },
                  disabled: S,
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-primary",
                  onClick: k,
                  disabled: S,
                  children: S ? "Saving..." : "Save Changes"
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
                  onClick: () => o(!0),
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
  { id: "DONE", title: "Done", icon: "✅" }
];
function Ig() {
  const [e, t] = g.useState(null), [n, r] = g.useState(null), [l, o] = g.useState(null), [i, s] = g.useState(!1), [a, c] = g.useState("BACKLOG");
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
        const k = w.target.dataset.column;
        k && (c(k), document.querySelectorAll(".tab-btn").forEach((N) => {
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
      if (!(n || l || i))
        try {
          const w = await fetch(`/project/${e.projectId}/board/state`);
          if (!w.ok) return;
          const k = await w.json();
          (k.tickets.length !== e.tickets.length || k.tickets.some((C) => {
            const E = e.tickets.find((T) => T.id === C.id);
            return !E || E.status !== C.status || E.title !== C.title || E.assigneeId !== C.assigneeId;
          }) || ((d = k.members) == null ? void 0 : d.length) !== ((p = e.members) == null ? void 0 : p.length)) && (t(k), gr("Board updated", "success"));
        } catch (w) {
          console.debug("Sync poll failed:", w);
        }
    }, 5e3);
    return () => clearInterval(f);
  }, [e == null ? void 0 : e.projectId, e == null ? void 0 : e.tickets, n, l, i]);
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
      const w = d.id, k = p.id, N = e.tickets.find((C) => C.id === w);
      if (!(!N || N.status === k)) {
        t((C) => C && {
          ...C,
          tickets: C.tickets.map(
            (E) => E.id === w ? { ...E, status: k } : E
          )
        }), k === "HANDLE" && gr(`Ticket #${N.id.slice(-4)} dispatched to Cursor Agent`, "warning");
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
              body: JSON.stringify({ status: k })
            }
          )).ok)
            throw new Error("Failed to update ticket status");
          k === "HANDLE" && gr("AI agent started processing", "success");
        } catch (C) {
          console.error("Failed to update ticket:", C), gr("Failed to update ticket", "error"), t((E) => E && {
            ...E,
            tickets: E.tickets.map(
              (T) => T.id === w ? { ...T, status: N.status } : T
            )
          });
        }
      }
    },
    [e]
  ), S = g.useCallback((f) => {
    o(f);
  }, []), x = g.useCallback((f) => {
    t((d) => d && {
      ...d,
      tickets: d.tickets.map(
        (p) => p.id === f.id ? f : p
      )
    }), o(null);
  }, []), R = g.useCallback((f) => {
    t((d) => d && {
      ...d,
      tickets: [...d.tickets, f]
    }), s(!1), gr("Ticket created successfully", "success");
  }, []);
  return e ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs(
      _v,
      {
        sensors: m,
        collisionDetection: mf,
        onDragStart: h,
        onDragOver: v,
        onDragEnd: y,
        children: [
          /* @__PURE__ */ u.jsx("div", { className: "kanban-container", children: Tg.map((f) => /* @__PURE__ */ u.jsx(
            yg,
            {
              id: f.id,
              title: f.title,
              icon: f.icon,
              tickets: e.tickets.filter((d) => d.status === f.id),
              isActive: a === f.id,
              onTicketClick: S
            },
            f.id
          )) }),
          /* @__PURE__ */ u.jsx(Yv, { children: n ? /* @__PURE__ */ u.jsx(
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
    i && /* @__PURE__ */ u.jsx(
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
    l && /* @__PURE__ */ u.jsx(
      Rg,
      {
        ticket: l,
        projectId: e.projectId,
        onClose: () => o(null),
        onUpdate: x
      }
    )
  ] }) : /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ u.jsx("div", { className: "ai-spinner" }) });
}
function Lg() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
function gr(e, t = "success") {
  typeof window < "u" && window.showToast && window.showToast(e, t);
}
function Ju() {
  const e = document.getElementById("kanban-board");
  if (!e) {
    console.warn("Kanban board container not found");
    return;
  }
  Si.createRoot(e).render(
    /* @__PURE__ */ u.jsx(Y.StrictMode, { children: /* @__PURE__ */ u.jsx(Ig, {}) })
  );
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Ju) : Ju();
