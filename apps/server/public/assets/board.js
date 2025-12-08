function Qf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ga = { exports: {} }, yi = {}, Ja = { exports: {} }, z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr = Symbol.for("react.element"), Kf = Symbol.for("react.portal"), Xf = Symbol.for("react.fragment"), Yf = Symbol.for("react.strict_mode"), Gf = Symbol.for("react.profiler"), Jf = Symbol.for("react.provider"), Zf = Symbol.for("react.context"), qf = Symbol.for("react.forward_ref"), ep = Symbol.for("react.suspense"), tp = Symbol.for("react.memo"), np = Symbol.for("react.lazy"), Nu = Symbol.iterator;
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
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) nc.call(t, r) && !rc.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) l[r] === void 0 && (l[r] = s[r]);
  return { $$typeof: qr, type: e, key: i, ref: o, props: l, _owner: ys.current };
}
function lp(e, t) {
  return { $$typeof: qr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ws(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qr;
}
function ip(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ru = /\/+/g;
function Vi(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ip("" + e.key) : t.toString(36);
}
function jl(e, t, n, r, l) {
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
        case Kf:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Vi(o, 0) : r, Du(l) ? (n = "", e != null && (n = e.replace(Ru, "$&/") + "/"), jl(l, t, n, "", function(a) {
    return a;
  })) : l != null && (ws(l) && (l = lp(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Ru, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Du(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var u = r + Vi(i, s);
    o += jl(i, t, n, u, l);
  }
  else if (u = rp(e), typeof u == "function") for (e = u.call(e), s = 0; !(i = e.next()).done; ) i = i.value, u = r + Vi(i, s++), o += jl(i, t, n, u, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function cl(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return jl(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function op(e) {
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
var Ce = { current: null }, Pl = { transition: null }, sp = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: Pl, ReactCurrentOwner: ys };
function ic() {
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
z.Fragment = Xf;
z.Profiler = Gf;
z.PureComponent = vs;
z.StrictMode = Yf;
z.Suspense = ep;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sp;
z.act = ic;
z.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = qa({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = ys.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (u in t) nc.call(t, u) && !rc.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: qr, type: e.type, key: l, ref: i, props: r, _owner: o };
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
  return { $$typeof: np, _payload: { _status: -1, _result: e }, _init: op };
};
z.memo = function(e, t) {
  return { $$typeof: tp, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function(e) {
  var t = Pl.transition;
  Pl.transition = {};
  try {
    e();
  } finally {
    Pl.transition = t;
  }
};
z.unstable_act = ic;
z.useCallback = function(e, t) {
  return Ce.current.useCallback(e, t);
};
z.useContext = function(e) {
  return Ce.current.useContext(e);
};
z.useDebugValue = function() {
};
z.useDeferredValue = function(e) {
  return Ce.current.useDeferredValue(e);
};
z.useEffect = function(e, t) {
  return Ce.current.useEffect(e, t);
};
z.useId = function() {
  return Ce.current.useId();
};
z.useImperativeHandle = function(e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function(e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function(e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
z.useMemo = function(e, t) {
  return Ce.current.useMemo(e, t);
};
z.useReducer = function(e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
z.useRef = function(e) {
  return Ce.current.useRef(e);
};
z.useState = function(e) {
  return Ce.current.useState(e);
};
z.useSyncExternalStore = function(e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function() {
  return Ce.current.useTransition();
};
z.version = "18.3.1";
Ja.exports = z;
var g = Ja.exports;
const b = /* @__PURE__ */ Qf(g);
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
function oc(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) dp.call(t, r) && !pp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: ap, type: e, key: i, ref: o, props: l, _owner: fp.current };
}
yi.Fragment = cp;
yi.jsx = oc;
yi.jsxs = oc;
Ga.exports = yi;
var m = Ga.exports, xo = {}, sc = { exports: {} }, Fe = {}, uc = { exports: {} }, ac = {};
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
  function t(j, N) {
    var L = j.length;
    j.push(N);
    e: for (; 0 < L; ) {
      var B = L - 1 >>> 1, M = j[B];
      if (0 < l(M, N)) j[B] = N, j[L] = M, L = B;
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var N = j[0], L = j.pop();
    if (L !== N) {
      j[0] = L;
      e: for (var B = 0, M = j.length, me = M >>> 1; B < me; ) {
        var ae = 2 * (B + 1) - 1, pt = j[ae], q = ae + 1, ht = j[q];
        if (0 > l(pt, L)) q < M && 0 > l(ht, pt) ? (j[B] = ht, j[q] = L, B = q) : (j[B] = pt, j[ae] = L, B = ae);
        else if (q < M && 0 > l(ht, L)) j[B] = ht, j[q] = L, B = q;
        else break e;
      }
    }
    return N;
  }
  function l(j, N) {
    var L = j.sortIndex - N.sortIndex;
    return L !== 0 ? L : j.id - N.id;
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
  var u = [], a = [], h = 1, p = null, v = 3, y = !1, k = !1, x = !1, T = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(j) {
    for (var N = n(a); N !== null; ) {
      if (N.callback === null) r(a);
      else if (N.startTime <= j) r(a), N.sortIndex = N.expirationTime, t(u, N);
      else break;
      N = n(a);
    }
  }
  function w(j) {
    if (x = !1, f(j), !k) if (n(u) !== null) k = !0, lt(C);
    else {
      var N = n(a);
      N !== null && ne(w, N.startTime - j);
    }
  }
  function C(j, N) {
    k = !1, x && (x = !1, d(D), D = -1), y = !0;
    var L = v;
    try {
      for (f(N), p = n(u); p !== null && (!(p.expirationTime > N) || j && !O()); ) {
        var B = p.callback;
        if (typeof B == "function") {
          p.callback = null, v = p.priorityLevel;
          var M = B(p.expirationTime <= N);
          N = e.unstable_now(), typeof M == "function" ? p.callback = M : p === n(u) && r(u), f(N);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var me = !0;
      else {
        var ae = n(a);
        ae !== null && ne(w, ae.startTime - N), me = !1;
      }
      return me;
    } finally {
      p = null, v = L, y = !1;
    }
  }
  var S = !1, E = null, D = -1, I = 5, _ = -1;
  function O() {
    return !(e.unstable_now() - _ < I);
  }
  function te() {
    if (E !== null) {
      var j = e.unstable_now();
      _ = j;
      var N = !0;
      try {
        N = E(!0, j);
      } finally {
        N ? Z() : (S = !1, E = null);
      }
    } else S = !1;
  }
  var Z;
  if (typeof c == "function") Z = function() {
    c(te);
  };
  else if (typeof MessageChannel < "u") {
    var he = new MessageChannel(), Xe = he.port2;
    he.port1.onmessage = te, Z = function() {
      Xe.postMessage(null);
    };
  } else Z = function() {
    T(te, 0);
  };
  function lt(j) {
    E = j, S || (S = !0, Z());
  }
  function ne(j, N) {
    D = T(function() {
      j(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
    j.callback = null;
  }, e.unstable_continueExecution = function() {
    k || y || (k = !0, lt(C));
  }, e.unstable_forceFrameRate = function(j) {
    0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < j ? Math.floor(1e3 / j) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(j) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = v;
    }
    var L = v;
    v = N;
    try {
      return j();
    } finally {
      v = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(j, N) {
    switch (j) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        j = 3;
    }
    var L = v;
    v = j;
    try {
      return N();
    } finally {
      v = L;
    }
  }, e.unstable_scheduleCallback = function(j, N, L) {
    var B = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? B + L : B) : L = B, j) {
      case 1:
        var M = -1;
        break;
      case 2:
        M = 250;
        break;
      case 5:
        M = 1073741823;
        break;
      case 4:
        M = 1e4;
        break;
      default:
        M = 5e3;
    }
    return M = L + M, j = { id: h++, callback: N, priorityLevel: j, startTime: L, expirationTime: M, sortIndex: -1 }, L > B ? (j.sortIndex = L, t(a, j), n(u) === null && j === n(a) && (x ? (d(D), D = -1) : x = !0, ne(w, L - B))) : (j.sortIndex = M, t(u, j), k || y || (k = !0, lt(C))), j;
  }, e.unstable_shouldYield = O, e.unstable_wrapCallback = function(j) {
    var N = v;
    return function() {
      var L = v;
      v = N;
      try {
        return j.apply(this, arguments);
      } finally {
        v = L;
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
function R(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var cc = /* @__PURE__ */ new Set(), Ir = {};
function mn(e, t) {
  Wn(e, t), Wn(e + "Capture", t);
}
function Wn(e, t) {
  for (Ir[e] = t, e = 0; e < t.length; e++) cc.add(t[e]);
}
var Ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), So = Object.prototype.hasOwnProperty, vp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Tu = {}, ju = {};
function gp(e) {
  return So.call(ju, e) ? !0 : So.call(Tu, e) ? !1 : vp.test(e) ? ju[e] = !0 : (Tu[e] = !0, !1);
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
function Ee(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  pe[e] = new Ee(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  pe[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  pe[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  pe[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  pe[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  pe[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  pe[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  pe[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  pe[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  pe[t] = new Ee(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(xs, Ss);
  pe[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(xs, Ss);
  pe[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  pe[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  pe[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ks(e, t, n, r) {
  var l = pe.hasOwnProperty(t) ? pe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (wp(t, n, l, r) && (n = null), r || l === null ? gp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Rt = mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, dl = Symbol.for("react.element"), En = Symbol.for("react.portal"), Nn = Symbol.for("react.fragment"), Cs = Symbol.for("react.strict_mode"), ko = Symbol.for("react.profiler"), dc = Symbol.for("react.provider"), fc = Symbol.for("react.context"), Es = Symbol.for("react.forward_ref"), Co = Symbol.for("react.suspense"), Eo = Symbol.for("react.suspense_list"), Ns = Symbol.for("react.memo"), Mt = Symbol.for("react.lazy"), pc = Symbol.for("react.offscreen"), Pu = Symbol.iterator;
function ur(e) {
  return e === null || typeof e != "object" ? null : (e = Pu && e[Pu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Y = Object.assign, Wi;
function gr(e) {
  if (Wi === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Wi = t && t[1] || "";
  }
  return `
` + Wi + e;
}
var bi = !1;
function Qi(e, t) {
  if (!e || bi) return "";
  bi = !0;
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
`), i = r.stack.split(`
`), o = l.length - 1, s = i.length - 1; 1 <= o && 0 <= s && l[o] !== i[s]; ) s--;
      for (; 1 <= o && 0 <= s; o--, s--) if (l[o] !== i[s]) {
        if (o !== 1 || s !== 1)
          do
            if (o--, s--, 0 > s || l[o] !== i[s]) {
              var u = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= o && 0 <= s);
        break;
      }
    }
  } finally {
    bi = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? gr(e) : "";
}
function xp(e) {
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
    case fc:
      return (e.displayName || "Context") + ".Consumer";
    case dc:
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
function Do(e, t) {
  var n = t.checked;
  return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function _u(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Gt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function vc(e, t) {
  t = t.checked, t != null && ks(e, "checked", t, !1);
}
function Ro(e, t) {
  vc(e, t);
  var n = Gt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? To(e, t.type, n) : t.hasOwnProperty("defaultValue") && To(e, t.type, Gt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Lu(e, t, n) {
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
function jo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Iu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(R(92));
      if (yr(n)) {
        if (1 < n.length) throw Error(R(93));
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
function Ou(e) {
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
function Po(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? yc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var pl, wc = function(e) {
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
}, Cp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Sr).forEach(function(e) {
  Cp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Sr[t] = Sr[e];
  });
});
function xc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Sr.hasOwnProperty(e) && Sr[e] ? ("" + t).trim() : t + "px";
}
function Sc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = xc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Ep = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function _o(e, t) {
  if (t) {
    if (Ep[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Lo(e, t) {
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
var Io = null;
function Ds(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Oo = null, Fn = null, Bn = null;
function Mu(e) {
  if (e = nl(e)) {
    if (typeof Oo != "function") throw Error(R(280));
    var t = e.stateNode;
    t && (t = Ci(t), Oo(e.stateNode, e.type, t));
  }
}
function kc(e) {
  Fn ? Bn ? Bn.push(e) : Bn = [e] : Fn = e;
}
function Cc() {
  if (Fn) {
    var e = Fn, t = Bn;
    if (Bn = Fn = null, Mu(e), t) for (e = 0; e < t.length; e++) Mu(t[e]);
  }
}
function Ec(e, t) {
  return e(t);
}
function Nc() {
}
var Ki = !1;
function Dc(e, t, n) {
  if (Ki) return e(t, n);
  Ki = !0;
  try {
    return Ec(e, t, n);
  } finally {
    Ki = !1, (Fn !== null || Bn !== null) && (Nc(), Cc());
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
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var Mo = !1;
if (Ct) try {
  var ar = {};
  Object.defineProperty(ar, "passive", { get: function() {
    Mo = !0;
  } }), window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
} catch {
  Mo = !1;
}
function Np(e, t, n, r, l, i, o, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var kr = !1, Vl = null, Wl = !1, zo = null, Dp = { onError: function(e) {
  kr = !0, Vl = e;
} };
function Rp(e, t, n, r, l, i, o, s, u) {
  kr = !1, Vl = null, Np.apply(Dp, arguments);
}
function Tp(e, t, n, r, l, i, o, s, u) {
  if (Rp.apply(this, arguments), kr) {
    if (kr) {
      var a = Vl;
      kr = !1, Vl = null;
    } else throw Error(R(198));
    Wl || (Wl = !0, zo = a);
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
function zu(e) {
  if (vn(e) !== e) throw Error(R(188));
}
function jp(e) {
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
        if (i === n) return zu(l), e;
        if (i === r) return zu(l), t;
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
var Pc = Ae.unstable_scheduleCallback, Au = Ae.unstable_cancelCallback, Pp = Ae.unstable_shouldYield, _p = Ae.unstable_requestPaint, J = Ae.unstable_now, Lp = Ae.unstable_getCurrentPriorityLevel, Rs = Ae.unstable_ImmediatePriority, _c = Ae.unstable_UserBlockingPriority, bl = Ae.unstable_NormalPriority, Ip = Ae.unstable_LowPriority, Lc = Ae.unstable_IdlePriority, wi = null, dt = null;
function Op(e) {
  if (dt && typeof dt.onCommitFiberRoot == "function") try {
    dt.onCommitFiberRoot(wi, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var qe = Math.clz32 ? Math.clz32 : Ap, Mp = Math.log, zp = Math.LN2;
function Ap(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Mp(e) / zp | 0) | 0;
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
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - qe(t), l = 1 << n, r |= e[n], t &= ~l;
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
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - qe(i), s = 1 << o, u = l[o];
    u === -1 ? (!(s & n) || s & r) && (l[o] = Fp(s, t)) : u <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Ao(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ic() {
  var e = hl;
  return hl <<= 1, !(hl & 4194240) && (hl = 64), e;
}
function Xi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function el(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - qe(t), e[t] = n;
}
function Up(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - qe(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function Ts(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - qe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var U = 0;
function Oc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Mc, js, zc, Ac, Fc, Fo = !1, vl = [], Ht = null, Vt = null, Wt = null, zr = /* @__PURE__ */ new Map(), Ar = /* @__PURE__ */ new Map(), Ft = [], $p = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Fu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ht = null;
      break;
    case "dragenter":
    case "dragleave":
      Vt = null;
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
      Ar.delete(t.pointerId);
  }
}
function cr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = nl(t), t !== null && js(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Hp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Ht = cr(Ht, e, t, n, r, l), !0;
    case "dragenter":
      return Vt = cr(Vt, e, t, n, r, l), !0;
    case "mouseover":
      return Wt = cr(Wt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return zr.set(i, cr(zr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Ar.set(i, cr(Ar.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Bc(e) {
  var t = ln(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Rc(n), t !== null) {
          e.blockedOn = t, Fc(e.priority, function() {
            zc(n);
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
    var n = Bo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Io = r, n.target.dispatchEvent(r), Io = null;
    } else return t = nl(n), t !== null && js(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Bu(e, t, n) {
  _l(e) && n.delete(t);
}
function Vp() {
  Fo = !1, Ht !== null && _l(Ht) && (Ht = null), Vt !== null && _l(Vt) && (Vt = null), Wt !== null && _l(Wt) && (Wt = null), zr.forEach(Bu), Ar.forEach(Bu);
}
function dr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Fo || (Fo = !0, Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority, Vp)));
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
  for (Ht !== null && dr(Ht, e), Vt !== null && dr(Vt, e), Wt !== null && dr(Wt, e), zr.forEach(t), Ar.forEach(t), n = 0; n < Ft.length; n++) r = Ft[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ft.length && (n = Ft[0], n.blockedOn === null); ) Bc(n), n.blockedOn === null && Ft.shift();
}
var Un = Rt.ReactCurrentBatchConfig, Kl = !0;
function Wp(e, t, n, r) {
  var l = U, i = Un.transition;
  Un.transition = null;
  try {
    U = 1, Ps(e, t, n, r);
  } finally {
    U = l, Un.transition = i;
  }
}
function bp(e, t, n, r) {
  var l = U, i = Un.transition;
  Un.transition = null;
  try {
    U = 4, Ps(e, t, n, r);
  } finally {
    U = l, Un.transition = i;
  }
}
function Ps(e, t, n, r) {
  if (Kl) {
    var l = Bo(e, t, n, r);
    if (l === null) lo(e, t, r, Xl, n), Fu(e, r);
    else if (Hp(l, e, t, n, r)) r.stopPropagation();
    else if (Fu(e, r), t & 4 && -1 < $p.indexOf(e)) {
      for (; l !== null; ) {
        var i = nl(l);
        if (i !== null && Mc(i), i = Bo(e, t, n, r), i === null && lo(e, t, r, Xl, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else lo(e, t, r, null, n);
  }
}
var Xl = null;
function Bo(e, t, n, r) {
  if (Xl = null, e = Ds(r), e = ln(e), e !== null) if (t = vn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Rc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Xl = e, null;
}
function Uc(e) {
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
        case _c:
          return 4;
        case bl:
        case Ip:
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
var Ut = null, _s = null, Ll = null;
function $c() {
  if (Ll) return Ll;
  var e, t = _s, n = t.length, r, l = "value" in Ut ? Ut.value : Ut.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Ll = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Il(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function gl() {
  return !0;
}
function Uu() {
  return !1;
}
function Be(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? gl : Uu, this.isPropagationStopped = Uu, this;
  }
  return Y(t.prototype, { preventDefault: function() {
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
}, defaultPrevented: 0, isTrusted: 0 }, Ls = Be(Zn), tl = Y({}, Zn, { view: 0, detail: 0 }), Qp = Be(tl), Yi, Gi, fr, xi = Y({}, tl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Is, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== fr && (fr && e.type === "mousemove" ? (Yi = e.screenX - fr.screenX, Gi = e.screenY - fr.screenY) : Gi = Yi = 0, fr = e), Yi);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Gi;
} }), $u = Be(xi), Kp = Y({}, xi, { dataTransfer: 0 }), Xp = Be(Kp), Yp = Y({}, tl, { relatedTarget: 0 }), Ji = Be(Yp), Gp = Y({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Jp = Be(Gp), Zp = Y({}, Zn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), qp = Be(Zp), eh = Y({}, Zn, { data: 0 }), Hu = Be(eh), th = {
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
function Is() {
  return lh;
}
var ih = Y({}, tl, { key: function(e) {
  if (e.key) {
    var t = th[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Il(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? nh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Is, charCode: function(e) {
  return e.type === "keypress" ? Il(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Il(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), oh = Be(ih), sh = Y({}, xi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Vu = Be(sh), uh = Y({}, tl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Is }), ah = Be(uh), ch = Y({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), dh = Be(ch), fh = Y({}, xi, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), ph = Be(fh), hh = [9, 13, 27, 32], Os = Ct && "CompositionEvent" in window, Cr = null;
Ct && "documentMode" in document && (Cr = document.documentMode);
var mh = Ct && "TextEvent" in window && !Cr, Hc = Ct && (!Os || Cr && 8 < Cr && 11 >= Cr), Wu = " ", bu = !1;
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
      return t.which !== 32 ? null : (bu = !0, Wu);
    case "textInput":
      return e = t.data, e === Wu && bu ? null : e;
    default:
      return null;
  }
}
function gh(e, t) {
  if (Dn) return e === "compositionend" || !Os && Vc(e, t) ? (e = $c(), Ll = _s = Ut = null, Dn = !1, e) : null;
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
function Qu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!yh[e.type] : t === "textarea";
}
function bc(e, t, n, r) {
  kc(r), t = Yl(t, "onChange"), 0 < t.length && (n = new Ls("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Er = null, Br = null;
function wh(e) {
  nd(e, 0);
}
function Si(e) {
  var t = jn(e);
  if (mc(t)) return e;
}
function xh(e, t) {
  if (e === "change") return t;
}
var Qc = !1;
if (Ct) {
  var Zi;
  if (Ct) {
    var qi = "oninput" in document;
    if (!qi) {
      var Ku = document.createElement("div");
      Ku.setAttribute("oninput", "return;"), qi = typeof Ku.oninput == "function";
    }
    Zi = qi;
  } else Zi = !1;
  Qc = Zi && (!document.documentMode || 9 < document.documentMode);
}
function Xu() {
  Er && (Er.detachEvent("onpropertychange", Kc), Br = Er = null);
}
function Kc(e) {
  if (e.propertyName === "value" && Si(Br)) {
    var t = [];
    bc(t, Br, e, Ds(e)), Dc(wh, t);
  }
}
function Sh(e, t, n) {
  e === "focusin" ? (Xu(), Er = t, Br = n, Er.attachEvent("onpropertychange", Kc)) : e === "focusout" && Xu();
}
function kh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Si(Br);
}
function Ch(e, t) {
  if (e === "click") return Si(t);
}
function Eh(e, t) {
  if (e === "input" || e === "change") return Si(t);
}
function Nh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var tt = typeof Object.is == "function" ? Object.is : Nh;
function Ur(e, t) {
  if (tt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!So.call(t, l) || !tt(e[l], t[l])) return !1;
  }
  return !0;
}
function Yu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Gu(e, t) {
  var n = Yu(e);
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
    n = Yu(n);
  }
}
function Xc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Xc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Yc() {
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
  var t = Yc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Xc(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ms(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Gu(n, i);
        var o = Gu(
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
var Rh = Ct && "documentMode" in document && 11 >= document.documentMode, Rn = null, Uo = null, Nr = null, $o = !1;
function Ju(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $o || Rn == null || Rn !== Hl(r) || (r = Rn, "selectionStart" in r && Ms(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Nr && Ur(Nr, r) || (Nr = r, r = Yl(Uo, "onSelect"), 0 < r.length && (t = new Ls("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Rn)));
}
function yl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Tn = { animationend: yl("Animation", "AnimationEnd"), animationiteration: yl("Animation", "AnimationIteration"), animationstart: yl("Animation", "AnimationStart"), transitionend: yl("Transition", "TransitionEnd") }, eo = {}, Gc = {};
Ct && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Tn.animationend.animation, delete Tn.animationiteration.animation, delete Tn.animationstart.animation), "TransitionEvent" in window || delete Tn.transitionend.transition);
function ki(e) {
  if (eo[e]) return eo[e];
  if (!Tn[e]) return e;
  var t = Tn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Gc) return eo[e] = t[n];
  return e;
}
var Jc = ki("animationend"), Zc = ki("animationiteration"), qc = ki("animationstart"), ed = ki("transitionend"), td = /* @__PURE__ */ new Map(), Zu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function qt(e, t) {
  td.set(e, t), mn(t, [e]);
}
for (var to = 0; to < Zu.length; to++) {
  var no = Zu[to], Th = no.toLowerCase(), jh = no[0].toUpperCase() + no.slice(1);
  qt(Th, "on" + jh);
}
qt(Jc, "onAnimationEnd");
qt(Zc, "onAnimationIteration");
qt(qc, "onAnimationStart");
qt("dblclick", "onDoubleClick");
qt("focusin", "onFocus");
qt("focusout", "onBlur");
qt(ed, "onTransitionEnd");
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
var xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ph = new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));
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
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var s = r[o], u = s.instance, a = s.currentTarget;
        if (s = s.listener, u !== i && l.isPropagationStopped()) break e;
        qu(l, s, a), i = u;
      }
      else for (o = 0; o < r.length; o++) {
        if (s = r[o], u = s.instance, a = s.currentTarget, s = s.listener, u !== i && l.isPropagationStopped()) break e;
        qu(l, s, a), i = u;
      }
    }
  }
  if (Wl) throw e = zo, Wl = !1, zo = null, e;
}
function V(e, t) {
  var n = t[Qo];
  n === void 0 && (n = t[Qo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (rd(t, e, 2, !1), n.add(r));
}
function ro(e, t, n) {
  var r = 0;
  t && (r |= 4), rd(n, e, r, t);
}
var wl = "_reactListening" + Math.random().toString(36).slice(2);
function $r(e) {
  if (!e[wl]) {
    e[wl] = !0, cc.forEach(function(n) {
      n !== "selectionchange" && (Ph.has(n) || ro(n, !1, e), ro(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wl] || (t[wl] = !0, ro("selectionchange", !1, t));
  }
}
function rd(e, t, n, r) {
  switch (Uc(t)) {
    case 1:
      var l = Wp;
      break;
    case 4:
      l = bp;
      break;
    default:
      l = Ps;
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
        var u = o.tag;
        if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        o = o.return;
      }
      for (; s !== null; ) {
        if (o = ln(s), o === null) return;
        if (u = o.tag, u === 5 || u === 6) {
          r = i = o;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  Dc(function() {
    var a = i, h = Ds(n), p = [];
    e: {
      var v = td.get(e);
      if (v !== void 0) {
        var y = Ls, k = e;
        switch (e) {
          case "keypress":
            if (Il(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = oh;
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
            y = Xp;
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
            y = Qp;
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
        var x = (t & 4) !== 0, T = !x && e === "scroll", d = x ? v !== null ? v + "Capture" : null : v;
        x = [];
        for (var c = a, f; c !== null; ) {
          f = c;
          var w = f.stateNode;
          if (f.tag === 5 && w !== null && (f = w, d !== null && (w = Mr(c, d), w != null && x.push(Hr(c, w, f)))), T) break;
          c = c.return;
        }
        0 < x.length && (v = new y(v, k, null, n, h), p.push({ event: v, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", v && n !== Io && (k = n.relatedTarget || n.fromElement) && (ln(k) || k[Et])) break e;
        if ((y || v) && (v = h.window === h ? h : (v = h.ownerDocument) ? v.defaultView || v.parentWindow : window, y ? (k = n.relatedTarget || n.toElement, y = a, k = k ? ln(k) : null, k !== null && (T = vn(k), k !== T || k.tag !== 5 && k.tag !== 6) && (k = null)) : (y = null, k = a), y !== k)) {
          if (x = $u, w = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = Vu, w = "onPointerLeave", d = "onPointerEnter", c = "pointer"), T = y == null ? v : jn(y), f = k == null ? v : jn(k), v = new x(w, c + "leave", y, n, h), v.target = T, v.relatedTarget = f, w = null, ln(h) === a && (x = new x(d, c + "enter", k, n, h), x.target = f, x.relatedTarget = T, w = x), T = w, y && k) t: {
            for (x = y, d = k, c = 0, f = x; f; f = Cn(f)) c++;
            for (f = 0, w = d; w; w = Cn(w)) f++;
            for (; 0 < c - f; ) x = Cn(x), c--;
            for (; 0 < f - c; ) d = Cn(d), f--;
            for (; c--; ) {
              if (x === d || d !== null && x === d.alternate) break t;
              x = Cn(x), d = Cn(d);
            }
            x = null;
          }
          else x = null;
          y !== null && ea(p, v, y, x, !1), k !== null && T !== null && ea(p, T, k, x, !0);
        }
      }
      e: {
        if (v = a ? jn(a) : window, y = v.nodeName && v.nodeName.toLowerCase(), y === "select" || y === "input" && v.type === "file") var C = xh;
        else if (Qu(v)) if (Qc) C = Eh;
        else {
          C = kh;
          var S = Sh;
        }
        else (y = v.nodeName) && y.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (C = Ch);
        if (C && (C = C(e, a))) {
          bc(p, C, n, h);
          break e;
        }
        S && S(e, v, a), e === "focusout" && (S = v._wrapperState) && S.controlled && v.type === "number" && To(v, "number", v.value);
      }
      switch (S = a ? jn(a) : window, e) {
        case "focusin":
          (Qu(S) || S.contentEditable === "true") && (Rn = S, Uo = a, Nr = null);
          break;
        case "focusout":
          Nr = Uo = Rn = null;
          break;
        case "mousedown":
          $o = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          $o = !1, Ju(p, n, h);
          break;
        case "selectionchange":
          if (Rh) break;
        case "keydown":
        case "keyup":
          Ju(p, n, h);
      }
      var E;
      if (Os) e: {
        switch (e) {
          case "compositionstart":
            var D = "onCompositionStart";
            break e;
          case "compositionend":
            D = "onCompositionEnd";
            break e;
          case "compositionupdate":
            D = "onCompositionUpdate";
            break e;
        }
        D = void 0;
      }
      else Dn ? Vc(e, n) && (D = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      D && (Hc && n.locale !== "ko" && (Dn || D !== "onCompositionStart" ? D === "onCompositionEnd" && Dn && (E = $c()) : (Ut = h, _s = "value" in Ut ? Ut.value : Ut.textContent, Dn = !0)), S = Yl(a, D), 0 < S.length && (D = new Hu(D, e, null, n, h), p.push({ event: D, listeners: S }), E ? D.data = E : (E = Wc(n), E !== null && (D.data = E)))), (E = mh ? vh(e, n) : gh(e, n)) && (a = Yl(a, "onBeforeInput"), 0 < a.length && (h = new Hu("onBeforeInput", "beforeinput", null, n, h), p.push({ event: h, listeners: a }), h.data = E));
    }
    nd(p, t);
  });
}
function Hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yl(e, t) {
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
function ea(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n, u = s.alternate, a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 && a !== null && (s = a, l ? (u = Mr(n, i), u != null && o.unshift(Hr(n, u, s))) : l || (u = Mr(n, i), u != null && o.push(Hr(n, u, s)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var _h = /\r\n?/g, Lh = /\u0000|\uFFFD/g;
function ta(e) {
  return (typeof e == "string" ? e : "" + e).replace(_h, `
`).replace(Lh, "");
}
function xl(e, t, n) {
  if (t = ta(t), ta(e) !== t && n) throw Error(R(425));
}
function Gl() {
}
var Ho = null, Vo = null;
function Wo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var bo = typeof setTimeout == "function" ? setTimeout : void 0, Ih = typeof clearTimeout == "function" ? clearTimeout : void 0, na = typeof Promise == "function" ? Promise : void 0, Oh = typeof queueMicrotask == "function" ? queueMicrotask : typeof na < "u" ? function(e) {
  return na.resolve(null).then(e).catch(Mh);
} : bo;
function Mh(e) {
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
function bt(e) {
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
var qn = Math.random().toString(36).slice(2), ct = "__reactFiber$" + qn, Vr = "__reactProps$" + qn, Et = "__reactContainer$" + qn, Qo = "__reactEvents$" + qn, zh = "__reactListeners$" + qn, Ah = "__reactHandles$" + qn;
function ln(e) {
  var t = e[ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Et] || n[ct]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ra(e); e !== null; ) {
        if (n = e[ct]) return n;
        e = ra(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function nl(e) {
  return e = e[ct] || e[Et], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Ci(e) {
  return e[Vr] || null;
}
var Ko = [], Pn = -1;
function en(e) {
  return { current: e };
}
function W(e) {
  0 > Pn || (e.current = Ko[Pn], Ko[Pn] = null, Pn--);
}
function H(e, t) {
  Pn++, Ko[Pn] = e.current, e.current = t;
}
var Jt = {}, xe = en(Jt), Te = en(!1), cn = Jt;
function bn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function je(e) {
  return e = e.childContextTypes, e != null;
}
function Jl() {
  W(Te), W(xe);
}
function la(e, t, n) {
  if (xe.current !== Jt) throw Error(R(168));
  H(xe, t), H(Te, n);
}
function ld(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(R(108, Sp(e) || "Unknown", l));
  return Y({}, n, r);
}
function Zl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jt, cn = xe.current, H(xe, e), H(Te, Te.current), !0;
}
function ia(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n ? (e = ld(e, t, cn), r.__reactInternalMemoizedMergedChildContext = e, W(Te), W(xe), H(xe, e)) : W(Te), H(Te, n);
}
var wt = null, Ei = !1, oo = !1;
function id(e) {
  wt === null ? wt = [e] : wt.push(e);
}
function Fh(e) {
  Ei = !0, id(e);
}
function tn() {
  if (!oo && wt !== null) {
    oo = !0;
    var e = 0, t = U;
    try {
      var n = wt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      wt = null, Ei = !1;
    } catch (l) {
      throw wt !== null && (wt = wt.slice(e + 1)), Pc(Rs, tn), l;
    } finally {
      U = t, oo = !1;
    }
  }
  return null;
}
var _n = [], Ln = 0, ql = null, ei = 0, He = [], Ve = 0, dn = null, xt = 1, St = "";
function nn(e, t) {
  _n[Ln++] = ei, _n[Ln++] = ql, ql = e, ei = t;
}
function od(e, t, n) {
  He[Ve++] = xt, He[Ve++] = St, He[Ve++] = dn, dn = e;
  var r = xt;
  e = St;
  var l = 32 - qe(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - qe(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, xt = 1 << 32 - qe(t) + l | n << l | r, St = i + e;
  } else xt = 1 << i | n << l | r, St = e;
}
function zs(e) {
  e.return !== null && (nn(e, 1), od(e, 1, 0));
}
function As(e) {
  for (; e === ql; ) ql = _n[--Ln], _n[Ln] = null, ei = _n[--Ln], _n[Ln] = null;
  for (; e === dn; ) dn = He[--Ve], He[Ve] = null, St = He[--Ve], He[Ve] = null, xt = He[--Ve], He[Ve] = null;
}
var ze = null, Me = null, Q = !1, Ze = null;
function sd(e, t) {
  var n = We(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function oa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ze = e, Me = bt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ze = e, Me = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = dn !== null ? { id: xt, overflow: St } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = We(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ze = e, Me = null, !0) : !1;
    default:
      return !1;
  }
}
function Xo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yo(e) {
  if (Q) {
    var t = Me;
    if (t) {
      var n = t;
      if (!oa(e, t)) {
        if (Xo(e)) throw Error(R(418));
        t = bt(n.nextSibling);
        var r = ze;
        t && oa(e, t) ? sd(r, n) : (e.flags = e.flags & -4097 | 2, Q = !1, ze = e);
      }
    } else {
      if (Xo(e)) throw Error(R(418));
      e.flags = e.flags & -4097 | 2, Q = !1, ze = e;
    }
  }
}
function sa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ze = e;
}
function Sl(e) {
  if (e !== ze) return !1;
  if (!Q) return sa(e), Q = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Wo(e.type, e.memoizedProps)), t && (t = Me)) {
    if (Xo(e)) throw ud(), Error(R(418));
    for (; t; ) sd(e, t), t = bt(t.nextSibling);
  }
  if (sa(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = bt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = ze ? bt(e.stateNode.nextSibling) : null;
  return !0;
}
function ud() {
  for (var e = Me; e; ) e = bt(e.nextSibling);
}
function Qn() {
  Me = ze = null, Q = !1;
}
function Fs(e) {
  Ze === null ? Ze = [e] : Ze.push(e);
}
var Bh = Rt.ReactCurrentBatchConfig;
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
function kl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ua(e) {
  var t = e._init;
  return t(e._payload);
}
function ad(e) {
  function t(d, c) {
    if (e) {
      var f = d.deletions;
      f === null ? (d.deletions = [c], d.flags |= 16) : f.push(c);
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
  function i(d, c, f) {
    return d.index = f, e ? (f = d.alternate, f !== null ? (f = f.index, f < c ? (d.flags |= 2, c) : f) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, c, f, w) {
    return c === null || c.tag !== 6 ? (c = ho(f, d.mode, w), c.return = d, c) : (c = l(c, f), c.return = d, c);
  }
  function u(d, c, f, w) {
    var C = f.type;
    return C === Nn ? h(d, c, f.props.children, w, f.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Mt && ua(C) === c.type) ? (w = l(c, f.props), w.ref = pr(d, c, f), w.return = d, w) : (w = Ul(f.type, f.key, f.props, null, d.mode, w), w.ref = pr(d, c, f), w.return = d, w);
  }
  function a(d, c, f, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = mo(f, d.mode, w), c.return = d, c) : (c = l(c, f.children || []), c.return = d, c);
  }
  function h(d, c, f, w, C) {
    return c === null || c.tag !== 7 ? (c = an(f, d.mode, w, C), c.return = d, c) : (c = l(c, f), c.return = d, c);
  }
  function p(d, c, f) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = ho("" + c, d.mode, f), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case dl:
          return f = Ul(c.type, c.key, c.props, null, d.mode, f), f.ref = pr(d, null, c), f.return = d, f;
        case En:
          return c = mo(c, d.mode, f), c.return = d, c;
        case Mt:
          var w = c._init;
          return p(d, w(c._payload), f);
      }
      if (yr(c) || ur(c)) return c = an(c, d.mode, f, null), c.return = d, c;
      kl(d, c);
    }
    return null;
  }
  function v(d, c, f, w) {
    var C = c !== null ? c.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return C !== null ? null : s(d, c, "" + f, w);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case dl:
          return f.key === C ? u(d, c, f, w) : null;
        case En:
          return f.key === C ? a(d, c, f, w) : null;
        case Mt:
          return C = f._init, v(
            d,
            c,
            C(f._payload),
            w
          );
      }
      if (yr(f) || ur(f)) return C !== null ? null : h(d, c, f, w, null);
      kl(d, f);
    }
    return null;
  }
  function y(d, c, f, w, C) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return d = d.get(f) || null, s(c, d, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case dl:
          return d = d.get(w.key === null ? f : w.key) || null, u(c, d, w, C);
        case En:
          return d = d.get(w.key === null ? f : w.key) || null, a(c, d, w, C);
        case Mt:
          var S = w._init;
          return y(d, c, f, S(w._payload), C);
      }
      if (yr(w) || ur(w)) return d = d.get(f) || null, h(c, d, w, C, null);
      kl(c, w);
    }
    return null;
  }
  function k(d, c, f, w) {
    for (var C = null, S = null, E = c, D = c = 0, I = null; E !== null && D < f.length; D++) {
      E.index > D ? (I = E, E = null) : I = E.sibling;
      var _ = v(d, E, f[D], w);
      if (_ === null) {
        E === null && (E = I);
        break;
      }
      e && E && _.alternate === null && t(d, E), c = i(_, c, D), S === null ? C = _ : S.sibling = _, S = _, E = I;
    }
    if (D === f.length) return n(d, E), Q && nn(d, D), C;
    if (E === null) {
      for (; D < f.length; D++) E = p(d, f[D], w), E !== null && (c = i(E, c, D), S === null ? C = E : S.sibling = E, S = E);
      return Q && nn(d, D), C;
    }
    for (E = r(d, E); D < f.length; D++) I = y(E, d, D, f[D], w), I !== null && (e && I.alternate !== null && E.delete(I.key === null ? D : I.key), c = i(I, c, D), S === null ? C = I : S.sibling = I, S = I);
    return e && E.forEach(function(O) {
      return t(d, O);
    }), Q && nn(d, D), C;
  }
  function x(d, c, f, w) {
    var C = ur(f);
    if (typeof C != "function") throw Error(R(150));
    if (f = C.call(f), f == null) throw Error(R(151));
    for (var S = C = null, E = c, D = c = 0, I = null, _ = f.next(); E !== null && !_.done; D++, _ = f.next()) {
      E.index > D ? (I = E, E = null) : I = E.sibling;
      var O = v(d, E, _.value, w);
      if (O === null) {
        E === null && (E = I);
        break;
      }
      e && E && O.alternate === null && t(d, E), c = i(O, c, D), S === null ? C = O : S.sibling = O, S = O, E = I;
    }
    if (_.done) return n(
      d,
      E
    ), Q && nn(d, D), C;
    if (E === null) {
      for (; !_.done; D++, _ = f.next()) _ = p(d, _.value, w), _ !== null && (c = i(_, c, D), S === null ? C = _ : S.sibling = _, S = _);
      return Q && nn(d, D), C;
    }
    for (E = r(d, E); !_.done; D++, _ = f.next()) _ = y(E, d, D, _.value, w), _ !== null && (e && _.alternate !== null && E.delete(_.key === null ? D : _.key), c = i(_, c, D), S === null ? C = _ : S.sibling = _, S = _);
    return e && E.forEach(function(te) {
      return t(d, te);
    }), Q && nn(d, D), C;
  }
  function T(d, c, f, w) {
    if (typeof f == "object" && f !== null && f.type === Nn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case dl:
          e: {
            for (var C = f.key, S = c; S !== null; ) {
              if (S.key === C) {
                if (C = f.type, C === Nn) {
                  if (S.tag === 7) {
                    n(d, S.sibling), c = l(S, f.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (S.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Mt && ua(C) === S.type) {
                  n(d, S.sibling), c = l(S, f.props), c.ref = pr(d, S, f), c.return = d, d = c;
                  break e;
                }
                n(d, S);
                break;
              } else t(d, S);
              S = S.sibling;
            }
            f.type === Nn ? (c = an(f.props.children, d.mode, w, f.key), c.return = d, d = c) : (w = Ul(f.type, f.key, f.props, null, d.mode, w), w.ref = pr(d, c, f), w.return = d, d = w);
          }
          return o(d);
        case En:
          e: {
            for (S = f.key; c !== null; ) {
              if (c.key === S) if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                n(d, c.sibling), c = l(c, f.children || []), c.return = d, d = c;
                break e;
              } else {
                n(d, c);
                break;
              }
              else t(d, c);
              c = c.sibling;
            }
            c = mo(f, d.mode, w), c.return = d, d = c;
          }
          return o(d);
        case Mt:
          return S = f._init, T(d, c, S(f._payload), w);
      }
      if (yr(f)) return k(d, c, f, w);
      if (ur(f)) return x(d, c, f, w);
      kl(d, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(d, c.sibling), c = l(c, f), c.return = d, d = c) : (n(d, c), c = ho(f, d.mode, w), c.return = d, d = c), o(d)) : n(d, c);
  }
  return T;
}
var Kn = ad(!0), cd = ad(!1), ti = en(null), ni = null, In = null, Bs = null;
function Us() {
  Bs = In = ni = null;
}
function $s(e) {
  var t = ti.current;
  W(ti), e._currentValue = t;
}
function Go(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function $n(e, t) {
  ni = e, Bs = In = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Re = !0), e.firstContext = null);
}
function Qe(e) {
  var t = e._currentValue;
  if (Bs !== e) if (e = { context: e, memoizedValue: t, next: null }, In === null) {
    if (ni === null) throw Error(R(308));
    In = e, ni.dependencies = { lanes: 0, firstContext: e };
  } else In = In.next = e;
  return t;
}
var on = null;
function Hs(e) {
  on === null ? on = [e] : on.push(e);
}
function dd(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Hs(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Nt(e, r);
}
function Nt(e, t) {
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
function kt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Nt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Hs(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Nt(e, n);
}
function Ol(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ts(e, n);
  }
}
function aa(e, t) {
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
  zt = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s, a = u.next;
    u.next = null, o === null ? i = a : o.next = a, o = u;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, s = h.lastBaseUpdate, s !== o && (s === null ? h.firstBaseUpdate = a : s.next = a, h.lastBaseUpdate = u));
  }
  if (i !== null) {
    var p = l.baseState;
    o = 0, h = a = u = null, s = i;
    do {
      var v = s.lane, y = s.eventTime;
      if ((r & v) === v) {
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
              p = Y({}, p, v);
              break e;
            case 2:
              zt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [s] : v.push(s));
      } else y = { eventTime: y, lane: v, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, h === null ? (a = h = y, u = p) : h = h.next = y, o |= v;
      if (s = s.next, s === null) {
        if (s = l.shared.pending, s === null) break;
        v = s, s = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (u = p), l.baseState = u, l.firstBaseUpdate = a, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    pn |= o, e.lanes = o, e.memoizedState = p;
  }
}
function ca(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(R(191, l));
      l.call(r);
    }
  }
}
var rl = {}, ft = en(rl), Wr = en(rl), br = en(rl);
function sn(e) {
  if (e === rl) throw Error(R(174));
  return e;
}
function Ws(e, t) {
  switch (H(br, t), H(Wr, e), H(ft, rl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Po(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Po(t, e);
  }
  W(ft), H(ft, t);
}
function Xn() {
  W(ft), W(Wr), W(br);
}
function pd(e) {
  sn(br.current);
  var t = sn(ft.current), n = Po(t, e.type);
  t !== n && (H(Wr, e), H(ft, n));
}
function bs(e) {
  Wr.current === e && (W(ft), W(Wr));
}
var K = en(0);
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
var Ml = Rt.ReactCurrentDispatcher, uo = Rt.ReactCurrentBatchConfig, fn = 0, X = null, re = null, oe = null, ii = !1, Dr = !1, Qr = 0, Uh = 0;
function ge() {
  throw Error(R(321));
}
function Ks(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!tt(e[n], t[n])) return !1;
  return !0;
}
function Xs(e, t, n, r, l, i) {
  if (fn = i, X = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ml.current = e === null || e.memoizedState === null ? Wh : bh, e = n(r, l), Dr) {
    i = 0;
    do {
      if (Dr = !1, Qr = 0, 25 <= i) throw Error(R(301));
      i += 1, oe = re = null, t.updateQueue = null, Ml.current = Qh, e = n(r, l);
    } while (Dr);
  }
  if (Ml.current = oi, t = re !== null && re.next !== null, fn = 0, oe = re = X = null, ii = !1, t) throw Error(R(300));
  return e;
}
function Ys() {
  var e = Qr !== 0;
  return Qr = 0, e;
}
function at() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return oe === null ? X.memoizedState = oe = e : oe = oe.next = e, oe;
}
function Ke() {
  if (re === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = oe === null ? X.memoizedState : oe.next;
  if (t !== null) oe = t, re = e;
  else {
    if (e === null) throw Error(R(310));
    re = e, e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }, oe === null ? X.memoizedState = oe = e : oe = oe.next = e;
  }
  return oe;
}
function Kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ao(e) {
  var t = Ke(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = re, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = i.next, i.next = o;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var s = o = null, u = null, a = i;
    do {
      var h = a.lane;
      if ((fn & h) === h) u !== null && (u = u.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var p = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        u === null ? (s = u = p, o = r) : u = u.next = p, X.lanes |= h, pn |= h;
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? o = r : u.next = s, tt(r, t.memoizedState) || (Re = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, X.lanes |= i, pn |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function co(e) {
  var t = Ke(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    tt(i, t.memoizedState) || (Re = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function hd() {
}
function md(e, t) {
  var n = X, r = Ke(), l = t(), i = !tt(r.memoizedState, l);
  if (i && (r.memoizedState = l, Re = !0), r = r.queue, Gs(yd.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || oe !== null && oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Xr(9, gd.bind(null, n, r, l, t), void 0, null), ue === null) throw Error(R(349));
    fn & 30 || vd(n, t, l);
  }
  return l;
}
function vd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = X.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, X.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function gd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, wd(t) && xd(e);
}
function yd(e, t, n) {
  return n(function() {
    wd(t) && xd(e);
  });
}
function wd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !tt(e, n);
  } catch {
    return !0;
  }
}
function xd(e) {
  var t = Nt(e, 1);
  t !== null && et(t, e, 1, -1);
}
function da(e) {
  var t = at();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Kr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Vh.bind(null, X, e), [t.memoizedState, e];
}
function Xr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = X.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, X.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Sd() {
  return Ke().memoizedState;
}
function zl(e, t, n, r) {
  var l = at();
  X.flags |= e, l.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ni(e, t, n, r) {
  var l = Ke();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (re !== null) {
    var o = re.memoizedState;
    if (i = o.destroy, r !== null && Ks(r, o.deps)) {
      l.memoizedState = Xr(t, n, i, r);
      return;
    }
  }
  X.flags |= e, l.memoizedState = Xr(1 | t, n, i, r);
}
function fa(e, t) {
  return zl(8390656, 8, e, t);
}
function Gs(e, t) {
  return Ni(2048, 8, e, t);
}
function kd(e, t) {
  return Ni(4, 2, e, t);
}
function Cd(e, t) {
  return Ni(4, 4, e, t);
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
  return n = n != null ? n.concat([e]) : null, Ni(4, 4, Ed.bind(null, t, e), n);
}
function Js() {
}
function Dd(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ks(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Rd(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ks(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Td(e, t, n) {
  return fn & 21 ? (tt(n, t) || (n = Ic(), X.lanes |= n, pn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Re = !0), e.memoizedState = n);
}
function $h(e, t) {
  var n = U;
  U = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = uo.transition;
  uo.transition = {};
  try {
    e(!1), t();
  } finally {
    U = n, uo.transition = r;
  }
}
function jd() {
  return Ke().memoizedState;
}
function Hh(e, t, n) {
  var r = Xt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Pd(e)) _d(t, n);
  else if (n = dd(e, t, n, r), n !== null) {
    var l = ke();
    et(n, e, r, l), Ld(n, t, r);
  }
}
function Vh(e, t, n) {
  var r = Xt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Pd(e)) _d(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, s = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = s, tt(s, o)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Hs(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = dd(e, t, l, r), n !== null && (l = ke(), et(n, e, r, l), Ld(n, t, r));
  }
}
function Pd(e) {
  var t = e.alternate;
  return e === X || t !== null && t === X;
}
function _d(e, t) {
  Dr = ii = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ld(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ts(e, n);
  }
}
var oi = { readContext: Qe, useCallback: ge, useContext: ge, useEffect: ge, useImperativeHandle: ge, useInsertionEffect: ge, useLayoutEffect: ge, useMemo: ge, useReducer: ge, useRef: ge, useState: ge, useDebugValue: ge, useDeferredValue: ge, useTransition: ge, useMutableSource: ge, useSyncExternalStore: ge, useId: ge, unstable_isNewReconciler: !1 }, Wh = { readContext: Qe, useCallback: function(e, t) {
  return at().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Qe, useEffect: fa, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, zl(
    4194308,
    4,
    Ed.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return zl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return zl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = at();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = at();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Hh.bind(null, X, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = at();
  return e = { current: e }, t.memoizedState = e;
}, useState: da, useDebugValue: Js, useDeferredValue: function(e) {
  return at().memoizedState = e;
}, useTransition: function() {
  var e = da(!1), t = e[0];
  return e = $h.bind(null, e[1]), at().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = X, l = at();
  if (Q) {
    if (n === void 0) throw Error(R(407));
    n = n();
  } else {
    if (n = t(), ue === null) throw Error(R(349));
    fn & 30 || vd(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, fa(yd.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Xr(9, gd.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = at(), t = ue.identifierPrefix;
  if (Q) {
    var n = St, r = xt;
    n = (r & ~(1 << 32 - qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Qr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Uh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, bh = {
  readContext: Qe,
  useCallback: Dd,
  useContext: Qe,
  useEffect: Gs,
  useImperativeHandle: Nd,
  useInsertionEffect: kd,
  useLayoutEffect: Cd,
  useMemo: Rd,
  useReducer: ao,
  useRef: Sd,
  useState: function() {
    return ao(Kr);
  },
  useDebugValue: Js,
  useDeferredValue: function(e) {
    var t = Ke();
    return Td(t, re.memoizedState, e);
  },
  useTransition: function() {
    var e = ao(Kr)[0], t = Ke().memoizedState;
    return [e, t];
  },
  useMutableSource: hd,
  useSyncExternalStore: md,
  useId: jd,
  unstable_isNewReconciler: !1
}, Qh = { readContext: Qe, useCallback: Dd, useContext: Qe, useEffect: Gs, useImperativeHandle: Nd, useInsertionEffect: kd, useLayoutEffect: Cd, useMemo: Rd, useReducer: co, useRef: Sd, useState: function() {
  return co(Kr);
}, useDebugValue: Js, useDeferredValue: function(e) {
  var t = Ke();
  return re === null ? t.memoizedState = e : Td(t, re.memoizedState, e);
}, useTransition: function() {
  var e = co(Kr)[0], t = Ke().memoizedState;
  return [e, t];
}, useMutableSource: hd, useSyncExternalStore: md, useId: jd, unstable_isNewReconciler: !1 };
function Ge(e, t) {
  if (e && e.defaultProps) {
    t = Y({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Jo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Di = { isMounted: function(e) {
  return (e = e._reactInternals) ? vn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ke(), l = Xt(e), i = kt(r, l);
  i.payload = t, n != null && (i.callback = n), t = Qt(e, i, l), t !== null && (et(t, e, l, r), Ol(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ke(), l = Xt(e), i = kt(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Qt(e, i, l), t !== null && (et(t, e, l, r), Ol(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ke(), r = Xt(e), l = kt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Qt(e, l, r), t !== null && (et(t, e, r, n), Ol(t, e, r));
} };
function pa(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Ur(n, r) || !Ur(l, i) : !0;
}
function Id(e, t, n) {
  var r = !1, l = Jt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Qe(i) : (l = je(t) ? cn : xe.current, r = t.contextTypes, i = (r = r != null) ? bn(e, l) : Jt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Di, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function ha(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Di.enqueueReplaceState(t, t.state, null);
}
function Zo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Vs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Qe(i) : (i = je(t) ? cn : xe.current, l.context = bn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Jo(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Di.enqueueReplaceState(l, l.state, null), ri(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Yn(e, t) {
  try {
    var n = "", r = t;
    do
      n += xp(r), r = r.return;
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
var Kh = typeof WeakMap == "function" ? WeakMap : Map;
function Od(e, t, n) {
  n = kt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ui || (ui = !0, as = r), qo(e, t);
  }, n;
}
function Md(e, t, n) {
  n = kt(-1, n), n.tag = 3;
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
function ma(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Kh();
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = kt(-1, 1), t.tag = 2, Qt(n, t, 1))), n.lanes |= 1), e);
}
var Xh = Rt.ReactCurrentOwner, Re = !1;
function Se(e, t, n, r) {
  t.child = e === null ? cd(t, null, n, r) : Kn(t, e.child, n, r);
}
function ya(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return $n(t, l), r = Xs(e, t, n, r, i, l), n = Ys(), e !== null && !Re ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Dt(e, t, l)) : (Q && n && zs(t), t.flags |= 1, Se(e, t, r, l), t.child);
}
function wa(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !iu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, zd(e, t, i, r, l)) : (e = Ul(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ur, n(o, r) && e.ref === t.ref) return Dt(e, t, l);
  }
  return t.flags |= 1, e = Yt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function zd(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ur(i, r) && e.ref === t.ref) if (Re = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Re = !0);
    else return t.lanes = e.lanes, Dt(e, t, l);
  }
  return es(e, t, n, r, l);
}
function Ad(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, H(Mn, Oe), Oe |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, H(Mn, Oe), Oe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, H(Mn, Oe), Oe |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, H(Mn, Oe), Oe |= r;
  return Se(e, t, l, n), t.child;
}
function Fd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function es(e, t, n, r, l) {
  var i = je(n) ? cn : xe.current;
  return i = bn(t, i), $n(t, l), n = Xs(e, t, n, r, i, l), r = Ys(), e !== null && !Re ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Dt(e, t, l)) : (Q && r && zs(t), t.flags |= 1, Se(e, t, n, l), t.child);
}
function xa(e, t, n, r, l) {
  if (je(n)) {
    var i = !0;
    Zl(t);
  } else i = !1;
  if ($n(t, l), t.stateNode === null) Al(e, t), Id(t, n, r), Zo(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var u = o.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Qe(a) : (a = je(n) ? cn : xe.current, a = bn(t, a));
    var h = n.getDerivedStateFromProps, p = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    p || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || u !== a) && ha(t, o, r, a), zt = !1;
    var v = t.memoizedState;
    o.state = v, ri(t, r, o, l), u = t.memoizedState, s !== r || v !== u || Te.current || zt ? (typeof h == "function" && (Jo(t, n, h, r), u = t.memoizedState), (s = zt || pa(t, n, s, r, v, u, a)) ? (p || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = a, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, fd(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : Ge(t.type, s), o.props = a, p = t.pendingProps, v = o.context, u = n.contextType, typeof u == "object" && u !== null ? u = Qe(u) : (u = je(n) ? cn : xe.current, u = bn(t, u));
    var y = n.getDerivedStateFromProps;
    (h = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== p || v !== u) && ha(t, o, r, u), zt = !1, v = t.memoizedState, o.state = v, ri(t, r, o, l);
    var k = t.memoizedState;
    s !== p || v !== k || Te.current || zt ? (typeof y == "function" && (Jo(t, n, y, r), k = t.memoizedState), (a = zt || pa(t, n, a, r, v, k, u) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k, u), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k, u)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), o.props = r, o.state = k, o.context = u, r = a) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ts(e, t, n, r, i, l);
}
function ts(e, t, n, r, l, i) {
  Fd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ia(t, n, !1), Dt(e, t, i);
  r = t.stateNode, Xh.current = t;
  var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Kn(t, e.child, null, i), t.child = Kn(t, null, s, i)) : Se(e, t, s, i), t.memoizedState = r.state, l && ia(t, n, !0), t.child;
}
function Bd(e) {
  var t = e.stateNode;
  t.pendingContext ? la(e, t.pendingContext, t.pendingContext !== t.context) : t.context && la(e, t.context, !1), Ws(e, t.containerInfo);
}
function Sa(e, t, n, r, l) {
  return Qn(), Fs(l), t.flags |= 256, Se(e, t, n, r), t.child;
}
var ns = { dehydrated: null, treeContext: null, retryLane: 0 };
function rs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ud(e, t, n) {
  var r = t.pendingProps, l = K.current, i = !1, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), H(K, l & 1), e === null)
    return Yo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = ji(o, r, 0, null), e = an(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = rs(n), t.memoizedState = ns, e) : Zs(t, o));
  if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return Yh(e, t, o, r, s, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, s = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Yt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? i = Yt(s, i) : (i = an(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? rs(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = ns, r;
  }
  return i = e.child, e = i.sibling, r = Yt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Zs(e, t) {
  return t = ji({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Cl(e, t, n, r) {
  return r !== null && Fs(r), Kn(t, e.child, null, n), e = Zs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Yh(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = fo(Error(R(422))), Cl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = ji({ mode: "visible", children: r.children }, l, 0, null), i = an(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Kn(t, e.child, null, o), t.child.memoizedState = rs(o), t.memoizedState = ns, i);
  if (!(t.mode & 1)) return Cl(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(R(419)), r = fo(i, r, void 0), Cl(e, t, o, r);
  }
  if (s = (o & e.childLanes) !== 0, Re || s) {
    if (r = ue, r !== null) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Nt(e, l), et(r, e, l, -1));
    }
    return lu(), r = fo(Error(R(421))), Cl(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = um.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Me = bt(l.nextSibling), ze = t, Q = !0, Ze = null, e !== null && (He[Ve++] = xt, He[Ve++] = St, He[Ve++] = dn, xt = e.id, St = e.overflow, dn = t), t = Zs(t, r.children), t.flags |= 4096, t);
}
function ka(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Go(e.return, t, n);
}
function po(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function $d(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (Se(e, t, r.children, n), r = K.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
  if (H(K, r), !(t.mode & 1)) t.memoizedState = null;
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
function Al(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Dt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), pn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Yt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Gh(e, t, n) {
  switch (t.tag) {
    case 3:
      Bd(t), Qn();
      break;
    case 5:
      pd(t);
      break;
    case 1:
      je(t.type) && Zl(t);
      break;
    case 4:
      Ws(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      H(ti, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (H(K, K.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ud(e, t, n) : (H(K, K.current & 1), e = Dt(e, t, n), e !== null ? e.sibling : null);
      H(K, K.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return $d(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), H(K, K.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ad(e, t, n);
  }
  return Dt(e, t, n);
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
    e = t.stateNode, sn(ft.current);
    var i = null;
    switch (n) {
      case "input":
        l = Do(e, l), r = Do(e, r), i = [];
        break;
      case "select":
        l = Y({}, l, { value: void 0 }), r = Y({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = jo(e, l), r = jo(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Gl);
    }
    _o(n, r);
    var o;
    n = null;
    for (a in l) if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null) if (a === "style") {
      var s = l[a];
      for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Ir.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (s = l != null ? l[a] : void 0, r.hasOwnProperty(a) && u !== s && (u != null || s != null)) if (a === "style") if (s) {
        for (o in s) !s.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in u) u.hasOwnProperty(o) && s[o] !== u[o] && (n || (n = {}), n[o] = u[o]);
      } else n || (i || (i = []), i.push(
        a,
        n
      )), n = u;
      else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (i = i || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Ir.hasOwnProperty(a) ? (u != null && a === "onScroll" && V("scroll", e), i || s === u || (i = [])) : (i = i || []).push(a, u));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Wd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function hr(e, t) {
  if (!Q) switch (e.tailMode) {
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
function ye(e) {
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
      return ye(t), null;
    case 1:
      return je(t.type) && Jl(), ye(t), null;
    case 3:
      return r = t.stateNode, Xn(), W(Te), W(xe), Qs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Sl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ze !== null && (fs(Ze), Ze = null))), ls(e, t), ye(t), null;
    case 5:
      bs(t);
      var l = sn(br.current);
      if (n = t.type, e !== null && t.stateNode != null) Vd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return ye(t), null;
        }
        if (e = sn(ft.current), Sl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[ct] = t, r[Vr] = i, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < xr.length; l++) V(xr[l], r);
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
              _u(r, i), V("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, V("invalid", r);
              break;
            case "textarea":
              Iu(r, i), V("invalid", r);
          }
          _o(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var s = i[o];
            o === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && xl(r.textContent, s, e), l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && xl(
              r.textContent,
              s,
              e
            ), l = ["children", "" + s]) : Ir.hasOwnProperty(o) && s != null && o === "onScroll" && V("scroll", r);
          }
          switch (n) {
            case "input":
              fl(r), Lu(r, i, !0);
              break;
            case "textarea":
              fl(r), Ou(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Gl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = yc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[ct] = t, e[Vr] = r, Hd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Lo(n, r), n) {
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
                for (l = 0; l < xr.length; l++) V(xr[l], e);
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
                _u(e, r), l = Do(e, r), V("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Y({}, r, { value: void 0 }), V("invalid", e);
                break;
              case "textarea":
                Iu(e, r), l = jo(e, r), V("invalid", e);
                break;
              default:
                l = r;
            }
            _o(n, l), s = l;
            for (i in s) if (s.hasOwnProperty(i)) {
              var u = s[i];
              i === "style" ? Sc(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && wc(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Or(e, u) : typeof u == "number" && Or(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ir.hasOwnProperty(i) ? u != null && i === "onScroll" && V("scroll", e) : u != null && ks(e, i, u, o));
            }
            switch (n) {
              case "input":
                fl(e), Lu(e, r, !1);
                break;
              case "textarea":
                fl(e), Ou(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Gt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? An(e, !!r.multiple, i, !1) : r.defaultValue != null && An(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Gl);
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
      return ye(t), null;
    case 6:
      if (e && t.stateNode != null) Wd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (n = sn(br.current), sn(ft.current), Sl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ct] = t, (i = r.nodeValue !== n) && (e = ze, e !== null)) switch (e.tag) {
            case 3:
              xl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && xl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ct] = t, t.stateNode = r;
      }
      return ye(t), null;
    case 13:
      if (W(K), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Q && Me !== null && t.mode & 1 && !(t.flags & 128)) ud(), Qn(), t.flags |= 98560, i = !1;
        else if (i = Sl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(R(317));
            i[ct] = t;
          } else Qn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ye(t), i = !1;
        } else Ze !== null && (fs(Ze), Ze = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || K.current & 1 ? ie === 0 && (ie = 3) : lu())), t.updateQueue !== null && (t.flags |= 4), ye(t), null);
    case 4:
      return Xn(), ls(e, t), e === null && $r(t.stateNode.containerInfo), ye(t), null;
    case 10:
      return $s(t.type._context), ye(t), null;
    case 17:
      return je(t.type) && Jl(), ye(t), null;
    case 19:
      if (W(K), i = t.memoizedState, i === null) return ye(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) hr(i, !1);
      else {
        if (ie !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = li(e), o !== null) {
            for (t.flags |= 128, hr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return H(K, K.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && J() > Gn && (t.flags |= 128, r = !0, hr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = li(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), hr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !Q) return ye(t), null;
        } else 2 * J() - i.renderingStartTime > Gn && n !== 1073741824 && (t.flags |= 128, r = !0, hr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = J(), t.sibling = null, n = K.current, H(K, r ? n & 1 | 2 : n & 1), t) : (ye(t), null);
    case 22:
    case 23:
      return ru(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Oe & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ye(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Zh(e, t) {
  switch (As(t), t.tag) {
    case 1:
      return je(t.type) && Jl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Xn(), W(Te), W(xe), Qs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return bs(t), null;
    case 13:
      if (W(K), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(R(340));
        Qn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return W(K), null;
    case 4:
      return Xn(), null;
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
var El = !1, we = !1, qh = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function On(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    G(e, t, r);
  }
  else n.current = null;
}
function is(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var Ca = !1;
function em(e, t) {
  if (Ho = Kl, e = Yc(), Ms(e)) {
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
        var o = 0, s = -1, u = -1, a = 0, h = 0, p = e, v = null;
        t: for (; ; ) {
          for (var y; p !== n || l !== 0 && p.nodeType !== 3 || (s = o + l), p !== i || r !== 0 && p.nodeType !== 3 || (u = o + r), p.nodeType === 3 && (o += p.nodeValue.length), (y = p.firstChild) !== null; )
            v = p, p = y;
          for (; ; ) {
            if (p === e) break t;
            if (v === n && ++a === l && (s = o), v === i && ++h === r && (u = o), (y = p.nextSibling) !== null) break;
            p = v, v = p.parentNode;
          }
          p = y;
        }
        n = s === -1 || u === -1 ? null : { start: s, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Vo = { focusedElem: e, selectionRange: n }, Kl = !1, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
  else for (; P !== null; ) {
    t = P;
    try {
      var k = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (k !== null) {
            var x = k.memoizedProps, T = k.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Ge(t.type, x), T);
            d.__reactInternalSnapshotBeforeUpdate = c;
          }
          break;
        case 3:
          var f = t.stateNode.containerInfo;
          f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
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
      G(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, P = e;
      break;
    }
    P = t.return;
  }
  return k = Ca, Ca = !1, k;
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
function bd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, bd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ct], delete t[Vr], delete t[Qo], delete t[zh], delete t[Ah])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Qd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ea(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qd(e.return)) return null;
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
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Gl));
  else if (r !== 4 && (e = e.child, e !== null)) for (ss(e, t, n), e = e.sibling; e !== null; ) ss(e, t, n), e = e.sibling;
}
function us(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (us(e, t, n), e = e.sibling; e !== null; ) us(e, t, n), e = e.sibling;
}
var de = null, Je = !1;
function Ot(e, t, n) {
  for (n = n.child; n !== null; ) Kd(e, t, n), n = n.sibling;
}
function Kd(e, t, n) {
  if (dt && typeof dt.onCommitFiberUnmount == "function") try {
    dt.onCommitFiberUnmount(wi, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      we || On(n, t);
    case 6:
      var r = de, l = Je;
      de = null, Ot(e, t, n), de = r, Je = l, de !== null && (Je ? (e = de, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : de.removeChild(n.stateNode));
      break;
    case 18:
      de !== null && (Je ? (e = de, n = n.stateNode, e.nodeType === 8 ? io(e.parentNode, n) : e.nodeType === 1 && io(e, n), Fr(e)) : io(de, n.stateNode));
      break;
    case 4:
      r = de, l = Je, de = n.stateNode.containerInfo, Je = !0, Ot(e, t, n), de = r, Je = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!we && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && is(n, t, o), l = l.next;
        } while (l !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (!we && (On(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        G(n, t, s);
      }
      Ot(e, t, n);
      break;
    case 21:
      Ot(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (we = (r = we) || n.memoizedState !== null, Ot(e, t, n), we = r) : Ot(e, t, n);
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
      var i = e, o = t, s = o;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            de = s.stateNode, Je = !1;
            break e;
          case 3:
            de = s.stateNode.containerInfo, Je = !0;
            break e;
          case 4:
            de = s.stateNode.containerInfo, Je = !0;
            break e;
        }
        s = s.return;
      }
      if (de === null) throw Error(R(160));
      Kd(i, o, l), de = null, Je = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (a) {
      G(l, t, a);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Xd(t, e), t = t.sibling;
}
function Xd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ye(t, e), ut(e), r & 4) {
        try {
          Rr(3, e, e.return), Ri(3, e);
        } catch (x) {
          G(e, e.return, x);
        }
        try {
          Rr(5, e, e.return);
        } catch (x) {
          G(e, e.return, x);
        }
      }
      break;
    case 1:
      Ye(t, e), ut(e), r & 512 && n !== null && On(n, n.return);
      break;
    case 5:
      if (Ye(t, e), ut(e), r & 512 && n !== null && On(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Or(l, "");
        } catch (x) {
          G(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, s = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          s === "input" && i.type === "radio" && i.name != null && vc(l, i), Lo(s, o);
          var a = Lo(s, i);
          for (o = 0; o < u.length; o += 2) {
            var h = u[o], p = u[o + 1];
            h === "style" ? Sc(l, p) : h === "dangerouslySetInnerHTML" ? wc(l, p) : h === "children" ? Or(l, p) : ks(l, h, p, a);
          }
          switch (s) {
            case "input":
              Ro(l, i);
              break;
            case "textarea":
              gc(l, i);
              break;
            case "select":
              var v = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var y = i.value;
              y != null ? An(l, !!i.multiple, y, !1) : v !== !!i.multiple && (i.defaultValue != null ? An(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : An(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[Vr] = i;
        } catch (x) {
          G(e, e.return, x);
        }
      }
      break;
    case 6:
      if (Ye(t, e), ut(e), r & 4) {
        if (e.stateNode === null) throw Error(R(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (x) {
          G(e, e.return, x);
        }
      }
      break;
    case 3:
      if (Ye(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Fr(t.containerInfo);
      } catch (x) {
        G(e, e.return, x);
      }
      break;
    case 4:
      Ye(t, e), ut(e);
      break;
    case 13:
      Ye(t, e), ut(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (tu = J())), r & 4 && Na(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (we = (a = we) || h, Ye(t, e), we = a) : Ye(t, e), ut(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1) for (P = e, h = e.child; h !== null; ) {
          for (p = P = h; P !== null; ) {
            switch (v = P, y = v.child, v.tag) {
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
                    G(r, n, x);
                  }
                }
                break;
              case 5:
                On(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  Ra(p);
                  continue;
                }
            }
            y !== null ? (y.return = v, P = y) : Ra(p);
          }
          h = h.sibling;
        }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                l = p.stateNode, a ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = p.stateNode, u = p.memoizedProps.style, o = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = xc("display", o));
              } catch (x) {
                G(e, e.return, x);
              }
            }
          } else if (p.tag === 6) {
            if (h === null) try {
              p.stateNode.nodeValue = a ? "" : p.memoizedProps;
            } catch (x) {
              G(e, e.return, x);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), p = p.return;
          }
          h === p && (h = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      Ye(t, e), ut(e), r & 4 && Na(e);
      break;
    case 21:
      break;
    default:
      Ye(
        t,
        e
      ), ut(e);
  }
}
function ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qd(n)) {
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
          r.flags & 32 && (Or(l, ""), r.flags &= -33);
          var i = Ea(e);
          us(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, s = Ea(e);
          ss(e, s, o);
          break;
        default:
          throw Error(R(161));
      }
    } catch (u) {
      G(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function tm(e, t, n) {
  P = e, Yd(e);
}
function Yd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || El;
      if (!o) {
        var s = l.alternate, u = s !== null && s.memoizedState !== null || we;
        s = El;
        var a = we;
        if (El = o, (we = u) && !a) for (P = l; P !== null; ) o = P, u = o.child, o.tag === 22 && o.memoizedState !== null ? Ta(l) : u !== null ? (u.return = o, P = u) : Ta(l);
        for (; i !== null; ) P = i, Yd(i), i = i.sibling;
        P = l, El = s, we = a;
      }
      Da(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, P = i) : Da(e);
  }
}
function Da(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            we || Ri(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !we) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ge(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && ca(t, i, r);
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
              ca(t, o, n);
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
                  var p = h.dehydrated;
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
            throw Error(R(163));
        }
        we || t.flags & 512 && os(t);
      } catch (v) {
        G(t, t.return, v);
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
function Ra(e) {
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
function Ta(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ri(4, t);
          } catch (u) {
            G(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              G(t, l, u);
            }
          }
          var i = t.return;
          try {
            os(t);
          } catch (u) {
            G(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            os(t);
          } catch (u) {
            G(t, o, u);
          }
      }
    } catch (u) {
      G(t, t.return, u);
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
var nm = Math.ceil, si = Rt.ReactCurrentDispatcher, qs = Rt.ReactCurrentOwner, be = Rt.ReactCurrentBatchConfig, F = 0, ue = null, ee = null, fe = 0, Oe = 0, Mn = en(0), ie = 0, Yr = null, pn = 0, Ti = 0, eu = 0, Tr = null, De = null, tu = 0, Gn = 1 / 0, yt = null, ui = !1, as = null, Kt = null, Nl = !1, $t = null, ai = 0, jr = 0, cs = null, Fl = -1, Bl = 0;
function ke() {
  return F & 6 ? J() : Fl !== -1 ? Fl : Fl = J();
}
function Xt(e) {
  return e.mode & 1 ? F & 2 && fe !== 0 ? fe & -fe : Bh.transition !== null ? (Bl === 0 && (Bl = Ic()), Bl) : (e = U, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Uc(e.type)), e) : 1;
}
function et(e, t, n, r) {
  if (50 < jr) throw jr = 0, cs = null, Error(R(185));
  el(e, n, r), (!(F & 2) || e !== ue) && (e === ue && (!(F & 2) && (Ti |= n), ie === 4 && Bt(e, fe)), Pe(e, r), n === 1 && F === 0 && !(t.mode & 1) && (Gn = J() + 500, Ei && tn()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  Bp(e, t);
  var r = Ql(e, e === ue ? fe : 0);
  if (r === 0) n !== null && Au(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Au(n), t === 1) e.tag === 0 ? Fh(ja.bind(null, e)) : id(ja.bind(null, e)), Oh(function() {
      !(F & 6) && tn();
    }), n = null;
    else {
      switch (Oc(r)) {
        case 1:
          n = Rs;
          break;
        case 4:
          n = _c;
          break;
        case 16:
          n = bl;
          break;
        case 536870912:
          n = Lc;
          break;
        default:
          n = bl;
      }
      n = rf(n, Gd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Gd(e, t) {
  if (Fl = -1, Bl = 0, F & 6) throw Error(R(327));
  var n = e.callbackNode;
  if (Hn() && e.callbackNode !== n) return null;
  var r = Ql(e, e === ue ? fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ci(e, r);
  else {
    t = r;
    var l = F;
    F |= 2;
    var i = Zd();
    (ue !== e || fe !== t) && (yt = null, Gn = J() + 500, un(e, t));
    do
      try {
        im();
        break;
      } catch (s) {
        Jd(e, s);
      }
    while (!0);
    Us(), si.current = i, F = l, ee !== null ? t = 0 : (ue = null, fe = 0, t = ie);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ao(e), l !== 0 && (r = l, t = ds(e, l))), t === 1) throw n = Yr, un(e, 0), Bt(e, r), Pe(e, J()), n;
    if (t === 6) Bt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !rm(l) && (t = ci(e, r), t === 2 && (i = Ao(e), i !== 0 && (r = i, t = ds(e, i))), t === 1)) throw n = Yr, un(e, 0), Bt(e, r), Pe(e, J()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          rn(e, De, yt);
          break;
        case 3:
          if (Bt(e, r), (r & 130023424) === r && (t = tu + 500 - J(), 10 < t)) {
            if (Ql(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ke(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = bo(rn.bind(null, e, De, yt), t);
            break;
          }
          rn(e, De, yt);
          break;
        case 4:
          if (Bt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - qe(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * nm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = bo(rn.bind(null, e, De, yt), r);
            break;
          }
          rn(e, De, yt);
          break;
        case 5:
          rn(e, De, yt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Pe(e, J()), e.callbackNode === n ? Gd.bind(null, e) : null;
}
function ds(e, t) {
  var n = Tr;
  return e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256), e = ci(e, t), e !== 2 && (t = De, De = n, t !== null && fs(t)), e;
}
function fs(e) {
  De === null ? De = e : De.push.apply(De, e);
}
function rm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!tt(i(), l)) return !1;
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
  for (t &= ~eu, t &= ~Ti, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - qe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ja(e) {
  if (F & 6) throw Error(R(327));
  Hn();
  var t = Ql(e, 0);
  if (!(t & 1)) return Pe(e, J()), null;
  var n = ci(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ao(e);
    r !== 0 && (t = r, n = ds(e, r));
  }
  if (n === 1) throw n = Yr, un(e, 0), Bt(e, t), Pe(e, J()), n;
  if (n === 6) throw Error(R(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, rn(e, De, yt), Pe(e, J()), null;
}
function nu(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (Gn = J() + 500, Ei && tn());
  }
}
function hn(e) {
  $t !== null && $t.tag === 0 && !(F & 6) && Hn();
  var t = F;
  F |= 1;
  var n = be.transition, r = U;
  try {
    if (be.transition = null, U = 1, e) return e();
  } finally {
    U = r, be.transition = n, F = t, !(F & 6) && tn();
  }
}
function ru() {
  Oe = Mn.current, W(Mn);
}
function un(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Ih(n)), ee !== null) for (n = ee.return; n !== null; ) {
    var r = n;
    switch (As(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Jl();
        break;
      case 3:
        Xn(), W(Te), W(xe), Qs();
        break;
      case 5:
        bs(r);
        break;
      case 4:
        Xn();
        break;
      case 13:
        W(K);
        break;
      case 19:
        W(K);
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
  if (ue = e, ee = e = Yt(e.current, null), fe = Oe = t, ie = 0, Yr = null, eu = Ti = pn = 0, De = Tr = null, on !== null) {
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
function Jd(e, t) {
  do {
    var n = ee;
    try {
      if (Us(), Ml.current = oi, ii) {
        for (var r = X.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ii = !1;
      }
      if (fn = 0, oe = re = X = null, Dr = !1, Qr = 0, qs.current = null, n === null || n.return === null) {
        ie = 1, Yr = t, ee = null;
        break;
      }
      e: {
        var i = e, o = n.return, s = n, u = t;
        if (t = fe, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var a = u, h = s, p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var v = h.alternate;
            v ? (h.updateQueue = v.updateQueue, h.memoizedState = v.memoizedState, h.lanes = v.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var y = va(o);
          if (y !== null) {
            y.flags &= -257, ga(y, o, s, i, t), y.mode & 1 && ma(i, a, t), t = y, u = a;
            var k = t.updateQueue;
            if (k === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(u), t.updateQueue = x;
            } else k.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              ma(i, a, t), lu();
              break e;
            }
            u = Error(R(426));
          }
        } else if (Q && s.mode & 1) {
          var T = va(o);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), ga(T, o, s, i, t), Fs(Yn(u, s));
            break e;
          }
        }
        i = u = Yn(u, s), ie !== 4 && (ie = 2), Tr === null ? Tr = [i] : Tr.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Od(i, u, t);
              aa(i, d);
              break e;
            case 1:
              s = u;
              var c = i.type, f = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Kt === null || !Kt.has(f)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Md(i, s, t);
                aa(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ef(n);
    } catch (C) {
      t = C, ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Zd() {
  var e = si.current;
  return si.current = oi, e === null ? oi : e;
}
function lu() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4), ue === null || !(pn & 268435455) && !(Ti & 268435455) || Bt(ue, fe);
}
function ci(e, t) {
  var n = F;
  F |= 2;
  var r = Zd();
  (ue !== e || fe !== t) && (yt = null, un(e, t));
  do
    try {
      lm();
      break;
    } catch (l) {
      Jd(e, l);
    }
  while (!0);
  if (Us(), F = n, si.current = r, ee !== null) throw Error(R(261));
  return ue = null, fe = 0, ie;
}
function lm() {
  for (; ee !== null; ) qd(ee);
}
function im() {
  for (; ee !== null && !Pp(); ) qd(ee);
}
function qd(e) {
  var t = nf(e.alternate, e, Oe);
  e.memoizedProps = e.pendingProps, t === null ? ef(e) : ee = t, qs.current = null;
}
function ef(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Zh(n, t), n !== null) {
        n.flags &= 32767, ee = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ie = 6, ee = null;
        return;
      }
    } else if (n = Jh(n, t, Oe), n !== null) {
      ee = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function rn(e, t, n) {
  var r = U, l = be.transition;
  try {
    be.transition = null, U = 1, om(e, t, n, r);
  } finally {
    be.transition = l, U = r;
  }
  return null;
}
function om(e, t, n, r) {
  do
    Hn();
  while ($t !== null);
  if (F & 6) throw Error(R(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(R(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Up(e, i), e === ue && (ee = ue = null, fe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Nl || (Nl = !0, rf(bl, function() {
    return Hn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = be.transition, be.transition = null;
    var o = U;
    U = 1;
    var s = F;
    F |= 4, qs.current = null, em(e, n), Xd(n, e), Dh(Vo), Kl = !!Ho, Vo = Ho = null, e.current = n, tm(n), _p(), F = s, U = o, be.transition = i;
  } else e.current = n;
  if (Nl && (Nl = !1, $t = e, ai = l), i = e.pendingLanes, i === 0 && (Kt = null), Op(n.stateNode), Pe(e, J()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ui) throw ui = !1, e = as, as = null, e;
  return ai & 1 && e.tag !== 0 && Hn(), i = e.pendingLanes, i & 1 ? e === cs ? jr++ : (jr = 0, cs = e) : jr = 0, tn(), null;
}
function Hn() {
  if ($t !== null) {
    var e = Oc(ai), t = be.transition, n = U;
    try {
      if (be.transition = null, U = 16 > e ? 16 : e, $t === null) var r = !1;
      else {
        if (e = $t, $t = null, ai = 0, F & 6) throw Error(R(331));
        var l = F;
        for (F |= 4, P = e.current; P !== null; ) {
          var i = P, o = i.child;
          if (P.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (P = a; P !== null; ) {
                  var h = P;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rr(8, h, i);
                  }
                  var p = h.child;
                  if (p !== null) p.return = h, P = p;
                  else for (; P !== null; ) {
                    h = P;
                    var v = h.sibling, y = h.return;
                    if (bd(h), h === a) {
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
              P = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, P = o;
          else e: for (; P !== null; ) {
            if (i = P, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Rr(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, P = d;
              break e;
            }
            P = i.return;
          }
        }
        var c = e.current;
        for (P = c; P !== null; ) {
          o = P;
          var f = o.child;
          if (o.subtreeFlags & 2064 && f !== null) f.return = o, P = f;
          else e: for (o = c; P !== null; ) {
            if (s = P, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Ri(9, s);
              }
            } catch (C) {
              G(s, s.return, C);
            }
            if (s === o) {
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
        if (F = l, tn(), dt && typeof dt.onPostCommitFiberRoot == "function") try {
          dt.onPostCommitFiberRoot(wi, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      U = n, be.transition = t;
    }
  }
  return !1;
}
function Pa(e, t, n) {
  t = Yn(n, t), t = Od(e, t, 1), e = Qt(e, t, 1), t = ke(), e !== null && (el(e, 1, t), Pe(e, t));
}
function G(e, t, n) {
  if (e.tag === 3) Pa(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Pa(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Kt === null || !Kt.has(r))) {
        e = Yn(n, e), e = Md(t, e, 1), t = Qt(t, e, 1), e = ke(), t !== null && (el(t, 1, e), Pe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function sm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ke(), e.pingedLanes |= e.suspendedLanes & n, ue === e && (fe & n) === n && (ie === 4 || ie === 3 && (fe & 130023424) === fe && 500 > J() - tu ? un(e, 0) : eu |= n), Pe(e, t);
}
function tf(e, t) {
  t === 0 && (e.mode & 1 ? (t = ml, ml <<= 1, !(ml & 130023424) && (ml = 4194304)) : t = 1);
  var n = ke();
  e = Nt(e, t), e !== null && (el(e, t, n), Pe(e, n));
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
      throw Error(R(314));
  }
  r !== null && r.delete(t), tf(e, n);
}
var nf;
nf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Te.current) Re = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Re = !1, Gh(e, t, n);
    Re = !!(e.flags & 131072);
  }
  else Re = !1, Q && t.flags & 1048576 && od(t, ei, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Al(e, t), e = t.pendingProps;
      var l = bn(t, xe.current);
      $n(t, n), l = Xs(null, t, r, e, l, n);
      var i = Ys();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, je(r) ? (i = !0, Zl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Vs(t), l.updater = Di, t.stateNode = l, l._reactInternals = t, Zo(t, r, e, n), t = ts(null, t, r, !0, i, n)) : (t.tag = 0, Q && i && zs(t), Se(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Al(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = dm(r), e = Ge(r, e), l) {
          case 0:
            t = es(null, t, r, e, n);
            break e;
          case 1:
            t = xa(null, t, r, e, n);
            break e;
          case 11:
            t = ya(null, t, r, e, n);
            break e;
          case 14:
            t = wa(null, t, r, Ge(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), es(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), xa(e, t, r, l, n);
    case 3:
      e: {
        if (Bd(t), e === null) throw Error(R(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, fd(e, t), ri(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = Yn(Error(R(423)), t), t = Sa(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Yn(Error(R(424)), t), t = Sa(e, t, r, n, l);
          break e;
        } else for (Me = bt(t.stateNode.containerInfo.firstChild), ze = t, Q = !0, Ze = null, n = cd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Qn(), r === l) {
            t = Dt(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return pd(t), e === null && Yo(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Wo(r, l) ? o = null : i !== null && Wo(r, i) && (t.flags |= 32), Fd(e, t), Se(e, t, o, n), t.child;
    case 6:
      return e === null && Yo(t), null;
    case 13:
      return Ud(e, t, n);
    case 4:
      return Ws(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Kn(t, null, r, n) : Se(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), ya(e, t, r, l, n);
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, H(ti, r._currentValue), r._currentValue = o, i !== null) if (tt(i.value, o)) {
          if (i.children === l.children && !Te.current) {
            t = Dt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var s = i.dependencies;
          if (s !== null) {
            o = i.child;
            for (var u = s.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = kt(-1, n & -n), u.tag = 2;
                  var a = i.updateQueue;
                  if (a !== null) {
                    a = a.shared;
                    var h = a.pending;
                    h === null ? u.next = u : (u.next = h.next, h.next = u), a.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Go(
                  i.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(R(341));
            o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Go(o, n, t), o = i.sibling;
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
        Se(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, $n(t, n), l = Qe(l), r = r(l), t.flags |= 1, Se(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ge(r, t.pendingProps), l = Ge(r.type, l), wa(e, t, r, l, n);
    case 15:
      return zd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), Al(e, t), t.tag = 1, je(r) ? (e = !0, Zl(t)) : e = !1, $n(t, n), Id(t, r, l), Zo(t, r, l, n), ts(null, t, r, !0, e, n);
    case 19:
      return $d(e, t, n);
    case 22:
      return Ad(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function rf(e, t) {
  return Pc(e, t);
}
function cm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function We(e, t, n, r) {
  return new cm(e, t, n, r);
}
function iu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function dm(e) {
  if (typeof e == "function") return iu(e) ? 1 : 0;
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
function Ul(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") iu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Nn:
      return an(n.children, l, i, t);
    case Cs:
      o = 8, l |= 8;
      break;
    case ko:
      return e = We(12, n, t, l | 2), e.elementType = ko, e.lanes = i, e;
    case Co:
      return e = We(13, n, t, l), e.elementType = Co, e.lanes = i, e;
    case Eo:
      return e = We(19, n, t, l), e.elementType = Eo, e.lanes = i, e;
    case pc:
      return ji(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case dc:
          o = 10;
          break e;
        case fc:
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
      throw Error(R(130, e == null ? e : typeof e, ""));
  }
  return t = We(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function an(e, t, n, r) {
  return e = We(7, e, r, t), e.lanes = n, e;
}
function ji(e, t, n, r) {
  return e = We(22, e, r, t), e.elementType = pc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ho(e, t, n) {
  return e = We(6, e, null, t), e.lanes = n, e;
}
function mo(e, t, n) {
  return t = We(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function fm(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xi(0), this.expirationTimes = Xi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xi(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ou(e, t, n, r, l, i, o, s, u) {
  return e = new fm(e, t, n, s, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = We(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vs(i), e;
}
function pm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: En, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function lf(e) {
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
          if (je(t.type)) {
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
    if (je(n)) return ld(e, n, t);
  }
  return t;
}
function of(e, t, n, r, l, i, o, s, u) {
  return e = ou(n, r, !0, e, l, i, o, s, u), e.context = lf(null), n = e.current, r = ke(), l = Xt(n), i = kt(r, l), i.callback = t ?? null, Qt(n, i, l), e.current.lanes = l, el(e, l, r), Pe(e, r), e;
}
function Pi(e, t, n, r) {
  var l = t.current, i = ke(), o = Xt(l);
  return n = lf(n), t.context === null ? t.context = n : t.pendingContext = n, t = kt(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qt(l, t, o), e !== null && (et(e, l, o, i), Ol(e, l, o)), o;
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
function _a(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function su(e, t) {
  _a(e, t), (e = e.alternate) && _a(e, t);
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
_i.prototype.render = uu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Pi(e, t, null, null);
};
_i.prototype.unmount = uu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function() {
      Pi(null, e, null, null);
    }), t[Et] = null;
  }
};
function _i(e) {
  this._internalRoot = e;
}
_i.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ac();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++) ;
    Ft.splice(n, 0, e), n === 0 && Bc(e);
  }
};
function au(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Li(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function La() {
}
function mm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = di(o);
        i.call(a);
      };
    }
    var o = of(t, r, e, 0, null, !1, !1, "", La);
    return e._reactRootContainer = o, e[Et] = o.current, $r(e.nodeType === 8 ? e.parentNode : e), hn(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var a = di(u);
      s.call(a);
    };
  }
  var u = ou(e, 0, !1, null, null, !1, !1, "", La);
  return e._reactRootContainer = u, e[Et] = u.current, $r(e.nodeType === 8 ? e.parentNode : e), hn(function() {
    Pi(t, u, n, r);
  }), u;
}
function Ii(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function() {
        var u = di(o);
        s.call(u);
      };
    }
    Pi(t, o, e, l);
  } else o = mm(n, t, e, l, r);
  return di(o);
}
Mc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wr(t.pendingLanes);
        n !== 0 && (Ts(t, n | 1), Pe(t, J()), !(F & 6) && (Gn = J() + 500, tn()));
      }
      break;
    case 13:
      hn(function() {
        var r = Nt(e, 1);
        if (r !== null) {
          var l = ke();
          et(r, e, 1, l);
        }
      }), su(e, 1);
  }
};
js = function(e) {
  if (e.tag === 13) {
    var t = Nt(e, 134217728);
    if (t !== null) {
      var n = ke();
      et(t, e, 134217728, n);
    }
    su(e, 134217728);
  }
};
zc = function(e) {
  if (e.tag === 13) {
    var t = Xt(e), n = Nt(e, t);
    if (n !== null) {
      var r = ke();
      et(n, e, t, r);
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
Oo = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ro(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ci(r);
            if (!l) throw Error(R(90));
            mc(r), Ro(r, l);
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
var vm = { usingClientEntryPoint: !1, Events: [nl, jn, Ci, kc, Cc, nu] }, mr = { findFiberByHostInstance: ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gm = { bundleType: mr.bundleType, version: mr.version, rendererPackageName: mr.rendererPackageName, rendererConfig: mr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Rt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Tc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: mr.findFiberByHostInstance || hm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Dl.isDisabled && Dl.supportsFiber) try {
    wi = Dl.inject(gm), dt = Dl;
  } catch {
  }
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vm;
Fe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!au(t)) throw Error(R(200));
  return pm(e, t, null, n);
};
Fe.createRoot = function(e, t) {
  if (!au(e)) throw Error(R(299));
  var n = !1, r = "", l = sf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ou(e, 1, !1, null, null, n, !1, r, l), e[Et] = t.current, $r(e.nodeType === 8 ? e.parentNode : e), new uu(t);
};
Fe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","), Error(R(268, e)));
  return e = Tc(t), e = e === null ? null : e.stateNode, e;
};
Fe.flushSync = function(e) {
  return hn(e);
};
Fe.hydrate = function(e, t, n) {
  if (!Li(t)) throw Error(R(200));
  return Ii(null, e, t, !0, n);
};
Fe.hydrateRoot = function(e, t, n) {
  if (!au(e)) throw Error(R(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = sf;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = of(t, null, e, 1, n ?? null, l, !1, i, o), e[Et] = t.current, $r(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new _i(t);
};
Fe.render = function(e, t, n) {
  if (!Li(t)) throw Error(R(200));
  return Ii(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function(e) {
  if (!Li(e)) throw Error(R(40));
  return e._reactRootContainer ? (hn(function() {
    Ii(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Et] = null;
    });
  }), !0) : !1;
};
Fe.unstable_batchedUpdates = nu;
Fe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Li(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Ii(e, t, n, !1, r);
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
var zn = sc.exports, Ia = zn;
xo.createRoot = Ia.createRoot, xo.hydrateRoot = Ia.hydrateRoot;
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
const Oi = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function er(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function cu(e) {
  return "nodeType" in e;
}
function Ne(e) {
  var t, n;
  return e ? er(e) ? e : cu(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function du(e) {
  const {
    Document: t
  } = Ne(e);
  return e instanceof t;
}
function ll(e) {
  return er(e) ? !1 : e instanceof Ne(e).HTMLElement;
}
function af(e) {
  return e instanceof Ne(e).SVGElement;
}
function tr(e) {
  return e ? er(e) ? e.document : cu(e) ? du(e) ? e : ll(e) || af(e) ? e.ownerDocument : document : document : document;
}
const nt = Oi ? g.useLayoutEffect : g.useEffect;
function Mi(e) {
  const t = g.useRef(e);
  return nt(() => {
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
  return nt(() => {
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
function cf(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
      r[l - 1] = arguments[l];
    return r.reduce((i, o) => {
      const s = Object.entries(o);
      for (const [u, a] of s) {
        const h = i[u];
        h != null && (i[u] = h + e * a);
      }
      return i;
    }, {
      ...t
    });
  };
}
const Vn = /* @__PURE__ */ cf(1), Jr = /* @__PURE__ */ cf(-1);
function xm(e) {
  return "clientX" in e && "clientY" in e;
}
function zi(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Ne(e.target);
  return t && e instanceof t;
}
function Sm(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Ne(e.target);
  return t && e instanceof t;
}
function hi(e) {
  if (Sm(e)) {
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
  return xm(e) ? {
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
}), Oa = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function km(e) {
  return e.matches(Oa) ? e : e.querySelector(Oa);
}
const Cm = {
  display: "none"
};
function Em(e) {
  let {
    id: t,
    value: n
  } = e;
  return b.createElement("div", {
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
  return b.createElement("div", {
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
      event: i
    } = r;
    e.forEach((o) => {
      var s;
      return (s = o[l]) == null ? void 0 : s.call(o, i);
    });
  }, [e]), t];
}
const jm = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Pm = {
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
function _m(e) {
  let {
    announcements: t = Pm,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: l = jm
  } = e;
  const {
    announce: i,
    announcement: o
  } = Dm(), s = ol("DndLiveRegion"), [u, a] = g.useState(!1);
  if (g.useEffect(() => {
    a(!0);
  }, []), Rm(g.useMemo(() => ({
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
  }), [i, t])), !u)
    return null;
  const h = b.createElement(b.Fragment, null, b.createElement(Em, {
    id: r,
    value: l.draggable
  }), b.createElement(Nm, {
    id: s,
    announcement: o
  }));
  return n ? zn.createPortal(h, n) : h;
}
var le;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(le || (le = {}));
function mi() {
}
function Ma(e, t) {
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
const rt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Im(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Om(e, t) {
  const n = hi(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
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
  return n - r;
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
  return r - n;
}
function za(e) {
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
  const l = za(t), i = [];
  for (const o of r) {
    const {
      id: s
    } = o, u = n.get(s);
    if (u) {
      const a = za(u), h = l.reduce((v, y, k) => v + Im(a[k], y), 0), p = Number((h / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: o,
          value: p
        }
      });
    }
  }
  return i.sort(Mm);
};
function Am(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), l = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), o = l - r, s = i - n;
  if (r < l && n < i) {
    const u = t.width * t.height, a = e.width * e.height, h = o * s, p = h / (u + a - h);
    return Number(p.toFixed(4));
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
  for (const i of r) {
    const {
      id: o
    } = i, s = n.get(o);
    if (s) {
      const u = Am(s, t);
      u > 0 && l.push({
        id: o,
        data: {
          droppableContainer: i,
          value: u
        }
      });
    }
  }
  return l.sort(zm);
};
function Bm(e, t, n) {
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
  } : rt;
}
function Um(e) {
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
const $m = /* @__PURE__ */ Um(1);
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
    scaleY: i,
    x: o,
    y: s
  } = r, u = e.left - o - (1 - l) * parseFloat(n), a = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), h = l ? e.width / l : e.width, p = i ? e.height / i : e.height;
  return {
    width: h,
    height: p,
    top: a,
    right: u + h,
    bottom: a + p,
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
    } = Ne(e).getComputedStyle(e);
    a && (n = Hm(n, a, h));
  }
  const {
    top: r,
    left: l,
    width: i,
    height: o,
    bottom: s,
    right: u
  } = n;
  return {
    top: r,
    left: l,
    width: i,
    height: o,
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
function bm(e, t) {
  return t === void 0 && (t = Ne(e).getComputedStyle(e)), t.position === "fixed";
}
function Qm(e, t) {
  t === void 0 && (t = Ne(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((l) => {
    const i = t[l];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function Ai(e, t) {
  const n = [];
  function r(l) {
    if (t != null && n.length >= t || !l)
      return n;
    if (du(l) && l.scrollingElement != null && !n.includes(l.scrollingElement))
      return n.push(l.scrollingElement), n;
    if (!ll(l) || af(l) || n.includes(l))
      return n;
    const i = Ne(e).getComputedStyle(l);
    return l !== e && Qm(l, i) && n.push(l), bm(l, i) ? n : r(l.parentNode);
  }
  return e ? r(e) : n;
}
function vf(e) {
  const [t] = Ai(e, 1);
  return t ?? null;
}
function go(e) {
  return !Oi || !e ? null : er(e) ? e : cu(e) ? du(e) || e === tr(e).scrollingElement ? window : ll(e) ? e : null : null;
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
var se;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(se || (se = {}));
function wf(e) {
  return !Oi || !e ? !1 : e === document.scrollingElement;
}
function xf(e) {
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
const Km = {
  x: 0.2,
  y: 0.2
};
function Xm(e, t, n, r, l) {
  let {
    top: i,
    left: o,
    right: s,
    bottom: u
  } = n;
  r === void 0 && (r = 10), l === void 0 && (l = Km);
  const {
    isTop: a,
    isBottom: h,
    isLeft: p,
    isRight: v
  } = xf(e), y = {
    x: 0,
    y: 0
  }, k = {
    x: 0,
    y: 0
  }, x = {
    height: t.height * l.y,
    width: t.width * l.x
  };
  return !a && i <= t.top + x.height ? (y.y = se.Backward, k.y = r * Math.abs((t.top + x.height - i) / x.height)) : !h && u >= t.bottom - x.height && (y.y = se.Forward, k.y = r * Math.abs((t.bottom - x.height - u) / x.height)), !v && s >= t.right - x.width ? (y.x = se.Forward, k.x = r * Math.abs((t.right - x.width - s) / x.width)) : !p && o <= t.left + x.width && (y.x = se.Backward, k.x = r * Math.abs((t.left + x.width - o) / x.width)), {
    direction: y,
    speed: k
  };
}
function Ym(e) {
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
function Sf(e) {
  return e.reduce((t, n) => Vn(t, ps(n)), rt);
}
function Gm(e) {
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
    right: i
  } = t(e);
  vf(e) && (l <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Zm = [["x", ["left", "right"], Gm], ["y", ["top", "bottom"], Jm]];
class fu {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Ai(n), l = Sf(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, o, s] of Zm)
      for (const u of o)
        Object.defineProperty(this, u, {
          get: () => {
            const a = s(r), h = l[i] - a;
            return this.rect[u] + h;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Pr {
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
  } = Ne(e);
  return e instanceof t ? e : tr(e);
}
function yo(e, t) {
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
var A;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(A || (A = {}));
const Cf = {
  start: [A.Space, A.Enter],
  cancel: [A.Esc],
  end: [A.Space, A.Enter, A.Tab]
}, tv = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case A.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case A.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case A.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case A.Up:
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
    this.props = t, this.listeners = new Pr(tr(n)), this.windowListeners = new Pr(Ne(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add($e.Resize, this.handleCancel), this.windowListeners.add($e.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add($e.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && kf(r), n(rt);
  }
  handleKeyDown(t) {
    if (zi(t)) {
      const {
        active: n,
        context: r,
        options: l
      } = this.props, {
        keyboardCodes: i = Cf,
        coordinateGetter: o = tv,
        scrollBehavior: s = "smooth"
      } = l, {
        code: u
      } = t;
      if (i.end.includes(u)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(u)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: a
      } = r.current, h = a ? {
        x: a.left,
        y: a.top
      } : rt;
      this.referenceCoordinates || (this.referenceCoordinates = h);
      const p = o(t, {
        active: n,
        context: r.current,
        currentCoordinates: h
      });
      if (p) {
        const v = Jr(p, h), y = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: k
        } = r.current;
        for (const x of k) {
          const T = t.code, {
            isTop: d,
            isRight: c,
            isLeft: f,
            isBottom: w,
            maxScroll: C,
            minScroll: S
          } = xf(x), E = Ym(x), D = {
            x: Math.min(T === A.Right ? E.right - E.width / 2 : E.right, Math.max(T === A.Right ? E.left : E.left + E.width / 2, p.x)),
            y: Math.min(T === A.Down ? E.bottom - E.height / 2 : E.bottom, Math.max(T === A.Down ? E.top : E.top + E.height / 2, p.y))
          }, I = T === A.Right && !c || T === A.Left && !f, _ = T === A.Down && !w || T === A.Up && !d;
          if (I && D.x !== p.x) {
            const O = x.scrollLeft + v.x, te = T === A.Right && O <= C.x || T === A.Left && O >= S.x;
            if (te && !v.y) {
              x.scrollTo({
                left: O,
                behavior: s
              });
              return;
            }
            te ? y.x = x.scrollLeft - O : y.x = T === A.Right ? x.scrollLeft - C.x : x.scrollLeft - S.x, y.x && x.scrollBy({
              left: -y.x,
              behavior: s
            });
            break;
          } else if (_ && D.y !== p.y) {
            const O = x.scrollTop + v.y, te = T === A.Down && O <= C.y || T === A.Up && O >= S.y;
            if (te && !v.x) {
              x.scrollTo({
                top: O,
                behavior: s
              });
              return;
            }
            te ? y.y = x.scrollTop - O : y.y = T === A.Down ? x.scrollTop - C.y : x.scrollTop - S.y, y.y && x.scrollBy({
              top: -y.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, Vn(Jr(p, this.referenceCoordinates), y));
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
function Ba(e) {
  return !!(e && "distance" in e);
}
function Ua(e) {
  return !!(e && "delay" in e);
}
class hu {
  constructor(t, n, r) {
    var l;
    r === void 0 && (r = qm(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: o
    } = i;
    this.props = t, this.events = n, this.document = tr(o), this.documentListeners = new Pr(this.document), this.listeners = new Pr(r), this.windowListeners = new Pr(Ne(o)), this.initialCoordinates = (l = hi(i)) != null ? l : rt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
      if (Ua(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (Ba(n)) {
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
      props: i
    } = this, {
      onMove: o,
      options: {
        activationConstraint: s
      }
    } = i;
    if (!l)
      return;
    const u = (n = hi(t)) != null ? n : rt, a = Jr(l, u);
    if (!r && s) {
      if (Ba(s)) {
        if (s.tolerance != null && yo(a, s.tolerance))
          return this.handleCancel();
        if (yo(a, s.distance))
          return this.handleStart();
      }
      if (Ua(s) && yo(a, s.tolerance))
        return this.handleCancel();
      this.handlePending(s, a);
      return;
    }
    t.cancelable && t.preventDefault(), o(u);
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
    t.code === A.Esc && this.handleCancel();
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
class iv extends hu {
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
iv.activators = [{
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
var vi;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(vi || (vi = {}));
function ov(e) {
  let {
    acceleration: t,
    activator: n = _r.Pointer,
    canScroll: r,
    draggingRect: l,
    enabled: i,
    interval: o = 5,
    order: s = vi.TreeOrder,
    pointerCoordinates: u,
    scrollableAncestors: a,
    scrollableAncestorRects: h,
    delta: p,
    threshold: v
  } = e;
  const y = uv({
    delta: p,
    disabled: !i
  }), [k, x] = wm(), T = g.useRef({
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
  }, [n, l, u]), f = g.useRef(null), w = g.useCallback(() => {
    const S = f.current;
    if (!S)
      return;
    const E = T.current.x * d.current.x, D = T.current.y * d.current.y;
    S.scrollBy(E, D);
  }, []), C = g.useMemo(() => s === vi.TreeOrder ? [...a].reverse() : a, [s, a]);
  g.useEffect(
    () => {
      if (!i || !a.length || !c) {
        x();
        return;
      }
      for (const S of C) {
        if ((r == null ? void 0 : r(S)) === !1)
          continue;
        const E = a.indexOf(S), D = h[E];
        if (!D)
          continue;
        const {
          direction: I,
          speed: _
        } = Xm(S, D, c, t, v);
        for (const O of ["x", "y"])
          y[O][I[O]] || (_[O] = 0, I[O] = 0);
        if (_.x > 0 || _.y > 0) {
          x(), f.current = S, k(w, o), T.current = _, d.current = I;
          return;
        }
      }
      T.current = {
        x: 0,
        y: 0
      }, d.current = {
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
      JSON.stringify(c),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(y),
      k,
      a,
      C,
      h,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
const sv = {
  x: {
    [se.Backward]: !1,
    [se.Forward]: !1
  },
  y: {
    [se.Backward]: !1,
    [se.Forward]: !1
  }
};
function uv(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = pi(t);
  return il((l) => {
    if (n || !r || !l)
      return sv;
    const i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [se.Backward]: l.x[se.Backward] || i.x === -1,
        [se.Forward]: l.x[se.Forward] || i.x === 1
      },
      y: {
        [se.Backward]: l.y[se.Backward] || i.y === -1,
        [se.Forward]: l.y[se.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function av(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return il((l) => {
    var i;
    return t == null ? null : (i = r ?? l) != null ? i : null;
  }, [r, t]);
}
function cv(e, t) {
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
const $a = /* @__PURE__ */ new Map();
function dv(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: l
  } = t;
  const [i, o] = g.useState(null), {
    frequency: s,
    measure: u,
    strategy: a
  } = l, h = g.useRef(e), p = T(), v = Gr(p), y = g.useCallback(function(d) {
    d === void 0 && (d = []), !v.current && o((c) => c === null ? d : c.concat(d.filter((f) => !c.includes(f))));
  }, [v]), k = g.useRef(null), x = il((d) => {
    if (p && !n)
      return $a;
    if (!d || d === $a || h.current !== e || i != null) {
      const c = /* @__PURE__ */ new Map();
      for (let f of e) {
        if (!f)
          continue;
        if (i && i.length > 0 && !i.includes(f.id) && f.rect.current) {
          c.set(f.id, f.rect.current);
          continue;
        }
        const w = f.node.current, C = w ? new fu(u(w), w) : null;
        f.rect.current = C, C && c.set(f.id, C);
      }
      return c;
    }
    return d;
  }, [e, i, n, p, u]);
  return g.useEffect(() => {
    h.current = e;
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
  function T() {
    switch (a) {
      case Zr.Always:
        return !1;
      case Zr.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function vu(e, t) {
  return il((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function fv(e, t) {
  return vu(e, t);
}
function pv(e) {
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
function hv(e) {
  return new fu(nr(e), e);
}
function Ha(e, t, n) {
  t === void 0 && (t = hv);
  const [r, l] = g.useState(null);
  function i() {
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
  const o = pv({
    callback(u) {
      if (e)
        for (const a of u) {
          const {
            type: h,
            target: p
          } = a;
          if (h === "childList" && p instanceof HTMLElement && p.contains(e)) {
            i();
            break;
          }
        }
    }
  }), s = Fi({
    callback: i
  });
  return nt(() => {
    i(), e ? (s == null || s.observe(e), o == null || o.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (s == null || s.disconnect(), o == null || o.disconnect());
  }, [e]), r;
}
function mv(e) {
  const t = vu(e);
  return hf(e, t);
}
const Va = [];
function vv(e) {
  const t = g.useRef(e), n = il((r) => e ? r && r !== Va && e && t.current && e.parentNode === t.current.parentNode ? r : Ai(e) : Va, [e]);
  return g.useEffect(() => {
    t.current = e;
  }, [e]), n;
}
function gv(e) {
  const [t, n] = g.useState(null), r = g.useRef(e), l = g.useCallback((i) => {
    const o = go(i.target);
    o && n((s) => s ? (s.set(o, ps(o)), new Map(s)) : null);
  }, []);
  return g.useEffect(() => {
    const i = r.current;
    if (e !== i) {
      o(i);
      const s = e.map((u) => {
        const a = go(u);
        return a ? (a.addEventListener("scroll", l, {
          passive: !0
        }), [a, ps(a)]) : null;
      }).filter((u) => u != null);
      n(s.length ? new Map(s) : null), r.current = e;
    }
    return () => {
      o(e), o(i);
    };
    function o(s) {
      s.forEach((u) => {
        const a = go(u);
        a == null || a.removeEventListener("scroll", l);
      });
    }
  }, [l, e]), g.useMemo(() => e.length ? t ? Array.from(t.values()).reduce((i, o) => Vn(i, o), rt) : Sf(e) : rt, [e, t]);
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
    const r = e !== rt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? Jr(e, n.current) : rt;
}
function yv(e) {
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
function wv(e, t) {
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
function Ef(e) {
  return g.useMemo(() => e ? Wm(e) : null, [e]);
}
const ba = [];
function xv(e, t) {
  t === void 0 && (t = nr);
  const [n] = e, r = Ef(n ? Ne(n) : null), [l, i] = g.useState(ba);
  function o() {
    i(() => e.length ? e.map((u) => wf(u) ? r : new fu(t(u), u)) : ba);
  }
  const s = Fi({
    callback: o
  });
  return nt(() => {
    s == null || s.disconnect(), o(), e.forEach((u) => s == null ? void 0 : s.observe(u));
  }, [e]), l;
}
function Nf(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return ll(t) ? t : e;
}
function Sv(e) {
  let {
    measure: t
  } = e;
  const [n, r] = g.useState(null), l = g.useCallback((a) => {
    for (const {
      target: h
    } of a)
      if (ll(h)) {
        r((p) => {
          const v = t(h);
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
  }), o = g.useCallback((a) => {
    const h = Nf(a);
    i == null || i.disconnect(), h && (i == null || i.observe(h)), r(h ? t(h) : null);
  }, [t, i]), [s, u] = fi(o);
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
    strategy: Zr.WhileDragging,
    frequency: ms.Optimized
  },
  dragOverlay: {
    measure: nr
  }
};
class Lr extends Map {
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
  droppableContainers: /* @__PURE__ */ new Lr(),
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
}, sl = /* @__PURE__ */ g.createContext(Df), Rf = /* @__PURE__ */ g.createContext(Ev);
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
      containers: new Lr()
    }
  };
}
function Dv(e, t) {
  switch (t.type) {
    case le.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case le.DragMove:
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
    case le.DragEnd:
    case le.DragCancel:
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
    case le.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, l = new Lr(e.droppable.containers);
      return l.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: l
        }
      };
    }
    case le.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: l
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const o = new Lr(e.droppable.containers);
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
    case le.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, l = e.droppable.containers.get(n);
      if (!l || r !== l.key)
        return e;
      const i = new Lr(e.droppable.containers);
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
function Rv(e) {
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
      if (!zi(i) || document.activeElement === i.target)
        return;
      const s = l.get(o);
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
          const p = km(h);
          if (p) {
            p.focus();
            break;
          }
        }
      });
    }
  }, [r, t, l, o, i]), null;
}
function Tf(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((l, i) => i({
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
  const i = g.useRef(!1), {
    x: o,
    y: s
  } = typeof l == "boolean" ? {
    x: l,
    y: l
  } : l;
  nt(() => {
    if (!o && !s || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const a = t == null ? void 0 : t.node.current;
    if (!a || a.isConnected === !1)
      return;
    const h = n(a), p = hf(h, r);
    if (o || (p.x = 0), s || (p.y = 0), i.current = !0, Math.abs(p.x) > 0 || Math.abs(p.y) > 0) {
      const v = vf(a);
      v && v.scrollBy({
        top: p.y,
        left: p.x
      });
    }
  }, [t, o, s, r, n]);
}
const Bi = /* @__PURE__ */ g.createContext({
  ...rt,
  scaleX: 1,
  scaleY: 1
});
var At;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(At || (At = {}));
const Pv = /* @__PURE__ */ g.memo(function(t) {
  var n, r, l, i;
  let {
    id: o,
    accessibility: s,
    autoScroll: u = !0,
    children: a,
    sensors: h = kv,
    collisionDetection: p = Fm,
    measuring: v,
    modifiers: y,
    ...k
  } = t;
  const x = g.useReducer(Dv, void 0, Nv), [T, d] = x, [c, f] = Tm(), [w, C] = g.useState(At.Uninitialized), S = w === At.Initialized, {
    draggable: {
      active: E,
      nodes: D,
      translate: I
    },
    droppable: {
      containers: _
    }
  } = T, O = E != null ? D.get(E) : null, te = g.useRef({
    initial: null,
    translated: null
  }), Z = g.useMemo(() => {
    var ve;
    return E != null ? {
      id: E,
      // It's possible for the active node to unmount while dragging
      data: (ve = O == null ? void 0 : O.data) != null ? ve : Cv,
      rect: te
    } : null;
  }, [E, O]), he = g.useRef(null), [Xe, lt] = g.useState(null), [ne, j] = g.useState(null), N = Gr(k, Object.values(k)), L = ol("DndDescribedBy", o), B = g.useMemo(() => _.getEnabled(), [_]), M = Tv(v), {
    droppableRects: me,
    measureDroppableContainers: ae,
    measuringScheduled: pt
  } = dv(B, {
    dragging: S,
    dependencies: [I.x, I.y],
    config: M.droppable
  }), q = av(D, E), ht = g.useMemo(() => ne ? hi(ne) : null, [ne]), Tt = bf(), mt = fv(q, M.draggable.measure);
  jv({
    activeNode: E != null ? D.get(E) : null,
    config: Tt.layoutShiftCompensation,
    initialRect: mt,
    measure: M.draggable.measure
  });
  const $ = Ha(q, M.draggable.measure, mt), rr = Ha(q ? q.parentElement : null), it = g.useRef({
    activatorEvent: null,
    active: null,
    activeNode: q,
    collisionRect: null,
    collisions: null,
    droppableRects: me,
    draggableNodes: D,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: _,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), gn = _.getNodeFor((n = it.current.over) == null ? void 0 : n.id), vt = Sv({
    measure: M.dragOverlay.measure
  }), yn = (r = vt.nodeRef.current) != null ? r : q, wn = S ? (l = vt.rect) != null ? l : $ : null, gu = !!(vt.nodeRef.current && vt.rect), yu = mv(gu ? null : $), Ui = Ef(yn ? Ne(yn) : null), jt = vv(S ? gn ?? q : null), ul = xv(jt), al = Tf(y, {
    transform: {
      x: I.x - yu.x,
      y: I.y - yu.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: ne,
    active: Z,
    activeNodeRect: $,
    containerNodeRect: rr,
    draggingNodeRect: wn,
    over: it.current.over,
    overlayNodeRect: vt.rect,
    scrollableAncestors: jt,
    scrollableAncestorRects: ul,
    windowRect: Ui
  }), wu = ht ? Vn(ht, I) : null, xu = gv(jt), Ff = Wa(xu), Bf = Wa(xu, [$]), xn = Vn(al, Ff), Sn = wn ? $m(wn, al) : null, lr = Z && Sn ? p({
    active: Z,
    collisionRect: Sn,
    droppableRects: me,
    droppableContainers: B,
    pointerCoordinates: wu
  }) : null, Su = ff(lr, "id"), [Pt, ku] = g.useState(null), Uf = gu ? al : Vn(al, Bf), $f = Bm(Uf, (i = Pt == null ? void 0 : Pt.rect) != null ? i : null, $), $i = g.useRef(null), Cu = g.useCallback(
    (ve, _e) => {
      let {
        sensor: Le,
        options: _t
      } = _e;
      if (he.current == null)
        return;
      const Ue = D.get(he.current);
      if (!Ue)
        return;
      const Ie = ve.nativeEvent, ot = new Le({
        active: he.current,
        activeNode: Ue,
        event: Ie,
        options: _t,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: it,
        onAbort(ce) {
          if (!D.get(ce))
            return;
          const {
            onDragAbort: st
          } = N.current, gt = {
            id: ce
          };
          st == null || st(gt), c({
            type: "onDragAbort",
            event: gt
          });
        },
        onPending(ce, Lt, st, gt) {
          if (!D.get(ce))
            return;
          const {
            onDragPending: or
          } = N.current, It = {
            id: ce,
            constraint: Lt,
            initialCoordinates: st,
            offset: gt
          };
          or == null || or(It), c({
            type: "onDragPending",
            event: It
          });
        },
        onStart(ce) {
          const Lt = he.current;
          if (Lt == null)
            return;
          const st = D.get(Lt);
          if (!st)
            return;
          const {
            onDragStart: gt
          } = N.current, ir = {
            activatorEvent: Ie,
            active: {
              id: Lt,
              data: st.data,
              rect: te
            }
          };
          zn.unstable_batchedUpdates(() => {
            gt == null || gt(ir), C(At.Initializing), d({
              type: le.DragStart,
              initialCoordinates: ce,
              active: Lt
            }), c({
              type: "onDragStart",
              event: ir
            }), lt($i.current), j(Ie);
          });
        },
        onMove(ce) {
          d({
            type: le.DragMove,
            coordinates: ce
          });
        },
        onEnd: kn(le.DragEnd),
        onCancel: kn(le.DragCancel)
      });
      $i.current = ot;
      function kn(ce) {
        return async function() {
          const {
            active: st,
            collisions: gt,
            over: ir,
            scrollAdjustedTranslate: or
          } = it.current;
          let It = null;
          if (st && or) {
            const {
              cancelDrop: sr
            } = N.current;
            It = {
              activatorEvent: Ie,
              active: st,
              collisions: gt,
              delta: or,
              over: ir
            }, ce === le.DragEnd && typeof sr == "function" && await Promise.resolve(sr(It)) && (ce = le.DragCancel);
          }
          he.current = null, zn.unstable_batchedUpdates(() => {
            d({
              type: ce
            }), C(At.Uninitialized), ku(null), lt(null), j(null), $i.current = null;
            const sr = ce === le.DragEnd ? "onDragEnd" : "onDragCancel";
            if (It) {
              const Hi = N.current[sr];
              Hi == null || Hi(It), c({
                type: sr,
                event: It
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [D]
  ), Hf = g.useCallback((ve, _e) => (Le, _t) => {
    const Ue = Le.nativeEvent, Ie = D.get(_t);
    if (
      // Another sensor is already instantiating
      he.current !== null || // No active draggable
      !Ie || // Event has already been captured
      Ue.dndKit || Ue.defaultPrevented
    )
      return;
    const ot = {
      active: Ie
    };
    ve(Le, _e.options, ot) === !0 && (Ue.dndKit = {
      capturedBy: _e.sensor
    }, he.current = _t, Cu(Le, _e));
  }, [D, Cu]), Eu = cv(h, Hf);
  yv(h), nt(() => {
    $ && w === At.Initializing && C(At.Initialized);
  }, [$, w]), g.useEffect(
    () => {
      const {
        onDragMove: ve
      } = N.current, {
        active: _e,
        activatorEvent: Le,
        collisions: _t,
        over: Ue
      } = it.current;
      if (!_e || !Le)
        return;
      const Ie = {
        active: _e,
        activatorEvent: Le,
        collisions: _t,
        delta: {
          x: xn.x,
          y: xn.y
        },
        over: Ue
      };
      zn.unstable_batchedUpdates(() => {
        ve == null || ve(Ie), c({
          type: "onDragMove",
          event: Ie
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [xn.x, xn.y]
  ), g.useEffect(
    () => {
      const {
        active: ve,
        activatorEvent: _e,
        collisions: Le,
        droppableContainers: _t,
        scrollAdjustedTranslate: Ue
      } = it.current;
      if (!ve || he.current == null || !_e || !Ue)
        return;
      const {
        onDragOver: Ie
      } = N.current, ot = _t.get(Su), kn = ot && ot.rect.current ? {
        id: ot.id,
        rect: ot.rect.current,
        data: ot.data,
        disabled: ot.disabled
      } : null, ce = {
        active: ve,
        activatorEvent: _e,
        collisions: Le,
        delta: {
          x: Ue.x,
          y: Ue.y
        },
        over: kn
      };
      zn.unstable_batchedUpdates(() => {
        ku(kn), Ie == null || Ie(ce), c({
          type: "onDragOver",
          event: ce
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Su]
  ), nt(() => {
    it.current = {
      activatorEvent: ne,
      active: Z,
      activeNode: q,
      collisionRect: Sn,
      collisions: lr,
      droppableRects: me,
      draggableNodes: D,
      draggingNode: yn,
      draggingNodeRect: wn,
      droppableContainers: _,
      over: Pt,
      scrollableAncestors: jt,
      scrollAdjustedTranslate: xn
    }, te.current = {
      initial: wn,
      translated: Sn
    };
  }, [Z, q, lr, Sn, D, yn, wn, me, _, Pt, jt, xn]), ov({
    ...Tt,
    delta: I,
    draggingRect: Sn,
    pointerCoordinates: wu,
    scrollableAncestors: jt,
    scrollableAncestorRects: ul
  });
  const Vf = g.useMemo(() => ({
    active: Z,
    activeNode: q,
    activeNodeRect: $,
    activatorEvent: ne,
    collisions: lr,
    containerNodeRect: rr,
    dragOverlay: vt,
    draggableNodes: D,
    droppableContainers: _,
    droppableRects: me,
    over: Pt,
    measureDroppableContainers: ae,
    scrollableAncestors: jt,
    scrollableAncestorRects: ul,
    measuringConfiguration: M,
    measuringScheduled: pt,
    windowRect: Ui
  }), [Z, q, $, ne, lr, rr, vt, D, _, me, Pt, ae, jt, ul, M, pt, Ui]), Wf = g.useMemo(() => ({
    activatorEvent: ne,
    activators: Eu,
    active: Z,
    activeNodeRect: $,
    ariaDescribedById: {
      draggable: L
    },
    dispatch: d,
    draggableNodes: D,
    over: Pt,
    measureDroppableContainers: ae
  }), [ne, Eu, Z, $, d, L, D, Pt, ae]);
  return b.createElement(df.Provider, {
    value: f
  }, b.createElement(sl.Provider, {
    value: Wf
  }, b.createElement(Rf.Provider, {
    value: Vf
  }, b.createElement(Bi.Provider, {
    value: $f
  }, a)), b.createElement(Rv, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), b.createElement(_m, {
    ...s,
    hiddenTextDescribedById: L
  }));
  function bf() {
    const ve = (Xe == null ? void 0 : Xe.autoScrollEnabled) === !1, _e = typeof u == "object" ? u.enabled === !1 : u === !1, Le = S && !ve && !_e;
    return typeof u == "object" ? {
      ...u,
      enabled: Le
    } : {
      enabled: Le
    };
  }
}), _v = /* @__PURE__ */ g.createContext(null), Qa = "button", Lv = "Draggable";
function Iv(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: l
  } = e;
  const i = ol(Lv), {
    activators: o,
    activatorEvent: s,
    active: u,
    activeNodeRect: a,
    ariaDescribedById: h,
    draggableNodes: p,
    over: v
  } = g.useContext(sl), {
    role: y = Qa,
    roleDescription: k = "draggable",
    tabIndex: x = 0
  } = l ?? {}, T = (u == null ? void 0 : u.id) === t, d = g.useContext(T ? Bi : _v), [c, f] = fi(), [w, C] = fi(), S = wv(o, t), E = Gr(n);
  nt(
    () => (p.set(t, {
      id: t,
      key: i,
      node: c,
      activatorNode: w,
      data: E
    }), () => {
      const I = p.get(t);
      I && I.key === i && p.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [p, t]
  );
  const D = g.useMemo(() => ({
    role: y,
    tabIndex: x,
    "aria-disabled": r,
    "aria-pressed": T && y === Qa ? !0 : void 0,
    "aria-roledescription": k,
    "aria-describedby": h.draggable
  }), [r, y, x, T, k, h.draggable]);
  return {
    active: u,
    activatorEvent: s,
    activeNodeRect: a,
    attributes: D,
    isDragging: T,
    listeners: r ? void 0 : S,
    node: c,
    over: v,
    setNodeRef: f,
    setActivatorNodeRef: C,
    transform: d
  };
}
function jf() {
  return g.useContext(Rf);
}
const Ov = "Droppable", Mv = {
  timeout: 25
};
function Pf(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: l
  } = e;
  const i = ol(Ov), {
    active: o,
    dispatch: s,
    over: u,
    measureDroppableContainers: a
  } = g.useContext(sl), h = g.useRef({
    disabled: n
  }), p = g.useRef(!1), v = g.useRef(null), y = g.useRef(null), {
    disabled: k,
    updateMeasurementsFor: x,
    timeout: T
  } = {
    ...Mv,
    ...l
  }, d = Gr(x ?? r), c = g.useCallback(
    () => {
      if (!p.current) {
        p.current = !0;
        return;
      }
      y.current != null && clearTimeout(y.current), y.current = setTimeout(() => {
        a(Array.isArray(d.current) ? d.current : [d.current]), y.current = null;
      }, T);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [T]
  ), f = Fi({
    callback: c,
    disabled: k || !o
  }), w = g.useCallback((D, I) => {
    f && (I && (f.unobserve(I), p.current = !1), D && f.observe(D));
  }, [f]), [C, S] = fi(w), E = Gr(t);
  return g.useEffect(() => {
    !f || !C.current || (f.disconnect(), p.current = !1, f.observe(C.current));
  }, [C, f]), g.useEffect(
    () => (s({
      type: le.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: C,
        rect: v,
        data: E
      }
    }), () => s({
      type: le.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), g.useEffect(() => {
    n !== h.current.disabled && (s({
      type: le.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), h.current.disabled = n);
  }, [r, i, n, s]), {
    active: o,
    rect: v,
    isOver: (u == null ? void 0 : u.id) === r,
    node: C,
    over: u,
    setNodeRef: S
  };
}
function zv(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, l] = g.useState(null), [i, o] = g.useState(null), s = pi(n);
  return !n && !r && s && l(s), nt(() => {
    if (!i)
      return;
    const u = r == null ? void 0 : r.key, a = r == null ? void 0 : r.props.id;
    if (u == null || a == null) {
      l(null);
      return;
    }
    Promise.resolve(t(a, i)).then(() => {
      l(null);
    });
  }, [t, r, i]), b.createElement(b.Fragment, null, n, r ? g.cloneElement(r, {
    ref: o
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
  return b.createElement(sl.Provider, {
    value: Df
  }, b.createElement(Bi.Provider, {
    value: Av
  }, t));
}
const Bv = {
  position: "fixed",
  touchAction: "none"
}, Uv = (e) => zi(e) ? "transform 250ms ease" : void 0, $v = /* @__PURE__ */ g.forwardRef((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: l,
    children: i,
    className: o,
    rect: s,
    style: u,
    transform: a,
    transition: h = Uv
  } = e;
  if (!s)
    return null;
  const p = l ? a : {
    ...a,
    scaleX: 1,
    scaleY: 1
  }, v = {
    ...Bv,
    width: s.width,
    height: s.height,
    top: s.top,
    left: s.left,
    transform: Zt.Transform.toString(p),
    transformOrigin: l && r ? Om(r, s) : void 0,
    transition: typeof h == "function" ? h(r) : h,
    ...u
  };
  return b.createElement(n, {
    className: o,
    style: v,
    ref: t
  }, i);
}), Hv = (e) => (t) => {
  let {
    active: n,
    dragOverlay: r
  } = t;
  const l = {}, {
    styles: i,
    className: o
  } = e;
  if (i != null && i.active)
    for (const [s, u] of Object.entries(i.active))
      u !== void 0 && (l[s] = n.node.style.getPropertyValue(s), n.node.style.setProperty(s, u));
  if (i != null && i.dragOverlay)
    for (const [s, u] of Object.entries(i.dragOverlay))
      u !== void 0 && r.node.style.setProperty(s, u);
  return o != null && o.active && n.node.classList.add(o.active), o != null && o.dragOverlay && r.node.classList.add(o.dragOverlay), function() {
    for (const [u, a] of Object.entries(l))
      n.node.style.setProperty(u, a);
    o != null && o.active && n.node.classList.remove(o.active);
  };
}, Vv = (e) => {
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
function bv(e) {
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
    const u = s.node.current;
    if (!u)
      return;
    const a = Nf(o);
    if (!a)
      return;
    const {
      transform: h
    } = Ne(o).getComputedStyle(o), p = mf(h);
    if (!p)
      return;
    const v = typeof t == "function" ? t : Qv(t);
    return kf(u, l.draggable.measure), v({
      active: {
        id: i,
        data: s.data,
        node: u,
        rect: l.draggable.measure(u)
      },
      draggableNodes: n,
      dragOverlay: {
        node: o,
        rect: l.dragOverlay.measure(a)
      },
      droppableContainers: r,
      measuringConfiguration: l,
      transform: p
    });
  });
}
function Qv(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: l
  } = {
    ...Wv,
    ...e
  };
  return (i) => {
    let {
      active: o,
      dragOverlay: s,
      transform: u,
      ...a
    } = i;
    if (!t)
      return;
    const h = {
      x: s.rect.left - o.rect.left,
      y: s.rect.top - o.rect.top
    }, p = {
      scaleX: u.scaleX !== 1 ? o.rect.width * u.scaleX / s.rect.width : 1,
      scaleY: u.scaleY !== 1 ? o.rect.height * u.scaleY / s.rect.height : 1
    }, v = {
      x: u.x - h.x,
      y: u.y - h.y,
      ...p
    }, y = l({
      ...a,
      active: o,
      dragOverlay: s,
      transform: {
        initial: u,
        final: v
      }
    }), [k] = y, x = y[y.length - 1];
    if (JSON.stringify(k) === JSON.stringify(x))
      return;
    const T = r == null ? void 0 : r({
      active: o,
      dragOverlay: s,
      ...a
    }), d = s.node.animate(y, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((c) => {
      d.onfinish = () => {
        T == null || T(), c();
      };
    });
  };
}
let Ka = 0;
function Kv(e) {
  return g.useMemo(() => {
    if (e != null)
      return Ka++, Ka;
  }, [e]);
}
const Xv = /* @__PURE__ */ b.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: l,
    transition: i,
    modifiers: o,
    wrapperElement: s = "div",
    className: u,
    zIndex: a = 999
  } = e;
  const {
    activatorEvent: h,
    active: p,
    activeNodeRect: v,
    containerNodeRect: y,
    draggableNodes: k,
    droppableContainers: x,
    dragOverlay: T,
    over: d,
    measuringConfiguration: c,
    scrollableAncestors: f,
    scrollableAncestorRects: w,
    windowRect: C
  } = jf(), S = g.useContext(Bi), E = Kv(p == null ? void 0 : p.id), D = Tf(o, {
    activatorEvent: h,
    active: p,
    activeNodeRect: v,
    containerNodeRect: y,
    draggingNodeRect: T.rect,
    over: d,
    overlayNodeRect: T.rect,
    scrollableAncestors: f,
    scrollableAncestorRects: w,
    transform: S,
    windowRect: C
  }), I = vu(v), _ = bv({
    config: r,
    draggableNodes: k,
    droppableContainers: x,
    measuringConfiguration: c
  }), O = I ? T.setRef : void 0;
  return b.createElement(Fv, null, b.createElement(zv, {
    animation: _
  }, p && E ? b.createElement($v, {
    key: E,
    id: p.id,
    ref: O,
    as: s,
    activatorEvent: h,
    adjustScale: t,
    className: u,
    transition: i,
    rect: I,
    style: {
      zIndex: a,
      ...l
    },
    transform: D
  }, n) : null));
});
function _f(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function Yv(e, t) {
  return e.reduce((n, r, l) => {
    const i = t.get(r);
    return i && (n[l] = i), n;
  }, Array(e.length));
}
function Rl(e) {
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
const Lf = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: l
  } = e;
  const i = _f(t, r, n), o = t[l], s = i[l];
  return !s || !o ? null : {
    x: s.left - o.left,
    y: s.top - o.top,
    scaleX: s.width / o.width,
    scaleY: s.height / o.height
  };
}, Tl = {
  scaleX: 1,
  scaleY: 1
}, Zv = (e) => {
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
    const a = i[o];
    return a ? {
      x: 0,
      y: n < o ? a.top + a.height - (s.top + s.height) : a.top - s.top,
      ...Tl
    } : null;
  }
  const u = qv(i, l, n);
  return l > n && l <= o ? {
    x: 0,
    y: -s.height - u,
    ...Tl
  } : l < n && l >= o ? {
    x: 0,
    y: s.height + u,
    ...Tl
  } : {
    x: 0,
    y: 0,
    ...Tl
  };
};
function qv(e, t, n) {
  const r = e[t], l = e[t - 1], i = e[t + 1];
  return r ? n < t ? l ? r.top - (l.top + l.height) : i ? i.top - (r.top + r.height) : 0 : i ? i.top - (r.top + r.height) : l ? r.top - (l.top + l.height) : 0 : 0;
}
const If = "Sortable", Of = /* @__PURE__ */ b.createContext({
  activeIndex: -1,
  containerId: If,
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
    disabled: i = !1
  } = e;
  const {
    active: o,
    dragOverlay: s,
    droppableRects: u,
    over: a,
    measureDroppableContainers: h
  } = jf(), p = ol(If, n), v = s.rect !== null, y = g.useMemo(() => r.map((S) => typeof S == "object" && "id" in S ? S.id : S), [r]), k = o != null, x = o ? y.indexOf(o.id) : -1, T = a ? y.indexOf(a.id) : -1, d = g.useRef(y), c = !Gv(y, d.current), f = T !== -1 && x === -1 || c, w = Jv(i);
  nt(() => {
    c && k && h(y);
  }, [c, y, k, h]), g.useEffect(() => {
    d.current = y;
  }, [y]);
  const C = g.useMemo(
    () => ({
      activeIndex: x,
      containerId: p,
      disabled: w,
      disableTransforms: f,
      items: y,
      overIndex: T,
      useDragOverlay: v,
      sortedRects: Yv(y, u),
      strategy: l
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [x, p, w.draggable, w.droppable, f, y, T, u, v, l]
  );
  return b.createElement(Of.Provider, {
    value: C
  }, t);
}
const tg = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: l
  } = e;
  return _f(n, r, l).indexOf(t);
}, ng = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: l,
    items: i,
    newIndex: o,
    previousItems: s,
    previousContainerId: u,
    transition: a
  } = e;
  return !a || !r || s !== i && l === o ? !1 : n ? !0 : o !== l && t === u;
}, rg = {
  duration: 200,
  easing: "ease"
}, Mf = "transform", lg = /* @__PURE__ */ Zt.Transition.toString({
  property: Mf,
  duration: 0,
  easing: "linear"
}), ig = {
  roleDescription: "sortable"
};
function og(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: l
  } = e;
  const [i, o] = g.useState(null), s = g.useRef(n);
  return nt(() => {
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
        (h.x || h.y) && o(h);
      }
    }
    n !== s.current && (s.current = n);
  }, [t, n, r, l]), g.useEffect(() => {
    i && o(null);
  }, [i]), i;
}
function sg(e) {
  let {
    animateLayoutChanges: t = ng,
    attributes: n,
    disabled: r,
    data: l,
    getNewIndex: i = tg,
    id: o,
    strategy: s,
    resizeObserverConfig: u,
    transition: a = rg
  } = e;
  const {
    items: h,
    containerId: p,
    activeIndex: v,
    disabled: y,
    disableTransforms: k,
    sortedRects: x,
    overIndex: T,
    useDragOverlay: d,
    strategy: c
  } = g.useContext(Of), f = ug(r, y), w = h.indexOf(o), C = g.useMemo(() => ({
    sortable: {
      containerId: p,
      index: w,
      items: h
    },
    ...l
  }), [p, l, w, h]), S = g.useMemo(() => h.slice(h.indexOf(o)), [h, o]), {
    rect: E,
    node: D,
    isOver: I,
    setNodeRef: _
  } = Pf({
    id: o,
    data: C,
    disabled: f.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: S,
      ...u
    }
  }), {
    active: O,
    activatorEvent: te,
    activeNodeRect: Z,
    attributes: he,
    setNodeRef: Xe,
    listeners: lt,
    isDragging: ne,
    over: j,
    setActivatorNodeRef: N,
    transform: L
  } = Iv({
    id: o,
    data: C,
    attributes: {
      ...ig,
      ...n
    },
    disabled: f.draggable
  }), B = ym(_, Xe), M = !!O, me = M && !k && Rl(v) && Rl(T), ae = !d && ne, pt = ae && me ? L : null, ht = me ? pt ?? (s ?? c)({
    rects: x,
    activeNodeRect: Z,
    activeIndex: v,
    overIndex: T,
    index: w
  }) : null, Tt = Rl(v) && Rl(T) ? i({
    id: o,
    items: h,
    activeIndex: v,
    overIndex: T
  }) : w, mt = O == null ? void 0 : O.id, $ = g.useRef({
    activeId: mt,
    items: h,
    newIndex: Tt,
    containerId: p
  }), rr = h !== $.current.items, it = t({
    active: O,
    containerId: p,
    isDragging: ne,
    isSorting: M,
    id: o,
    index: w,
    items: h,
    newIndex: $.current.newIndex,
    previousItems: $.current.items,
    previousContainerId: $.current.containerId,
    transition: a,
    wasDragging: $.current.activeId != null
  }), gn = og({
    disabled: !it,
    index: w,
    node: D,
    rect: E
  });
  return g.useEffect(() => {
    M && $.current.newIndex !== Tt && ($.current.newIndex = Tt), p !== $.current.containerId && ($.current.containerId = p), h !== $.current.items && ($.current.items = h);
  }, [M, Tt, p, h]), g.useEffect(() => {
    if (mt === $.current.activeId)
      return;
    if (mt && !$.current.activeId) {
      $.current.activeId = mt;
      return;
    }
    const yn = setTimeout(() => {
      $.current.activeId = mt;
    }, 50);
    return () => clearTimeout(yn);
  }, [mt]), {
    active: O,
    activeIndex: v,
    attributes: he,
    data: C,
    rect: E,
    index: w,
    newIndex: Tt,
    items: h,
    isOver: I,
    isSorting: M,
    isDragging: ne,
    listeners: lt,
    node: D,
    overIndex: T,
    over: j,
    setNodeRef: B,
    setActivatorNodeRef: N,
    setDroppableNodeRef: _,
    setDraggableNodeRef: Xe,
    transform: gn ?? ht,
    transition: vt()
  };
  function vt() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      gn || // Or to prevent items jumping to back to their "new" position when items change
      rr && $.current.newIndex === w
    )
      return lg;
    if (!(ae && !zi(te) || !a) && (M || it))
      return Zt.Transition.toString({
        ...a,
        property: Mf
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
function gi(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const ag = [A.Down, A.Right, A.Up, A.Left], cg = (e, t) => {
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
  if (ag.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const u = [];
    i.getEnabled().forEach((p) => {
      if (!p || p != null && p.disabled)
        return;
      const v = l.get(p.id);
      if (v)
        switch (e.code) {
          case A.Down:
            r.top < v.top && u.push(p);
            break;
          case A.Up:
            r.top > v.top && u.push(p);
            break;
          case A.Left:
            r.left > v.left && u.push(p);
            break;
          case A.Right:
            r.left < v.left && u.push(p);
            break;
        }
    });
    const a = pf({
      collisionRect: r,
      droppableRects: l,
      droppableContainers: u
    });
    let h = ff(a, "id");
    if (h === (o == null ? void 0 : o.id) && a.length > 1 && (h = a[1].id), h != null) {
      const p = i.get(n.id), v = i.get(h), y = v ? l.get(v.id) : null, k = v == null ? void 0 : v.node.current;
      if (k && y && p && v) {
        const T = Ai(k).some((S, E) => s[E] !== S), d = zf(p, v), c = dg(p, v), f = T || !d ? {
          x: 0,
          y: 0
        } : {
          x: c ? r.width - y.width : 0,
          y: c ? r.height - y.height : 0
        }, w = {
          x: y.left,
          y: y.top
        };
        return f.x && f.y ? w : Jr(w, f);
      }
    }
  }
};
function zf(e, t) {
  return !gi(e) || !gi(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function dg(e, t) {
  return !gi(e) || !gi(t) || !zf(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
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
    setNodeRef: i,
    transform: o,
    transition: s,
    isDragging: u
  } = sg({ id: e.id }), a = {
    transform: Zt.Transform.toString(o),
    transition: s
  }, h = e.status === "HANDLE" || e.status === "AI_PROCESSING", p = e.status === "TO_REVIEW" && e.prLink;
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      ref: i,
      style: a,
      className: `ticket-card ${t || u ? "dragging" : ""} ${p ? "success-glow" : ""}`,
      onClick: n,
      ...r,
      ...l,
      children: [
        /* @__PURE__ */ m.jsx("h4", { className: "ticket-title", children: e.title }),
        e.description && /* @__PURE__ */ m.jsx("p", { className: "ticket-description", children: e.description }),
        /* @__PURE__ */ m.jsxs("div", { className: "ticket-meta", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ m.jsx("span", { className: `ticket-priority ${fg[e.priority]}`, children: e.priority }),
            e.targetBranch && /* @__PURE__ */ m.jsxs("span", { className: "ticket-branch", title: `Target: ${e.targetBranch}`, children: [
              /* @__PURE__ */ m.jsx(hg, {}),
              e.targetBranch
            ] })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2", children: [
            e.assignee && /* @__PURE__ */ m.jsx(
              "div",
              {
                className: "ticket-assignee",
                title: e.assignee.name,
                children: e.assignee.name.substring(0, 2).toUpperCase()
              }
            ),
            /* @__PURE__ */ m.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "#",
              e.id.slice(-4)
            ] })
          ] })
        ] }),
        h && /* @__PURE__ */ m.jsxs("div", { className: `ticket-ai-status ${e.status === "AI_PROCESSING" ? "processing" : ""}`, children: [
          /* @__PURE__ */ m.jsx("div", { className: "ai-spinner" }),
          /* @__PURE__ */ m.jsx("span", { children: e.status === "HANDLE" ? "Queued for AI" : "AI Processing..." })
        ] }),
        e.prLink && /* @__PURE__ */ m.jsxs(
          "a",
          {
            href: e.prLink,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "ticket-pr-link",
            onClick: (v) => v.stopPropagation(),
            children: [
              /* @__PURE__ */ m.jsx(pg, {}),
              "View Pull Request"
            ]
          }
        ),
        e.aiSummary && /* @__PURE__ */ m.jsxs("div", { className: "ticket-ai-summary", children: [
          /* @__PURE__ */ m.jsx("strong", { children: "AI Summary:" }),
          " ",
          e.aiSummary
        ] })
      ]
    }
  );
}
function pg() {
  return /* @__PURE__ */ m.jsx(
    "svg",
    {
      viewBox: "0 0 16 16",
      fill: "currentColor",
      style: { width: "1rem", height: "1rem" },
      children: /* @__PURE__ */ m.jsx(
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
  return /* @__PURE__ */ m.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      style: { width: "0.75rem", height: "0.75rem" },
      children: [
        /* @__PURE__ */ m.jsx("line", { x1: "6", x2: "6", y1: "3", y2: "15" }),
        /* @__PURE__ */ m.jsx("circle", { cx: "18", cy: "6", r: "3" }),
        /* @__PURE__ */ m.jsx("circle", { cx: "6", cy: "18", r: "3" }),
        /* @__PURE__ */ m.jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })
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
  onTicketClick: i
}) {
  const { setNodeRef: o, isOver: s } = Pf({ id: e });
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: `kanban-column ${mg[e]} ${l ? "active" : ""}`,
      children: [
        /* @__PURE__ */ m.jsxs("div", { className: "column-header", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "column-title", children: [
            /* @__PURE__ */ m.jsx("span", { className: "icon", role: "img", "aria-label": t, children: n }),
            /* @__PURE__ */ m.jsx("span", { children: t })
          ] }),
          /* @__PURE__ */ m.jsx("span", { className: "column-count", children: r.length })
        ] }),
        /* @__PURE__ */ m.jsx(eg, { items: r.map((u) => u.id), strategy: Zv, children: /* @__PURE__ */ m.jsx(
          "div",
          {
            ref: o,
            className: `column-body ${s ? "drop-target" : ""}`,
            children: r.length === 0 ? /* @__PURE__ */ m.jsxs("div", { className: "column-empty", children: [
              /* @__PURE__ */ m.jsx("span", { className: "mb-1 text-lg", children: n }),
              /* @__PURE__ */ m.jsx("span", { children: "Drop tickets here" }),
              e === "HANDLE" && /* @__PURE__ */ m.jsx("span", { className: "text-xs mt-1", children: "AI will process these" })
            ] }) : r.map((u) => /* @__PURE__ */ m.jsx(
              Af,
              {
                ticket: u,
                onClick: () => i(u)
              },
              u.id
            ))
          }
        ) })
      ]
    }
  );
}
const gg = [
  { value: "LOW", label: "Low", icon: "↓", color: "text-slate-400" },
  { value: "MEDIUM", label: "Medium", icon: "→", color: "text-blue-400" },
  { value: "HIGH", label: "High", icon: "↑", color: "text-amber-400" },
  { value: "URGENT", label: "Urgent", icon: "⚡", color: "text-red-400" }
], yg = `## What needs to be done
Describe the task clearly. What is the expected outcome?

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Technical Details
Any specific implementation details, files to modify, or constraints?

## Additional Context
Links, screenshots, or references that might help.`;
function wg({
  projectId: e,
  projectName: t,
  branchPresets: n,
  defaultBranch: r,
  members: l = [],
  onClose: i,
  onSubmit: o
}) {
  const [s, u] = g.useState(""), [a, h] = g.useState(yg), [p, v] = g.useState("MEDIUM"), [y, k] = g.useState(r), [x, T] = g.useState(""), [d, c] = g.useState([]), [f, w] = g.useState(""), [C, S] = g.useState(!1), [E, D] = g.useState(!1), [I, _] = g.useState(""), O = g.useRef(null), te = g.useRef(null);
  g.useEffect(() => {
    var N;
    (N = O.current) == null || N.focus();
  }, []), g.useEffect(() => {
    const N = (L) => {
      L.key === "Escape" && i(), (L.metaKey || L.ctrlKey) && L.key === "Enter" && (L.preventDefault(), he(L));
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [i, s, a, p, y]);
  const Z = (N) => N.replace(/##\s*What needs to be done\s*/gi, "").replace(/##\s*Acceptance Criteria\s*/gi, "").replace(/##\s*Technical Details\s*/gi, "").replace(/##\s*Additional Context\s*/gi, "").replace(/Describe the task clearly.*\?/gi, "").replace(/Any specific implementation.*\?/gi, "").replace(/Links, screenshots.*help\./gi, "").replace(/-\s*\[\s*\]\s*Criterion \d+/gi, "").replace(/\s+/g, " ").trim().length >= 20, he = g.useCallback(
    async (N) => {
      var L;
      if (N.preventDefault(), _(""), !s.trim()) {
        _("Title is required"), (L = O.current) == null || L.focus();
        return;
      }
      if (!a.trim()) {
        _("Description is required - the AI needs context to work!");
        return;
      }
      if (!Z(a)) {
        _("Please fill in the description template with actual task details. The AI needs this information to implement the feature correctly.");
        return;
      }
      D(!0);
      try {
        const B = xg(), M = await fetch(`/api/tickets/${e}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": B
          },
          body: JSON.stringify({
            title: s.trim(),
            description: a.trim(),
            priority: p,
            status: "BACKLOG",
            targetBranch: y,
            assigneeId: x || void 0,
            labels: d
          })
        });
        if (!M.ok) {
          const ae = await M.json().catch(() => ({}));
          throw new Error(ae.message || "Failed to create ticket");
        }
        const me = await M.json();
        o(me);
      } catch (B) {
        _(B instanceof Error ? B.message : "Failed to create ticket");
      } finally {
        D(!1);
      }
    },
    [e, s, a, p, y, x, d, o]
  ), Xe = g.useCallback(() => {
    const N = f.trim().toLowerCase();
    N && !d.includes(N) && (c([...d, N]), w(""));
  }, [f, d]), lt = g.useCallback((N) => {
    c(d.filter((L) => L !== N));
  }, [d]), ne = g.useCallback((N) => {
    N.key === "Enter" && (N.preventDefault(), Xe());
  }, [Xe]), j = Z(a);
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      className: "modal-overlay",
      onClick: (N) => {
        N.target === N.currentTarget && i();
      },
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "new-ticket-title",
      children: /* @__PURE__ */ m.jsxs("div", { ref: te, className: "ticket-modal", onClick: (N) => N.stopPropagation(), children: [
        /* @__PURE__ */ m.jsxs("div", { className: "ticket-modal-header", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ m.jsx("div", { className: "ticket-modal-icon", children: /* @__PURE__ */ m.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ m.jsx("path", { d: "M12 5v14M5 12h14" }) }) }),
            /* @__PURE__ */ m.jsxs("div", { children: [
              /* @__PURE__ */ m.jsx("h2", { id: "new-ticket-title", children: "Create Ticket" }),
              t && /* @__PURE__ */ m.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                "in ",
                t
              ] })
            ] })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ m.jsx("span", { className: "text-xs text-muted-foreground hidden sm:block", children: "⌘ + Enter to submit" }),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "ticket-modal-close",
                onClick: i,
                "aria-label": "Close modal",
                children: /* @__PURE__ */ m.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ m.jsx("path", { d: "M18 6L6 18M6 6l12 12" }) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs("form", { onSubmit: he, className: "ticket-modal-form", children: [
          I && /* @__PURE__ */ m.jsxs("div", { className: "ticket-error", children: [
            /* @__PURE__ */ m.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ m.jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ m.jsx("path", { d: "M12 8v4M12 16h.01" })
            ] }),
            I
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "ticket-field", children: [
            /* @__PURE__ */ m.jsxs("label", { className: "ticket-label", children: [
              "Title ",
              /* @__PURE__ */ m.jsx("span", { className: "text-red-400", children: "*" })
            ] }),
            /* @__PURE__ */ m.jsx(
              "input",
              {
                ref: O,
                type: "text",
                className: "ticket-title-input",
                placeholder: "Brief summary of the task",
                value: s,
                onChange: (N) => u(N.target.value),
                required: !0
              }
            )
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "ticket-field", children: [
            /* @__PURE__ */ m.jsxs("label", { className: "ticket-label", children: [
              "Description ",
              /* @__PURE__ */ m.jsx("span", { className: "text-red-400", children: "*" }),
              /* @__PURE__ */ m.jsx("span", { className: "text-muted-foreground font-normal ml-1 text-xs normal-case", children: "— The AI uses this to implement the feature" })
            ] }),
            /* @__PURE__ */ m.jsx(
              "textarea",
              {
                className: `ticket-description-input ${j ? "" : "ticket-description-warning"}`,
                value: a,
                onChange: (N) => h(N.target.value),
                rows: 12,
                required: !0
              }
            ),
            !j && /* @__PURE__ */ m.jsx("p", { className: "ticket-warning-hint", children: "⚠️ Fill in the template with actual task details" })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "ticket-meta-grid", children: [
            /* @__PURE__ */ m.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ m.jsx("label", { className: "ticket-label", children: "Priority" }),
              /* @__PURE__ */ m.jsx("div", { className: "ticket-priority-selector", children: gg.map((N) => /* @__PURE__ */ m.jsxs(
                "button",
                {
                  type: "button",
                  className: `ticket-priority-btn ${p === N.value ? "active" : ""} ${N.color}`,
                  onClick: () => v(N.value),
                  title: N.label,
                  children: [
                    /* @__PURE__ */ m.jsx("span", { className: "ticket-priority-icon", children: N.icon }),
                    /* @__PURE__ */ m.jsx("span", { className: "ticket-priority-label", children: N.label })
                  ]
                },
                N.value
              )) })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ m.jsxs("label", { className: "ticket-label", children: [
                /* @__PURE__ */ m.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "inline w-3.5 h-3.5 mr-1", children: [
                  /* @__PURE__ */ m.jsx("line", { x1: "6", x2: "6", y1: "3", y2: "15" }),
                  /* @__PURE__ */ m.jsx("circle", { cx: "18", cy: "6", r: "3" }),
                  /* @__PURE__ */ m.jsx("circle", { cx: "6", cy: "18", r: "3" }),
                  /* @__PURE__ */ m.jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })
                ] }),
                "Target Branch"
              ] }),
              n.length > 0 ? /* @__PURE__ */ m.jsx("div", { className: "ticket-branch-presets", children: n.map((N) => /* @__PURE__ */ m.jsxs(
                "button",
                {
                  type: "button",
                  className: `ticket-branch-btn ${y === N.branch ? "active" : ""}`,
                  onClick: () => k(N.branch),
                  children: [
                    /* @__PURE__ */ m.jsx("span", { className: "font-medium", children: N.name }),
                    /* @__PURE__ */ m.jsx("code", { children: N.branch })
                  ]
                },
                N.branch
              )) }) : /* @__PURE__ */ m.jsx(
                "input",
                {
                  type: "text",
                  className: "ticket-input",
                  placeholder: "main",
                  value: y,
                  onChange: (N) => k(N.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ m.jsxs(
            "button",
            {
              type: "button",
              className: "ticket-advanced-toggle",
              onClick: () => S(!C),
              children: [
                /* @__PURE__ */ m.jsx(
                  "svg",
                  {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    className: `w-4 h-4 transition-transform ${C ? "rotate-90" : ""}`,
                    children: /* @__PURE__ */ m.jsx("path", { d: "M9 18l6-6-6-6" })
                  }
                ),
                /* @__PURE__ */ m.jsx("span", { children: "More options" })
              ]
            }
          ),
          C && /* @__PURE__ */ m.jsxs("div", { className: "ticket-advanced-section", children: [
            l.length > 0 && /* @__PURE__ */ m.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ m.jsx("label", { className: "ticket-label", children: "Assignee" }),
              /* @__PURE__ */ m.jsxs("div", { className: "ticket-assignee-selector", children: [
                /* @__PURE__ */ m.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `ticket-assignee-btn ${x ? "" : "active"}`,
                    onClick: () => T(""),
                    children: [
                      /* @__PURE__ */ m.jsx("div", { className: "ticket-assignee-avatar unassigned", children: "?" }),
                      /* @__PURE__ */ m.jsx("span", { children: "Unassigned" })
                    ]
                  }
                ),
                l.map((N) => /* @__PURE__ */ m.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `ticket-assignee-btn ${x === N.id ? "active" : ""}`,
                    onClick: () => T(N.id),
                    children: [
                      /* @__PURE__ */ m.jsx("div", { className: "ticket-assignee-avatar", children: N.avatarUrl ? /* @__PURE__ */ m.jsx("img", { src: N.avatarUrl, alt: N.name }) : N.name.substring(0, 2).toUpperCase() }),
                      /* @__PURE__ */ m.jsx("span", { children: N.name })
                    ]
                  },
                  N.id
                ))
              ] })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ m.jsx("label", { className: "ticket-label", children: "Labels" }),
              /* @__PURE__ */ m.jsxs("div", { className: "ticket-labels-input", children: [
                /* @__PURE__ */ m.jsx("div", { className: "ticket-labels-list", children: d.map((N) => /* @__PURE__ */ m.jsxs("span", { className: "ticket-label-tag", children: [
                  N,
                  /* @__PURE__ */ m.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => lt(N),
                      className: "ticket-label-remove",
                      children: "×"
                    }
                  )
                ] }, N)) }),
                /* @__PURE__ */ m.jsx(
                  "input",
                  {
                    type: "text",
                    className: "ticket-label-input",
                    placeholder: "Add label...",
                    value: f,
                    onChange: (N) => w(N.target.value),
                    onKeyDown: ne,
                    onBlur: Xe
                  }
                )
              ] }),
              /* @__PURE__ */ m.jsx("p", { className: "ticket-hint", children: "Press Enter to add a label" })
            ] }),
            n.length > 0 && /* @__PURE__ */ m.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ m.jsx("label", { className: "ticket-label", children: "Custom Branch" }),
              /* @__PURE__ */ m.jsx(
                "input",
                {
                  type: "text",
                  className: "ticket-input font-mono",
                  placeholder: "Or enter a custom branch...",
                  value: y,
                  onChange: (N) => k(N.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "ticket-modal-actions", children: [
            /* @__PURE__ */ m.jsx(
              "button",
              {
                type: "button",
                className: "ticket-btn-secondary",
                onClick: i,
                disabled: E,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                type: "submit",
                className: "ticket-btn-primary",
                disabled: E || !s.trim() || !j,
                children: E ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                  /* @__PURE__ */ m.jsx("div", { className: "ticket-spinner" }),
                  "Creating..."
                ] }) : /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                  /* @__PURE__ */ m.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-4 h-4", children: /* @__PURE__ */ m.jsx("path", { d: "M12 5v14M5 12h14" }) }),
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
function xg() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
const Sg = {
  BACKLOG: "Backlog",
  TODO: "To Do",
  HANDLE: "Handle (AI Queue)",
  AI_PROCESSING: "AI Processing",
  TO_REVIEW: "To Review",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
  CANCELLED: "Cancelled"
};
function kg({
  ticket: e,
  projectId: t,
  onClose: n,
  onUpdate: r
}) {
  const [l, i] = g.useState(!1), [o, s] = g.useState(e.title), [u, a] = g.useState(e.description || ""), [h, p] = g.useState(e.priority), [v, y] = g.useState(e.status), [k, x] = g.useState(!1), [T, d] = g.useState(""), c = g.useCallback(async () => {
    if (!o.trim()) {
      d("Title is required");
      return;
    }
    x(!0), d("");
    try {
      const S = Xa(), E = await fetch(`/api/tickets/${t}/${e.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": S
        },
        body: JSON.stringify({
          title: o.trim(),
          description: u.trim(),
          priority: h,
          status: v
        })
      });
      if (!E.ok)
        throw new Error("Failed to update ticket");
      const D = await E.json();
      r(D);
    } catch (S) {
      d(S instanceof Error ? S.message : "Failed to update ticket");
    } finally {
      x(!1);
    }
  }, [t, e.id, o, u, h, v, r]), f = g.useCallback(async () => {
    if (confirm("Are you sure you want to delete this ticket?")) {
      x(!0);
      try {
        const S = Xa();
        if (!(await fetch(`/api/tickets/${t}/${e.id}`, {
          method: "DELETE",
          headers: {
            "X-CSRF-Token": S
          }
        })).ok)
          throw new Error("Failed to delete ticket");
        r({ ...e, status: "CANCELLED" }), n();
      } catch (S) {
        d(S instanceof Error ? S.message : "Failed to delete ticket");
      } finally {
        x(!1);
      }
    }
  }, [t, e, r, n]), w = g.useCallback(
    (S) => {
      S.key === "Escape" && n();
    },
    [n]
  ), C = e.status === "HANDLE" || e.status === "AI_PROCESSING";
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      className: "modal-overlay",
      onClick: n,
      onKeyDown: w,
      role: "dialog",
      "aria-modal": "true",
      children: /* @__PURE__ */ m.jsxs(
        "div",
        {
          className: "modal-content modal-lg",
          onClick: (S) => S.stopPropagation(),
          children: [
            /* @__PURE__ */ m.jsxs("div", { className: "modal-header", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "flex-1", children: [
                l ? /* @__PURE__ */ m.jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-input text-lg font-semibold",
                    value: o,
                    onChange: (S) => s(S.target.value),
                    autoFocus: !0
                  }
                ) : /* @__PURE__ */ m.jsx("h2", { className: "text-lg font-semibold", children: e.title }),
                /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
                  /* @__PURE__ */ m.jsx("span", { className: `status-badge status-${e.status.toLowerCase()}`, children: Sg[e.status] }),
                  /* @__PURE__ */ m.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                    "#",
                    e.id.slice(-4)
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  className: "modal-close",
                  onClick: n,
                  "aria-label": "Close modal",
                  children: "×"
                }
              )
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "modal-body", children: [
              T && /* @__PURE__ */ m.jsx("div", { className: "mb-4 p-3 text-sm rounded-md bg-destructive/10 text-destructive border border-destructive/20", children: T }),
              C && /* @__PURE__ */ m.jsxs("div", { className: "mb-4 p-4 rounded-md bg-status-processing/10 border border-status-processing/20", children: [
                /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2 text-status-processing", children: [
                  /* @__PURE__ */ m.jsx("div", { className: "ai-spinner" }),
                  /* @__PURE__ */ m.jsx("span", { className: "font-medium", children: e.status === "HANDLE" ? "Queued for AI Processing" : "AI is working on this ticket..." })
                ] }),
                e.status === "AI_PROCESSING" && /* @__PURE__ */ m.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "The Cursor Agent is implementing this task. Do not modify while processing." })
              ] }),
              e.prLink && /* @__PURE__ */ m.jsx("div", { className: "mb-4 p-4 rounded-md bg-status-success/10 border border-status-success/20", children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ m.jsx("span", { className: "font-medium text-status-success", children: "Pull Request Ready" }),
                /* @__PURE__ */ m.jsx(
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
              e.aiSummary && /* @__PURE__ */ m.jsxs("div", { className: "mb-4 p-4 rounded-md bg-muted", children: [
                /* @__PURE__ */ m.jsx("h4", { className: "font-medium mb-2", children: "AI Summary" }),
                /* @__PURE__ */ m.jsx("p", { className: "text-sm text-muted-foreground", children: e.aiSummary })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ m.jsx("label", { className: "form-label", children: "Description" }),
                l ? /* @__PURE__ */ m.jsx(
                  "textarea",
                  {
                    className: "form-input",
                    value: u,
                    onChange: (S) => a(S.target.value),
                    rows: 6,
                    placeholder: "Add task details, requirements, acceptance criteria..."
                  }
                ) : /* @__PURE__ */ m.jsx("div", { className: "p-3 rounded-md bg-muted min-h-[100px] text-sm whitespace-pre-wrap", children: e.description || /* @__PURE__ */ m.jsx("span", { className: "text-muted-foreground", children: "No description" }) })
              ] }),
              l && /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ m.jsxs("div", { className: "form-group", children: [
                  /* @__PURE__ */ m.jsx("label", { className: "form-label", children: "Priority" }),
                  /* @__PURE__ */ m.jsxs(
                    "select",
                    {
                      className: "form-input",
                      value: h,
                      onChange: (S) => p(S.target.value),
                      children: [
                        /* @__PURE__ */ m.jsx("option", { value: "LOW", children: "Low" }),
                        /* @__PURE__ */ m.jsx("option", { value: "MEDIUM", children: "Medium" }),
                        /* @__PURE__ */ m.jsx("option", { value: "HIGH", children: "High" }),
                        /* @__PURE__ */ m.jsx("option", { value: "URGENT", children: "Urgent" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ m.jsxs("div", { className: "form-group", children: [
                  /* @__PURE__ */ m.jsx("label", { className: "form-label", children: "Status" }),
                  /* @__PURE__ */ m.jsxs(
                    "select",
                    {
                      className: "form-input",
                      value: v,
                      onChange: (S) => y(S.target.value),
                      disabled: C,
                      children: [
                        /* @__PURE__ */ m.jsx("option", { value: "BACKLOG", children: "Backlog" }),
                        /* @__PURE__ */ m.jsx("option", { value: "TODO", children: "To Do" }),
                        /* @__PURE__ */ m.jsx("option", { value: "HANDLE", children: "Handle (AI)" }),
                        /* @__PURE__ */ m.jsx("option", { value: "TO_REVIEW", children: "To Review" }),
                        /* @__PURE__ */ m.jsx("option", { value: "IN_PROGRESS", children: "In Progress" }),
                        /* @__PURE__ */ m.jsx("option", { value: "DONE", children: "Done" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ m.jsx("div", { className: "mt-6 pt-4 border-t border-border", children: /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [
                /* @__PURE__ */ m.jsxs("div", { children: [
                  /* @__PURE__ */ m.jsx("span", { className: "text-muted-foreground", children: "Created:" }),
                  /* @__PURE__ */ m.jsx("span", { className: "ml-2", children: new Date(e.createdAt).toLocaleDateString() })
                ] }),
                /* @__PURE__ */ m.jsxs("div", { children: [
                  /* @__PURE__ */ m.jsx("span", { className: "text-muted-foreground", children: "Updated:" }),
                  /* @__PURE__ */ m.jsx("span", { className: "ml-2", children: new Date(e.updatedAt).toLocaleDateString() })
                ] }),
                e.assignee && /* @__PURE__ */ m.jsxs("div", { children: [
                  /* @__PURE__ */ m.jsx("span", { className: "text-muted-foreground", children: "Assignee:" }),
                  /* @__PURE__ */ m.jsx("span", { className: "ml-2", children: e.assignee.name })
                ] }),
                e.createdBy && /* @__PURE__ */ m.jsxs("div", { children: [
                  /* @__PURE__ */ m.jsx("span", { className: "text-muted-foreground", children: "Created by:" }),
                  /* @__PURE__ */ m.jsx("span", { className: "ml-2", children: e.createdBy.name })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ m.jsx("div", { className: "modal-actions", children: l ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-destructive",
                  onClick: f,
                  disabled: k,
                  children: "Delete"
                }
              ),
              /* @__PURE__ */ m.jsx("div", { className: "flex-1" }),
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-secondary",
                  onClick: () => {
                    i(!1), s(e.title), a(e.description || ""), p(e.priority), y(e.status);
                  },
                  disabled: k,
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-primary",
                  onClick: c,
                  disabled: k,
                  children: k ? "Saving..." : "Save Changes"
                }
              )
            ] }) : /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-secondary",
                  onClick: n,
                  children: "Close"
                }
              ),
              /* @__PURE__ */ m.jsx(
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
function Xa() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
const Cg = [
  { id: "BACKLOG", title: "Backlog", icon: "📋" },
  { id: "TODO", title: "To Do", icon: "📝" },
  { id: "HANDLE", title: "Handle", icon: "🤖" },
  { id: "AI_PROCESSING", title: "AI Processing", icon: "⚡" },
  { id: "TO_REVIEW", title: "To Review", icon: "👀" },
  { id: "IN_PROGRESS", title: "In Progress", icon: "🔧" },
  { id: "DONE", title: "Done", icon: "✅" }
];
function Eg() {
  const [e, t] = g.useState(null), [n, r] = g.useState(null), [l, i] = g.useState(null), [o, s] = g.useState(!1), [u, a] = g.useState("BACKLOG");
  g.useEffect(() => {
    const d = document.getElementById("board-state");
    if (d != null && d.textContent)
      try {
        const f = JSON.parse(d.textContent);
        t(f);
      } catch (f) {
        console.error("Failed to parse board state:", f);
      }
    const c = document.getElementById("new-ticket-btn");
    return c && c.addEventListener("click", () => s(!0)), document.querySelectorAll(".tab-btn").forEach((f) => {
      f.addEventListener("click", (w) => {
        const C = w.target.dataset.column;
        C && (a(C), document.querySelectorAll(".tab-btn").forEach((S) => {
          S.classList.remove("bg-muted"), S.classList.add("hover:bg-muted");
        }), w.target.classList.add("bg-muted"), w.target.classList.remove("hover:bg-muted"));
      });
    }), () => {
      c && c.removeEventListener("click", () => s(!0));
    };
  }, []), g.useEffect(() => {
    if (!(e != null && e.projectId)) return;
    const d = setInterval(async () => {
      var c, f;
      if (!(n || l || o))
        try {
          const w = await fetch(`/project/${e.projectId}/board/state`);
          if (!w.ok) return;
          const C = await w.json();
          (C.tickets.length !== e.tickets.length || C.tickets.some((E) => {
            const D = e.tickets.find((I) => I.id === E.id);
            return !D || D.status !== E.status || D.title !== E.title || D.assigneeId !== E.assigneeId;
          }) || ((c = C.members) == null ? void 0 : c.length) !== ((f = e.members) == null ? void 0 : f.length)) && (t(C), vr("Board updated", "success"));
        } catch (w) {
          console.debug("Sync poll failed:", w);
        }
    }, 5e3);
    return () => clearInterval(d);
  }, [e == null ? void 0 : e.projectId, e == null ? void 0 : e.tickets, n, l, o]);
  const h = Lm(
    Ma(mu, {
      activationConstraint: { distance: 8 }
    }),
    Ma(pu, {
      coordinateGetter: cg
    })
  ), p = g.useCallback(
    (d) => {
      const c = d.active.id, f = e == null ? void 0 : e.tickets.find((w) => w.id === c);
      f && r(f);
    },
    [e]
  ), v = g.useCallback((d) => {
  }, []), y = g.useCallback(
    async (d) => {
      const { active: c, over: f } = d;
      if (r(null), !f || !e) return;
      const w = c.id, C = f.id, S = e.tickets.find((E) => E.id === w);
      if (!(!S || S.status === C)) {
        t((E) => E && {
          ...E,
          tickets: E.tickets.map(
            (D) => D.id === w ? { ...D, status: C } : D
          )
        }), C === "HANDLE" && vr(`Ticket #${S.id.slice(-4)} dispatched to Cursor Agent`, "warning");
        try {
          const E = Ng();
          if (!(await fetch(
            `/api/tickets/${e.projectId}/${w}/status`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": E
              },
              body: JSON.stringify({ status: C })
            }
          )).ok)
            throw new Error("Failed to update ticket status");
          C === "HANDLE" && vr("AI agent started processing", "success");
        } catch (E) {
          console.error("Failed to update ticket:", E), vr("Failed to update ticket", "error"), t((D) => D && {
            ...D,
            tickets: D.tickets.map(
              (I) => I.id === w ? { ...I, status: S.status } : I
            )
          });
        }
      }
    },
    [e]
  ), k = g.useCallback((d) => {
    i(d);
  }, []), x = g.useCallback((d) => {
    t((c) => c && {
      ...c,
      tickets: c.tickets.map(
        (f) => f.id === d.id ? d : f
      )
    }), i(null);
  }, []), T = g.useCallback((d) => {
    t((c) => c && {
      ...c,
      tickets: [...c.tickets, d]
    }), s(!1), vr("Ticket created successfully", "success");
  }, []);
  return e ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsxs(
      Pv,
      {
        sensors: h,
        collisionDetection: pf,
        onDragStart: p,
        onDragOver: v,
        onDragEnd: y,
        children: [
          /* @__PURE__ */ m.jsx("div", { className: "kanban-container", children: Cg.map((d) => /* @__PURE__ */ m.jsx(
            vg,
            {
              id: d.id,
              title: d.title,
              icon: d.icon,
              tickets: e.tickets.filter((c) => c.status === d.id),
              isActive: u === d.id,
              onTicketClick: k
            },
            d.id
          )) }),
          /* @__PURE__ */ m.jsx(Xv, { children: n ? /* @__PURE__ */ m.jsx(
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
    o && /* @__PURE__ */ m.jsx(
      wg,
      {
        projectId: e.projectId,
        projectName: e.projectName,
        branchPresets: e.branchPresets || [],
        defaultBranch: e.defaultBranch || "main",
        members: e.members || [],
        onClose: () => s(!1),
        onSubmit: T
      }
    ),
    l && /* @__PURE__ */ m.jsx(
      kg,
      {
        ticket: l,
        projectId: e.projectId,
        onClose: () => i(null),
        onUpdate: x
      }
    )
  ] }) : /* @__PURE__ */ m.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ m.jsx("div", { className: "ai-spinner" }) });
}
function Ng() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
function vr(e, t = "success") {
  typeof window < "u" && window.showToast && window.showToast(e, t);
}
function Ya() {
  const e = document.getElementById("kanban-board");
  if (!e) {
    console.warn("Kanban board container not found");
    return;
  }
  xo.createRoot(e).render(
    /* @__PURE__ */ m.jsx(b.StrictMode, { children: /* @__PURE__ */ m.jsx(Eg, {}) })
  );
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Ya) : Ya();
