function Kf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ba = { exports: {} }, wo = {}, Ja = { exports: {} }, z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr = Symbol.for("react.element"), Xf = Symbol.for("react.portal"), Yf = Symbol.for("react.fragment"), Gf = Symbol.for("react.strict_mode"), bf = Symbol.for("react.profiler"), Jf = Symbol.for("react.provider"), Zf = Symbol.for("react.context"), qf = Symbol.for("react.forward_ref"), ep = Symbol.for("react.suspense"), tp = Symbol.for("react.memo"), np = Symbol.for("react.lazy"), Nu = Symbol.iterator;
function rp(e) {
  return e === null || typeof e != "object" ? null : (e = Nu && e[Nu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Za = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, qa = Object.assign, ec = {};
function Jn(e, t, n) {
  this.props = e, this.context = t, this.refs = ec, this.updater = n || Za;
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function tc() {
}
tc.prototype = Jn.prototype;
function vs(e, t, n) {
  this.props = e, this.context = t, this.refs = ec, this.updater = n || Za;
}
var gs = vs.prototype = new tc();
gs.constructor = vs;
qa(gs, Jn.prototype);
gs.isPureReactComponent = !0;
var Du = Array.isArray, nc = Object.prototype.hasOwnProperty, ys = { current: null }, rc = { key: !0, ref: !0, __self: !0, __source: !0 };
function lc(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) nc.call(t, r) && !rc.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) l[r] === void 0 && (l[r] = s[r]);
  return { $$typeof: Zr, type: e, key: o, ref: i, props: l, _owner: ys.current };
}
function lp(e, t) {
  return { $$typeof: Zr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ws(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zr;
}
function op(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ru = /\/+/g;
function Wo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? op("" + e.key) : t.toString(36);
}
function jl(e, t, n, r, l) {
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
        case Zr:
        case Xf:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Wo(i, 0) : r, Du(l) ? (n = "", e != null && (n = e.replace(Ru, "$&/") + "/"), jl(l, t, n, "", function(a) {
    return a;
  })) : l != null && (ws(l) && (l = lp(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ru, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Du(e)) for (var s = 0; s < e.length; s++) {
    o = e[s];
    var u = r + Wo(o, s);
    i += jl(o, t, n, u, l);
  }
  else if (u = rp(e), typeof u == "function") for (e = u.call(e), s = 0; !(o = e.next()).done; ) o = o.value, u = r + Wo(o, s++), i += jl(o, t, n, u, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function al(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return jl(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function ip(e) {
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
var xe = { current: null }, _l = { transition: null }, sp = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: _l, ReactCurrentOwner: ys };
function oc() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = { map: al, forEach: function(e, t, n) {
  al(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return al(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return al(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ws(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
z.Component = Jn;
z.Fragment = Yf;
z.Profiler = bf;
z.PureComponent = vs;
z.StrictMode = Gf;
z.Suspense = ep;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sp;
z.act = oc;
z.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = qa({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = ys.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (u in t) nc.call(t, u) && !rc.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: Zr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
z.createContext = function(e) {
  return e = { $$typeof: Zf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Jf, _context: e }, e.Consumer = e;
};
z.createElement = lc;
z.createFactory = function(e) {
  var t = lc.bind(null, e);
  return t.type = e, t;
};
z.createRef = function() {
  return { current: null };
};
z.forwardRef = function(e) {
  return { $$typeof: qf, render: e };
};
z.isValidElement = ws;
z.lazy = function(e) {
  return { $$typeof: np, _payload: { _status: -1, _result: e }, _init: ip };
};
z.memo = function(e, t) {
  return { $$typeof: tp, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function(e) {
  var t = _l.transition;
  _l.transition = {};
  try {
    e();
  } finally {
    _l.transition = t;
  }
};
z.unstable_act = oc;
z.useCallback = function(e, t) {
  return xe.current.useCallback(e, t);
};
z.useContext = function(e) {
  return xe.current.useContext(e);
};
z.useDebugValue = function() {
};
z.useDeferredValue = function(e) {
  return xe.current.useDeferredValue(e);
};
z.useEffect = function(e, t) {
  return xe.current.useEffect(e, t);
};
z.useId = function() {
  return xe.current.useId();
};
z.useImperativeHandle = function(e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function(e, t) {
  return xe.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function(e, t) {
  return xe.current.useLayoutEffect(e, t);
};
z.useMemo = function(e, t) {
  return xe.current.useMemo(e, t);
};
z.useReducer = function(e, t, n) {
  return xe.current.useReducer(e, t, n);
};
z.useRef = function(e) {
  return xe.current.useRef(e);
};
z.useState = function(e) {
  return xe.current.useState(e);
};
z.useSyncExternalStore = function(e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function() {
  return xe.current.useTransition();
};
z.version = "18.3.1";
Ja.exports = z;
var g = Ja.exports;
const Q = /* @__PURE__ */ Kf(g);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var up = g, ap = Symbol.for("react.element"), cp = Symbol.for("react.fragment"), dp = Object.prototype.hasOwnProperty, fp = up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, pp = { key: !0, ref: !0, __self: !0, __source: !0 };
function ic(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) dp.call(t, r) && !pp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: ap, type: e, key: o, ref: i, props: l, _owner: fp.current };
}
wo.Fragment = cp;
wo.jsx = ic;
wo.jsxs = ic;
ba.exports = wo;
var v = ba.exports, Si = {}, sc = { exports: {} }, Fe = {}, uc = { exports: {} }, ac = {};
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
  function t(T, L) {
    var O = T.length;
    T.push(L);
    e: for (; 0 < O; ) {
      var $ = O - 1 >>> 1, A = T[$];
      if (0 < l(A, L)) T[$] = L, T[O] = A, O = $;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var L = T[0], O = T.pop();
    if (O !== L) {
      T[0] = O;
      e: for (var $ = 0, A = T.length, Ee = A >>> 1; $ < Ee; ) {
        var ye = 2 * ($ + 1) - 1, dt = T[ye], Z = ye + 1, ft = T[Z];
        if (0 > l(dt, O)) Z < A && 0 > l(ft, dt) ? (T[$] = ft, T[Z] = O, $ = Z) : (T[$] = dt, T[ye] = O, $ = ye);
        else if (Z < A && 0 > l(ft, O)) T[$] = ft, T[Z] = O, $ = Z;
        else break e;
      }
    }
    return L;
  }
  function l(T, L) {
    var O = T.sortIndex - L.sortIndex;
    return O !== 0 ? O : T.id - L.id;
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
  var u = [], a = [], h = 1, f = null, m = 3, y = !1, C = !1, S = !1, R = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(T) {
    for (var L = n(a); L !== null; ) {
      if (L.callback === null) r(a);
      else if (L.startTime <= T) r(a), L.sortIndex = L.expirationTime, t(u, L);
      else break;
      L = n(a);
    }
  }
  function w(T) {
    if (S = !1, p(T), !C) if (n(u) !== null) C = !0, Dt(x);
    else {
      var L = n(a);
      L !== null && ue(w, L.startTime - T);
    }
  }
  function x(T, L) {
    C = !1, S && (S = !1, d(N), N = -1), y = !0;
    var O = m;
    try {
      for (p(L), f = n(u); f !== null && (!(f.expirationTime > L) || T && !I()); ) {
        var $ = f.callback;
        if (typeof $ == "function") {
          f.callback = null, m = f.priorityLevel;
          var A = $(f.expirationTime <= L);
          L = e.unstable_now(), typeof A == "function" ? f.callback = A : f === n(u) && r(u), p(L);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var Ee = !0;
      else {
        var ye = n(a);
        ye !== null && ue(w, ye.startTime - L), Ee = !1;
      }
      return Ee;
    } finally {
      f = null, m = O, y = !1;
    }
  }
  var k = !1, E = null, N = -1, P = 5, _ = -1;
  function I() {
    return !(e.unstable_now() - _ < P);
  }
  function ie() {
    if (E !== null) {
      var T = e.unstable_now();
      _ = T;
      var L = !0;
      try {
        L = E(!0, T);
      } finally {
        L ? se() : (k = !1, E = null);
      }
    } else k = !1;
  }
  var se;
  if (typeof c == "function") se = function() {
    c(ie);
  };
  else if (typeof MessageChannel < "u") {
    var _e = new MessageChannel(), tn = _e.port2;
    _e.port1.onmessage = ie, se = function() {
      tn.postMessage(null);
    };
  } else se = function() {
    R(ie, 0);
  };
  function Dt(T) {
    E = T, k || (k = !0, se());
  }
  function ue(T, L) {
    N = R(function() {
      T(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    C || y || (C = !0, Dt(x));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(T) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = m;
    }
    var O = m;
    m = L;
    try {
      return T();
    } finally {
      m = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, L) {
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
    var O = m;
    m = T;
    try {
      return L();
    } finally {
      m = O;
    }
  }, e.unstable_scheduleCallback = function(T, L, O) {
    var $ = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? $ + O : $) : O = $, T) {
      case 1:
        var A = -1;
        break;
      case 2:
        A = 250;
        break;
      case 5:
        A = 1073741823;
        break;
      case 4:
        A = 1e4;
        break;
      default:
        A = 5e3;
    }
    return A = O + A, T = { id: h++, callback: L, priorityLevel: T, startTime: O, expirationTime: A, sortIndex: -1 }, O > $ ? (T.sortIndex = O, t(a, T), n(u) === null && T === n(a) && (S ? (d(N), N = -1) : S = !0, ue(w, O - $))) : (T.sortIndex = A, t(u, T), C || y || (C = !0, Dt(x))), T;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(T) {
    var L = m;
    return function() {
      var O = m;
      m = L;
      try {
        return T.apply(this, arguments);
      } finally {
        m = O;
      }
    };
  };
})(ac);
uc.exports = ac;
var hp = uc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mp = g, Ae = hp;
function D(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var cc = /* @__PURE__ */ new Set(), Lr = {};
function mn(e, t) {
  Wn(e, t), Wn(e + "Capture", t);
}
function Wn(e, t) {
  for (Lr[e] = t, e = 0; e < t.length; e++) cc.add(t[e]);
}
var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xi = Object.prototype.hasOwnProperty, vp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Tu = {}, ju = {};
function gp(e) {
  return xi.call(ju, e) ? !0 : xi.call(Tu, e) ? !1 : vp.test(e) ? ju[e] = !0 : (Tu[e] = !0, !1);
}
function yp(e, t, n, r) {
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
function wp(e, t, n, r) {
  if (t === null || typeof t > "u" || yp(e, t, n, r)) return !0;
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
function ke(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  fe[e] = new ke(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  fe[t] = new ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  fe[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  fe[e] = new ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  fe[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  fe[e] = new ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  fe[e] = new ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  fe[e] = new ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  fe[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ss = /[\-:]([a-z])/g;
function xs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ss,
    xs
  );
  fe[t] = new ke(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ss, xs);
  fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ss, xs);
  fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ks(e, t, n, r) {
  var l = fe.hasOwnProperty(t) ? fe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (wp(t, n, l, r) && (n = null), r || l === null ? gp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nt = mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, cl = Symbol.for("react.element"), En = Symbol.for("react.portal"), Nn = Symbol.for("react.fragment"), Cs = Symbol.for("react.strict_mode"), ki = Symbol.for("react.profiler"), dc = Symbol.for("react.provider"), fc = Symbol.for("react.context"), Es = Symbol.for("react.forward_ref"), Ci = Symbol.for("react.suspense"), Ei = Symbol.for("react.suspense_list"), Ns = Symbol.for("react.memo"), It = Symbol.for("react.lazy"), pc = Symbol.for("react.offscreen"), _u = Symbol.iterator;
function ur(e) {
  return e === null || typeof e != "object" ? null : (e = _u && e[_u] || e["@@iterator"], typeof e == "function" ? e : null);
}
var G = Object.assign, Qo;
function vr(e) {
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
      } catch (a) {
        var r = a;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (a) {
        r = a;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (var l = a.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, s = o.length - 1; 1 <= i && 0 <= s && l[i] !== o[s]; ) s--;
      for (; 1 <= i && 0 <= s; i--, s--) if (l[i] !== o[s]) {
        if (i !== 1 || s !== 1)
          do
            if (i--, s--, 0 > s || l[i] !== o[s]) {
              var u = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= i && 0 <= s);
        break;
      }
    }
  } finally {
    Ko = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? vr(e) : "";
}
function Sp(e) {
  switch (e.tag) {
    case 5:
      return vr(e.type);
    case 16:
      return vr("Lazy");
    case 13:
      return vr("Suspense");
    case 19:
      return vr("SuspenseList");
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
function Ni(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Nn:
      return "Fragment";
    case En:
      return "Portal";
    case ki:
      return "Profiler";
    case Cs:
      return "StrictMode";
    case Ci:
      return "Suspense";
    case Ei:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case fc:
      return (e.displayName || "Context") + ".Consumer";
    case dc:
      return (e._context.displayName || "Context") + ".Provider";
    case Es:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ns:
      return t = e.displayName || null, t !== null ? t : Ni(e.type) || "Memo";
    case It:
      t = e._payload, e = e._init;
      try {
        return Ni(e(t));
      } catch {
      }
  }
  return null;
}
function xp(e) {
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
      return Ni(t);
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
function Gt(e) {
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
function hc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function kp(e) {
  var t = hc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function dl(e) {
  e._valueTracker || (e._valueTracker = kp(e));
}
function mc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = hc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Hl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Di(e, t) {
  var n = t.checked;
  return G({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Pu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Gt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function vc(e, t) {
  t = t.checked, t != null && ks(e, "checked", t, !1);
}
function Ri(e, t) {
  vc(e, t);
  var n = Gt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ti(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ti(e, t.type, Gt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Lu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ti(e, t, n) {
  (t !== "number" || Hl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var gr = Array.isArray;
function An(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Gt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ji(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return G({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ou(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(D(92));
      if (gr(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Gt(n) };
}
function gc(e, t) {
  var n = Gt(t.value), r = Gt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Iu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function yc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _i(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? yc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var fl, wc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (fl = fl || document.createElement("div"), fl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = fl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
}, Cp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Sr).forEach(function(e) {
  Cp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Sr[t] = Sr[e];
  });
});
function Sc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Sr.hasOwnProperty(e) && Sr[e] ? ("" + t).trim() : t + "px";
}
function xc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Sc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Ep = G({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Pi(e, t) {
  if (t) {
    if (Ep[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(D(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(D(62));
  }
}
function Li(e, t) {
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
var Ii = null, Fn = null, Un = null;
function zu(e) {
  if (e = tl(e)) {
    if (typeof Ii != "function") throw Error(D(280));
    var t = e.stateNode;
    t && (t = Eo(t), Ii(e.stateNode, e.type, t));
  }
}
function kc(e) {
  Fn ? Un ? Un.push(e) : Un = [e] : Fn = e;
}
function Cc() {
  if (Fn) {
    var e = Fn, t = Un;
    if (Un = Fn = null, zu(e), t) for (e = 0; e < t.length; e++) zu(t[e]);
  }
}
function Ec(e, t) {
  return e(t);
}
function Nc() {
}
var Yo = !1;
function Dc(e, t, n) {
  if (Yo) return e(t, n);
  Yo = !0;
  try {
    return Ec(e, t, n);
  } finally {
    Yo = !1, (Fn !== null || Un !== null) && (Nc(), Cc());
  }
}
function Ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Eo(n);
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
var zi = !1;
if (xt) try {
  var ar = {};
  Object.defineProperty(ar, "passive", { get: function() {
    zi = !0;
  } }), window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
} catch {
  zi = !1;
}
function Np(e, t, n, r, l, o, i, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var xr = !1, Vl = null, Wl = !1, Mi = null, Dp = { onError: function(e) {
  xr = !0, Vl = e;
} };
function Rp(e, t, n, r, l, o, i, s, u) {
  xr = !1, Vl = null, Np.apply(Dp, arguments);
}
function Tp(e, t, n, r, l, o, i, s, u) {
  if (Rp.apply(this, arguments), xr) {
    if (xr) {
      var a = Vl;
      xr = !1, Vl = null;
    } else throw Error(D(198));
    Wl || (Wl = !0, Mi = a);
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
function Rc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Mu(e) {
  if (vn(e) !== e) throw Error(D(188));
}
function jp(e) {
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
        if (o === n) return Mu(l), e;
        if (o === r) return Mu(l), t;
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
function Tc(e) {
  return e = jp(e), e !== null ? jc(e) : null;
}
function jc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = jc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _c = Ae.unstable_scheduleCallback, Au = Ae.unstable_cancelCallback, _p = Ae.unstable_shouldYield, Pp = Ae.unstable_requestPaint, J = Ae.unstable_now, Lp = Ae.unstable_getCurrentPriorityLevel, Rs = Ae.unstable_ImmediatePriority, Pc = Ae.unstable_UserBlockingPriority, Ql = Ae.unstable_NormalPriority, Op = Ae.unstable_LowPriority, Lc = Ae.unstable_IdlePriority, So = null, at = null;
function Ip(e) {
  if (at && typeof at.onCommitFiberRoot == "function") try {
    at.onCommitFiberRoot(So, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ze = Math.clz32 ? Math.clz32 : Ap, zp = Math.log, Mp = Math.LN2;
function Ap(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zp(e) / Mp | 0) | 0;
}
var pl = 64, hl = 4194304;
function yr(e) {
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
    s !== 0 ? r = yr(s) : (o &= i, o !== 0 && (r = yr(o)));
  } else i = n & ~l, i !== 0 ? r = yr(i) : o !== 0 && (r = yr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ze(t), l = 1 << n, r |= e[n], t &= ~l;
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
function Up(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Ze(o), s = 1 << i, u = l[i];
    u === -1 ? (!(s & n) || s & r) && (l[i] = Fp(s, t)) : u <= t && (e.expiredLanes |= s), o &= ~s;
  }
}
function Ai(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Oc() {
  var e = pl;
  return pl <<= 1, !(pl & 4194240) && (pl = 64), e;
}
function Go(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ze(t), e[t] = n;
}
function Bp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ze(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function Ts(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var U = 0;
function Ic(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var zc, js, Mc, Ac, Fc, Fi = !1, ml = [], $t = null, Ht = null, Vt = null, zr = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), At = [], $p = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Fu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      $t = null;
      break;
    case "dragenter":
    case "dragleave":
      Ht = null;
      break;
    case "mouseover":
    case "mouseout":
      Vt = null;
      break;
    case "pointerover":
    case "pointerout":
      zr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Mr.delete(t.pointerId);
  }
}
function cr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = tl(t), t !== null && js(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Hp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return $t = cr($t, e, t, n, r, l), !0;
    case "dragenter":
      return Ht = cr(Ht, e, t, n, r, l), !0;
    case "mouseover":
      return Vt = cr(Vt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return zr.set(o, cr(zr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Mr.set(o, cr(Mr.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Uc(e) {
  var t = ln(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Rc(n), t !== null) {
          e.blockedOn = t, Fc(e.priority, function() {
            Mc(n);
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
function Pl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ui(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Oi = r, n.target.dispatchEvent(r), Oi = null;
    } else return t = tl(n), t !== null && js(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Uu(e, t, n) {
  Pl(e) && n.delete(t);
}
function Vp() {
  Fi = !1, $t !== null && Pl($t) && ($t = null), Ht !== null && Pl(Ht) && (Ht = null), Vt !== null && Pl(Vt) && (Vt = null), zr.forEach(Uu), Mr.forEach(Uu);
}
function dr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Fi || (Fi = !0, Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority, Vp)));
}
function Ar(e) {
  function t(l) {
    return dr(l, e);
  }
  if (0 < ml.length) {
    dr(ml[0], e);
    for (var n = 1; n < ml.length; n++) {
      var r = ml[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for ($t !== null && dr($t, e), Ht !== null && dr(Ht, e), Vt !== null && dr(Vt, e), zr.forEach(t), Mr.forEach(t), n = 0; n < At.length; n++) r = At[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < At.length && (n = At[0], n.blockedOn === null); ) Uc(n), n.blockedOn === null && At.shift();
}
var Bn = Nt.ReactCurrentBatchConfig, Xl = !0;
function Wp(e, t, n, r) {
  var l = U, o = Bn.transition;
  Bn.transition = null;
  try {
    U = 1, _s(e, t, n, r);
  } finally {
    U = l, Bn.transition = o;
  }
}
function Qp(e, t, n, r) {
  var l = U, o = Bn.transition;
  Bn.transition = null;
  try {
    U = 4, _s(e, t, n, r);
  } finally {
    U = l, Bn.transition = o;
  }
}
function _s(e, t, n, r) {
  if (Xl) {
    var l = Ui(e, t, n, r);
    if (l === null) oi(e, t, r, Yl, n), Fu(e, r);
    else if (Hp(l, e, t, n, r)) r.stopPropagation();
    else if (Fu(e, r), t & 4 && -1 < $p.indexOf(e)) {
      for (; l !== null; ) {
        var o = tl(l);
        if (o !== null && zc(o), o = Ui(e, t, n, r), o === null && oi(e, t, r, Yl, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else oi(e, t, r, null, n);
  }
}
var Yl = null;
function Ui(e, t, n, r) {
  if (Yl = null, e = Ds(r), e = ln(e), e !== null) if (t = vn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Rc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Yl = e, null;
}
function Bc(e) {
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
        case Rs:
          return 1;
        case Pc:
          return 4;
        case Ql:
        case Op:
          return 16;
        case Lc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ut = null, Ps = null, Ll = null;
function $c() {
  if (Ll) return Ll;
  var e, t = Ps, n = t.length, r, l = "value" in Ut ? Ut.value : Ut.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Ll = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Ol(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function vl() {
  return !0;
}
function Bu() {
  return !1;
}
function Ue(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(o) : o[s]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? vl : Bu, this.isPropagationStopped = Bu, this;
  }
  return G(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = vl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = vl);
  }, persist: function() {
  }, isPersistent: vl }), t;
}
var Zn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ls = Ue(Zn), el = G({}, Zn, { view: 0, detail: 0 }), Kp = Ue(el), bo, Jo, fr, xo = G({}, el, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Os, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== fr && (fr && e.type === "mousemove" ? (bo = e.screenX - fr.screenX, Jo = e.screenY - fr.screenY) : Jo = bo = 0, fr = e), bo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Jo;
} }), $u = Ue(xo), Xp = G({}, xo, { dataTransfer: 0 }), Yp = Ue(Xp), Gp = G({}, el, { relatedTarget: 0 }), Zo = Ue(Gp), bp = G({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Jp = Ue(bp), Zp = G({}, Zn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), qp = Ue(Zp), eh = G({}, Zn, { data: 0 }), Hu = Ue(eh), th = {
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
}, nh = {
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
}, rh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function lh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = rh[e]) ? !!t[e] : !1;
}
function Os() {
  return lh;
}
var oh = G({}, el, { key: function(e) {
  if (e.key) {
    var t = th[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ol(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? nh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Os, charCode: function(e) {
  return e.type === "keypress" ? Ol(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ol(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ih = Ue(oh), sh = G({}, xo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Vu = Ue(sh), uh = G({}, el, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Os }), ah = Ue(uh), ch = G({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), dh = Ue(ch), fh = G({}, xo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), ph = Ue(fh), hh = [9, 13, 27, 32], Is = xt && "CompositionEvent" in window, kr = null;
xt && "documentMode" in document && (kr = document.documentMode);
var mh = xt && "TextEvent" in window && !kr, Hc = xt && (!Is || kr && 8 < kr && 11 >= kr), Wu = " ", Qu = !1;
function Vc(e, t) {
  switch (e) {
    case "keyup":
      return hh.indexOf(t.keyCode) !== -1;
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
function Wc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Dn = !1;
function vh(e, t) {
  switch (e) {
    case "compositionend":
      return Wc(t);
    case "keypress":
      return t.which !== 32 ? null : (Qu = !0, Wu);
    case "textInput":
      return e = t.data, e === Wu && Qu ? null : e;
    default:
      return null;
  }
}
function gh(e, t) {
  if (Dn) return e === "compositionend" || !Is && Vc(e, t) ? (e = $c(), Ll = Ps = Ut = null, Dn = !1, e) : null;
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
var yh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!yh[e.type] : t === "textarea";
}
function Qc(e, t, n, r) {
  kc(r), t = Gl(t, "onChange"), 0 < t.length && (n = new Ls("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Cr = null, Fr = null;
function wh(e) {
  nd(e, 0);
}
function ko(e) {
  var t = jn(e);
  if (mc(t)) return e;
}
function Sh(e, t) {
  if (e === "change") return t;
}
var Kc = !1;
if (xt) {
  var qo;
  if (xt) {
    var ei = "oninput" in document;
    if (!ei) {
      var Xu = document.createElement("div");
      Xu.setAttribute("oninput", "return;"), ei = typeof Xu.oninput == "function";
    }
    qo = ei;
  } else qo = !1;
  Kc = qo && (!document.documentMode || 9 < document.documentMode);
}
function Yu() {
  Cr && (Cr.detachEvent("onpropertychange", Xc), Fr = Cr = null);
}
function Xc(e) {
  if (e.propertyName === "value" && ko(Fr)) {
    var t = [];
    Qc(t, Fr, e, Ds(e)), Dc(wh, t);
  }
}
function xh(e, t, n) {
  e === "focusin" ? (Yu(), Cr = t, Fr = n, Cr.attachEvent("onpropertychange", Xc)) : e === "focusout" && Yu();
}
function kh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ko(Fr);
}
function Ch(e, t) {
  if (e === "click") return ko(t);
}
function Eh(e, t) {
  if (e === "input" || e === "change") return ko(t);
}
function Nh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var et = typeof Object.is == "function" ? Object.is : Nh;
function Ur(e, t) {
  if (et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!xi.call(t, l) || !et(e[l], t[l])) return !1;
  }
  return !0;
}
function Gu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function bu(e, t) {
  var n = Gu(e);
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
    n = Gu(n);
  }
}
function Yc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Yc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Gc() {
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
function zs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Dh(e) {
  var t = Gc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Yc(n.ownerDocument.documentElement, n)) {
    if (r !== null && zs(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = bu(n, o);
        var i = bu(
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
var Rh = xt && "documentMode" in document && 11 >= document.documentMode, Rn = null, Bi = null, Er = null, $i = !1;
function Ju(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $i || Rn == null || Rn !== Hl(r) || (r = Rn, "selectionStart" in r && zs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Er && Ur(Er, r) || (Er = r, r = Gl(Bi, "onSelect"), 0 < r.length && (t = new Ls("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Rn)));
}
function gl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Tn = { animationend: gl("Animation", "AnimationEnd"), animationiteration: gl("Animation", "AnimationIteration"), animationstart: gl("Animation", "AnimationStart"), transitionend: gl("Transition", "TransitionEnd") }, ti = {}, bc = {};
xt && (bc = document.createElement("div").style, "AnimationEvent" in window || (delete Tn.animationend.animation, delete Tn.animationiteration.animation, delete Tn.animationstart.animation), "TransitionEvent" in window || delete Tn.transitionend.transition);
function Co(e) {
  if (ti[e]) return ti[e];
  if (!Tn[e]) return e;
  var t = Tn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in bc) return ti[e] = t[n];
  return e;
}
var Jc = Co("animationend"), Zc = Co("animationiteration"), qc = Co("animationstart"), ed = Co("transitionend"), td = /* @__PURE__ */ new Map(), Zu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Zt(e, t) {
  td.set(e, t), mn(t, [e]);
}
for (var ni = 0; ni < Zu.length; ni++) {
  var ri = Zu[ni], Th = ri.toLowerCase(), jh = ri[0].toUpperCase() + ri.slice(1);
  Zt(Th, "on" + jh);
}
Zt(Jc, "onAnimationEnd");
Zt(Zc, "onAnimationIteration");
Zt(qc, "onAnimationStart");
Zt("dblclick", "onDoubleClick");
Zt("focusin", "onFocus");
Zt("focusout", "onBlur");
Zt(ed, "onTransitionEnd");
Wn("onMouseEnter", ["mouseout", "mouseover"]);
Wn("onMouseLeave", ["mouseout", "mouseover"]);
Wn("onPointerEnter", ["pointerout", "pointerover"]);
Wn("onPointerLeave", ["pointerout", "pointerover"]);
mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var wr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), _h = new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));
function qu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Tp(r, t, void 0, e), e.currentTarget = null;
}
function nd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var s = r[i], u = s.instance, a = s.currentTarget;
        if (s = s.listener, u !== o && l.isPropagationStopped()) break e;
        qu(l, s, a), o = u;
      }
      else for (i = 0; i < r.length; i++) {
        if (s = r[i], u = s.instance, a = s.currentTarget, s = s.listener, u !== o && l.isPropagationStopped()) break e;
        qu(l, s, a), o = u;
      }
    }
  }
  if (Wl) throw e = Mi, Wl = !1, Mi = null, e;
}
function V(e, t) {
  var n = t[Ki];
  n === void 0 && (n = t[Ki] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (rd(t, e, 2, !1), n.add(r));
}
function li(e, t, n) {
  var r = 0;
  t && (r |= 4), rd(n, e, r, t);
}
var yl = "_reactListening" + Math.random().toString(36).slice(2);
function Br(e) {
  if (!e[yl]) {
    e[yl] = !0, cc.forEach(function(n) {
      n !== "selectionchange" && (_h.has(n) || li(n, !1, e), li(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yl] || (t[yl] = !0, li("selectionchange", !1, t));
  }
}
function rd(e, t, n, r) {
  switch (Bc(t)) {
    case 1:
      var l = Wp;
      break;
    case 4:
      l = Qp;
      break;
    default:
      l = _s;
  }
  n = l.bind(null, t, n, e), l = void 0, !zi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function oi(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var s = r.stateNode.containerInfo;
      if (s === l || s.nodeType === 8 && s.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var u = i.tag;
        if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        i = i.return;
      }
      for (; s !== null; ) {
        if (i = ln(s), i === null) return;
        if (u = i.tag, u === 5 || u === 6) {
          r = o = i;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  Dc(function() {
    var a = o, h = Ds(n), f = [];
    e: {
      var m = td.get(e);
      if (m !== void 0) {
        var y = Ls, C = e;
        switch (e) {
          case "keypress":
            if (Ol(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = ih;
            break;
          case "focusin":
            C = "focus", y = Zo;
            break;
          case "focusout":
            C = "blur", y = Zo;
            break;
          case "beforeblur":
          case "afterblur":
            y = Zo;
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
            y = $u;
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
            y = ah;
            break;
          case Jc:
          case Zc:
          case qc:
            y = Jp;
            break;
          case ed:
            y = dh;
            break;
          case "scroll":
            y = Kp;
            break;
          case "wheel":
            y = ph;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = qp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Vu;
        }
        var S = (t & 4) !== 0, R = !S && e === "scroll", d = S ? m !== null ? m + "Capture" : null : m;
        S = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var w = p.stateNode;
          if (p.tag === 5 && w !== null && (p = w, d !== null && (w = Ir(c, d), w != null && S.push($r(c, w, p)))), R) break;
          c = c.return;
        }
        0 < S.length && (m = new y(m, C, null, n, h), f.push({ event: m, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== Oi && (C = n.relatedTarget || n.fromElement) && (ln(C) || C[kt])) break e;
        if ((y || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (C = n.relatedTarget || n.toElement, y = a, C = C ? ln(C) : null, C !== null && (R = vn(C), C !== R || C.tag !== 5 && C.tag !== 6) && (C = null)) : (y = null, C = a), y !== C)) {
          if (S = $u, w = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (S = Vu, w = "onPointerLeave", d = "onPointerEnter", c = "pointer"), R = y == null ? m : jn(y), p = C == null ? m : jn(C), m = new S(w, c + "leave", y, n, h), m.target = R, m.relatedTarget = p, w = null, ln(h) === a && (S = new S(d, c + "enter", C, n, h), S.target = p, S.relatedTarget = R, w = S), R = w, y && C) t: {
            for (S = y, d = C, c = 0, p = S; p; p = Cn(p)) c++;
            for (p = 0, w = d; w; w = Cn(w)) p++;
            for (; 0 < c - p; ) S = Cn(S), c--;
            for (; 0 < p - c; ) d = Cn(d), p--;
            for (; c--; ) {
              if (S === d || d !== null && S === d.alternate) break t;
              S = Cn(S), d = Cn(d);
            }
            S = null;
          }
          else S = null;
          y !== null && ea(f, m, y, S, !1), C !== null && R !== null && ea(f, R, C, S, !0);
        }
      }
      e: {
        if (m = a ? jn(a) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file") var x = Sh;
        else if (Ku(m)) if (Kc) x = Eh;
        else {
          x = kh;
          var k = xh;
        }
        else (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (x = Ch);
        if (x && (x = x(e, a))) {
          Qc(f, x, n, h);
          break e;
        }
        k && k(e, m, a), e === "focusout" && (k = m._wrapperState) && k.controlled && m.type === "number" && Ti(m, "number", m.value);
      }
      switch (k = a ? jn(a) : window, e) {
        case "focusin":
          (Ku(k) || k.contentEditable === "true") && (Rn = k, Bi = a, Er = null);
          break;
        case "focusout":
          Er = Bi = Rn = null;
          break;
        case "mousedown":
          $i = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          $i = !1, Ju(f, n, h);
          break;
        case "selectionchange":
          if (Rh) break;
        case "keydown":
        case "keyup":
          Ju(f, n, h);
      }
      var E;
      if (Is) e: {
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
      else Dn ? Vc(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (Hc && n.locale !== "ko" && (Dn || N !== "onCompositionStart" ? N === "onCompositionEnd" && Dn && (E = $c()) : (Ut = h, Ps = "value" in Ut ? Ut.value : Ut.textContent, Dn = !0)), k = Gl(a, N), 0 < k.length && (N = new Hu(N, e, null, n, h), f.push({ event: N, listeners: k }), E ? N.data = E : (E = Wc(n), E !== null && (N.data = E)))), (E = mh ? vh(e, n) : gh(e, n)) && (a = Gl(a, "onBeforeInput"), 0 < a.length && (h = new Hu("onBeforeInput", "beforeinput", null, n, h), f.push({ event: h, listeners: a }), h.data = E));
    }
    nd(f, t);
  });
}
function $r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Ir(e, n), o != null && r.unshift($r(e, o, l)), o = Ir(e, t), o != null && r.push($r(e, o, l))), e = e.return;
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
function ea(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n, u = s.alternate, a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 && a !== null && (s = a, l ? (u = Ir(n, o), u != null && i.unshift($r(n, u, s))) : l || (u = Ir(n, o), u != null && i.push($r(n, u, s)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Ph = /\r\n?/g, Lh = /\u0000|\uFFFD/g;
function ta(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ph, `
`).replace(Lh, "");
}
function wl(e, t, n) {
  if (t = ta(t), ta(e) !== t && n) throw Error(D(425));
}
function bl() {
}
var Hi = null, Vi = null;
function Wi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Qi = typeof setTimeout == "function" ? setTimeout : void 0, Oh = typeof clearTimeout == "function" ? clearTimeout : void 0, na = typeof Promise == "function" ? Promise : void 0, Ih = typeof queueMicrotask == "function" ? queueMicrotask : typeof na < "u" ? function(e) {
  return na.resolve(null).then(e).catch(zh);
} : Qi;
function zh(e) {
  setTimeout(function() {
    throw e;
  });
}
function ii(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Ar(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Ar(t);
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
function ra(e) {
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
var qn = Math.random().toString(36).slice(2), ut = "__reactFiber$" + qn, Hr = "__reactProps$" + qn, kt = "__reactContainer$" + qn, Ki = "__reactEvents$" + qn, Mh = "__reactListeners$" + qn, Ah = "__reactHandles$" + qn;
function ln(e) {
  var t = e[ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[kt] || n[ut]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ra(e); e !== null; ) {
        if (n = e[ut]) return n;
        e = ra(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function tl(e) {
  return e = e[ut] || e[kt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function Eo(e) {
  return e[Hr] || null;
}
var Xi = [], _n = -1;
function qt(e) {
  return { current: e };
}
function W(e) {
  0 > _n || (e.current = Xi[_n], Xi[_n] = null, _n--);
}
function H(e, t) {
  _n++, Xi[_n] = e.current, e.current = t;
}
var bt = {}, ge = qt(bt), Re = qt(!1), cn = bt;
function Qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Te(e) {
  return e = e.childContextTypes, e != null;
}
function Jl() {
  W(Re), W(ge);
}
function la(e, t, n) {
  if (ge.current !== bt) throw Error(D(168));
  H(ge, t), H(Re, n);
}
function ld(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(D(108, xp(e) || "Unknown", l));
  return G({}, n, r);
}
function Zl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || bt, cn = ge.current, H(ge, e), H(Re, Re.current), !0;
}
function oa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  n ? (e = ld(e, t, cn), r.__reactInternalMemoizedMergedChildContext = e, W(Re), W(ge), H(ge, e)) : W(Re), H(Re, n);
}
var gt = null, No = !1, si = !1;
function od(e) {
  gt === null ? gt = [e] : gt.push(e);
}
function Fh(e) {
  No = !0, od(e);
}
function en() {
  if (!si && gt !== null) {
    si = !0;
    var e = 0, t = U;
    try {
      var n = gt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      gt = null, No = !1;
    } catch (l) {
      throw gt !== null && (gt = gt.slice(e + 1)), _c(Rs, en), l;
    } finally {
      U = t, si = !1;
    }
  }
  return null;
}
var Pn = [], Ln = 0, ql = null, eo = 0, He = [], Ve = 0, dn = null, yt = 1, wt = "";
function nn(e, t) {
  Pn[Ln++] = eo, Pn[Ln++] = ql, ql = e, eo = t;
}
function id(e, t, n) {
  He[Ve++] = yt, He[Ve++] = wt, He[Ve++] = dn, dn = e;
  var r = yt;
  e = wt;
  var l = 32 - Ze(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Ze(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, yt = 1 << 32 - Ze(t) + l | n << l | r, wt = o + e;
  } else yt = 1 << o | n << l | r, wt = e;
}
function Ms(e) {
  e.return !== null && (nn(e, 1), id(e, 1, 0));
}
function As(e) {
  for (; e === ql; ) ql = Pn[--Ln], Pn[Ln] = null, eo = Pn[--Ln], Pn[Ln] = null;
  for (; e === dn; ) dn = He[--Ve], He[Ve] = null, wt = He[--Ve], He[Ve] = null, yt = He[--Ve], He[Ve] = null;
}
var Me = null, ze = null, K = !1, Je = null;
function sd(e, t) {
  var n = We(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ia(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Me = e, ze = Wt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Me = e, ze = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = dn !== null ? { id: yt, overflow: wt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = We(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Me = e, ze = null, !0) : !1;
    default:
      return !1;
  }
}
function Yi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Gi(e) {
  if (K) {
    var t = ze;
    if (t) {
      var n = t;
      if (!ia(e, t)) {
        if (Yi(e)) throw Error(D(418));
        t = Wt(n.nextSibling);
        var r = Me;
        t && ia(e, t) ? sd(r, n) : (e.flags = e.flags & -4097 | 2, K = !1, Me = e);
      }
    } else {
      if (Yi(e)) throw Error(D(418));
      e.flags = e.flags & -4097 | 2, K = !1, Me = e;
    }
  }
}
function sa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Me = e;
}
function Sl(e) {
  if (e !== Me) return !1;
  if (!K) return sa(e), K = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Wi(e.type, e.memoizedProps)), t && (t = ze)) {
    if (Yi(e)) throw ud(), Error(D(418));
    for (; t; ) sd(e, t), t = Wt(t.nextSibling);
  }
  if (sa(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(D(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ze = Wt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ze = null;
    }
  } else ze = Me ? Wt(e.stateNode.nextSibling) : null;
  return !0;
}
function ud() {
  for (var e = ze; e; ) e = Wt(e.nextSibling);
}
function Kn() {
  ze = Me = null, K = !1;
}
function Fs(e) {
  Je === null ? Je = [e] : Je.push(e);
}
var Uh = Nt.ReactCurrentBatchConfig;
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
function xl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ua(e) {
  var t = e._init;
  return t(e._payload);
}
function ad(e) {
  function t(d, c) {
    if (e) {
      var p = d.deletions;
      p === null ? (d.deletions = [c], d.flags |= 16) : p.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), c = c.sibling;
    return null;
  }
  function r(d, c) {
    for (d = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
    return d;
  }
  function l(d, c) {
    return d = Yt(d, c), d.index = 0, d.sibling = null, d;
  }
  function o(d, c, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < c ? (d.flags |= 2, c) : p) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, c, p, w) {
    return c === null || c.tag !== 6 ? (c = hi(p, d.mode, w), c.return = d, c) : (c = l(c, p), c.return = d, c);
  }
  function u(d, c, p, w) {
    var x = p.type;
    return x === Nn ? h(d, c, p.props.children, w, p.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === It && ua(x) === c.type) ? (w = l(c, p.props), w.ref = pr(d, c, p), w.return = d, w) : (w = Bl(p.type, p.key, p.props, null, d.mode, w), w.ref = pr(d, c, p), w.return = d, w);
  }
  function a(d, c, p, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = mi(p, d.mode, w), c.return = d, c) : (c = l(c, p.children || []), c.return = d, c);
  }
  function h(d, c, p, w, x) {
    return c === null || c.tag !== 7 ? (c = an(p, d.mode, w, x), c.return = d, c) : (c = l(c, p), c.return = d, c);
  }
  function f(d, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = hi("" + c, d.mode, p), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case cl:
          return p = Bl(c.type, c.key, c.props, null, d.mode, p), p.ref = pr(d, null, c), p.return = d, p;
        case En:
          return c = mi(c, d.mode, p), c.return = d, c;
        case It:
          var w = c._init;
          return f(d, w(c._payload), p);
      }
      if (gr(c) || ur(c)) return c = an(c, d.mode, p, null), c.return = d, c;
      xl(d, c);
    }
    return null;
  }
  function m(d, c, p, w) {
    var x = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return x !== null ? null : s(d, c, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case cl:
          return p.key === x ? u(d, c, p, w) : null;
        case En:
          return p.key === x ? a(d, c, p, w) : null;
        case It:
          return x = p._init, m(
            d,
            c,
            x(p._payload),
            w
          );
      }
      if (gr(p) || ur(p)) return x !== null ? null : h(d, c, p, w, null);
      xl(d, p);
    }
    return null;
  }
  function y(d, c, p, w, x) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return d = d.get(p) || null, s(c, d, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case cl:
          return d = d.get(w.key === null ? p : w.key) || null, u(c, d, w, x);
        case En:
          return d = d.get(w.key === null ? p : w.key) || null, a(c, d, w, x);
        case It:
          var k = w._init;
          return y(d, c, p, k(w._payload), x);
      }
      if (gr(w) || ur(w)) return d = d.get(p) || null, h(c, d, w, x, null);
      xl(c, w);
    }
    return null;
  }
  function C(d, c, p, w) {
    for (var x = null, k = null, E = c, N = c = 0, P = null; E !== null && N < p.length; N++) {
      E.index > N ? (P = E, E = null) : P = E.sibling;
      var _ = m(d, E, p[N], w);
      if (_ === null) {
        E === null && (E = P);
        break;
      }
      e && E && _.alternate === null && t(d, E), c = o(_, c, N), k === null ? x = _ : k.sibling = _, k = _, E = P;
    }
    if (N === p.length) return n(d, E), K && nn(d, N), x;
    if (E === null) {
      for (; N < p.length; N++) E = f(d, p[N], w), E !== null && (c = o(E, c, N), k === null ? x = E : k.sibling = E, k = E);
      return K && nn(d, N), x;
    }
    for (E = r(d, E); N < p.length; N++) P = y(E, d, N, p[N], w), P !== null && (e && P.alternate !== null && E.delete(P.key === null ? N : P.key), c = o(P, c, N), k === null ? x = P : k.sibling = P, k = P);
    return e && E.forEach(function(I) {
      return t(d, I);
    }), K && nn(d, N), x;
  }
  function S(d, c, p, w) {
    var x = ur(p);
    if (typeof x != "function") throw Error(D(150));
    if (p = x.call(p), p == null) throw Error(D(151));
    for (var k = x = null, E = c, N = c = 0, P = null, _ = p.next(); E !== null && !_.done; N++, _ = p.next()) {
      E.index > N ? (P = E, E = null) : P = E.sibling;
      var I = m(d, E, _.value, w);
      if (I === null) {
        E === null && (E = P);
        break;
      }
      e && E && I.alternate === null && t(d, E), c = o(I, c, N), k === null ? x = I : k.sibling = I, k = I, E = P;
    }
    if (_.done) return n(
      d,
      E
    ), K && nn(d, N), x;
    if (E === null) {
      for (; !_.done; N++, _ = p.next()) _ = f(d, _.value, w), _ !== null && (c = o(_, c, N), k === null ? x = _ : k.sibling = _, k = _);
      return K && nn(d, N), x;
    }
    for (E = r(d, E); !_.done; N++, _ = p.next()) _ = y(E, d, N, _.value, w), _ !== null && (e && _.alternate !== null && E.delete(_.key === null ? N : _.key), c = o(_, c, N), k === null ? x = _ : k.sibling = _, k = _);
    return e && E.forEach(function(ie) {
      return t(d, ie);
    }), K && nn(d, N), x;
  }
  function R(d, c, p, w) {
    if (typeof p == "object" && p !== null && p.type === Nn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case cl:
          e: {
            for (var x = p.key, k = c; k !== null; ) {
              if (k.key === x) {
                if (x = p.type, x === Nn) {
                  if (k.tag === 7) {
                    n(d, k.sibling), c = l(k, p.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (k.elementType === x || typeof x == "object" && x !== null && x.$$typeof === It && ua(x) === k.type) {
                  n(d, k.sibling), c = l(k, p.props), c.ref = pr(d, k, p), c.return = d, d = c;
                  break e;
                }
                n(d, k);
                break;
              } else t(d, k);
              k = k.sibling;
            }
            p.type === Nn ? (c = an(p.props.children, d.mode, w, p.key), c.return = d, d = c) : (w = Bl(p.type, p.key, p.props, null, d.mode, w), w.ref = pr(d, c, p), w.return = d, d = w);
          }
          return i(d);
        case En:
          e: {
            for (k = p.key; c !== null; ) {
              if (c.key === k) if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                n(d, c.sibling), c = l(c, p.children || []), c.return = d, d = c;
                break e;
              } else {
                n(d, c);
                break;
              }
              else t(d, c);
              c = c.sibling;
            }
            c = mi(p, d.mode, w), c.return = d, d = c;
          }
          return i(d);
        case It:
          return k = p._init, R(d, c, k(p._payload), w);
      }
      if (gr(p)) return C(d, c, p, w);
      if (ur(p)) return S(d, c, p, w);
      xl(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(d, c.sibling), c = l(c, p), c.return = d, d = c) : (n(d, c), c = hi(p, d.mode, w), c.return = d, d = c), i(d)) : n(d, c);
  }
  return R;
}
var Xn = ad(!0), cd = ad(!1), to = qt(null), no = null, On = null, Us = null;
function Bs() {
  Us = On = no = null;
}
function $s(e) {
  var t = to.current;
  W(to), e._currentValue = t;
}
function bi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function $n(e, t) {
  no = e, Us = On = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (De = !0), e.firstContext = null);
}
function Ke(e) {
  var t = e._currentValue;
  if (Us !== e) if (e = { context: e, memoizedValue: t, next: null }, On === null) {
    if (no === null) throw Error(D(308));
    On = e, no.dependencies = { lanes: 0, firstContext: e };
  } else On = On.next = e;
  return t;
}
var on = null;
function Hs(e) {
  on === null ? on = [e] : on.push(e);
}
function dd(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Hs(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ct(e, r);
}
function Ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var zt = !1;
function Vs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function fd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function St(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ct(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Hs(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ct(e, n);
}
function Il(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ts(e, n);
  }
}
function aa(e, t) {
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
function ro(e, t, n, r) {
  var l = e.updateQueue;
  zt = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s, a = u.next;
    u.next = null, i === null ? o = a : i.next = a, i = u;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, s = h.lastBaseUpdate, s !== i && (s === null ? h.firstBaseUpdate = a : s.next = a, h.lastBaseUpdate = u));
  }
  if (o !== null) {
    var f = l.baseState;
    i = 0, h = a = u = null, s = o;
    do {
      var m = s.lane, y = s.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: y,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var C = e, S = s;
          switch (m = t, y = n, S.tag) {
            case 1:
              if (C = S.payload, typeof C == "function") {
                f = C.call(y, f, m);
                break e;
              }
              f = C;
              break e;
            case 3:
              C.flags = C.flags & -65537 | 128;
            case 0:
              if (C = S.payload, m = typeof C == "function" ? C.call(y, f, m) : C, m == null) break e;
              f = G({}, f, m);
              break e;
            case 2:
              zt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [s] : m.push(s));
      } else y = { eventTime: y, lane: m, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, h === null ? (a = h = y, u = f) : h = h.next = y, i |= m;
      if (s = s.next, s === null) {
        if (s = l.shared.pending, s === null) break;
        m = s, s = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (u = f), l.baseState = u, l.firstBaseUpdate = a, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    pn |= i, e.lanes = i, e.memoizedState = f;
  }
}
function ca(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(D(191, l));
      l.call(r);
    }
  }
}
var nl = {}, ct = qt(nl), Vr = qt(nl), Wr = qt(nl);
function sn(e) {
  if (e === nl) throw Error(D(174));
  return e;
}
function Ws(e, t) {
  switch (H(Wr, t), H(Vr, e), H(ct, nl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _i(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = _i(t, e);
  }
  W(ct), H(ct, t);
}
function Yn() {
  W(ct), W(Vr), W(Wr);
}
function pd(e) {
  sn(Wr.current);
  var t = sn(ct.current), n = _i(t, e.type);
  t !== n && (H(Vr, e), H(ct, n));
}
function Qs(e) {
  Vr.current === e && (W(ct), W(Vr));
}
var X = qt(0);
function lo(e) {
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
var zl = Nt.ReactCurrentDispatcher, ai = Nt.ReactCurrentBatchConfig, fn = 0, Y = null, ee = null, re = null, oo = !1, Nr = !1, Qr = 0, Bh = 0;
function he() {
  throw Error(D(321));
}
function Xs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!et(e[n], t[n])) return !1;
  return !0;
}
function Ys(e, t, n, r, l, o) {
  if (fn = o, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zl.current = e === null || e.memoizedState === null ? Wh : Qh, e = n(r, l), Nr) {
    o = 0;
    do {
      if (Nr = !1, Qr = 0, 25 <= o) throw Error(D(301));
      o += 1, re = ee = null, t.updateQueue = null, zl.current = Kh, e = n(r, l);
    } while (Nr);
  }
  if (zl.current = io, t = ee !== null && ee.next !== null, fn = 0, re = ee = Y = null, oo = !1, t) throw Error(D(300));
  return e;
}
function Gs() {
  var e = Qr !== 0;
  return Qr = 0, e;
}
function st() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return re === null ? Y.memoizedState = re = e : re = re.next = e, re;
}
function Xe() {
  if (ee === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = re === null ? Y.memoizedState : re.next;
  if (t !== null) re = t, ee = e;
  else {
    if (e === null) throw Error(D(310));
    ee = e, e = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, re === null ? Y.memoizedState = re = e : re = re.next = e;
  }
  return re;
}
function Kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ci(e) {
  var t = Xe(), n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = ee, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var s = i = null, u = null, a = o;
    do {
      var h = a.lane;
      if ((fn & h) === h) u !== null && (u = u.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var f = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        u === null ? (s = u = f, i = r) : u = u.next = f, Y.lanes |= h, pn |= h;
      }
      a = a.next;
    } while (a !== null && a !== o);
    u === null ? i = r : u.next = s, et(r, t.memoizedState) || (De = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, Y.lanes |= o, pn |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function di(e) {
  var t = Xe(), n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    et(o, t.memoizedState) || (De = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function hd() {
}
function md(e, t) {
  var n = Y, r = Xe(), l = t(), o = !et(r.memoizedState, l);
  if (o && (r.memoizedState = l, De = !0), r = r.queue, bs(yd.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || re !== null && re.memoizedState.tag & 1) {
    if (n.flags |= 2048, Xr(9, gd.bind(null, n, r, l, t), void 0, null), oe === null) throw Error(D(349));
    fn & 30 || vd(n, t, l);
  }
  return l;
}
function vd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Y.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Y.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function gd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, wd(t) && Sd(e);
}
function yd(e, t, n) {
  return n(function() {
    wd(t) && Sd(e);
  });
}
function wd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}
function Sd(e) {
  var t = Ct(e, 1);
  t !== null && qe(t, e, 1, -1);
}
function da(e) {
  var t = st();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Kr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Vh.bind(null, Y, e), [t.memoizedState, e];
}
function Xr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Y.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Y.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function xd() {
  return Xe().memoizedState;
}
function Ml(e, t, n, r) {
  var l = st();
  Y.flags |= e, l.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Do(e, t, n, r) {
  var l = Xe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ee !== null) {
    var i = ee.memoizedState;
    if (o = i.destroy, r !== null && Xs(r, i.deps)) {
      l.memoizedState = Xr(t, n, o, r);
      return;
    }
  }
  Y.flags |= e, l.memoizedState = Xr(1 | t, n, o, r);
}
function fa(e, t) {
  return Ml(8390656, 8, e, t);
}
function bs(e, t) {
  return Do(2048, 8, e, t);
}
function kd(e, t) {
  return Do(4, 2, e, t);
}
function Cd(e, t) {
  return Do(4, 4, e, t);
}
function Ed(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Nd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Do(4, 4, Ed.bind(null, t, e), n);
}
function Js() {
}
function Dd(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Rd(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Td(e, t, n) {
  return fn & 21 ? (et(n, t) || (n = Oc(), Y.lanes |= n, pn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, De = !0), e.memoizedState = n);
}
function $h(e, t) {
  var n = U;
  U = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ai.transition;
  ai.transition = {};
  try {
    e(!1), t();
  } finally {
    U = n, ai.transition = r;
  }
}
function jd() {
  return Xe().memoizedState;
}
function Hh(e, t, n) {
  var r = Xt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, _d(e)) Pd(t, n);
  else if (n = dd(e, t, n, r), n !== null) {
    var l = Se();
    qe(n, e, r, l), Ld(n, t, r);
  }
}
function Vh(e, t, n) {
  var r = Xt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_d(e)) Pd(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, s = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = s, et(s, i)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Hs(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = dd(e, t, l, r), n !== null && (l = Se(), qe(n, e, r, l), Ld(n, t, r));
  }
}
function _d(e) {
  var t = e.alternate;
  return e === Y || t !== null && t === Y;
}
function Pd(e, t) {
  Nr = oo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ld(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ts(e, n);
  }
}
var io = { readContext: Ke, useCallback: he, useContext: he, useEffect: he, useImperativeHandle: he, useInsertionEffect: he, useLayoutEffect: he, useMemo: he, useReducer: he, useRef: he, useState: he, useDebugValue: he, useDeferredValue: he, useTransition: he, useMutableSource: he, useSyncExternalStore: he, useId: he, unstable_isNewReconciler: !1 }, Wh = { readContext: Ke, useCallback: function(e, t) {
  return st().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ke, useEffect: fa, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ml(
    4194308,
    4,
    Ed.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ml(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ml(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = st();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = st();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Hh.bind(null, Y, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = st();
  return e = { current: e }, t.memoizedState = e;
}, useState: da, useDebugValue: Js, useDeferredValue: function(e) {
  return st().memoizedState = e;
}, useTransition: function() {
  var e = da(!1), t = e[0];
  return e = $h.bind(null, e[1]), st().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Y, l = st();
  if (K) {
    if (n === void 0) throw Error(D(407));
    n = n();
  } else {
    if (n = t(), oe === null) throw Error(D(349));
    fn & 30 || vd(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, fa(yd.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Xr(9, gd.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = st(), t = oe.identifierPrefix;
  if (K) {
    var n = wt, r = yt;
    n = (r & ~(1 << 32 - Ze(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Qr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Bh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Qh = {
  readContext: Ke,
  useCallback: Dd,
  useContext: Ke,
  useEffect: bs,
  useImperativeHandle: Nd,
  useInsertionEffect: kd,
  useLayoutEffect: Cd,
  useMemo: Rd,
  useReducer: ci,
  useRef: xd,
  useState: function() {
    return ci(Kr);
  },
  useDebugValue: Js,
  useDeferredValue: function(e) {
    var t = Xe();
    return Td(t, ee.memoizedState, e);
  },
  useTransition: function() {
    var e = ci(Kr)[0], t = Xe().memoizedState;
    return [e, t];
  },
  useMutableSource: hd,
  useSyncExternalStore: md,
  useId: jd,
  unstable_isNewReconciler: !1
}, Kh = { readContext: Ke, useCallback: Dd, useContext: Ke, useEffect: bs, useImperativeHandle: Nd, useInsertionEffect: kd, useLayoutEffect: Cd, useMemo: Rd, useReducer: di, useRef: xd, useState: function() {
  return di(Kr);
}, useDebugValue: Js, useDeferredValue: function(e) {
  var t = Xe();
  return ee === null ? t.memoizedState = e : Td(t, ee.memoizedState, e);
}, useTransition: function() {
  var e = di(Kr)[0], t = Xe().memoizedState;
  return [e, t];
}, useMutableSource: hd, useSyncExternalStore: md, useId: jd, unstable_isNewReconciler: !1 };
function Ge(e, t) {
  if (e && e.defaultProps) {
    t = G({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ji(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : G({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ro = { isMounted: function(e) {
  return (e = e._reactInternals) ? vn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Se(), l = Xt(e), o = St(r, l);
  o.payload = t, n != null && (o.callback = n), t = Qt(e, o, l), t !== null && (qe(t, e, l, r), Il(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Se(), l = Xt(e), o = St(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Qt(e, o, l), t !== null && (qe(t, e, l, r), Il(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Se(), r = Xt(e), l = St(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Qt(e, l, r), t !== null && (qe(t, e, r, n), Il(t, e, r));
} };
function pa(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Ur(n, r) || !Ur(l, o) : !0;
}
function Od(e, t, n) {
  var r = !1, l = bt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ke(o) : (l = Te(t) ? cn : ge.current, r = t.contextTypes, o = (r = r != null) ? Qn(e, l) : bt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ro, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function ha(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ro.enqueueReplaceState(t, t.state, null);
}
function Zi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Vs(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Ke(o) : (o = Te(t) ? cn : ge.current, l.context = Qn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Ji(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ro.enqueueReplaceState(l, l.state, null), ro(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Sp(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function fi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function qi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Xh = typeof WeakMap == "function" ? WeakMap : Map;
function Id(e, t, n) {
  n = St(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    uo || (uo = !0, as = r), qi(e, t);
  }, n;
}
function zd(e, t, n) {
  n = St(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      qi(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    qi(e, t), typeof r != "function" && (Kt === null ? Kt = /* @__PURE__ */ new Set([this]) : Kt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function ma(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Xh();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = sm.bind(null, e, t, n), t.then(e, e));
}
function va(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ga(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = St(-1, 1), t.tag = 2, Qt(n, t, 1))), n.lanes |= 1), e);
}
var Yh = Nt.ReactCurrentOwner, De = !1;
function we(e, t, n, r) {
  t.child = e === null ? cd(t, null, n, r) : Xn(t, e.child, n, r);
}
function ya(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return $n(t, l), r = Ys(e, t, n, r, o, l), n = Gs(), e !== null && !De ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Et(e, t, l)) : (K && n && Ms(t), t.flags |= 1, we(e, t, r, l), t.child);
}
function wa(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !ou(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Md(e, t, o, r, l)) : (e = Bl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ur, n(i, r) && e.ref === t.ref) return Et(e, t, l);
  }
  return t.flags |= 1, e = Yt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Md(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ur(o, r) && e.ref === t.ref) if (De = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (De = !0);
    else return t.lanes = e.lanes, Et(e, t, l);
  }
  return es(e, t, n, r, l);
}
function Ad(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, H(zn, Ie), Ie |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, H(zn, Ie), Ie |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, H(zn, Ie), Ie |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, H(zn, Ie), Ie |= r;
  return we(e, t, l, n), t.child;
}
function Fd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function es(e, t, n, r, l) {
  var o = Te(n) ? cn : ge.current;
  return o = Qn(t, o), $n(t, l), n = Ys(e, t, n, r, o, l), r = Gs(), e !== null && !De ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Et(e, t, l)) : (K && r && Ms(t), t.flags |= 1, we(e, t, n, l), t.child);
}
function Sa(e, t, n, r, l) {
  if (Te(n)) {
    var o = !0;
    Zl(t);
  } else o = !1;
  if ($n(t, l), t.stateNode === null) Al(e, t), Od(t, n, r), Zi(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, s = t.memoizedProps;
    i.props = s;
    var u = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Ke(a) : (a = Te(n) ? cn : ge.current, a = Qn(t, a));
    var h = n.getDerivedStateFromProps, f = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || u !== a) && ha(t, i, r, a), zt = !1;
    var m = t.memoizedState;
    i.state = m, ro(t, r, i, l), u = t.memoizedState, s !== r || m !== u || Re.current || zt ? (typeof h == "function" && (Ji(t, n, h, r), u = t.memoizedState), (s = zt || pa(t, n, s, r, m, u, a)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = a, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, fd(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : Ge(t.type, s), i.props = a, f = t.pendingProps, m = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ke(u) : (u = Te(n) ? cn : ge.current, u = Qn(t, u));
    var y = n.getDerivedStateFromProps;
    (h = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== f || m !== u) && ha(t, i, r, u), zt = !1, m = t.memoizedState, i.state = m, ro(t, r, i, l);
    var C = t.memoizedState;
    s !== f || m !== C || Re.current || zt ? (typeof y == "function" && (Ji(t, n, y, r), C = t.memoizedState), (a = zt || pa(t, n, a, r, m, C, u) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, C, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, C, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), i.props = r, i.state = C, i.context = u, r = a) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ts(e, t, n, r, o, l);
}
function ts(e, t, n, r, l, o) {
  Fd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && oa(t, n, !1), Et(e, t, o);
  r = t.stateNode, Yh.current = t;
  var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Xn(t, e.child, null, o), t.child = Xn(t, null, s, o)) : we(e, t, s, o), t.memoizedState = r.state, l && oa(t, n, !0), t.child;
}
function Ud(e) {
  var t = e.stateNode;
  t.pendingContext ? la(e, t.pendingContext, t.pendingContext !== t.context) : t.context && la(e, t.context, !1), Ws(e, t.containerInfo);
}
function xa(e, t, n, r, l) {
  return Kn(), Fs(l), t.flags |= 256, we(e, t, n, r), t.child;
}
var ns = { dehydrated: null, treeContext: null, retryLane: 0 };
function rs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Bd(e, t, n) {
  var r = t.pendingProps, l = X.current, o = !1, i = (t.flags & 128) !== 0, s;
  if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), H(X, l & 1), e === null)
    return Gi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = _o(i, r, 0, null), e = an(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = rs(n), t.memoizedState = ns, e) : Zs(t, i));
  if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return Gh(e, t, i, r, s, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, s = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Yt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? o = Yt(s, o) : (o = an(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? rs(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = ns, r;
  }
  return o = e.child, e = o.sibling, r = Yt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Zs(e, t) {
  return t = _o({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function kl(e, t, n, r) {
  return r !== null && Fs(r), Xn(t, e.child, null, n), e = Zs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Gh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = fi(Error(D(422))), kl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = _o({ mode: "visible", children: r.children }, l, 0, null), o = an(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Xn(t, e.child, null, i), t.child.memoizedState = rs(i), t.memoizedState = ns, o);
  if (!(t.mode & 1)) return kl(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
    return r = s, o = Error(D(419)), r = fi(o, r, void 0), kl(e, t, i, r);
  }
  if (s = (i & e.childLanes) !== 0, De || s) {
    if (r = oe, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ct(e, l), qe(r, e, l, -1));
    }
    return lu(), r = fi(Error(D(421))), kl(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = um.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ze = Wt(l.nextSibling), Me = t, K = !0, Je = null, e !== null && (He[Ve++] = yt, He[Ve++] = wt, He[Ve++] = dn, yt = e.id, wt = e.overflow, dn = t), t = Zs(t, r.children), t.flags |= 4096, t);
}
function ka(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), bi(e.return, t, n);
}
function pi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function $d(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (we(e, t, r.children, n), r = X.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ka(e, n, t);
      else if (e.tag === 19) ka(e, n, t);
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
  if (H(X, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && lo(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), pi(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && lo(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      pi(t, !0, n, null, o);
      break;
    case "together":
      pi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Al(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Et(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), pn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(D(153));
  if (t.child !== null) {
    for (e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Yt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function bh(e, t, n) {
  switch (t.tag) {
    case 3:
      Ud(t), Kn();
      break;
    case 5:
      pd(t);
      break;
    case 1:
      Te(t.type) && Zl(t);
      break;
    case 4:
      Ws(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      H(to, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (H(X, X.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Bd(e, t, n) : (H(X, X.current & 1), e = Et(e, t, n), e !== null ? e.sibling : null);
      H(X, X.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return $d(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), H(X, X.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ad(e, t, n);
  }
  return Et(e, t, n);
}
var Hd, ls, Vd, Wd;
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
ls = function() {
};
Vd = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, sn(ct.current);
    var o = null;
    switch (n) {
      case "input":
        l = Di(e, l), r = Di(e, r), o = [];
        break;
      case "select":
        l = G({}, l, { value: void 0 }), r = G({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = ji(e, l), r = ji(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = bl);
    }
    Pi(n, r);
    var i;
    n = null;
    for (a in l) if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null) if (a === "style") {
      var s = l[a];
      for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Lr.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (s = l != null ? l[a] : void 0, r.hasOwnProperty(a) && u !== s && (u != null || s != null)) if (a === "style") if (s) {
        for (i in s) !s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in u) u.hasOwnProperty(i) && s[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
      } else n || (o || (o = []), o.push(
        a,
        n
      )), n = u;
      else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (o = o || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Lr.hasOwnProperty(a) ? (u != null && a === "onScroll" && V("scroll", e), o || s === u || (o = [])) : (o = o || []).push(a, u));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Wd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function hr(e, t) {
  if (!K) switch (e.tailMode) {
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
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Jh(e, t, n) {
  var r = t.pendingProps;
  switch (As(t), t.tag) {
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
      return me(t), null;
    case 1:
      return Te(t.type) && Jl(), me(t), null;
    case 3:
      return r = t.stateNode, Yn(), W(Re), W(ge), Ks(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Sl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Je !== null && (fs(Je), Je = null))), ls(e, t), me(t), null;
    case 5:
      Qs(t);
      var l = sn(Wr.current);
      if (n = t.type, e !== null && t.stateNode != null) Vd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return me(t), null;
        }
        if (e = sn(ct.current), Sl(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[ut] = t, r[Hr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              V("cancel", r), V("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < wr.length; l++) V(wr[l], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              V(
                "error",
                r
              ), V("load", r);
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              Pu(r, o), V("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, V("invalid", r);
              break;
            case "textarea":
              Ou(r, o), V("invalid", r);
          }
          Pi(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var s = o[i];
            i === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && wl(r.textContent, s, e), l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && wl(
              r.textContent,
              s,
              e
            ), l = ["children", "" + s]) : Lr.hasOwnProperty(i) && s != null && i === "onScroll" && V("scroll", r);
          }
          switch (n) {
            case "input":
              dl(r), Lu(r, o, !0);
              break;
            case "textarea":
              dl(r), Iu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = bl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = yc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[ut] = t, e[Hr] = r, Hd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Li(n, r), n) {
              case "dialog":
                V("cancel", e), V("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < wr.length; l++) V(wr[l], e);
                l = r;
                break;
              case "source":
                V("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                V(
                  "error",
                  e
                ), V("load", e), l = r;
                break;
              case "details":
                V("toggle", e), l = r;
                break;
              case "input":
                Pu(e, r), l = Di(e, r), V("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = G({}, r, { value: void 0 }), V("invalid", e);
                break;
              case "textarea":
                Ou(e, r), l = ji(e, r), V("invalid", e);
                break;
              default:
                l = r;
            }
            Pi(n, l), s = l;
            for (o in s) if (s.hasOwnProperty(o)) {
              var u = s[o];
              o === "style" ? xc(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && wc(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Or(e, u) : typeof u == "number" && Or(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Lr.hasOwnProperty(o) ? u != null && o === "onScroll" && V("scroll", e) : u != null && ks(e, o, u, i));
            }
            switch (n) {
              case "input":
                dl(e), Lu(e, r, !1);
                break;
              case "textarea":
                dl(e), Iu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Gt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? An(e, !!r.multiple, o, !1) : r.defaultValue != null && An(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = bl);
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
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) Wd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
        if (n = sn(Wr.current), sn(ct.current), Sl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ut] = t, (o = r.nodeValue !== n) && (e = Me, e !== null)) switch (e.tag) {
            case 3:
              wl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && wl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ut] = t, t.stateNode = r;
      }
      return me(t), null;
    case 13:
      if (W(X), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (K && ze !== null && t.mode & 1 && !(t.flags & 128)) ud(), Kn(), t.flags |= 98560, o = !1;
        else if (o = Sl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(D(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(D(317));
            o[ut] = t;
          } else Kn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          me(t), o = !1;
        } else Je !== null && (fs(Je), Je = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || X.current & 1 ? ne === 0 && (ne = 3) : lu())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
    case 4:
      return Yn(), ls(e, t), e === null && Br(t.stateNode.containerInfo), me(t), null;
    case 10:
      return $s(t.type._context), me(t), null;
    case 17:
      return Te(t.type) && Jl(), me(t), null;
    case 19:
      if (W(X), o = t.memoizedState, o === null) return me(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) hr(o, !1);
      else {
        if (ne !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = lo(e), i !== null) {
            for (t.flags |= 128, hr(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return H(X, X.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && J() > bn && (t.flags |= 128, r = !0, hr(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = lo(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), hr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !K) return me(t), null;
        } else 2 * J() - o.renderingStartTime > bn && n !== 1073741824 && (t.flags |= 128, r = !0, hr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = X.current, H(X, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
    case 22:
    case 23:
      return ru(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ie & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function Zh(e, t) {
  switch (As(t), t.tag) {
    case 1:
      return Te(t.type) && Jl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Yn(), W(Re), W(ge), Ks(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Qs(t), null;
    case 13:
      if (W(X), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(D(340));
        Kn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return W(X), null;
    case 4:
      return Yn(), null;
    case 10:
      return $s(t.type._context), null;
    case 22:
    case 23:
      return ru(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Cl = !1, ve = !1, qh = typeof WeakSet == "function" ? WeakSet : Set, j = null;
function In(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    b(e, t, r);
  }
  else n.current = null;
}
function os(e, t, n) {
  try {
    n();
  } catch (r) {
    b(e, t, r);
  }
}
var Ca = !1;
function em(e, t) {
  if (Hi = Xl, e = Gc(), zs(e)) {
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
        var i = 0, s = -1, u = -1, a = 0, h = 0, f = e, m = null;
        t: for (; ; ) {
          for (var y; f !== n || l !== 0 && f.nodeType !== 3 || (s = i + l), f !== o || r !== 0 && f.nodeType !== 3 || (u = i + r), f.nodeType === 3 && (i += f.nodeValue.length), (y = f.firstChild) !== null; )
            m = f, f = y;
          for (; ; ) {
            if (f === e) break t;
            if (m === n && ++a === l && (s = i), m === o && ++h === r && (u = i), (y = f.nextSibling) !== null) break;
            f = m, m = f.parentNode;
          }
          f = y;
        }
        n = s === -1 || u === -1 ? null : { start: s, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Vi = { focusedElem: e, selectionRange: n }, Xl = !1, j = t; j !== null; ) if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, j = e;
  else for (; j !== null; ) {
    t = j;
    try {
      var C = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (C !== null) {
            var S = C.memoizedProps, R = C.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Ge(t.type, S), R);
            d.__reactInternalSnapshotBeforeUpdate = c;
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
      b(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, j = e;
      break;
    }
    j = t.return;
  }
  return C = Ca, Ca = !1, C;
}
function Dr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && os(t, n, o);
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
function is(e) {
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
function Qd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Qd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ut], delete t[Hr], delete t[Ki], delete t[Mh], delete t[Ah])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Kd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ea(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Kd(e.return)) return null;
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
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = bl));
  else if (r !== 4 && (e = e.child, e !== null)) for (ss(e, t, n), e = e.sibling; e !== null; ) ss(e, t, n), e = e.sibling;
}
function us(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (us(e, t, n), e = e.sibling; e !== null; ) us(e, t, n), e = e.sibling;
}
var ce = null, be = !1;
function Ot(e, t, n) {
  for (n = n.child; n !== null; ) Xd(e, t, n), n = n.sibling;
}
function Xd(e, t, n) {
  if (at && typeof at.onCommitFiberUnmount == "function") try {
    at.onCommitFiberUnmount(So, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ve || In(n, t);
    case 6:
      var r = ce, l = be;
      ce = null, Ot(e, t, n), ce = r, be = l, ce !== null && (be ? (e = ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null && (be ? (e = ce, n = n.stateNode, e.nodeType === 8 ? ii(e.parentNode, n) : e.nodeType === 1 && ii(e, n), Ar(e)) : ii(ce, n.stateNode));
      break;
    case 4:
      r = ce, l = be, ce = n.stateNode.containerInfo, be = !0, Ot(e, t, n), ce = r, be = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ve && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && os(n, t, i), l = l.next;
        } while (l !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (!ve && (In(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        b(n, t, s);
      }
      Ot(e, t, n);
      break;
    case 21:
      Ot(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ve = (r = ve) || n.memoizedState !== null, Ot(e, t, n), ve = r) : Ot(e, t, n);
      break;
    default:
      Ot(e, t, n);
  }
}
function Na(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new qh()), t.forEach(function(r) {
      var l = am.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ye(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, s = i;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            ce = s.stateNode, be = !1;
            break e;
          case 3:
            ce = s.stateNode.containerInfo, be = !0;
            break e;
          case 4:
            ce = s.stateNode.containerInfo, be = !0;
            break e;
        }
        s = s.return;
      }
      if (ce === null) throw Error(D(160));
      Xd(o, i, l), ce = null, be = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (a) {
      b(l, t, a);
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
      if (Ye(t, e), it(e), r & 4) {
        try {
          Dr(3, e, e.return), To(3, e);
        } catch (S) {
          b(e, e.return, S);
        }
        try {
          Dr(5, e, e.return);
        } catch (S) {
          b(e, e.return, S);
        }
      }
      break;
    case 1:
      Ye(t, e), it(e), r & 512 && n !== null && In(n, n.return);
      break;
    case 5:
      if (Ye(t, e), it(e), r & 512 && n !== null && In(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Or(l, "");
        } catch (S) {
          b(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, s = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          s === "input" && o.type === "radio" && o.name != null && vc(l, o), Li(s, i);
          var a = Li(s, o);
          for (i = 0; i < u.length; i += 2) {
            var h = u[i], f = u[i + 1];
            h === "style" ? xc(l, f) : h === "dangerouslySetInnerHTML" ? wc(l, f) : h === "children" ? Or(l, f) : ks(l, h, f, a);
          }
          switch (s) {
            case "input":
              Ri(l, o);
              break;
            case "textarea":
              gc(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var y = o.value;
              y != null ? An(l, !!o.multiple, y, !1) : m !== !!o.multiple && (o.defaultValue != null ? An(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : An(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Hr] = o;
        } catch (S) {
          b(e, e.return, S);
        }
      }
      break;
    case 6:
      if (Ye(t, e), it(e), r & 4) {
        if (e.stateNode === null) throw Error(D(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (S) {
          b(e, e.return, S);
        }
      }
      break;
    case 3:
      if (Ye(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ar(t.containerInfo);
      } catch (S) {
        b(e, e.return, S);
      }
      break;
    case 4:
      Ye(t, e), it(e);
      break;
    case 13:
      Ye(t, e), it(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (tu = J())), r & 4 && Na(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ve = (a = ve) || h, Ye(t, e), ve = a) : Ye(t, e), it(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1) for (j = e, h = e.child; h !== null; ) {
          for (f = j = h; j !== null; ) {
            switch (m = j, y = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Dr(4, m, m.return);
                break;
              case 1:
                In(m, m.return);
                var C = m.stateNode;
                if (typeof C.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, C.props = t.memoizedProps, C.state = t.memoizedState, C.componentWillUnmount();
                  } catch (S) {
                    b(r, n, S);
                  }
                }
                break;
              case 5:
                In(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Ra(f);
                  continue;
                }
            }
            y !== null ? (y.return = m, j = y) : Ra(f);
          }
          h = h.sibling;
        }
        e: for (h = null, f = e; ; ) {
          if (f.tag === 5) {
            if (h === null) {
              h = f;
              try {
                l = f.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = f.stateNode, u = f.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = Sc("display", i));
              } catch (S) {
                b(e, e.return, S);
              }
            }
          } else if (f.tag === 6) {
            if (h === null) try {
              f.stateNode.nodeValue = a ? "" : f.memoizedProps;
            } catch (S) {
              b(e, e.return, S);
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
      Ye(t, e), it(e), r & 4 && Na(e);
      break;
    case 21:
      break;
    default:
      Ye(
        t,
        e
      ), it(e);
  }
}
function it(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Kd(n)) {
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
          r.flags & 32 && (Or(l, ""), r.flags &= -33);
          var o = Ea(e);
          us(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, s = Ea(e);
          ss(e, s, i);
          break;
        default:
          throw Error(D(161));
      }
    } catch (u) {
      b(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function tm(e, t, n) {
  j = e, Gd(e);
}
function Gd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Cl;
      if (!i) {
        var s = l.alternate, u = s !== null && s.memoizedState !== null || ve;
        s = Cl;
        var a = ve;
        if (Cl = i, (ve = u) && !a) for (j = l; j !== null; ) i = j, u = i.child, i.tag === 22 && i.memoizedState !== null ? Ta(l) : u !== null ? (u.return = i, j = u) : Ta(l);
        for (; o !== null; ) j = o, Gd(o), o = o.sibling;
        j = l, Cl = s, ve = a;
      }
      Da(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, j = o) : Da(e);
  }
}
function Da(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ve || To(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ve) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ge(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && ca(t, o, r);
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
              ca(t, i, n);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (n === null && t.flags & 4) {
              n = s;
              var u = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u.autoFocus && n.focus();
                  break;
                case "img":
                  u.src && (n.src = u.src);
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
              var a = t.alternate;
              if (a !== null) {
                var h = a.memoizedState;
                if (h !== null) {
                  var f = h.dehydrated;
                  f !== null && Ar(f);
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
        ve || t.flags & 512 && is(t);
      } catch (m) {
        b(t, t.return, m);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function Ra(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function Ta(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            To(4, t);
          } catch (u) {
            b(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              b(t, l, u);
            }
          }
          var o = t.return;
          try {
            is(t);
          } catch (u) {
            b(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            is(t);
          } catch (u) {
            b(t, i, u);
          }
      }
    } catch (u) {
      b(t, t.return, u);
    }
    if (t === e) {
      j = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, j = s;
      break;
    }
    j = t.return;
  }
}
var nm = Math.ceil, so = Nt.ReactCurrentDispatcher, qs = Nt.ReactCurrentOwner, Qe = Nt.ReactCurrentBatchConfig, F = 0, oe = null, q = null, de = 0, Ie = 0, zn = qt(0), ne = 0, Yr = null, pn = 0, jo = 0, eu = 0, Rr = null, Ne = null, tu = 0, bn = 1 / 0, vt = null, uo = !1, as = null, Kt = null, El = !1, Bt = null, ao = 0, Tr = 0, cs = null, Fl = -1, Ul = 0;
function Se() {
  return F & 6 ? J() : Fl !== -1 ? Fl : Fl = J();
}
function Xt(e) {
  return e.mode & 1 ? F & 2 && de !== 0 ? de & -de : Uh.transition !== null ? (Ul === 0 && (Ul = Oc()), Ul) : (e = U, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Bc(e.type)), e) : 1;
}
function qe(e, t, n, r) {
  if (50 < Tr) throw Tr = 0, cs = null, Error(D(185));
  qr(e, n, r), (!(F & 2) || e !== oe) && (e === oe && (!(F & 2) && (jo |= n), ne === 4 && Ft(e, de)), je(e, r), n === 1 && F === 0 && !(t.mode & 1) && (bn = J() + 500, No && en()));
}
function je(e, t) {
  var n = e.callbackNode;
  Up(e, t);
  var r = Kl(e, e === oe ? de : 0);
  if (r === 0) n !== null && Au(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Au(n), t === 1) e.tag === 0 ? Fh(ja.bind(null, e)) : od(ja.bind(null, e)), Ih(function() {
      !(F & 6) && en();
    }), n = null;
    else {
      switch (Ic(r)) {
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
          n = Lc;
          break;
        default:
          n = Ql;
      }
      n = rf(n, bd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function bd(e, t) {
  if (Fl = -1, Ul = 0, F & 6) throw Error(D(327));
  var n = e.callbackNode;
  if (Hn() && e.callbackNode !== n) return null;
  var r = Kl(e, e === oe ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = co(e, r);
  else {
    t = r;
    var l = F;
    F |= 2;
    var o = Zd();
    (oe !== e || de !== t) && (vt = null, bn = J() + 500, un(e, t));
    do
      try {
        om();
        break;
      } catch (s) {
        Jd(e, s);
      }
    while (!0);
    Bs(), so.current = o, F = l, q !== null ? t = 0 : (oe = null, de = 0, t = ne);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ai(e), l !== 0 && (r = l, t = ds(e, l))), t === 1) throw n = Yr, un(e, 0), Ft(e, r), je(e, J()), n;
    if (t === 6) Ft(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !rm(l) && (t = co(e, r), t === 2 && (o = Ai(e), o !== 0 && (r = o, t = ds(e, o))), t === 1)) throw n = Yr, un(e, 0), Ft(e, r), je(e, J()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          rn(e, Ne, vt);
          break;
        case 3:
          if (Ft(e, r), (r & 130023424) === r && (t = tu + 500 - J(), 10 < t)) {
            if (Kl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Se(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Qi(rn.bind(null, e, Ne, vt), t);
            break;
          }
          rn(e, Ne, vt);
          break;
        case 4:
          if (Ft(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ze(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * nm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Qi(rn.bind(null, e, Ne, vt), r);
            break;
          }
          rn(e, Ne, vt);
          break;
        case 5:
          rn(e, Ne, vt);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return je(e, J()), e.callbackNode === n ? bd.bind(null, e) : null;
}
function ds(e, t) {
  var n = Rr;
  return e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256), e = co(e, t), e !== 2 && (t = Ne, Ne = n, t !== null && fs(t)), e;
}
function fs(e) {
  Ne === null ? Ne = e : Ne.push.apply(Ne, e);
}
function rm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!et(o(), l)) return !1;
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
function Ft(e, t) {
  for (t &= ~eu, t &= ~jo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ze(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ja(e) {
  if (F & 6) throw Error(D(327));
  Hn();
  var t = Kl(e, 0);
  if (!(t & 1)) return je(e, J()), null;
  var n = co(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ai(e);
    r !== 0 && (t = r, n = ds(e, r));
  }
  if (n === 1) throw n = Yr, un(e, 0), Ft(e, t), je(e, J()), n;
  if (n === 6) throw Error(D(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, rn(e, Ne, vt), je(e, J()), null;
}
function nu(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (bn = J() + 500, No && en());
  }
}
function hn(e) {
  Bt !== null && Bt.tag === 0 && !(F & 6) && Hn();
  var t = F;
  F |= 1;
  var n = Qe.transition, r = U;
  try {
    if (Qe.transition = null, U = 1, e) return e();
  } finally {
    U = r, Qe.transition = n, F = t, !(F & 6) && en();
  }
}
function ru() {
  Ie = zn.current, W(zn);
}
function un(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Oh(n)), q !== null) for (n = q.return; n !== null; ) {
    var r = n;
    switch (As(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Jl();
        break;
      case 3:
        Yn(), W(Re), W(ge), Ks();
        break;
      case 5:
        Qs(r);
        break;
      case 4:
        Yn();
        break;
      case 13:
        W(X);
        break;
      case 19:
        W(X);
        break;
      case 10:
        $s(r.type._context);
        break;
      case 22:
      case 23:
        ru();
    }
    n = n.return;
  }
  if (oe = e, q = e = Yt(e.current, null), de = Ie = t, ne = 0, Yr = null, eu = jo = pn = 0, Ne = Rr = null, on !== null) {
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
function Jd(e, t) {
  do {
    var n = q;
    try {
      if (Bs(), zl.current = io, oo) {
        for (var r = Y.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        oo = !1;
      }
      if (fn = 0, re = ee = Y = null, Nr = !1, Qr = 0, qs.current = null, n === null || n.return === null) {
        ne = 1, Yr = t, q = null;
        break;
      }
      e: {
        var o = e, i = n.return, s = n, u = t;
        if (t = de, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var a = u, h = s, f = h.tag;
          if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var y = va(i);
          if (y !== null) {
            y.flags &= -257, ga(y, i, s, o, t), y.mode & 1 && ma(o, a, t), t = y, u = a;
            var C = t.updateQueue;
            if (C === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(u), t.updateQueue = S;
            } else C.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              ma(o, a, t), lu();
              break e;
            }
            u = Error(D(426));
          }
        } else if (K && s.mode & 1) {
          var R = va(i);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), ga(R, i, s, o, t), Fs(Gn(u, s));
            break e;
          }
        }
        o = u = Gn(u, s), ne !== 4 && (ne = 2), Rr === null ? Rr = [o] : Rr.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var d = Id(o, u, t);
              aa(o, d);
              break e;
            case 1:
              s = u;
              var c = o.type, p = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Kt === null || !Kt.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var w = zd(o, s, t);
                aa(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ef(n);
    } catch (x) {
      t = x, q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Zd() {
  var e = so.current;
  return so.current = io, e === null ? io : e;
}
function lu() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4), oe === null || !(pn & 268435455) && !(jo & 268435455) || Ft(oe, de);
}
function co(e, t) {
  var n = F;
  F |= 2;
  var r = Zd();
  (oe !== e || de !== t) && (vt = null, un(e, t));
  do
    try {
      lm();
      break;
    } catch (l) {
      Jd(e, l);
    }
  while (!0);
  if (Bs(), F = n, so.current = r, q !== null) throw Error(D(261));
  return oe = null, de = 0, ne;
}
function lm() {
  for (; q !== null; ) qd(q);
}
function om() {
  for (; q !== null && !_p(); ) qd(q);
}
function qd(e) {
  var t = nf(e.alternate, e, Ie);
  e.memoizedProps = e.pendingProps, t === null ? ef(e) : q = t, qs.current = null;
}
function ef(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Zh(n, t), n !== null) {
        n.flags &= 32767, q = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ne = 6, q = null;
        return;
      }
    } else if (n = Jh(n, t, Ie), n !== null) {
      q = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function rn(e, t, n) {
  var r = U, l = Qe.transition;
  try {
    Qe.transition = null, U = 1, im(e, t, n, r);
  } finally {
    Qe.transition = l, U = r;
  }
  return null;
}
function im(e, t, n, r) {
  do
    Hn();
  while (Bt !== null);
  if (F & 6) throw Error(D(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(D(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Bp(e, o), e === oe && (q = oe = null, de = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || El || (El = !0, rf(Ql, function() {
    return Hn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Qe.transition, Qe.transition = null;
    var i = U;
    U = 1;
    var s = F;
    F |= 4, qs.current = null, em(e, n), Yd(n, e), Dh(Vi), Xl = !!Hi, Vi = Hi = null, e.current = n, tm(n), Pp(), F = s, U = i, Qe.transition = o;
  } else e.current = n;
  if (El && (El = !1, Bt = e, ao = l), o = e.pendingLanes, o === 0 && (Kt = null), Ip(n.stateNode), je(e, J()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (uo) throw uo = !1, e = as, as = null, e;
  return ao & 1 && e.tag !== 0 && Hn(), o = e.pendingLanes, o & 1 ? e === cs ? Tr++ : (Tr = 0, cs = e) : Tr = 0, en(), null;
}
function Hn() {
  if (Bt !== null) {
    var e = Ic(ao), t = Qe.transition, n = U;
    try {
      if (Qe.transition = null, U = 16 > e ? 16 : e, Bt === null) var r = !1;
      else {
        if (e = Bt, Bt = null, ao = 0, F & 6) throw Error(D(331));
        var l = F;
        for (F |= 4, j = e.current; j !== null; ) {
          var o = j, i = o.child;
          if (j.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (j = a; j !== null; ) {
                  var h = j;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dr(8, h, o);
                  }
                  var f = h.child;
                  if (f !== null) f.return = h, j = f;
                  else for (; j !== null; ) {
                    h = j;
                    var m = h.sibling, y = h.return;
                    if (Qd(h), h === a) {
                      j = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = y, j = m;
                      break;
                    }
                    j = y;
                  }
                }
              }
              var C = o.alternate;
              if (C !== null) {
                var S = C.child;
                if (S !== null) {
                  C.child = null;
                  do {
                    var R = S.sibling;
                    S.sibling = null, S = R;
                  } while (S !== null);
                }
              }
              j = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, j = i;
          else e: for (; j !== null; ) {
            if (o = j, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Dr(9, o, o.return);
            }
            var d = o.sibling;
            if (d !== null) {
              d.return = o.return, j = d;
              break e;
            }
            j = o.return;
          }
        }
        var c = e.current;
        for (j = c; j !== null; ) {
          i = j;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) p.return = i, j = p;
          else e: for (i = c; j !== null; ) {
            if (s = j, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  To(9, s);
              }
            } catch (x) {
              b(s, s.return, x);
            }
            if (s === i) {
              j = null;
              break e;
            }
            var w = s.sibling;
            if (w !== null) {
              w.return = s.return, j = w;
              break e;
            }
            j = s.return;
          }
        }
        if (F = l, en(), at && typeof at.onPostCommitFiberRoot == "function") try {
          at.onPostCommitFiberRoot(So, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      U = n, Qe.transition = t;
    }
  }
  return !1;
}
function _a(e, t, n) {
  t = Gn(n, t), t = Id(e, t, 1), e = Qt(e, t, 1), t = Se(), e !== null && (qr(e, 1, t), je(e, t));
}
function b(e, t, n) {
  if (e.tag === 3) _a(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      _a(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Kt === null || !Kt.has(r))) {
        e = Gn(n, e), e = zd(t, e, 1), t = Qt(t, e, 1), e = Se(), t !== null && (qr(t, 1, e), je(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function sm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Se(), e.pingedLanes |= e.suspendedLanes & n, oe === e && (de & n) === n && (ne === 4 || ne === 3 && (de & 130023424) === de && 500 > J() - tu ? un(e, 0) : eu |= n), je(e, t);
}
function tf(e, t) {
  t === 0 && (e.mode & 1 ? (t = hl, hl <<= 1, !(hl & 130023424) && (hl = 4194304)) : t = 1);
  var n = Se();
  e = Ct(e, t), e !== null && (qr(e, t, n), je(e, n));
}
function um(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), tf(e, n);
}
function am(e, t) {
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
  r !== null && r.delete(t), tf(e, n);
}
var nf;
nf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Re.current) De = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return De = !1, bh(e, t, n);
    De = !!(e.flags & 131072);
  }
  else De = !1, K && t.flags & 1048576 && id(t, eo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Al(e, t), e = t.pendingProps;
      var l = Qn(t, ge.current);
      $n(t, n), l = Ys(null, t, r, e, l, n);
      var o = Gs();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Te(r) ? (o = !0, Zl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Vs(t), l.updater = Ro, t.stateNode = l, l._reactInternals = t, Zi(t, r, e, n), t = ts(null, t, r, !0, o, n)) : (t.tag = 0, K && o && Ms(t), we(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Al(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = dm(r), e = Ge(r, e), l) {
          case 0:
            t = es(null, t, r, e, n);
            break e;
          case 1:
            t = Sa(null, t, r, e, n);
            break e;
          case 11:
            t = ya(null, t, r, e, n);
            break e;
          case 14:
            t = wa(null, t, r, Ge(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), es(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), Sa(e, t, r, l, n);
    case 3:
      e: {
        if (Ud(t), e === null) throw Error(D(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, fd(e, t), ro(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = Gn(Error(D(423)), t), t = xa(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Gn(Error(D(424)), t), t = xa(e, t, r, n, l);
          break e;
        } else for (ze = Wt(t.stateNode.containerInfo.firstChild), Me = t, K = !0, Je = null, n = cd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Kn(), r === l) {
            t = Et(e, t, n);
            break e;
          }
          we(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return pd(t), e === null && Gi(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Wi(r, l) ? i = null : o !== null && Wi(r, o) && (t.flags |= 32), Fd(e, t), we(e, t, i, n), t.child;
    case 6:
      return e === null && Gi(t), null;
    case 13:
      return Bd(e, t, n);
    case 4:
      return Ws(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Xn(t, null, r, n) : we(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), ya(e, t, r, l, n);
    case 7:
      return we(e, t, t.pendingProps, n), t.child;
    case 8:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, H(to, r._currentValue), r._currentValue = i, o !== null) if (et(o.value, i)) {
          if (o.children === l.children && !Re.current) {
            t = Et(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var s = o.dependencies;
          if (s !== null) {
            i = o.child;
            for (var u = s.firstContext; u !== null; ) {
              if (u.context === r) {
                if (o.tag === 1) {
                  u = St(-1, n & -n), u.tag = 2;
                  var a = o.updateQueue;
                  if (a !== null) {
                    a = a.shared;
                    var h = a.pending;
                    h === null ? u.next = u : (u.next = h.next, h.next = u), a.pending = u;
                  }
                }
                o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), bi(
                  o.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(D(341));
            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), bi(i, n, t), i = o.sibling;
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
        we(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, $n(t, n), l = Ke(l), r = r(l), t.flags |= 1, we(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ge(r, t.pendingProps), l = Ge(r.type, l), wa(e, t, r, l, n);
    case 15:
      return Md(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), Al(e, t), t.tag = 1, Te(r) ? (e = !0, Zl(t)) : e = !1, $n(t, n), Od(t, r, l), Zi(t, r, l, n), ts(null, t, r, !0, e, n);
    case 19:
      return $d(e, t, n);
    case 22:
      return Ad(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function rf(e, t) {
  return _c(e, t);
}
function cm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function We(e, t, n, r) {
  return new cm(e, t, n, r);
}
function ou(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function dm(e) {
  if (typeof e == "function") return ou(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Es) return 11;
    if (e === Ns) return 14;
  }
  return 2;
}
function Yt(e, t) {
  var n = e.alternate;
  return n === null ? (n = We(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Bl(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") ou(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Nn:
      return an(n.children, l, o, t);
    case Cs:
      i = 8, l |= 8;
      break;
    case ki:
      return e = We(12, n, t, l | 2), e.elementType = ki, e.lanes = o, e;
    case Ci:
      return e = We(13, n, t, l), e.elementType = Ci, e.lanes = o, e;
    case Ei:
      return e = We(19, n, t, l), e.elementType = Ei, e.lanes = o, e;
    case pc:
      return _o(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case dc:
          i = 10;
          break e;
        case fc:
          i = 9;
          break e;
        case Es:
          i = 11;
          break e;
        case Ns:
          i = 14;
          break e;
        case It:
          i = 16, r = null;
          break e;
      }
      throw Error(D(130, e == null ? e : typeof e, ""));
  }
  return t = We(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function an(e, t, n, r) {
  return e = We(7, e, r, t), e.lanes = n, e;
}
function _o(e, t, n, r) {
  return e = We(22, e, r, t), e.elementType = pc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function hi(e, t, n) {
  return e = We(6, e, null, t), e.lanes = n, e;
}
function mi(e, t, n) {
  return t = We(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function fm(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Go(0), this.expirationTimes = Go(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Go(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function iu(e, t, n, r, l, o, i, s, u) {
  return e = new fm(e, t, n, s, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = We(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vs(o), e;
}
function pm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: En, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function lf(e) {
  if (!e) return bt;
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
          if (Te(t.type)) {
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
    if (Te(n)) return ld(e, n, t);
  }
  return t;
}
function of(e, t, n, r, l, o, i, s, u) {
  return e = iu(n, r, !0, e, l, o, i, s, u), e.context = lf(null), n = e.current, r = Se(), l = Xt(n), o = St(r, l), o.callback = t ?? null, Qt(n, o, l), e.current.lanes = l, qr(e, l, r), je(e, r), e;
}
function Po(e, t, n, r) {
  var l = t.current, o = Se(), i = Xt(l);
  return n = lf(n), t.context === null ? t.context = n : t.pendingContext = n, t = St(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qt(l, t, i), e !== null && (qe(e, l, i, o), Il(e, l, i)), i;
}
function fo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Pa(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function su(e, t) {
  Pa(e, t), (e = e.alternate) && Pa(e, t);
}
function hm() {
  return null;
}
var sf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function uu(e) {
  this._internalRoot = e;
}
Lo.prototype.render = uu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  Po(e, t, null, null);
};
Lo.prototype.unmount = uu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function() {
      Po(null, e, null, null);
    }), t[kt] = null;
  }
};
function Lo(e) {
  this._internalRoot = e;
}
Lo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ac();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < At.length && t !== 0 && t < At[n].priority; n++) ;
    At.splice(n, 0, e), n === 0 && Uc(e);
  }
};
function au(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Oo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function La() {
}
function mm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var a = fo(i);
        o.call(a);
      };
    }
    var i = of(t, r, e, 0, null, !1, !1, "", La);
    return e._reactRootContainer = i, e[kt] = i.current, Br(e.nodeType === 8 ? e.parentNode : e), hn(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var a = fo(u);
      s.call(a);
    };
  }
  var u = iu(e, 0, !1, null, null, !1, !1, "", La);
  return e._reactRootContainer = u, e[kt] = u.current, Br(e.nodeType === 8 ? e.parentNode : e), hn(function() {
    Po(t, u, n, r);
  }), u;
}
function Io(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function() {
        var u = fo(i);
        s.call(u);
      };
    }
    Po(t, i, e, l);
  } else i = mm(n, t, e, l, r);
  return fo(i);
}
zc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yr(t.pendingLanes);
        n !== 0 && (Ts(t, n | 1), je(t, J()), !(F & 6) && (bn = J() + 500, en()));
      }
      break;
    case 13:
      hn(function() {
        var r = Ct(e, 1);
        if (r !== null) {
          var l = Se();
          qe(r, e, 1, l);
        }
      }), su(e, 1);
  }
};
js = function(e) {
  if (e.tag === 13) {
    var t = Ct(e, 134217728);
    if (t !== null) {
      var n = Se();
      qe(t, e, 134217728, n);
    }
    su(e, 134217728);
  }
};
Mc = function(e) {
  if (e.tag === 13) {
    var t = Xt(e), n = Ct(e, t);
    if (n !== null) {
      var r = Se();
      qe(n, e, t, r);
    }
    su(e, t);
  }
};
Ac = function() {
  return U;
};
Fc = function(e, t) {
  var n = U;
  try {
    return U = e, t();
  } finally {
    U = n;
  }
};
Ii = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ri(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Eo(r);
            if (!l) throw Error(D(90));
            mc(r), Ri(r, l);
          }
        }
      }
      break;
    case "textarea":
      gc(e, n);
      break;
    case "select":
      t = n.value, t != null && An(e, !!n.multiple, t, !1);
  }
};
Ec = nu;
Nc = hn;
var vm = { usingClientEntryPoint: !1, Events: [tl, jn, Eo, kc, Cc, nu] }, mr = { findFiberByHostInstance: ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gm = { bundleType: mr.bundleType, version: mr.version, rendererPackageName: mr.rendererPackageName, rendererConfig: mr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Nt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Tc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: mr.findFiberByHostInstance || hm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Nl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Nl.isDisabled && Nl.supportsFiber) try {
    So = Nl.inject(gm), at = Nl;
  } catch {
  }
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vm;
Fe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!au(t)) throw Error(D(200));
  return pm(e, t, null, n);
};
Fe.createRoot = function(e, t) {
  if (!au(e)) throw Error(D(299));
  var n = !1, r = "", l = sf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = iu(e, 1, !1, null, null, n, !1, r, l), e[kt] = t.current, Br(e.nodeType === 8 ? e.parentNode : e), new uu(t);
};
Fe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(D(188)) : (e = Object.keys(e).join(","), Error(D(268, e)));
  return e = Tc(t), e = e === null ? null : e.stateNode, e;
};
Fe.flushSync = function(e) {
  return hn(e);
};
Fe.hydrate = function(e, t, n) {
  if (!Oo(t)) throw Error(D(200));
  return Io(null, e, t, !0, n);
};
Fe.hydrateRoot = function(e, t, n) {
  if (!au(e)) throw Error(D(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = sf;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = of(t, null, e, 1, n ?? null, l, !1, o, i), e[kt] = t.current, Br(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Lo(t);
};
Fe.render = function(e, t, n) {
  if (!Oo(t)) throw Error(D(200));
  return Io(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function(e) {
  if (!Oo(e)) throw Error(D(40));
  return e._reactRootContainer ? (hn(function() {
    Io(null, null, e, !1, function() {
      e._reactRootContainer = null, e[kt] = null;
    });
  }), !0) : !1;
};
Fe.unstable_batchedUpdates = nu;
Fe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Oo(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return Io(e, t, n, !1, r);
};
Fe.version = "18.3.1-next-f1338f8080-20240426";
function uf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uf);
    } catch (e) {
      console.error(e);
    }
}
uf(), sc.exports = Fe;
var Mn = sc.exports, Oa = Mn;
Si.createRoot = Oa.createRoot, Si.hydrateRoot = Oa.hydrateRoot;
function ym() {
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
const zo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function er(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function cu(e) {
  return "nodeType" in e;
}
function Ce(e) {
  var t, n;
  return e ? er(e) ? e : cu(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function du(e) {
  const {
    Document: t
  } = Ce(e);
  return e instanceof t;
}
function rl(e) {
  return er(e) ? !1 : e instanceof Ce(e).HTMLElement;
}
function af(e) {
  return e instanceof Ce(e).SVGElement;
}
function tr(e) {
  return e ? er(e) ? e.document : cu(e) ? du(e) ? e : rl(e) || af(e) ? e.ownerDocument : document : document : document;
}
const tt = zo ? g.useLayoutEffect : g.useEffect;
function Mo(e) {
  const t = g.useRef(e);
  return tt(() => {
    t.current = e;
  }), g.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
      r[l] = arguments[l];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function wm() {
  const e = g.useRef(null), t = g.useCallback((r, l) => {
    e.current = setInterval(r, l);
  }, []), n = g.useCallback(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function Gr(e, t) {
  t === void 0 && (t = [e]);
  const n = g.useRef(e);
  return tt(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function ll(e, t) {
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
function po(e) {
  const t = Mo(e), n = g.useRef(null), r = g.useCallback(
    (l) => {
      l !== n.current && (t == null || t(l, n.current)), n.current = l;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function ho(e) {
  const t = g.useRef();
  return g.useEffect(() => {
    t.current = e;
  }, [e]), t.current;
}
let vi = {};
function ol(e, t) {
  return g.useMemo(() => {
    if (t)
      return t;
    const n = vi[e] == null ? 0 : vi[e] + 1;
    return vi[e] = n, e + "-" + n;
  }, [e, t]);
}
function cf(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
      r[l - 1] = arguments[l];
    return r.reduce((o, i) => {
      const s = Object.entries(i);
      for (const [u, a] of s) {
        const h = o[u];
        h != null && (o[u] = h + e * a);
      }
      return o;
    }, {
      ...t
    });
  };
}
const Vn = /* @__PURE__ */ cf(1), br = /* @__PURE__ */ cf(-1);
function Sm(e) {
  return "clientX" in e && "clientY" in e;
}
function Ao(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Ce(e.target);
  return t && e instanceof t;
}
function xm(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Ce(e.target);
  return t && e instanceof t;
}
function mo(e) {
  if (xm(e)) {
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
  return Sm(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Jt = /* @__PURE__ */ Object.freeze({
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
        return [Jt.Translate.toString(e), Jt.Scale.toString(e)].join(" ");
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
}), Ia = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function km(e) {
  return e.matches(Ia) ? e : e.querySelector(Ia);
}
const Cm = {
  display: "none"
};
function Em(e) {
  let {
    id: t,
    value: n
  } = e;
  return Q.createElement("div", {
    id: t,
    style: Cm
  }, n);
}
function Nm(e) {
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
  return Q.createElement("div", {
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
const df = /* @__PURE__ */ g.createContext(null);
function Rm(e) {
  const t = g.useContext(df);
  g.useEffect(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Tm() {
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
const jm = {
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
    screenReaderInstructions: l = jm
  } = e;
  const {
    announce: o,
    announcement: i
  } = Dm(), s = ol("DndLiveRegion"), [u, a] = g.useState(!1);
  if (g.useEffect(() => {
    a(!0);
  }, []), Rm(g.useMemo(() => ({
    onDragStart(f) {
      let {
        active: m
      } = f;
      o(t.onDragStart({
        active: m
      }));
    },
    onDragMove(f) {
      let {
        active: m,
        over: y
      } = f;
      t.onDragMove && o(t.onDragMove({
        active: m,
        over: y
      }));
    },
    onDragOver(f) {
      let {
        active: m,
        over: y
      } = f;
      o(t.onDragOver({
        active: m,
        over: y
      }));
    },
    onDragEnd(f) {
      let {
        active: m,
        over: y
      } = f;
      o(t.onDragEnd({
        active: m,
        over: y
      }));
    },
    onDragCancel(f) {
      let {
        active: m,
        over: y
      } = f;
      o(t.onDragCancel({
        active: m,
        over: y
      }));
    }
  }), [o, t])), !u)
    return null;
  const h = Q.createElement(Q.Fragment, null, Q.createElement(Em, {
    id: r,
    value: l.draggable
  }), Q.createElement(Nm, {
    id: s,
    announcement: i
  }));
  return n ? Mn.createPortal(h, n) : h;
}
var te;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(te || (te = {}));
function vo() {
}
function za(e, t) {
  return g.useMemo(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function Lm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return g.useMemo(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const nt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Om(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Im(e, t) {
  const n = mo(e);
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
function Mm(e, t) {
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
function Ma(e) {
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
function ff(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
const pf = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const l = Ma(t), o = [];
  for (const i of r) {
    const {
      id: s
    } = i, u = n.get(s);
    if (u) {
      const a = Ma(u), h = l.reduce((m, y, C) => m + Om(a[C], y), 0), f = Number((h / 4).toFixed(4));
      o.push({
        id: s,
        data: {
          droppableContainer: i,
          value: f
        }
      });
    }
  }
  return o.sort(zm);
};
function Am(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), l = Math.min(t.left + t.width, e.left + e.width), o = Math.min(t.top + t.height, e.top + e.height), i = l - r, s = o - n;
  if (r < l && n < o) {
    const u = t.width * t.height, a = e.width * e.height, h = i * s, f = h / (u + a - h);
    return Number(f.toFixed(4));
  }
  return 0;
}
const Fm = (e) => {
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
      const u = Am(s, t);
      u > 0 && l.push({
        id: i,
        data: {
          droppableContainer: o,
          value: u
        }
      });
    }
  }
  return l.sort(Mm);
};
function Um(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function hf(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : nt;
}
function Bm(e) {
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
const $m = /* @__PURE__ */ Bm(1);
function mf(e) {
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
  const r = mf(t);
  if (!r)
    return e;
  const {
    scaleX: l,
    scaleY: o,
    x: i,
    y: s
  } = r, u = e.left - i - (1 - l) * parseFloat(n), a = e.top - s - (1 - o) * parseFloat(n.slice(n.indexOf(" ") + 1)), h = l ? e.width / l : e.width, f = o ? e.height / o : e.height;
  return {
    width: h,
    height: f,
    top: a,
    right: u + h,
    bottom: a + f,
    left: u
  };
}
const Vm = {
  ignoreTransform: !1
};
function nr(e, t) {
  t === void 0 && (t = Vm);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: a,
      transformOrigin: h
    } = Ce(e).getComputedStyle(e);
    a && (n = Hm(n, a, h));
  }
  const {
    top: r,
    left: l,
    width: o,
    height: i,
    bottom: s,
    right: u
  } = n;
  return {
    top: r,
    left: l,
    width: o,
    height: i,
    bottom: s,
    right: u
  };
}
function Aa(e) {
  return nr(e, {
    ignoreTransform: !0
  });
}
function Wm(e) {
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
function Qm(e, t) {
  return t === void 0 && (t = Ce(e).getComputedStyle(e)), t.position === "fixed";
}
function Km(e, t) {
  t === void 0 && (t = Ce(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((l) => {
    const o = t[l];
    return typeof o == "string" ? n.test(o) : !1;
  });
}
function Fo(e, t) {
  const n = [];
  function r(l) {
    if (t != null && n.length >= t || !l)
      return n;
    if (du(l) && l.scrollingElement != null && !n.includes(l.scrollingElement))
      return n.push(l.scrollingElement), n;
    if (!rl(l) || af(l) || n.includes(l))
      return n;
    const o = Ce(e).getComputedStyle(l);
    return l !== e && Km(l, o) && n.push(l), Qm(l, o) ? n : r(l.parentNode);
  }
  return e ? r(e) : n;
}
function vf(e) {
  const [t] = Fo(e, 1);
  return t ?? null;
}
function gi(e) {
  return !zo || !e ? null : er(e) ? e : cu(e) ? du(e) || e === tr(e).scrollingElement ? window : rl(e) ? e : null : null;
}
function gf(e) {
  return er(e) ? e.scrollX : e.scrollLeft;
}
function yf(e) {
  return er(e) ? e.scrollY : e.scrollTop;
}
function ps(e) {
  return {
    x: gf(e),
    y: yf(e)
  };
}
var le;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(le || (le = {}));
function wf(e) {
  return !zo || !e ? !1 : e === document.scrollingElement;
}
function Sf(e) {
  const t = {
    x: 0,
    y: 0
  }, n = wf(e) ? {
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
const Xm = {
  x: 0.2,
  y: 0.2
};
function Ym(e, t, n, r, l) {
  let {
    top: o,
    left: i,
    right: s,
    bottom: u
  } = n;
  r === void 0 && (r = 10), l === void 0 && (l = Xm);
  const {
    isTop: a,
    isBottom: h,
    isLeft: f,
    isRight: m
  } = Sf(e), y = {
    x: 0,
    y: 0
  }, C = {
    x: 0,
    y: 0
  }, S = {
    height: t.height * l.y,
    width: t.width * l.x
  };
  return !a && o <= t.top + S.height ? (y.y = le.Backward, C.y = r * Math.abs((t.top + S.height - o) / S.height)) : !h && u >= t.bottom - S.height && (y.y = le.Forward, C.y = r * Math.abs((t.bottom - S.height - u) / S.height)), !m && s >= t.right - S.width ? (y.x = le.Forward, C.x = r * Math.abs((t.right - S.width - s) / S.width)) : !f && i <= t.left + S.width && (y.x = le.Backward, C.x = r * Math.abs((t.left + S.width - i) / S.width)), {
    direction: y,
    speed: C
  };
}
function Gm(e) {
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
function xf(e) {
  return e.reduce((t, n) => Vn(t, ps(n)), nt);
}
function bm(e) {
  return e.reduce((t, n) => t + gf(n), 0);
}
function Jm(e) {
  return e.reduce((t, n) => t + yf(n), 0);
}
function kf(e, t) {
  if (t === void 0 && (t = nr), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: l,
    right: o
  } = t(e);
  vf(e) && (l <= 0 || o <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Zm = [["x", ["left", "right"], bm], ["y", ["top", "bottom"], Jm]];
class fu {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Fo(n), l = xf(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [o, i, s] of Zm)
      for (const u of i)
        Object.defineProperty(this, u, {
          get: () => {
            const a = s(r), h = l[o] - a;
            return this.rect[u] + h;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class jr {
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
function qm(e) {
  const {
    EventTarget: t
  } = Ce(e);
  return e instanceof t ? e : tr(e);
}
function yi(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var $e;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})($e || ($e = {}));
function Fa(e) {
  e.preventDefault();
}
function ev(e) {
  e.stopPropagation();
}
var M;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(M || (M = {}));
const Cf = {
  start: [M.Space, M.Enter],
  cancel: [M.Esc],
  end: [M.Space, M.Enter, M.Tab]
}, tv = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case M.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case M.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case M.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case M.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class pu {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new jr(tr(n)), this.windowListeners = new jr(Ce(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add($e.Resize, this.handleCancel), this.windowListeners.add($e.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add($e.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && kf(r), n(nt);
  }
  handleKeyDown(t) {
    if (Ao(t)) {
      const {
        active: n,
        context: r,
        options: l
      } = this.props, {
        keyboardCodes: o = Cf,
        coordinateGetter: i = tv,
        scrollBehavior: s = "smooth"
      } = l, {
        code: u
      } = t;
      if (o.end.includes(u)) {
        this.handleEnd(t);
        return;
      }
      if (o.cancel.includes(u)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: a
      } = r.current, h = a ? {
        x: a.left,
        y: a.top
      } : nt;
      this.referenceCoordinates || (this.referenceCoordinates = h);
      const f = i(t, {
        active: n,
        context: r.current,
        currentCoordinates: h
      });
      if (f) {
        const m = br(f, h), y = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: C
        } = r.current;
        for (const S of C) {
          const R = t.code, {
            isTop: d,
            isRight: c,
            isLeft: p,
            isBottom: w,
            maxScroll: x,
            minScroll: k
          } = Sf(S), E = Gm(S), N = {
            x: Math.min(R === M.Right ? E.right - E.width / 2 : E.right, Math.max(R === M.Right ? E.left : E.left + E.width / 2, f.x)),
            y: Math.min(R === M.Down ? E.bottom - E.height / 2 : E.bottom, Math.max(R === M.Down ? E.top : E.top + E.height / 2, f.y))
          }, P = R === M.Right && !c || R === M.Left && !p, _ = R === M.Down && !w || R === M.Up && !d;
          if (P && N.x !== f.x) {
            const I = S.scrollLeft + m.x, ie = R === M.Right && I <= x.x || R === M.Left && I >= k.x;
            if (ie && !m.y) {
              S.scrollTo({
                left: I,
                behavior: s
              });
              return;
            }
            ie ? y.x = S.scrollLeft - I : y.x = R === M.Right ? S.scrollLeft - x.x : S.scrollLeft - k.x, y.x && S.scrollBy({
              left: -y.x,
              behavior: s
            });
            break;
          } else if (_ && N.y !== f.y) {
            const I = S.scrollTop + m.y, ie = R === M.Down && I <= x.y || R === M.Up && I >= k.y;
            if (ie && !m.x) {
              S.scrollTo({
                top: I,
                behavior: s
              });
              return;
            }
            ie ? y.y = S.scrollTop - I : y.y = R === M.Down ? S.scrollTop - x.y : S.scrollTop - k.y, y.y && S.scrollBy({
              top: -y.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, Vn(br(f, this.referenceCoordinates), y));
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
pu.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = Cf,
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
function Ua(e) {
  return !!(e && "distance" in e);
}
function Ba(e) {
  return !!(e && "delay" in e);
}
class hu {
  constructor(t, n, r) {
    var l;
    r === void 0 && (r = qm(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: o
    } = t, {
      target: i
    } = o;
    this.props = t, this.events = n, this.document = tr(i), this.documentListeners = new jr(this.document), this.listeners = new jr(r), this.windowListeners = new jr(Ce(i)), this.initialCoordinates = (l = mo(o)) != null ? l : nt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add($e.Resize, this.handleCancel), this.windowListeners.add($e.DragStart, Fa), this.windowListeners.add($e.VisibilityChange, this.handleCancel), this.windowListeners.add($e.ContextMenu, Fa), this.documentListeners.add($e.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Ba(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (Ua(n)) {
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
    t && (this.activated = !0, this.documentListeners.add($e.Click, ev, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add($e.SelectionChange, this.removeTextSelection), n(t));
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
    const u = (n = mo(t)) != null ? n : nt, a = br(l, u);
    if (!r && s) {
      if (Ua(s)) {
        if (s.tolerance != null && yi(a, s.tolerance))
          return this.handleCancel();
        if (yi(a, s.distance))
          return this.handleStart();
      }
      if (Ba(s) && yi(a, s.tolerance))
        return this.handleCancel();
      this.handlePending(s, a);
      return;
    }
    t.cancelable && t.preventDefault(), i(u);
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
    t.code === M.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const nv = {
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
class mu extends hu {
  constructor(t) {
    const {
      event: n
    } = t, r = tr(n.target);
    super(t, nv, r);
  }
}
mu.activators = [{
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
const rv = {
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
class lv extends hu {
  constructor(t) {
    super(t, rv, tr(t.event.target));
  }
}
lv.activators = [{
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
const wi = {
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
class ov extends hu {
  constructor(t) {
    super(t, wi);
  }
  static setup() {
    return window.addEventListener(wi.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(wi.move.name, t);
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
var go;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(go || (go = {}));
function iv(e) {
  let {
    acceleration: t,
    activator: n = _r.Pointer,
    canScroll: r,
    draggingRect: l,
    enabled: o,
    interval: i = 5,
    order: s = go.TreeOrder,
    pointerCoordinates: u,
    scrollableAncestors: a,
    scrollableAncestorRects: h,
    delta: f,
    threshold: m
  } = e;
  const y = uv({
    delta: f,
    disabled: !o
  }), [C, S] = wm(), R = g.useRef({
    x: 0,
    y: 0
  }), d = g.useRef({
    x: 0,
    y: 0
  }), c = g.useMemo(() => {
    switch (n) {
      case _r.Pointer:
        return u ? {
          top: u.y,
          bottom: u.y,
          left: u.x,
          right: u.x
        } : null;
      case _r.DraggableRect:
        return l;
    }
  }, [n, l, u]), p = g.useRef(null), w = g.useCallback(() => {
    const k = p.current;
    if (!k)
      return;
    const E = R.current.x * d.current.x, N = R.current.y * d.current.y;
    k.scrollBy(E, N);
  }, []), x = g.useMemo(() => s === go.TreeOrder ? [...a].reverse() : a, [s, a]);
  g.useEffect(
    () => {
      if (!o || !a.length || !c) {
        S();
        return;
      }
      for (const k of x) {
        if ((r == null ? void 0 : r(k)) === !1)
          continue;
        const E = a.indexOf(k), N = h[E];
        if (!N)
          continue;
        const {
          direction: P,
          speed: _
        } = Ym(k, N, c, t, m);
        for (const I of ["x", "y"])
          y[I][P[I]] || (_[I] = 0, P[I] = 0);
        if (_.x > 0 || _.y > 0) {
          S(), p.current = k, C(w, i), R.current = _, d.current = P;
          return;
        }
      }
      R.current = {
        x: 0,
        y: 0
      }, d.current = {
        x: 0,
        y: 0
      }, S();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      w,
      r,
      S,
      o,
      i,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(c),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(y),
      C,
      a,
      x,
      h,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m)
    ]
  );
}
const sv = {
  x: {
    [le.Backward]: !1,
    [le.Forward]: !1
  },
  y: {
    [le.Backward]: !1,
    [le.Forward]: !1
  }
};
function uv(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = ho(t);
  return ll((l) => {
    if (n || !r || !l)
      return sv;
    const o = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [le.Backward]: l.x[le.Backward] || o.x === -1,
        [le.Forward]: l.x[le.Forward] || o.x === 1
      },
      y: {
        [le.Backward]: l.y[le.Backward] || o.y === -1,
        [le.Forward]: l.y[le.Forward] || o.y === 1
      }
    };
  }, [n, t, r]);
}
function av(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return ll((l) => {
    var o;
    return t == null ? null : (o = r ?? l) != null ? o : null;
  }, [r, t]);
}
function cv(e, t) {
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
var Jr;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(Jr || (Jr = {}));
var ms;
(function(e) {
  e.Optimized = "optimized";
})(ms || (ms = {}));
const $a = /* @__PURE__ */ new Map();
function dv(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: l
  } = t;
  const [o, i] = g.useState(null), {
    frequency: s,
    measure: u,
    strategy: a
  } = l, h = g.useRef(e), f = R(), m = Gr(f), y = g.useCallback(function(d) {
    d === void 0 && (d = []), !m.current && i((c) => c === null ? d : c.concat(d.filter((p) => !c.includes(p))));
  }, [m]), C = g.useRef(null), S = ll((d) => {
    if (f && !n)
      return $a;
    if (!d || d === $a || h.current !== e || o != null) {
      const c = /* @__PURE__ */ new Map();
      for (let p of e) {
        if (!p)
          continue;
        if (o && o.length > 0 && !o.includes(p.id) && p.rect.current) {
          c.set(p.id, p.rect.current);
          continue;
        }
        const w = p.node.current, x = w ? new fu(u(w), w) : null;
        p.rect.current = x, x && c.set(p.id, x);
      }
      return c;
    }
    return d;
  }, [e, o, n, f, u]);
  return g.useEffect(() => {
    h.current = e;
  }, [e]), g.useEffect(
    () => {
      f || y();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, f]
  ), g.useEffect(
    () => {
      o && o.length > 0 && i(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(o)]
  ), g.useEffect(
    () => {
      f || typeof s != "number" || C.current !== null || (C.current = setTimeout(() => {
        y(), C.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, f, y, ...r]
  ), {
    droppableRects: S,
    measureDroppableContainers: y,
    measuringScheduled: o != null
  };
  function R() {
    switch (a) {
      case Jr.Always:
        return !1;
      case Jr.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function vu(e, t) {
  return ll((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function fv(e, t) {
  return vu(e, t);
}
function pv(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Mo(t), l = g.useMemo(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: o
    } = window;
    return new o(r);
  }, [r, n]);
  return g.useEffect(() => () => l == null ? void 0 : l.disconnect(), [l]), l;
}
function Uo(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Mo(t), l = g.useMemo(
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
function hv(e) {
  return new fu(nr(e), e);
}
function Ha(e, t, n) {
  t === void 0 && (t = hv);
  const [r, l] = g.useState(null);
  function o() {
    l((u) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var a;
        return (a = u ?? n) != null ? a : null;
      }
      const h = t(e);
      return JSON.stringify(u) === JSON.stringify(h) ? u : h;
    });
  }
  const i = pv({
    callback(u) {
      if (e)
        for (const a of u) {
          const {
            type: h,
            target: f
          } = a;
          if (h === "childList" && f instanceof HTMLElement && f.contains(e)) {
            o();
            break;
          }
        }
    }
  }), s = Uo({
    callback: o
  });
  return tt(() => {
    o(), e ? (s == null || s.observe(e), i == null || i.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (s == null || s.disconnect(), i == null || i.disconnect());
  }, [e]), r;
}
function mv(e) {
  const t = vu(e);
  return hf(e, t);
}
const Va = [];
function vv(e) {
  const t = g.useRef(e), n = ll((r) => e ? r && r !== Va && e && t.current && e.parentNode === t.current.parentNode ? r : Fo(e) : Va, [e]);
  return g.useEffect(() => {
    t.current = e;
  }, [e]), n;
}
function gv(e) {
  const [t, n] = g.useState(null), r = g.useRef(e), l = g.useCallback((o) => {
    const i = gi(o.target);
    i && n((s) => s ? (s.set(i, ps(i)), new Map(s)) : null);
  }, []);
  return g.useEffect(() => {
    const o = r.current;
    if (e !== o) {
      i(o);
      const s = e.map((u) => {
        const a = gi(u);
        return a ? (a.addEventListener("scroll", l, {
          passive: !0
        }), [a, ps(a)]) : null;
      }).filter((u) => u != null);
      n(s.length ? new Map(s) : null), r.current = e;
    }
    return () => {
      i(e), i(o);
    };
    function i(s) {
      s.forEach((u) => {
        const a = gi(u);
        a == null || a.removeEventListener("scroll", l);
      });
    }
  }, [l, e]), g.useMemo(() => e.length ? t ? Array.from(t.values()).reduce((o, i) => Vn(o, i), nt) : xf(e) : nt, [e, t]);
}
function Wa(e, t) {
  t === void 0 && (t = []);
  const n = g.useRef(null);
  return g.useEffect(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), g.useEffect(() => {
    const r = e !== nt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? br(e, n.current) : nt;
}
function yv(e) {
  g.useEffect(
    () => {
      if (!zo)
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
function wv(e, t) {
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
function Ef(e) {
  return g.useMemo(() => e ? Wm(e) : null, [e]);
}
const Qa = [];
function Sv(e, t) {
  t === void 0 && (t = nr);
  const [n] = e, r = Ef(n ? Ce(n) : null), [l, o] = g.useState(Qa);
  function i() {
    o(() => e.length ? e.map((u) => wf(u) ? r : new fu(t(u), u)) : Qa);
  }
  const s = Uo({
    callback: i
  });
  return tt(() => {
    s == null || s.disconnect(), i(), e.forEach((u) => s == null ? void 0 : s.observe(u));
  }, [e]), l;
}
function Nf(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return rl(t) ? t : e;
}
function xv(e) {
  let {
    measure: t
  } = e;
  const [n, r] = g.useState(null), l = g.useCallback((a) => {
    for (const {
      target: h
    } of a)
      if (rl(h)) {
        r((f) => {
          const m = t(h);
          return f ? {
            ...f,
            width: m.width,
            height: m.height
          } : m;
        });
        break;
      }
  }, [t]), o = Uo({
    callback: l
  }), i = g.useCallback((a) => {
    const h = Nf(a);
    o == null || o.disconnect(), h && (o == null || o.observe(h)), r(h ? t(h) : null);
  }, [t, o]), [s, u] = po(i);
  return g.useMemo(() => ({
    nodeRef: s,
    rect: n,
    setRef: u
  }), [n, s, u]);
}
const kv = [{
  sensor: mu,
  options: {}
}, {
  sensor: pu,
  options: {}
}], Cv = {
  current: {}
}, $l = {
  draggable: {
    measure: Aa
  },
  droppable: {
    measure: Aa,
    strategy: Jr.WhileDragging,
    frequency: ms.Optimized
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
const Ev = {
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
    setRef: vo
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: $l,
  measureDroppableContainers: vo,
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
  dispatch: vo,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: vo
}, il = /* @__PURE__ */ g.createContext(Df), Rf = /* @__PURE__ */ g.createContext(Ev);
function Nv() {
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
function Dv(e, t) {
  switch (t.type) {
    case te.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case te.DragMove:
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
    case te.DragEnd:
    case te.DragCancel:
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
    case te.RegisterDroppable: {
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
    case te.SetDroppableDisabled: {
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
    case te.UnregisterDroppable: {
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
function Rv(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: l
  } = g.useContext(il), o = ho(r), i = ho(n == null ? void 0 : n.id);
  return g.useEffect(() => {
    if (!t && !r && o && i != null) {
      if (!Ao(o) || document.activeElement === o.target)
        return;
      const s = l.get(i);
      if (!s)
        return;
      const {
        activatorNode: u,
        node: a
      } = s;
      if (!u.current && !a.current)
        return;
      requestAnimationFrame(() => {
        for (const h of [u.current, a.current]) {
          if (!h)
            continue;
          const f = km(h);
          if (f) {
            f.focus();
            break;
          }
        }
      });
    }
  }, [r, t, l, i, o]), null;
}
function Tf(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((l, o) => o({
    transform: l,
    ...r
  }), n) : n;
}
function Tv(e) {
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
function jv(e) {
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
  tt(() => {
    if (!i && !s || !t) {
      o.current = !1;
      return;
    }
    if (o.current || !r)
      return;
    const a = t == null ? void 0 : t.node.current;
    if (!a || a.isConnected === !1)
      return;
    const h = n(a), f = hf(h, r);
    if (i || (f.x = 0), s || (f.y = 0), o.current = !0, Math.abs(f.x) > 0 || Math.abs(f.y) > 0) {
      const m = vf(a);
      m && m.scrollBy({
        top: f.y,
        left: f.x
      });
    }
  }, [t, i, s, r, n]);
}
const Bo = /* @__PURE__ */ g.createContext({
  ...nt,
  scaleX: 1,
  scaleY: 1
});
var Mt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Mt || (Mt = {}));
const _v = /* @__PURE__ */ g.memo(function(t) {
  var n, r, l, o;
  let {
    id: i,
    accessibility: s,
    autoScroll: u = !0,
    children: a,
    sensors: h = kv,
    collisionDetection: f = Fm,
    measuring: m,
    modifiers: y,
    ...C
  } = t;
  const S = g.useReducer(Dv, void 0, Nv), [R, d] = S, [c, p] = Tm(), [w, x] = g.useState(Mt.Uninitialized), k = w === Mt.Initialized, {
    draggable: {
      active: E,
      nodes: N,
      translate: P
    },
    droppable: {
      containers: _
    }
  } = R, I = E != null ? N.get(E) : null, ie = g.useRef({
    initial: null,
    translated: null
  }), se = g.useMemo(() => {
    var pe;
    return E != null ? {
      id: E,
      // It's possible for the active node to unmount while dragging
      data: (pe = I == null ? void 0 : I.data) != null ? pe : Cv,
      rect: ie
    } : null;
  }, [E, I]), _e = g.useRef(null), [tn, Dt] = g.useState(null), [ue, T] = g.useState(null), L = Gr(C, Object.values(C)), O = ol("DndDescribedBy", i), $ = g.useMemo(() => _.getEnabled(), [_]), A = Tv(m), {
    droppableRects: Ee,
    measureDroppableContainers: ye,
    measuringScheduled: dt
  } = dv($, {
    dragging: k,
    dependencies: [P.x, P.y],
    config: A.droppable
  }), Z = av(N, E), ft = g.useMemo(() => ue ? mo(ue) : null, [ue]), Rt = Qf(), pt = fv(Z, A.draggable.measure);
  jv({
    activeNode: E != null ? N.get(E) : null,
    config: Rt.layoutShiftCompensation,
    initialRect: pt,
    measure: A.draggable.measure
  });
  const B = Ha(Z, A.draggable.measure, pt), rr = Ha(Z ? Z.parentElement : null), rt = g.useRef({
    activatorEvent: null,
    active: null,
    activeNode: Z,
    collisionRect: null,
    collisions: null,
    droppableRects: Ee,
    draggableNodes: N,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: _,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), gn = _.getNodeFor((n = rt.current.over) == null ? void 0 : n.id), ht = xv({
    measure: A.dragOverlay.measure
  }), yn = (r = ht.nodeRef.current) != null ? r : Z, wn = k ? (l = ht.rect) != null ? l : B : null, gu = !!(ht.nodeRef.current && ht.rect), yu = mv(gu ? null : B), $o = Ef(yn ? Ce(yn) : null), Tt = vv(k ? gn ?? Z : null), sl = Sv(Tt), ul = Tf(y, {
    transform: {
      x: P.x - yu.x,
      y: P.y - yu.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: ue,
    active: se,
    activeNodeRect: B,
    containerNodeRect: rr,
    draggingNodeRect: wn,
    over: rt.current.over,
    overlayNodeRect: ht.rect,
    scrollableAncestors: Tt,
    scrollableAncestorRects: sl,
    windowRect: $o
  }), wu = ft ? Vn(ft, P) : null, Su = gv(Tt), Ff = Wa(Su), Uf = Wa(Su, [B]), Sn = Vn(ul, Ff), xn = wn ? $m(wn, ul) : null, lr = se && xn ? f({
    active: se,
    collisionRect: xn,
    droppableRects: Ee,
    droppableContainers: $,
    pointerCoordinates: wu
  }) : null, xu = ff(lr, "id"), [jt, ku] = g.useState(null), Bf = gu ? ul : Vn(ul, Uf), $f = Um(Bf, (o = jt == null ? void 0 : jt.rect) != null ? o : null, B), Ho = g.useRef(null), Cu = g.useCallback(
    (pe, Pe) => {
      let {
        sensor: Le,
        options: _t
      } = Pe;
      if (_e.current == null)
        return;
      const Be = N.get(_e.current);
      if (!Be)
        return;
      const Oe = pe.nativeEvent, lt = new Le({
        active: _e.current,
        activeNode: Be,
        event: Oe,
        options: _t,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: rt,
        onAbort(ae) {
          if (!N.get(ae))
            return;
          const {
            onDragAbort: ot
          } = L.current, mt = {
            id: ae
          };
          ot == null || ot(mt), c({
            type: "onDragAbort",
            event: mt
          });
        },
        onPending(ae, Pt, ot, mt) {
          if (!N.get(ae))
            return;
          const {
            onDragPending: ir
          } = L.current, Lt = {
            id: ae,
            constraint: Pt,
            initialCoordinates: ot,
            offset: mt
          };
          ir == null || ir(Lt), c({
            type: "onDragPending",
            event: Lt
          });
        },
        onStart(ae) {
          const Pt = _e.current;
          if (Pt == null)
            return;
          const ot = N.get(Pt);
          if (!ot)
            return;
          const {
            onDragStart: mt
          } = L.current, or = {
            activatorEvent: Oe,
            active: {
              id: Pt,
              data: ot.data,
              rect: ie
            }
          };
          Mn.unstable_batchedUpdates(() => {
            mt == null || mt(or), x(Mt.Initializing), d({
              type: te.DragStart,
              initialCoordinates: ae,
              active: Pt
            }), c({
              type: "onDragStart",
              event: or
            }), Dt(Ho.current), T(Oe);
          });
        },
        onMove(ae) {
          d({
            type: te.DragMove,
            coordinates: ae
          });
        },
        onEnd: kn(te.DragEnd),
        onCancel: kn(te.DragCancel)
      });
      Ho.current = lt;
      function kn(ae) {
        return async function() {
          const {
            active: ot,
            collisions: mt,
            over: or,
            scrollAdjustedTranslate: ir
          } = rt.current;
          let Lt = null;
          if (ot && ir) {
            const {
              cancelDrop: sr
            } = L.current;
            Lt = {
              activatorEvent: Oe,
              active: ot,
              collisions: mt,
              delta: ir,
              over: or
            }, ae === te.DragEnd && typeof sr == "function" && await Promise.resolve(sr(Lt)) && (ae = te.DragCancel);
          }
          _e.current = null, Mn.unstable_batchedUpdates(() => {
            d({
              type: ae
            }), x(Mt.Uninitialized), ku(null), Dt(null), T(null), Ho.current = null;
            const sr = ae === te.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Lt) {
              const Vo = L.current[sr];
              Vo == null || Vo(Lt), c({
                type: sr,
                event: Lt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [N]
  ), Hf = g.useCallback((pe, Pe) => (Le, _t) => {
    const Be = Le.nativeEvent, Oe = N.get(_t);
    if (
      // Another sensor is already instantiating
      _e.current !== null || // No active draggable
      !Oe || // Event has already been captured
      Be.dndKit || Be.defaultPrevented
    )
      return;
    const lt = {
      active: Oe
    };
    pe(Le, Pe.options, lt) === !0 && (Be.dndKit = {
      capturedBy: Pe.sensor
    }, _e.current = _t, Cu(Le, Pe));
  }, [N, Cu]), Eu = cv(h, Hf);
  yv(h), tt(() => {
    B && w === Mt.Initializing && x(Mt.Initialized);
  }, [B, w]), g.useEffect(
    () => {
      const {
        onDragMove: pe
      } = L.current, {
        active: Pe,
        activatorEvent: Le,
        collisions: _t,
        over: Be
      } = rt.current;
      if (!Pe || !Le)
        return;
      const Oe = {
        active: Pe,
        activatorEvent: Le,
        collisions: _t,
        delta: {
          x: Sn.x,
          y: Sn.y
        },
        over: Be
      };
      Mn.unstable_batchedUpdates(() => {
        pe == null || pe(Oe), c({
          type: "onDragMove",
          event: Oe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Sn.x, Sn.y]
  ), g.useEffect(
    () => {
      const {
        active: pe,
        activatorEvent: Pe,
        collisions: Le,
        droppableContainers: _t,
        scrollAdjustedTranslate: Be
      } = rt.current;
      if (!pe || _e.current == null || !Pe || !Be)
        return;
      const {
        onDragOver: Oe
      } = L.current, lt = _t.get(xu), kn = lt && lt.rect.current ? {
        id: lt.id,
        rect: lt.rect.current,
        data: lt.data,
        disabled: lt.disabled
      } : null, ae = {
        active: pe,
        activatorEvent: Pe,
        collisions: Le,
        delta: {
          x: Be.x,
          y: Be.y
        },
        over: kn
      };
      Mn.unstable_batchedUpdates(() => {
        ku(kn), Oe == null || Oe(ae), c({
          type: "onDragOver",
          event: ae
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [xu]
  ), tt(() => {
    rt.current = {
      activatorEvent: ue,
      active: se,
      activeNode: Z,
      collisionRect: xn,
      collisions: lr,
      droppableRects: Ee,
      draggableNodes: N,
      draggingNode: yn,
      draggingNodeRect: wn,
      droppableContainers: _,
      over: jt,
      scrollableAncestors: Tt,
      scrollAdjustedTranslate: Sn
    }, ie.current = {
      initial: wn,
      translated: xn
    };
  }, [se, Z, lr, xn, N, yn, wn, Ee, _, jt, Tt, Sn]), iv({
    ...Rt,
    delta: P,
    draggingRect: xn,
    pointerCoordinates: wu,
    scrollableAncestors: Tt,
    scrollableAncestorRects: sl
  });
  const Vf = g.useMemo(() => ({
    active: se,
    activeNode: Z,
    activeNodeRect: B,
    activatorEvent: ue,
    collisions: lr,
    containerNodeRect: rr,
    dragOverlay: ht,
    draggableNodes: N,
    droppableContainers: _,
    droppableRects: Ee,
    over: jt,
    measureDroppableContainers: ye,
    scrollableAncestors: Tt,
    scrollableAncestorRects: sl,
    measuringConfiguration: A,
    measuringScheduled: dt,
    windowRect: $o
  }), [se, Z, B, ue, lr, rr, ht, N, _, Ee, jt, ye, Tt, sl, A, dt, $o]), Wf = g.useMemo(() => ({
    activatorEvent: ue,
    activators: Eu,
    active: se,
    activeNodeRect: B,
    ariaDescribedById: {
      draggable: O
    },
    dispatch: d,
    draggableNodes: N,
    over: jt,
    measureDroppableContainers: ye
  }), [ue, Eu, se, B, d, O, N, jt, ye]);
  return Q.createElement(df.Provider, {
    value: p
  }, Q.createElement(il.Provider, {
    value: Wf
  }, Q.createElement(Rf.Provider, {
    value: Vf
  }, Q.createElement(Bo.Provider, {
    value: $f
  }, a)), Q.createElement(Rv, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), Q.createElement(Pm, {
    ...s,
    hiddenTextDescribedById: O
  }));
  function Qf() {
    const pe = (tn == null ? void 0 : tn.autoScrollEnabled) === !1, Pe = typeof u == "object" ? u.enabled === !1 : u === !1, Le = k && !pe && !Pe;
    return typeof u == "object" ? {
      ...u,
      enabled: Le
    } : {
      enabled: Le
    };
  }
}), Pv = /* @__PURE__ */ g.createContext(null), Ka = "button", Lv = "Draggable";
function Ov(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: l
  } = e;
  const o = ol(Lv), {
    activators: i,
    activatorEvent: s,
    active: u,
    activeNodeRect: a,
    ariaDescribedById: h,
    draggableNodes: f,
    over: m
  } = g.useContext(il), {
    role: y = Ka,
    roleDescription: C = "draggable",
    tabIndex: S = 0
  } = l ?? {}, R = (u == null ? void 0 : u.id) === t, d = g.useContext(R ? Bo : Pv), [c, p] = po(), [w, x] = po(), k = wv(i, t), E = Gr(n);
  tt(
    () => (f.set(t, {
      id: t,
      key: o,
      node: c,
      activatorNode: w,
      data: E
    }), () => {
      const P = f.get(t);
      P && P.key === o && f.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f, t]
  );
  const N = g.useMemo(() => ({
    role: y,
    tabIndex: S,
    "aria-disabled": r,
    "aria-pressed": R && y === Ka ? !0 : void 0,
    "aria-roledescription": C,
    "aria-describedby": h.draggable
  }), [r, y, S, R, C, h.draggable]);
  return {
    active: u,
    activatorEvent: s,
    activeNodeRect: a,
    attributes: N,
    isDragging: R,
    listeners: r ? void 0 : k,
    node: c,
    over: m,
    setNodeRef: p,
    setActivatorNodeRef: x,
    transform: d
  };
}
function jf() {
  return g.useContext(Rf);
}
const Iv = "Droppable", zv = {
  timeout: 25
};
function _f(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: l
  } = e;
  const o = ol(Iv), {
    active: i,
    dispatch: s,
    over: u,
    measureDroppableContainers: a
  } = g.useContext(il), h = g.useRef({
    disabled: n
  }), f = g.useRef(!1), m = g.useRef(null), y = g.useRef(null), {
    disabled: C,
    updateMeasurementsFor: S,
    timeout: R
  } = {
    ...zv,
    ...l
  }, d = Gr(S ?? r), c = g.useCallback(
    () => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      y.current != null && clearTimeout(y.current), y.current = setTimeout(() => {
        a(Array.isArray(d.current) ? d.current : [d.current]), y.current = null;
      }, R);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [R]
  ), p = Uo({
    callback: c,
    disabled: C || !i
  }), w = g.useCallback((N, P) => {
    p && (P && (p.unobserve(P), f.current = !1), N && p.observe(N));
  }, [p]), [x, k] = po(w), E = Gr(t);
  return g.useEffect(() => {
    !p || !x.current || (p.disconnect(), f.current = !1, p.observe(x.current));
  }, [x, p]), g.useEffect(
    () => (s({
      type: te.RegisterDroppable,
      element: {
        id: r,
        key: o,
        disabled: n,
        node: x,
        rect: m,
        data: E
      }
    }), () => s({
      type: te.UnregisterDroppable,
      key: o,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), g.useEffect(() => {
    n !== h.current.disabled && (s({
      type: te.SetDroppableDisabled,
      id: r,
      key: o,
      disabled: n
    }), h.current.disabled = n);
  }, [r, o, n, s]), {
    active: i,
    rect: m,
    isOver: (u == null ? void 0 : u.id) === r,
    node: x,
    over: u,
    setNodeRef: k
  };
}
function Mv(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, l] = g.useState(null), [o, i] = g.useState(null), s = ho(n);
  return !n && !r && s && l(s), tt(() => {
    if (!o)
      return;
    const u = r == null ? void 0 : r.key, a = r == null ? void 0 : r.props.id;
    if (u == null || a == null) {
      l(null);
      return;
    }
    Promise.resolve(t(a, o)).then(() => {
      l(null);
    });
  }, [t, r, o]), Q.createElement(Q.Fragment, null, n, r ? g.cloneElement(r, {
    ref: i
  }) : null);
}
const Av = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Fv(e) {
  let {
    children: t
  } = e;
  return Q.createElement(il.Provider, {
    value: Df
  }, Q.createElement(Bo.Provider, {
    value: Av
  }, t));
}
const Uv = {
  position: "fixed",
  touchAction: "none"
}, Bv = (e) => Ao(e) ? "transform 250ms ease" : void 0, $v = /* @__PURE__ */ g.forwardRef((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: l,
    children: o,
    className: i,
    rect: s,
    style: u,
    transform: a,
    transition: h = Bv
  } = e;
  if (!s)
    return null;
  const f = l ? a : {
    ...a,
    scaleX: 1,
    scaleY: 1
  }, m = {
    ...Uv,
    width: s.width,
    height: s.height,
    top: s.top,
    left: s.left,
    transform: Jt.Transform.toString(f),
    transformOrigin: l && r ? Im(r, s) : void 0,
    transition: typeof h == "function" ? h(r) : h,
    ...u
  };
  return Q.createElement(n, {
    className: i,
    style: m,
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
    for (const [s, u] of Object.entries(o.active))
      u !== void 0 && (l[s] = n.node.style.getPropertyValue(s), n.node.style.setProperty(s, u));
  if (o != null && o.dragOverlay)
    for (const [s, u] of Object.entries(o.dragOverlay))
      u !== void 0 && r.node.style.setProperty(s, u);
  return i != null && i.active && n.node.classList.add(i.active), i != null && i.dragOverlay && r.node.classList.add(i.dragOverlay), function() {
    for (const [u, a] of Object.entries(l))
      n.node.style.setProperty(u, a);
    i != null && i.active && n.node.classList.remove(i.active);
  };
}, Vv = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: Jt.Transform.toString(t)
  }, {
    transform: Jt.Transform.toString(n)
  }];
}, Wv = {
  duration: 250,
  easing: "ease",
  keyframes: Vv,
  sideEffects: /* @__PURE__ */ Hv({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Qv(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: l
  } = e;
  return Mo((o, i) => {
    if (t === null)
      return;
    const s = n.get(o);
    if (!s)
      return;
    const u = s.node.current;
    if (!u)
      return;
    const a = Nf(i);
    if (!a)
      return;
    const {
      transform: h
    } = Ce(i).getComputedStyle(i), f = mf(h);
    if (!f)
      return;
    const m = typeof t == "function" ? t : Kv(t);
    return kf(u, l.draggable.measure), m({
      active: {
        id: o,
        data: s.data,
        node: u,
        rect: l.draggable.measure(u)
      },
      draggableNodes: n,
      dragOverlay: {
        node: i,
        rect: l.dragOverlay.measure(a)
      },
      droppableContainers: r,
      measuringConfiguration: l,
      transform: f
    });
  });
}
function Kv(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: l
  } = {
    ...Wv,
    ...e
  };
  return (o) => {
    let {
      active: i,
      dragOverlay: s,
      transform: u,
      ...a
    } = o;
    if (!t)
      return;
    const h = {
      x: s.rect.left - i.rect.left,
      y: s.rect.top - i.rect.top
    }, f = {
      scaleX: u.scaleX !== 1 ? i.rect.width * u.scaleX / s.rect.width : 1,
      scaleY: u.scaleY !== 1 ? i.rect.height * u.scaleY / s.rect.height : 1
    }, m = {
      x: u.x - h.x,
      y: u.y - h.y,
      ...f
    }, y = l({
      ...a,
      active: i,
      dragOverlay: s,
      transform: {
        initial: u,
        final: m
      }
    }), [C] = y, S = y[y.length - 1];
    if (JSON.stringify(C) === JSON.stringify(S))
      return;
    const R = r == null ? void 0 : r({
      active: i,
      dragOverlay: s,
      ...a
    }), d = s.node.animate(y, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((c) => {
      d.onfinish = () => {
        R == null || R(), c();
      };
    });
  };
}
let Xa = 0;
function Xv(e) {
  return g.useMemo(() => {
    if (e != null)
      return Xa++, Xa;
  }, [e]);
}
const Yv = /* @__PURE__ */ Q.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: l,
    transition: o,
    modifiers: i,
    wrapperElement: s = "div",
    className: u,
    zIndex: a = 999
  } = e;
  const {
    activatorEvent: h,
    active: f,
    activeNodeRect: m,
    containerNodeRect: y,
    draggableNodes: C,
    droppableContainers: S,
    dragOverlay: R,
    over: d,
    measuringConfiguration: c,
    scrollableAncestors: p,
    scrollableAncestorRects: w,
    windowRect: x
  } = jf(), k = g.useContext(Bo), E = Xv(f == null ? void 0 : f.id), N = Tf(i, {
    activatorEvent: h,
    active: f,
    activeNodeRect: m,
    containerNodeRect: y,
    draggingNodeRect: R.rect,
    over: d,
    overlayNodeRect: R.rect,
    scrollableAncestors: p,
    scrollableAncestorRects: w,
    transform: k,
    windowRect: x
  }), P = vu(m), _ = Qv({
    config: r,
    draggableNodes: C,
    droppableContainers: S,
    measuringConfiguration: c
  }), I = P ? R.setRef : void 0;
  return Q.createElement(Fv, null, Q.createElement(Mv, {
    animation: _
  }, f && E ? Q.createElement($v, {
    key: E,
    id: f.id,
    ref: I,
    as: s,
    activatorEvent: h,
    adjustScale: t,
    className: u,
    transition: o,
    rect: P,
    style: {
      zIndex: a,
      ...l
    },
    transform: N
  }, n) : null));
});
function Pf(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function Gv(e, t) {
  return e.reduce((n, r, l) => {
    const o = t.get(r);
    return o && (n[l] = o), n;
  }, Array(e.length));
}
function Dl(e) {
  return e !== null && e >= 0;
}
function bv(e, t) {
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
const Lf = (e) => {
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
}, Rl = {
  scaleX: 1,
  scaleY: 1
}, Zv = (e) => {
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
    const a = o[i];
    return a ? {
      x: 0,
      y: n < i ? a.top + a.height - (s.top + s.height) : a.top - s.top,
      ...Rl
    } : null;
  }
  const u = qv(o, l, n);
  return l > n && l <= i ? {
    x: 0,
    y: -s.height - u,
    ...Rl
  } : l < n && l >= i ? {
    x: 0,
    y: s.height + u,
    ...Rl
  } : {
    x: 0,
    y: 0,
    ...Rl
  };
};
function qv(e, t, n) {
  const r = e[t], l = e[t - 1], o = e[t + 1];
  return r ? n < t ? l ? r.top - (l.top + l.height) : o ? o.top - (r.top + r.height) : 0 : o ? o.top - (r.top + r.height) : l ? r.top - (l.top + l.height) : 0 : 0;
}
const Of = "Sortable", If = /* @__PURE__ */ Q.createContext({
  activeIndex: -1,
  containerId: Of,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Lf,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function eg(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: l = Lf,
    disabled: o = !1
  } = e;
  const {
    active: i,
    dragOverlay: s,
    droppableRects: u,
    over: a,
    measureDroppableContainers: h
  } = jf(), f = ol(Of, n), m = s.rect !== null, y = g.useMemo(() => r.map((k) => typeof k == "object" && "id" in k ? k.id : k), [r]), C = i != null, S = i ? y.indexOf(i.id) : -1, R = a ? y.indexOf(a.id) : -1, d = g.useRef(y), c = !bv(y, d.current), p = R !== -1 && S === -1 || c, w = Jv(o);
  tt(() => {
    c && C && h(y);
  }, [c, y, C, h]), g.useEffect(() => {
    d.current = y;
  }, [y]);
  const x = g.useMemo(
    () => ({
      activeIndex: S,
      containerId: f,
      disabled: w,
      disableTransforms: p,
      items: y,
      overIndex: R,
      useDragOverlay: m,
      sortedRects: Gv(y, u),
      strategy: l
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [S, f, w.draggable, w.droppable, p, y, R, u, m, l]
  );
  return Q.createElement(If.Provider, {
    value: x
  }, t);
}
const tg = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: l
  } = e;
  return Pf(n, r, l).indexOf(t);
}, ng = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: l,
    items: o,
    newIndex: i,
    previousItems: s,
    previousContainerId: u,
    transition: a
  } = e;
  return !a || !r || s !== o && l === i ? !1 : n ? !0 : i !== l && t === u;
}, rg = {
  duration: 200,
  easing: "ease"
}, zf = "transform", lg = /* @__PURE__ */ Jt.Transition.toString({
  property: zf,
  duration: 0,
  easing: "linear"
}), og = {
  roleDescription: "sortable"
};
function ig(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: l
  } = e;
  const [o, i] = g.useState(null), s = g.useRef(n);
  return tt(() => {
    if (!t && n !== s.current && r.current) {
      const u = l.current;
      if (u) {
        const a = nr(r.current, {
          ignoreTransform: !0
        }), h = {
          x: u.left - a.left,
          y: u.top - a.top,
          scaleX: u.width / a.width,
          scaleY: u.height / a.height
        };
        (h.x || h.y) && i(h);
      }
    }
    n !== s.current && (s.current = n);
  }, [t, n, r, l]), g.useEffect(() => {
    o && i(null);
  }, [o]), o;
}
function sg(e) {
  let {
    animateLayoutChanges: t = ng,
    attributes: n,
    disabled: r,
    data: l,
    getNewIndex: o = tg,
    id: i,
    strategy: s,
    resizeObserverConfig: u,
    transition: a = rg
  } = e;
  const {
    items: h,
    containerId: f,
    activeIndex: m,
    disabled: y,
    disableTransforms: C,
    sortedRects: S,
    overIndex: R,
    useDragOverlay: d,
    strategy: c
  } = g.useContext(If), p = ug(r, y), w = h.indexOf(i), x = g.useMemo(() => ({
    sortable: {
      containerId: f,
      index: w,
      items: h
    },
    ...l
  }), [f, l, w, h]), k = g.useMemo(() => h.slice(h.indexOf(i)), [h, i]), {
    rect: E,
    node: N,
    isOver: P,
    setNodeRef: _
  } = _f({
    id: i,
    data: x,
    disabled: p.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: k,
      ...u
    }
  }), {
    active: I,
    activatorEvent: ie,
    activeNodeRect: se,
    attributes: _e,
    setNodeRef: tn,
    listeners: Dt,
    isDragging: ue,
    over: T,
    setActivatorNodeRef: L,
    transform: O
  } = Ov({
    id: i,
    data: x,
    attributes: {
      ...og,
      ...n
    },
    disabled: p.draggable
  }), $ = ym(_, tn), A = !!I, Ee = A && !C && Dl(m) && Dl(R), ye = !d && ue, dt = ye && Ee ? O : null, ft = Ee ? dt ?? (s ?? c)({
    rects: S,
    activeNodeRect: se,
    activeIndex: m,
    overIndex: R,
    index: w
  }) : null, Rt = Dl(m) && Dl(R) ? o({
    id: i,
    items: h,
    activeIndex: m,
    overIndex: R
  }) : w, pt = I == null ? void 0 : I.id, B = g.useRef({
    activeId: pt,
    items: h,
    newIndex: Rt,
    containerId: f
  }), rr = h !== B.current.items, rt = t({
    active: I,
    containerId: f,
    isDragging: ue,
    isSorting: A,
    id: i,
    index: w,
    items: h,
    newIndex: B.current.newIndex,
    previousItems: B.current.items,
    previousContainerId: B.current.containerId,
    transition: a,
    wasDragging: B.current.activeId != null
  }), gn = ig({
    disabled: !rt,
    index: w,
    node: N,
    rect: E
  });
  return g.useEffect(() => {
    A && B.current.newIndex !== Rt && (B.current.newIndex = Rt), f !== B.current.containerId && (B.current.containerId = f), h !== B.current.items && (B.current.items = h);
  }, [A, Rt, f, h]), g.useEffect(() => {
    if (pt === B.current.activeId)
      return;
    if (pt && !B.current.activeId) {
      B.current.activeId = pt;
      return;
    }
    const yn = setTimeout(() => {
      B.current.activeId = pt;
    }, 50);
    return () => clearTimeout(yn);
  }, [pt]), {
    active: I,
    activeIndex: m,
    attributes: _e,
    data: x,
    rect: E,
    index: w,
    newIndex: Rt,
    items: h,
    isOver: P,
    isSorting: A,
    isDragging: ue,
    listeners: Dt,
    node: N,
    overIndex: R,
    over: T,
    setNodeRef: $,
    setActivatorNodeRef: L,
    setDroppableNodeRef: _,
    setDraggableNodeRef: tn,
    transform: gn ?? ft,
    transition: ht()
  };
  function ht() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      gn || // Or to prevent items jumping to back to their "new" position when items change
      rr && B.current.newIndex === w
    )
      return lg;
    if (!(ye && !Ao(ie) || !a) && (A || rt))
      return Jt.Transition.toString({
        ...a,
        property: zf
      });
  }
}
function ug(e, t) {
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
function yo(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const ag = [M.Down, M.Right, M.Up, M.Left], cg = (e, t) => {
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
  if (ag.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const u = [];
    o.getEnabled().forEach((f) => {
      if (!f || f != null && f.disabled)
        return;
      const m = l.get(f.id);
      if (m)
        switch (e.code) {
          case M.Down:
            r.top < m.top && u.push(f);
            break;
          case M.Up:
            r.top > m.top && u.push(f);
            break;
          case M.Left:
            r.left > m.left && u.push(f);
            break;
          case M.Right:
            r.left < m.left && u.push(f);
            break;
        }
    });
    const a = pf({
      collisionRect: r,
      droppableRects: l,
      droppableContainers: u
    });
    let h = ff(a, "id");
    if (h === (i == null ? void 0 : i.id) && a.length > 1 && (h = a[1].id), h != null) {
      const f = o.get(n.id), m = o.get(h), y = m ? l.get(m.id) : null, C = m == null ? void 0 : m.node.current;
      if (C && y && f && m) {
        const R = Fo(C).some((k, E) => s[E] !== k), d = Mf(f, m), c = dg(f, m), p = R || !d ? {
          x: 0,
          y: 0
        } : {
          x: c ? r.width - y.width : 0,
          y: c ? r.height - y.height : 0
        }, w = {
          x: y.left,
          y: y.top
        };
        return p.x && p.y ? w : br(w, p);
      }
    }
  }
};
function Mf(e, t) {
  return !yo(e) || !yo(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function dg(e, t) {
  return !yo(e) || !yo(t) || !Mf(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
const fg = {
  LOW: "priority-low",
  MEDIUM: "priority-medium",
  HIGH: "priority-high",
  URGENT: "priority-urgent"
};
function Af({ ticket: e, isDragging: t = !1, onClick: n }) {
  const {
    attributes: r,
    listeners: l,
    setNodeRef: o,
    transform: i,
    transition: s,
    isDragging: u
  } = sg({ id: e.id }), a = {
    transform: Jt.Transform.toString(i),
    transition: s
  }, h = e.status === "HANDLE" || e.status === "AI_PROCESSING", f = e.status === "TO_REVIEW" && e.prLink;
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      ref: o,
      style: a,
      className: `ticket-card ${t || u ? "dragging" : ""} ${f ? "success-glow" : ""}`,
      onClick: n,
      ...r,
      ...l,
      children: [
        /* @__PURE__ */ v.jsx("h4", { className: "ticket-title", children: e.title }),
        e.description && /* @__PURE__ */ v.jsx("p", { className: "ticket-description", children: e.description }),
        /* @__PURE__ */ v.jsxs("div", { className: "ticket-meta", children: [
          /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ v.jsx("span", { className: `ticket-priority ${fg[e.priority]}`, children: e.priority }),
            e.targetBranch && /* @__PURE__ */ v.jsxs("span", { className: "ticket-branch", title: `Target: ${e.targetBranch}`, children: [
              /* @__PURE__ */ v.jsx(hg, {}),
              e.targetBranch
            ] })
          ] }),
          /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2", children: [
            e.assignee && /* @__PURE__ */ v.jsx(
              "div",
              {
                className: "ticket-assignee",
                title: e.assignee.name,
                children: e.assignee.name.substring(0, 2).toUpperCase()
              }
            ),
            /* @__PURE__ */ v.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "#",
              e.id.slice(-4)
            ] })
          ] })
        ] }),
        h && /* @__PURE__ */ v.jsxs("div", { className: `ticket-ai-status ${e.status === "AI_PROCESSING" ? "processing" : ""}`, children: [
          /* @__PURE__ */ v.jsx("div", { className: "ai-spinner" }),
          /* @__PURE__ */ v.jsx("span", { children: e.status === "HANDLE" ? "Queued for AI" : "AI Processing..." })
        ] }),
        e.prLink && /* @__PURE__ */ v.jsxs(
          "a",
          {
            href: e.prLink,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "ticket-pr-link",
            onClick: (m) => m.stopPropagation(),
            children: [
              /* @__PURE__ */ v.jsx(pg, {}),
              "View Pull Request"
            ]
          }
        ),
        e.aiSummary && /* @__PURE__ */ v.jsxs("div", { className: "ticket-ai-summary", children: [
          /* @__PURE__ */ v.jsx("strong", { children: "AI Summary:" }),
          " ",
          e.aiSummary
        ] })
      ]
    }
  );
}
function pg() {
  return /* @__PURE__ */ v.jsx(
    "svg",
    {
      viewBox: "0 0 16 16",
      fill: "currentColor",
      style: { width: "1rem", height: "1rem" },
      children: /* @__PURE__ */ v.jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
        }
      )
    }
  );
}
function hg() {
  return /* @__PURE__ */ v.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      style: { width: "0.75rem", height: "0.75rem" },
      children: [
        /* @__PURE__ */ v.jsx("line", { x1: "6", x2: "6", y1: "3", y2: "15" }),
        /* @__PURE__ */ v.jsx("circle", { cx: "18", cy: "6", r: "3" }),
        /* @__PURE__ */ v.jsx("circle", { cx: "6", cy: "18", r: "3" }),
        /* @__PURE__ */ v.jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })
      ]
    }
  );
}
const mg = {
  BACKLOG: "",
  TODO: "",
  HANDLE: "column-handle",
  AI_PROCESSING: "column-ai-processing",
  TO_REVIEW: "column-to-review",
  IN_PROGRESS: "",
  DONE: "column-done",
  CANCELLED: ""
};
function vg({
  id: e,
  title: t,
  icon: n,
  tickets: r,
  isActive: l = !1,
  onTicketClick: o
}) {
  const { setNodeRef: i, isOver: s } = _f({ id: e });
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: `kanban-column ${mg[e]} ${l ? "active" : ""}`,
      children: [
        /* @__PURE__ */ v.jsxs("div", { className: "column-header", children: [
          /* @__PURE__ */ v.jsxs("div", { className: "column-title", children: [
            /* @__PURE__ */ v.jsx("span", { className: "icon", role: "img", "aria-label": t, children: n }),
            /* @__PURE__ */ v.jsx("span", { children: t })
          ] }),
          /* @__PURE__ */ v.jsx("span", { className: "column-count", children: r.length })
        ] }),
        /* @__PURE__ */ v.jsx(eg, { items: r.map((u) => u.id), strategy: Zv, children: /* @__PURE__ */ v.jsx(
          "div",
          {
            ref: i,
            className: `column-body ${s ? "drop-target" : ""}`,
            children: r.length === 0 ? /* @__PURE__ */ v.jsxs("div", { className: "column-empty", children: [
              /* @__PURE__ */ v.jsx("span", { className: "mb-1 text-lg", children: n }),
              /* @__PURE__ */ v.jsx("span", { children: "Drop tickets here" }),
              e === "HANDLE" && /* @__PURE__ */ v.jsx("span", { className: "text-xs mt-1", children: "AI will process these" })
            ] }) : r.map((u) => /* @__PURE__ */ v.jsx(
              Af,
              {
                ticket: u,
                onClick: () => o(u)
              },
              u.id
            ))
          }
        ) })
      ]
    }
  );
}
function gg({
  projectId: e,
  branchPresets: t,
  defaultBranch: n,
  onClose: r,
  onSubmit: l
}) {
  const [o, i] = g.useState(""), [s, u] = g.useState(""), [a, h] = g.useState("MEDIUM"), [f, m] = g.useState("BACKLOG"), [y, C] = g.useState(n), [S, R] = g.useState(!1), [d, c] = g.useState(""), p = g.useCallback(
    async (x) => {
      if (x.preventDefault(), c(""), !o.trim()) {
        c("Title is required");
        return;
      }
      R(!0);
      try {
        const k = yg(), E = await fetch(`/api/tickets/${e}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": k
          },
          body: JSON.stringify({
            title: o.trim(),
            description: s.trim(),
            priority: a,
            status: f,
            targetBranch: y
          })
        });
        if (!E.ok) {
          const P = await E.json().catch(() => ({}));
          throw new Error(P.message || "Failed to create ticket");
        }
        const N = await E.json();
        l(N);
      } catch (k) {
        c(k instanceof Error ? k.message : "Failed to create ticket");
      } finally {
        R(!1);
      }
    },
    [e, o, s, a, f, y, l]
  ), w = g.useCallback(
    (x) => {
      x.key === "Escape" && r();
    },
    [r]
  );
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      className: "modal-overlay",
      onClick: r,
      onKeyDown: w,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "new-ticket-title",
      children: /* @__PURE__ */ v.jsxs(
        "div",
        {
          className: "modal-content",
          onClick: (x) => x.stopPropagation(),
          children: [
            /* @__PURE__ */ v.jsxs("div", { className: "modal-header", children: [
              /* @__PURE__ */ v.jsxs("div", { children: [
                /* @__PURE__ */ v.jsx("h2", { id: "new-ticket-title", children: "New Ticket" }),
                /* @__PURE__ */ v.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Create a new task for your project" })
              ] }),
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  className: "modal-close",
                  onClick: r,
                  "aria-label": "Close modal",
                  children: "×"
                }
              )
            ] }),
            /* @__PURE__ */ v.jsxs("form", { onSubmit: p, children: [
              /* @__PURE__ */ v.jsxs("div", { className: "modal-body", children: [
                d && /* @__PURE__ */ v.jsx("div", { className: "mb-4 p-3 text-sm rounded-md bg-destructive/10 text-destructive border border-destructive/20", children: d }),
                /* @__PURE__ */ v.jsxs("div", { className: "form-group", children: [
                  /* @__PURE__ */ v.jsxs("label", { htmlFor: "ticket-title", className: "form-label", children: [
                    "Title ",
                    /* @__PURE__ */ v.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ v.jsx(
                    "input",
                    {
                      id: "ticket-title",
                      type: "text",
                      className: "form-input",
                      placeholder: "What needs to be done?",
                      value: o,
                      onChange: (x) => i(x.target.value),
                      autoFocus: !0,
                      required: !0
                    }
                  )
                ] }),
                /* @__PURE__ */ v.jsxs("div", { className: "form-group", children: [
                  /* @__PURE__ */ v.jsx("label", { htmlFor: "ticket-description", className: "form-label", children: "Description" }),
                  /* @__PURE__ */ v.jsx(
                    "textarea",
                    {
                      id: "ticket-description",
                      className: "form-input",
                      placeholder: "Add details, requirements, acceptance criteria...",
                      value: s,
                      onChange: (x) => u(x.target.value),
                      rows: 4
                    }
                  ),
                  /* @__PURE__ */ v.jsx("p", { className: "form-hint", children: "The AI will use this description as context when implementing" })
                ] }),
                /* @__PURE__ */ v.jsxs("div", { className: "form-group", children: [
                  /* @__PURE__ */ v.jsxs("label", { htmlFor: "ticket-branch", className: "form-label", children: [
                    "Target Branch",
                    /* @__PURE__ */ v.jsxs(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        className: "inline-block w-4 h-4 ml-1 text-muted-foreground",
                        children: [
                          /* @__PURE__ */ v.jsx("line", { x1: "6", x2: "6", y1: "3", y2: "15" }),
                          /* @__PURE__ */ v.jsx("circle", { cx: "18", cy: "6", r: "3" }),
                          /* @__PURE__ */ v.jsx("circle", { cx: "6", cy: "18", r: "3" }),
                          /* @__PURE__ */ v.jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })
                        ]
                      }
                    )
                  ] }),
                  t.length > 0 ? /* @__PURE__ */ v.jsx("div", { className: "flex flex-wrap gap-2 mb-2", children: t.map((x) => /* @__PURE__ */ v.jsxs(
                    "button",
                    {
                      type: "button",
                      className: `branch-preset-btn ${y === x.branch ? "active" : ""}`,
                      onClick: () => C(x.branch),
                      children: [
                        x.name,
                        /* @__PURE__ */ v.jsx("span", { className: "branch-name", children: x.branch })
                      ]
                    },
                    x.branch
                  )) }) : null,
                  /* @__PURE__ */ v.jsx(
                    "input",
                    {
                      id: "ticket-branch",
                      type: "text",
                      className: "form-input font-mono",
                      placeholder: "main",
                      value: y,
                      onChange: (x) => C(x.target.value)
                    }
                  ),
                  /* @__PURE__ */ v.jsx("p", { className: "form-hint", children: "The branch the AI will work on for this ticket" })
                ] }),
                /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ v.jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ v.jsx("label", { htmlFor: "ticket-priority", className: "form-label", children: "Priority" }),
                    /* @__PURE__ */ v.jsxs(
                      "select",
                      {
                        id: "ticket-priority",
                        className: "form-input",
                        value: a,
                        onChange: (x) => h(x.target.value),
                        children: [
                          /* @__PURE__ */ v.jsx("option", { value: "LOW", children: "Low" }),
                          /* @__PURE__ */ v.jsx("option", { value: "MEDIUM", children: "Medium" }),
                          /* @__PURE__ */ v.jsx("option", { value: "HIGH", children: "High" }),
                          /* @__PURE__ */ v.jsx("option", { value: "URGENT", children: "Urgent" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ v.jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ v.jsx("label", { htmlFor: "ticket-status", className: "form-label", children: "Status" }),
                    /* @__PURE__ */ v.jsxs(
                      "select",
                      {
                        id: "ticket-status",
                        className: "form-input",
                        value: f,
                        onChange: (x) => m(x.target.value),
                        children: [
                          /* @__PURE__ */ v.jsx("option", { value: "BACKLOG", children: "Backlog" }),
                          /* @__PURE__ */ v.jsx("option", { value: "TODO", children: "To Do" })
                        ]
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ v.jsxs("div", { className: "modal-actions", children: [
                /* @__PURE__ */ v.jsx(
                  "button",
                  {
                    type: "button",
                    className: "btn btn-secondary",
                    onClick: r,
                    disabled: S,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ v.jsx(
                  "button",
                  {
                    type: "submit",
                    className: "btn btn-primary",
                    disabled: S,
                    children: S ? /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                      /* @__PURE__ */ v.jsx("div", { className: "ai-spinner" }),
                      "Creating..."
                    ] }) : "Create Ticket"
                  }
                )
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function yg() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
const wg = {
  BACKLOG: "Backlog",
  TODO: "To Do",
  HANDLE: "Handle (AI Queue)",
  AI_PROCESSING: "AI Processing",
  TO_REVIEW: "To Review",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
  CANCELLED: "Cancelled"
};
function Sg({
  ticket: e,
  projectId: t,
  onClose: n,
  onUpdate: r
}) {
  const [l, o] = g.useState(!1), [i, s] = g.useState(e.title), [u, a] = g.useState(e.description || ""), [h, f] = g.useState(e.priority), [m, y] = g.useState(e.status), [C, S] = g.useState(!1), [R, d] = g.useState(""), c = g.useCallback(async () => {
    if (!i.trim()) {
      d("Title is required");
      return;
    }
    S(!0), d("");
    try {
      const k = Ya(), E = await fetch(`/api/tickets/${t}/${e.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": k
        },
        body: JSON.stringify({
          title: i.trim(),
          description: u.trim(),
          priority: h,
          status: m
        })
      });
      if (!E.ok)
        throw new Error("Failed to update ticket");
      const N = await E.json();
      r(N);
    } catch (k) {
      d(k instanceof Error ? k.message : "Failed to update ticket");
    } finally {
      S(!1);
    }
  }, [t, e.id, i, u, h, m, r]), p = g.useCallback(async () => {
    if (confirm("Are you sure you want to delete this ticket?")) {
      S(!0);
      try {
        const k = Ya();
        if (!(await fetch(`/api/tickets/${t}/${e.id}`, {
          method: "DELETE",
          headers: {
            "X-CSRF-Token": k
          }
        })).ok)
          throw new Error("Failed to delete ticket");
        r({ ...e, status: "CANCELLED" }), n();
      } catch (k) {
        d(k instanceof Error ? k.message : "Failed to delete ticket");
      } finally {
        S(!1);
      }
    }
  }, [t, e, r, n]), w = g.useCallback(
    (k) => {
      k.key === "Escape" && n();
    },
    [n]
  ), x = e.status === "HANDLE" || e.status === "AI_PROCESSING";
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      className: "modal-overlay",
      onClick: n,
      onKeyDown: w,
      role: "dialog",
      "aria-modal": "true",
      children: /* @__PURE__ */ v.jsxs(
        "div",
        {
          className: "modal-content modal-lg",
          onClick: (k) => k.stopPropagation(),
          children: [
            /* @__PURE__ */ v.jsxs("div", { className: "modal-header", children: [
              /* @__PURE__ */ v.jsxs("div", { className: "flex-1", children: [
                l ? /* @__PURE__ */ v.jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-input text-lg font-semibold",
                    value: i,
                    onChange: (k) => s(k.target.value),
                    autoFocus: !0
                  }
                ) : /* @__PURE__ */ v.jsx("h2", { className: "text-lg font-semibold", children: e.title }),
                /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
                  /* @__PURE__ */ v.jsx("span", { className: `status-badge status-${e.status.toLowerCase()}`, children: wg[e.status] }),
                  /* @__PURE__ */ v.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                    "#",
                    e.id.slice(-4)
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  className: "modal-close",
                  onClick: n,
                  "aria-label": "Close modal",
                  children: "×"
                }
              )
            ] }),
            /* @__PURE__ */ v.jsxs("div", { className: "modal-body", children: [
              R && /* @__PURE__ */ v.jsx("div", { className: "mb-4 p-3 text-sm rounded-md bg-destructive/10 text-destructive border border-destructive/20", children: R }),
              x && /* @__PURE__ */ v.jsxs("div", { className: "mb-4 p-4 rounded-md bg-status-processing/10 border border-status-processing/20", children: [
                /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2 text-status-processing", children: [
                  /* @__PURE__ */ v.jsx("div", { className: "ai-spinner" }),
                  /* @__PURE__ */ v.jsx("span", { className: "font-medium", children: e.status === "HANDLE" ? "Queued for AI Processing" : "AI is working on this ticket..." })
                ] }),
                e.status === "AI_PROCESSING" && /* @__PURE__ */ v.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "The Cursor Agent is implementing this task. Do not modify while processing." })
              ] }),
              e.prLink && /* @__PURE__ */ v.jsx("div", { className: "mb-4 p-4 rounded-md bg-status-success/10 border border-status-success/20", children: /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ v.jsx("span", { className: "font-medium text-status-success", children: "Pull Request Ready" }),
                /* @__PURE__ */ v.jsx(
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
              e.aiSummary && /* @__PURE__ */ v.jsxs("div", { className: "mb-4 p-4 rounded-md bg-muted", children: [
                /* @__PURE__ */ v.jsx("h4", { className: "font-medium mb-2", children: "AI Summary" }),
                /* @__PURE__ */ v.jsx("p", { className: "text-sm text-muted-foreground", children: e.aiSummary })
              ] }),
              /* @__PURE__ */ v.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ v.jsx("label", { className: "form-label", children: "Description" }),
                l ? /* @__PURE__ */ v.jsx(
                  "textarea",
                  {
                    className: "form-input",
                    value: u,
                    onChange: (k) => a(k.target.value),
                    rows: 6,
                    placeholder: "Add task details, requirements, acceptance criteria..."
                  }
                ) : /* @__PURE__ */ v.jsx("div", { className: "p-3 rounded-md bg-muted min-h-[100px] text-sm whitespace-pre-wrap", children: e.description || /* @__PURE__ */ v.jsx("span", { className: "text-muted-foreground", children: "No description" }) })
              ] }),
              l && /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ v.jsxs("div", { className: "form-group", children: [
                  /* @__PURE__ */ v.jsx("label", { className: "form-label", children: "Priority" }),
                  /* @__PURE__ */ v.jsxs(
                    "select",
                    {
                      className: "form-input",
                      value: h,
                      onChange: (k) => f(k.target.value),
                      children: [
                        /* @__PURE__ */ v.jsx("option", { value: "LOW", children: "Low" }),
                        /* @__PURE__ */ v.jsx("option", { value: "MEDIUM", children: "Medium" }),
                        /* @__PURE__ */ v.jsx("option", { value: "HIGH", children: "High" }),
                        /* @__PURE__ */ v.jsx("option", { value: "URGENT", children: "Urgent" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ v.jsxs("div", { className: "form-group", children: [
                  /* @__PURE__ */ v.jsx("label", { className: "form-label", children: "Status" }),
                  /* @__PURE__ */ v.jsxs(
                    "select",
                    {
                      className: "form-input",
                      value: m,
                      onChange: (k) => y(k.target.value),
                      disabled: x,
                      children: [
                        /* @__PURE__ */ v.jsx("option", { value: "BACKLOG", children: "Backlog" }),
                        /* @__PURE__ */ v.jsx("option", { value: "TODO", children: "To Do" }),
                        /* @__PURE__ */ v.jsx("option", { value: "HANDLE", children: "Handle (AI)" }),
                        /* @__PURE__ */ v.jsx("option", { value: "TO_REVIEW", children: "To Review" }),
                        /* @__PURE__ */ v.jsx("option", { value: "IN_PROGRESS", children: "In Progress" }),
                        /* @__PURE__ */ v.jsx("option", { value: "DONE", children: "Done" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ v.jsx("div", { className: "mt-6 pt-4 border-t border-border", children: /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [
                /* @__PURE__ */ v.jsxs("div", { children: [
                  /* @__PURE__ */ v.jsx("span", { className: "text-muted-foreground", children: "Created:" }),
                  /* @__PURE__ */ v.jsx("span", { className: "ml-2", children: new Date(e.createdAt).toLocaleDateString() })
                ] }),
                /* @__PURE__ */ v.jsxs("div", { children: [
                  /* @__PURE__ */ v.jsx("span", { className: "text-muted-foreground", children: "Updated:" }),
                  /* @__PURE__ */ v.jsx("span", { className: "ml-2", children: new Date(e.updatedAt).toLocaleDateString() })
                ] }),
                e.assignee && /* @__PURE__ */ v.jsxs("div", { children: [
                  /* @__PURE__ */ v.jsx("span", { className: "text-muted-foreground", children: "Assignee:" }),
                  /* @__PURE__ */ v.jsx("span", { className: "ml-2", children: e.assignee.name })
                ] }),
                e.createdBy && /* @__PURE__ */ v.jsxs("div", { children: [
                  /* @__PURE__ */ v.jsx("span", { className: "text-muted-foreground", children: "Created by:" }),
                  /* @__PURE__ */ v.jsx("span", { className: "ml-2", children: e.createdBy.name })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ v.jsx("div", { className: "modal-actions", children: l ? /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-destructive",
                  onClick: p,
                  disabled: C,
                  children: "Delete"
                }
              ),
              /* @__PURE__ */ v.jsx("div", { className: "flex-1" }),
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-secondary",
                  onClick: () => {
                    o(!1), s(e.title), a(e.description || ""), f(e.priority), y(e.status);
                  },
                  disabled: C,
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-primary",
                  onClick: c,
                  disabled: C,
                  children: C ? "Saving..." : "Save Changes"
                }
              )
            ] }) : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-secondary",
                  onClick: n,
                  children: "Close"
                }
              ),
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-primary",
                  onClick: () => o(!0),
                  disabled: x,
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
function Ya() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
const xg = [
  { id: "BACKLOG", title: "Backlog", icon: "📋" },
  { id: "TODO", title: "To Do", icon: "📝" },
  { id: "HANDLE", title: "Handle", icon: "🤖" },
  { id: "AI_PROCESSING", title: "AI Processing", icon: "⚡" },
  { id: "TO_REVIEW", title: "To Review", icon: "👀" },
  { id: "IN_PROGRESS", title: "In Progress", icon: "🔧" },
  { id: "DONE", title: "Done", icon: "✅" }
];
function kg() {
  const [e, t] = g.useState(null), [n, r] = g.useState(null), [l, o] = g.useState(null), [i, s] = g.useState(!1), [u, a] = g.useState("BACKLOG");
  g.useEffect(() => {
    const d = document.getElementById("board-state");
    if (d != null && d.textContent)
      try {
        const p = JSON.parse(d.textContent);
        t(p);
      } catch (p) {
        console.error("Failed to parse board state:", p);
      }
    const c = document.getElementById("new-ticket-btn");
    return c && c.addEventListener("click", () => s(!0)), document.querySelectorAll(".tab-btn").forEach((p) => {
      p.addEventListener("click", (w) => {
        const x = w.target.dataset.column;
        x && (a(x), document.querySelectorAll(".tab-btn").forEach((k) => {
          k.classList.remove("bg-muted"), k.classList.add("hover:bg-muted");
        }), w.target.classList.add("bg-muted"), w.target.classList.remove("hover:bg-muted"));
      });
    }), () => {
      c && c.removeEventListener("click", () => s(!0));
    };
  }, []);
  const h = Lm(
    za(mu, {
      activationConstraint: { distance: 8 }
    }),
    za(pu, {
      coordinateGetter: cg
    })
  ), f = g.useCallback(
    (d) => {
      const c = d.active.id, p = e == null ? void 0 : e.tickets.find((w) => w.id === c);
      p && r(p);
    },
    [e]
  ), m = g.useCallback((d) => {
  }, []), y = g.useCallback(
    async (d) => {
      const { active: c, over: p } = d;
      if (r(null), !p || !e) return;
      const w = c.id, x = p.id, k = e.tickets.find((E) => E.id === w);
      if (!(!k || k.status === x)) {
        t((E) => E && {
          ...E,
          tickets: E.tickets.map(
            (N) => N.id === w ? { ...N, status: x } : N
          )
        }), x === "HANDLE" && Tl(`Ticket #${k.id.slice(-4)} dispatched to Cursor Agent`, "warning");
        try {
          const E = Cg();
          if (!(await fetch(
            `/api/tickets/${e.projectId}/${w}/status`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": E
              },
              body: JSON.stringify({ status: x })
            }
          )).ok)
            throw new Error("Failed to update ticket status");
          x === "HANDLE" && Tl("AI agent started processing", "success");
        } catch (E) {
          console.error("Failed to update ticket:", E), Tl("Failed to update ticket", "error"), t((N) => N && {
            ...N,
            tickets: N.tickets.map(
              (P) => P.id === w ? { ...P, status: k.status } : P
            )
          });
        }
      }
    },
    [e]
  ), C = g.useCallback((d) => {
    o(d);
  }, []), S = g.useCallback((d) => {
    t((c) => c && {
      ...c,
      tickets: c.tickets.map(
        (p) => p.id === d.id ? d : p
      )
    }), o(null);
  }, []), R = g.useCallback((d) => {
    t((c) => c && {
      ...c,
      tickets: [...c.tickets, d]
    }), s(!1), Tl("Ticket created successfully", "success");
  }, []);
  return e ? /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsxs(
      _v,
      {
        sensors: h,
        collisionDetection: pf,
        onDragStart: f,
        onDragOver: m,
        onDragEnd: y,
        children: [
          /* @__PURE__ */ v.jsx("div", { className: "kanban-container", children: xg.map((d) => /* @__PURE__ */ v.jsx(
            vg,
            {
              id: d.id,
              title: d.title,
              icon: d.icon,
              tickets: e.tickets.filter((c) => c.status === d.id),
              isActive: u === d.id,
              onTicketClick: C
            },
            d.id
          )) }),
          /* @__PURE__ */ v.jsx(Yv, { children: n ? /* @__PURE__ */ v.jsx(
            Af,
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
    i && /* @__PURE__ */ v.jsx(
      gg,
      {
        projectId: e.projectId,
        branchPresets: e.branchPresets || [],
        defaultBranch: e.defaultBranch || "main",
        onClose: () => s(!1),
        onSubmit: R
      }
    ),
    l && /* @__PURE__ */ v.jsx(
      Sg,
      {
        ticket: l,
        projectId: e.projectId,
        onClose: () => o(null),
        onUpdate: S
      }
    )
  ] }) : /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ v.jsx("div", { className: "ai-spinner" }) });
}
function Cg() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
function Tl(e, t = "success") {
  typeof window < "u" && window.showToast && window.showToast(e, t);
}
function Ga() {
  const e = document.getElementById("kanban-board");
  if (!e) {
    console.warn("Kanban board container not found");
    return;
  }
  Si.createRoot(e).render(
    /* @__PURE__ */ v.jsx(Q.StrictMode, { children: /* @__PURE__ */ v.jsx(kg, {}) })
  );
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Ga) : Ga();
