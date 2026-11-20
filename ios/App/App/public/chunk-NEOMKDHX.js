import {
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/@ionic/core/components/p-Ct2aBEue.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var t = "hydrated";
var n = class {
  constructor() {
    this.m = /* @__PURE__ */ new Map();
  }
  reset(t3) {
    this.m = new Map(Object.entries(t3));
  }
  get(t3, n2) {
    const e2 = this.m.get(t3);
    return void 0 !== e2 ? e2 : n2;
  }
  getBoolean(t3, n2 = false) {
    const e2 = this.m.get(t3);
    return void 0 === e2 ? n2 : "string" == typeof e2 ? "true" === e2 : !!e2;
  }
  getNumber(t3, n2) {
    const e2 = parseFloat(this.m.get(t3));
    return isNaN(e2) ? void 0 !== n2 ? n2 : NaN : e2;
  }
  set(t3, n2) {
    this.m.set(t3, n2);
  }
};
var e = new n();
var o = (t3) => {
  try {
    const n2 = t3.sessionStorage.getItem(c);
    return null !== n2 ? JSON.parse(n2) : {};
  } catch {
    return {};
  }
};
var s = (t3, n2) => {
  try {
    t3.sessionStorage.setItem(c, JSON.stringify(n2));
  } catch {
    return;
  }
};
var l = (t3) => {
  const n2 = {};
  return t3.location.search.slice(1).split("&").map(((t4) => t4.split("="))).map((([t4, n3]) => {
    try {
      return [decodeURIComponent(t4), decodeURIComponent(n3)];
    } catch {
      return ["", ""];
    }
  })).filter((([t4]) => i(t4, r))).map((([t4, n3]) => [t4.slice(r.length), n3])).forEach((([t4, e2]) => {
    n2[t4] = e2;
  })), n2;
};
var i = (t3, n2) => t3.substr(0, n2.length) === n2;
var r = "ionic:";
var c = "ionic-persist-config";
var u;
!(function(t3) {
  t3.OFF = "OFF", t3.ERROR = "ERROR", t3.WARN = "WARN", t3.DEBUG = "DEBUG";
})(u || (u = {}));
var f = { [u.OFF]: 0, [u.ERROR]: 1, [u.WARN]: 2, [u.DEBUG]: 3 };
var a = (t3) => {
  const n2 = String(e.get("logLevel", u.WARN)).toUpperCase();
  return f[n2] >= f[t3];
};
var d = (t3, ...n2) => {
  if (a(u.WARN)) return console.warn(`[Ionic Warning]: ${t3}`, ...n2);
};
var h = (t3, ...n2) => {
  if (a(u.ERROR)) return console.error(`[Ionic Error]: ${t3}`, ...n2);
};
var v = (t3, ...n2) => console.error(`<${t3.tagName.toLowerCase()}> must be used inside ${n2.join(" or ")}.`);
var p = { isBrowser: true };
var $ = ((t3) => (t3.Undefined = "undefined", t3.Null = "null", t3.String = "string", t3.Number = "number", t3.SpecialNumber = "number", t3.Boolean = "boolean", t3.BigInt = "bigint", t3))($ || {});
var b = ((t3) => (t3.Array = "array", t3.Date = "date", t3.Map = "map", t3.Object = "object", t3.RegularExpression = "regexp", t3.Set = "set", t3.Channel = "channel", t3.Symbol = "symbol", t3))(b || {});
var g = "type";
var m = "value";
var y = "serialized:";
function w(t3, n2, e2) {
  const o2 = "undefined" != typeof HTMLElement ? HTMLElement.prototype : null;
  for (; t3 && t3 !== o2; ) {
    const o3 = Object.getOwnPropertyDescriptor(t3, n2);
    if (o3 && (!e2 || o3.get)) return o3;
    t3 = Object.getPrototypeOf(t3);
  }
}
var j;
var O = (t3, n2) => {
  var e2;
  Object.entries(null != (e2 = n2.o.t) ? e2 : {}).map((([e3, [o2]]) => {
    if (31 & o2 || 32 & o2) {
      const o3 = t3[e3], s2 = w(Object.getPrototypeOf(t3), e3, true) || Object.getOwnPropertyDescriptor(t3, e3);
      s2 && Object.defineProperty(t3, e3, { get() {
        return s2.get.call(this);
      }, set(t4) {
        s2.set.call(this, t4);
      }, configurable: true, enumerable: true }), n2.l.has(e3) ? t3[e3] = n2.l.get(e3) : void 0 !== o3 && (t3[e3] = o3);
    }
  }));
};
var N = (t3) => {
  if (t3.__stencil__getHostRef) return t3.__stencil__getHostRef();
};
var S = (t3, n2) => n2 in t3;
var x = (t3, n2) => (0, console.error)(t3, n2);
var E = /* @__PURE__ */ new Map();
var k = [];
var C = "s-id";
var M = "sty-id";
var I = "c-id";
var R = "http://www.w3.org/1999/xlink";
var A = "undefined" != typeof window ? window : {};
var L = A.HTMLElement || class {
};
var B = { i: 0, u: "", jmp: (t3) => t3(), raf: (t3) => requestAnimationFrame(t3), ael: (t3, n2, e2, o2) => t3.addEventListener(n2, e2, o2), rel: (t3, n2, e2, o2) => t3.removeEventListener(n2, e2, o2), ce: (t3, n2) => new CustomEvent(t3, n2) };
var T = (() => {
  var t3;
  let n2 = false;
  try {
    null == (t3 = A.document) || t3.addEventListener("e", null, Object.defineProperty({}, "passive", { get() {
      n2 = true;
    } }));
  } catch (t4) {
  }
  return n2;
})();
var _ = (() => {
  try {
    return !!A.document.adoptedStyleSheets && (new CSSStyleSheet(), "function" == typeof new CSSStyleSheet().replaceSync);
  } catch (t3) {
  }
  return false;
})();
var F = !!_ && (() => !!A.document && Object.getOwnPropertyDescriptor(A.document.adoptedStyleSheets, "length").writable)();
var U = false;
var D = [];
var W = [];
var V = () => {
  var t3;
  return (null == (t3 = A.document) ? void 0 : t3.hidden) ? setTimeout(q, 16) : B.raf(q);
};
var H = (t3, n2) => (e2) => {
  t3.push(e2), U || (U = true, n2 && 4 & B.i ? z(q) : V());
};
var P = (t3) => {
  for (let n2 = 0; n2 < t3.length; n2++) try {
    t3[n2](performance.now());
  } catch (t4) {
    x(t4);
  }
  t3.length = 0;
};
var q = () => {
  P(D), P(W), (U = D.length > 0) && V();
};
var z = (t3) => Promise.resolve(void 0).then(t3);
var J = H(D, false);
var Y = H(W, true);
function K(t3) {
  const n2 = { mode: "open" };
  n2.delegatesFocus = !!(16 & t3.i);
  const e2 = this.attachShadow(n2);
  void 0 === j && (j = null), j && (F ? e2.adoptedStyleSheets.push(j) : e2.adoptedStyleSheets = [...e2.adoptedStyleSheets, j]);
}
var Q = (t3) => {
  const n2 = Et(t3, "childNodes");
  t3.tagName && t3.tagName.includes("-") && t3["s-cr"] && "SLOT-FB" !== t3.tagName && tt(n2, t3.tagName).forEach(((t4) => {
    1 === t4.nodeType && "SLOT-FB" === t4.tagName && (t4.hidden = !!nt(t4, st(t4), false).length);
  }));
  let e2 = 0;
  for (e2 = 0; e2 < n2.length; e2++) {
    const t4 = n2[e2];
    1 === t4.nodeType && Et(t4, "childNodes").length && Q(t4);
  }
};
var X = (t3) => {
  const n2 = [];
  for (let e2 = 0; e2 < t3.length; e2++) {
    const o2 = t3[e2]["s-nr"] || void 0;
    o2 && o2.isConnected && n2.push(o2);
  }
  return n2;
};
function tt(t3, n2, e2) {
  let o2, s2 = 0, l2 = [];
  for (; s2 < t3.length; s2++) {
    if (o2 = t3[s2], o2["s-sr"] && (!n2 || o2["s-hn"] === n2) && (void 0 === e2 || st(o2) === e2) && (l2.push(o2), void 0 !== e2)) return l2;
    l2 = [...l2, ...tt(Et(o2, "childNodes"), n2, e2)];
  }
  return l2;
}
var nt = (t3, n2, e2 = true) => {
  const o2 = [];
  (e2 && t3["s-sr"] || !t3["s-sr"]) && o2.push(t3);
  let s2 = t3;
  for (; s2 = s2.nextSibling; ) st(s2) !== n2 || !e2 && s2["s-sr"] || o2.push(s2);
  return o2;
};
var et = (t3, n2) => 1 === t3.nodeType ? null === t3.getAttribute("slot") && "" === n2 || t3.getAttribute("slot") === n2 : t3["s-sn"] === n2 || "" === n2;
var ot = (t3, n2, e2, o2) => {
  if (t3["s-ol"] && t3["s-ol"].isConnected) return;
  const s2 = document.createTextNode("");
  if (s2["s-nr"] = t3, !n2["s-cr"] || !n2["s-cr"].parentNode) return;
  const l2 = n2["s-cr"].parentNode, i2 = Et(l2, e2 ? "prepend" : "appendChild");
  if (void 0 !== o2) {
    s2["s-oo"] = o2;
    const t4 = Et(l2, "childNodes"), n3 = [s2];
    t4.forEach(((t5) => {
      t5["s-nr"] && n3.push(t5);
    })), n3.sort(((t5, n4) => !t5["s-oo"] || t5["s-oo"] < (n4["s-oo"] || 0) ? -1 : !n4["s-oo"] || n4["s-oo"] < t5["s-oo"] ? 1 : 0)), n3.forEach(((t5) => i2.call(l2, t5)));
  } else i2.call(l2, s2);
  t3["s-ol"] = s2, t3["s-sh"] = n2["s-hn"];
};
var st = (t3) => "string" == typeof t3["s-sn"] ? t3["s-sn"] : 1 === t3.nodeType && t3.getAttribute("slot") || void 0;
function lt(t3) {
  if (t3.assignedElements || t3.assignedNodes || !t3["s-sr"]) return;
  const n2 = (n3) => function(t4) {
    const e2 = [], o2 = this["s-sn"];
    (null == t4 ? void 0 : t4.flatten) && console.error("\n          Flattening is not supported for Stencil non-shadow slots.\n          You can use `.childNodes` to nested slot fallback content.\n          If you have a particular use case, please open an issue on the Stencil repo.\n        ");
    const s2 = this["s-cr"].parentElement;
    return (s2.__childNodes ? s2.childNodes : X(s2.childNodes)).forEach(((t5) => {
      o2 === st(t5) && e2.push(t5);
    })), n3 ? e2.filter(((t5) => 1 === t5.nodeType)) : e2;
  }.bind(t3);
  t3.assignedElements = n2(true), t3.assignedNodes = n2(false);
}
function it(t3) {
  t3.dispatchEvent(new CustomEvent("slotchange", { bubbles: false, cancelable: false, composed: false }));
}
function rt(t3, n2) {
  var e2;
  if (!(n2 = n2 || (null == (e2 = t3["s-ol"]) ? void 0 : e2.parentElement))) return { slotNode: null, slotName: "" };
  const o2 = t3["s-sn"] = st(t3) || "";
  return { slotNode: tt(Et(n2, "childNodes"), n2.tagName, o2)[0], slotName: o2 };
}
var ct = (t3) => {
  if (t3.__cloneNode) return;
  const n2 = t3.__cloneNode = t3.cloneNode;
  t3.cloneNode = function(t4) {
    const e2 = this.shadowRoot && true, o2 = n2.call(this, !!e2 && t4);
    if (!e2 && t4) {
      let t5, n3, e3 = 0;
      const s2 = ["s-id", "s-cr", "s-lr", "s-rc", "s-sc", "s-p", "s-cn", "s-sr", "s-sn", "s-hn", "s-ol", "s-nr", "s-si", "s-rf", "s-scs"], l2 = this.__childNodes || this.childNodes;
      for (; e3 < l2.length; e3++) t5 = l2[e3]["s-nr"], n3 = s2.every(((t6) => !l2[e3][t6])), t5 && (o2.__appendChild ? o2.__appendChild(t5.cloneNode(true)) : o2.appendChild(t5.cloneNode(true))), n3 && o2.appendChild(l2[e3].cloneNode(true));
    }
    return o2;
  };
};
var ut = (t3) => {
  t3.__appendChild || (t3.__appendChild = t3.appendChild, t3.appendChild = function(t4) {
    const { slotName: n2, slotNode: e2 } = rt(t4, this);
    if (e2) {
      ot(t4, e2);
      const o2 = nt(e2, n2), s2 = o2[o2.length - 1], l2 = Et(s2, "parentNode"), i2 = Et(l2, "insertBefore")(t4, s2.nextSibling);
      return it(e2), Q(this), i2;
    }
    return this.__appendChild(t4);
  });
};
var ft = (t3) => {
  t3.__removeChild || (t3.__removeChild = t3.removeChild, t3.removeChild = function(t4) {
    return t4 && void 0 !== t4["s-sn"] && tt(this.__childNodes || this.childNodes, this.tagName, t4["s-sn"]) && t4.isConnected ? (t4.remove(), void Q(this)) : this.__removeChild(t4);
  });
};
var at = (t3) => {
  t3.__prepend || (t3.__prepend = t3.prepend, t3.prepend = function(...n2) {
    n2.forEach(((n3) => {
      "string" == typeof n3 && (n3 = this.ownerDocument.createTextNode(n3));
      const e2 = (n3["s-sn"] = st(n3)) || "", o2 = tt(Et(this, "childNodes"), this.tagName, e2)[0];
      if (o2) {
        ot(n3, o2, true);
        const t4 = nt(o2, e2)[0], s2 = Et(t4, "parentNode"), l2 = Et(s2, "insertBefore")(n3, Et(t4, "nextSibling"));
        return it(o2), l2;
      }
      return 1 === n3.nodeType && n3.getAttribute("slot") && (n3.hidden = true), t3.__prepend(n3);
    }));
  });
};
var dt = (t3) => {
  t3.__append || (t3.__append = t3.append, t3.append = function(...t4) {
    t4.forEach(((t5) => {
      "string" == typeof t5 && (t5 = this.ownerDocument.createTextNode(t5)), this.appendChild(t5);
    }));
  });
};
var ht = (t3) => {
  if (t3.__insertAdjacentHTML) return;
  const n2 = t3.insertAdjacentHTML;
  t3.insertAdjacentHTML = function(t4, e2) {
    if ("afterbegin" !== t4 && "beforeend" !== t4) return n2.call(this, t4, e2);
    const o2 = this.ownerDocument.createElement("_");
    let s2;
    if (o2.innerHTML = e2, "afterbegin" === t4) for (; s2 = o2.firstChild; ) this.prepend(s2);
    else if ("beforeend" === t4) for (; s2 = o2.firstChild; ) this.append(s2);
  };
};
var vt = (t3) => {
  t3.insertAdjacentText = function(t4, n2) {
    this.insertAdjacentHTML(t4, n2);
  };
};
var pt = (t3) => {
  t3.__insertBefore || t3.__insertBefore || (t3.__insertBefore = t3.insertBefore, t3.insertBefore = function(t4, n2) {
    const { slotName: e2, slotNode: o2 } = rt(t4, this), s2 = this.__childNodes ? this.childNodes : X(this.childNodes);
    if (o2) {
      let l3 = false;
      if (s2.forEach(((s3) => {
        if (s3 !== n2 && null !== n2) ;
        else {
          if (l3 = true, null === n2 || e2 !== n2["s-sn"]) return void this.appendChild(t4);
          if (e2 === n2["s-sn"]) {
            ot(t4, o2);
            const e3 = Et(n2, "parentNode");
            Et(e3, "insertBefore")(t4, n2), it(o2);
          }
        }
      })), l3) return t4;
    }
    const l2 = null == n2 ? void 0 : n2.__parentNode;
    return l2 && !this.isSameNode(l2) ? this.appendChild(t4) : this.__insertBefore(t4, n2);
  });
};
var $t = (t3) => {
  if (t3.__insertAdjacentElement) return;
  const n2 = t3.insertAdjacentElement;
  t3.insertAdjacentElement = function(t4, e2) {
    return "afterbegin" !== t4 && "beforeend" !== t4 ? n2.call(this, t4, e2) : "afterbegin" === t4 ? (this.prepend(e2), e2) : "beforeend" === t4 ? (this.append(e2), e2) : e2;
  };
};
var bt = (t3) => {
  xt("textContent", t3), Object.defineProperty(t3, "textContent", { get: function() {
    let t4 = "";
    return (this.__childNodes ? this.childNodes : X(this.childNodes)).forEach(((n2) => t4 += n2.textContent || "")), t4;
  }, set: function(t4) {
    (this.__childNodes ? this.childNodes : X(this.childNodes)).forEach(((t5) => {
      t5["s-ol"] && t5["s-ol"].remove(), t5.remove();
    })), this.insertAdjacentHTML("beforeend", t4);
  } });
};
var gt = (t3) => {
  class n2 extends Array {
    item(t4) {
      return this[t4];
    }
  }
  xt("children", t3), Object.defineProperty(t3, "children", { get() {
    return this.childNodes.filter(((t4) => 1 === t4.nodeType));
  } }), Object.defineProperty(t3, "childElementCount", { get() {
    return this.children.length;
  } }), xt("firstChild", t3), Object.defineProperty(t3, "firstChild", { get() {
    return this.childNodes[0] || null;
  } }), xt("lastChild", t3), Object.defineProperty(t3, "lastChild", { get() {
    return this.childNodes[this.childNodes.length - 1] || null;
  } }), xt("childNodes", t3), Object.defineProperty(t3, "childNodes", { get() {
    const t4 = new n2();
    return t4.push(...X(this.__childNodes)), t4;
  } });
};
var mt = (t3) => {
  t3 && !t3.__nextSibling && (xt("nextSibling", t3), Object.defineProperty(t3, "nextSibling", { get: function() {
    var t4;
    const n2 = null == (t4 = this["s-ol"]) ? void 0 : t4.parentNode.childNodes, e2 = null == n2 ? void 0 : n2.indexOf(this);
    return n2 && e2 > -1 ? n2[e2 + 1] || null : this.__nextSibling;
  } }));
};
var yt = (t3) => {
  t3 && !t3.__nextElementSibling && (xt("nextElementSibling", t3), Object.defineProperty(t3, "nextElementSibling", { get: function() {
    var t4;
    const n2 = null == (t4 = this["s-ol"]) ? void 0 : t4.parentNode.children, e2 = null == n2 ? void 0 : n2.indexOf(this);
    return n2 && e2 > -1 ? n2[e2 + 1] || null : this.__nextElementSibling;
  } }));
};
var wt = (t3) => {
  t3 && !t3.__previousSibling && (xt("previousSibling", t3), Object.defineProperty(t3, "previousSibling", { get: function() {
    var t4;
    const n2 = null == (t4 = this["s-ol"]) ? void 0 : t4.parentNode.childNodes, e2 = null == n2 ? void 0 : n2.indexOf(this);
    return n2 && e2 > -1 ? n2[e2 - 1] || null : this.__previousSibling;
  } }));
};
var jt = (t3) => {
  t3 && !t3.__previousElementSibling && (xt("previousElementSibling", t3), Object.defineProperty(t3, "previousElementSibling", { get: function() {
    var t4;
    const n2 = null == (t4 = this["s-ol"]) ? void 0 : t4.parentNode.children, e2 = null == n2 ? void 0 : n2.indexOf(this);
    return n2 && e2 > -1 ? n2[e2 - 1] || null : this.__previousElementSibling;
  } }));
};
var Ot = (t3) => {
  t3 && !t3.__parentNode && (xt("parentNode", t3), Object.defineProperty(t3, "parentNode", { get: function() {
    var t4;
    return (null == (t4 = this["s-ol"]) ? void 0 : t4.parentNode) || this.__parentNode;
  }, set: function(t4) {
    this.__parentNode = t4;
  } }));
};
var Nt = ["children", "nextElementSibling", "previousElementSibling"];
var St = ["childNodes", "firstChild", "lastChild", "nextSibling", "previousSibling", "textContent", "parentNode"];
function xt(t3, n2) {
  if (!globalThis.Node || !globalThis.Element) return;
  let e2;
  Nt.includes(t3) ? e2 = Object.getOwnPropertyDescriptor(Element.prototype, t3) : St.includes(t3) && (e2 = Object.getOwnPropertyDescriptor(Node.prototype, t3)), e2 || (e2 = Object.getOwnPropertyDescriptor(n2, t3)), e2 && Object.defineProperty(n2, "__" + t3, e2);
}
function Et(t3, n2) {
  if ("__" + n2 in t3) {
    const e2 = t3["__" + n2];
    return "function" != typeof e2 ? e2 : e2.bind(t3);
  }
  return "function" != typeof t3[n2] ? t3[n2] : t3[n2].bind(t3);
}
var kt = /* @__PURE__ */ new WeakMap();
var Ct = (t3, n2, e2) => {
  let o2 = E.get(t3);
  _ && e2 ? (o2 = o2 || new CSSStyleSheet(), "string" == typeof o2 ? o2 = n2 : o2.replaceSync(n2)) : o2 = n2, E.set(t3, o2);
};
var Mt = (t3, n2, e2) => {
  var o2, s2, l2;
  const i2 = It(n2, e2), r2 = E.get(i2);
  if (!A.document) return i2;
  if (t3 = 11 === t3.nodeType ? t3 : A.document, r2) if ("string" == typeof r2) {
    let e3, l3 = kt.get(t3 = t3.head || t3);
    l3 || kt.set(t3, l3 = /* @__PURE__ */ new Set());
    const c2 = t3.querySelector(`[${M}="${i2}"]`);
    if (c2) c2.textContent = r2;
    else if (!l3.has(i2)) {
      e3 = A.document.createElement("style"), e3.textContent = r2;
      const c3 = null != (o2 = B.h) ? o2 : (function() {
        var t4, n3, e4;
        return null != (e4 = null == (n3 = null == (t4 = A.document.head) ? void 0 : t4.querySelector('meta[name="csp-nonce"]')) ? void 0 : n3.getAttribute("content")) ? e4 : void 0;
      })();
      if (null != c3 && e3.setAttribute("nonce", c3), !(1 & n2.i)) if ("HEAD" === t3.nodeName) {
        const n3 = t3.querySelectorAll("link[rel=preconnect]"), o3 = n3.length > 0 ? n3[n3.length - 1].nextSibling : t3.querySelector("style");
        t3.insertBefore(e3, (null == o3 ? void 0 : o3.parentNode) === t3 ? o3 : null);
      } else if ("host" in t3) if (_) {
        const n3 = new (null != (s2 = t3.defaultView) ? s2 : t3.ownerDocument.defaultView).CSSStyleSheet();
        n3.replaceSync(r2), F ? t3.adoptedStyleSheets.unshift(n3) : t3.adoptedStyleSheets = [n3, ...t3.adoptedStyleSheets];
      } else {
        const n3 = t3.querySelector("style");
        n3 ? n3.textContent = r2 + n3.textContent : t3.prepend(e3);
      }
      else t3.append(e3);
      1 & n2.i && t3.insertBefore(e3, null), 4 & n2.i && (e3.textContent += "slot-fb{display:contents}slot-fb[hidden]{display:none}"), l3 && l3.add(i2);
    }
  } else {
    let n3 = kt.get(t3);
    if (n3 || kt.set(t3, n3 = /* @__PURE__ */ new Set()), !n3.has(i2)) {
      const e3 = null != (l2 = t3.defaultView) ? l2 : t3.ownerDocument.defaultView;
      let o3;
      if (r2.constructor === e3.CSSStyleSheet) o3 = r2;
      else {
        o3 = new e3.CSSStyleSheet();
        for (let t4 = 0; t4 < r2.cssRules.length; t4++) o3.insertRule(r2.cssRules[t4].cssText, t4);
      }
      if (F ? t3.adoptedStyleSheets.push(o3) : t3.adoptedStyleSheets = [...t3.adoptedStyleSheets, o3], n3.add(i2), "host" in t3) {
        const n4 = t3.querySelector(`[${M}="${i2}"]`);
        n4 && Y((() => n4.remove()));
      }
    }
  }
  return i2;
};
var It = (t3, n2) => "sc-" + (n2 && 32 & t3.i ? t3.v + "-" + n2 : t3.v);
var Rt = (t3) => "object" == (t3 = typeof t3) || "function" === t3;
var At = (t3, n2, ...e2) => {
  let o2 = null, s2 = null, l2 = null, i2 = false, r2 = false;
  const c2 = [], u2 = (n3) => {
    for (let e3 = 0; e3 < n3.length; e3++) if (o2 = n3[e3], Array.isArray(o2)) u2(o2);
    else if (null != o2 && "boolean" != typeof o2) {
      if (i2 = "function" != typeof t3 && !Rt(o2)) o2 = String(o2);
      else if ("function" != typeof t3 && void 0 === o2.i) {
        x("Invalid vNode child");
        continue;
      }
      i2 && r2 ? c2[c2.length - 1].p += o2 : c2.push(i2 ? Lt(null, o2) : o2), r2 = i2;
    }
  };
  if (u2(e2), n2) {
    n2.key && (s2 = n2.key), n2.name && (l2 = n2.name);
    {
      const t4 = n2.className || n2.class;
      t4 && (n2.class = "object" != typeof t4 ? t4 : Object.keys(t4).filter(((n3) => t4[n3])).join(" "));
    }
  }
  if ("function" == typeof t3) return t3(null === n2 ? {} : n2, c2, Tt);
  const f2 = Lt(t3, null);
  return f2.$ = n2, c2.length > 0 && (f2.j = c2), f2.O = s2, f2.N = l2, f2;
};
var Lt = (t3, n2) => ({ i: 0, S: t3, p: null != n2 ? n2 : null, k: null, j: null, $: null, O: null, N: null });
var Bt = {};
var Tt = { forEach: (t3, n2) => t3.map(_t).forEach(n2), map: (t3, n2) => t3.map(_t).map(n2).map(Ft) };
var _t = (t3) => ({ vattrs: t3.$, vchildren: t3.j, vkey: t3.O, vname: t3.N, vtag: t3.S, vtext: t3.p });
var Ft = (t3) => {
  if ("function" == typeof t3.vtag) {
    const n3 = __spreadValues({}, t3.vattrs);
    return t3.vkey && (n3.key = t3.vkey), t3.vname && (n3.name = t3.vname), At(t3.vtag, n3, ...t3.vchildren || []);
  }
  const n2 = Lt(t3.vtag, t3.vtext);
  return n2.$ = t3.vattrs, n2.j = t3.vchildren, n2.O = t3.vkey, n2.N = t3.vname, n2;
};
var Ut = (t3, n2, e2, o2, s2, l2, i2, r2 = []) => {
  let c2, u2, f2, a2;
  const d2 = s2["s-sc"];
  if (1 === l2.nodeType) {
    if (c2 = l2.getAttribute(I), c2 && (u2 = c2.split("."), u2[0] === i2 || "0" === u2[0])) {
      f2 = Wt({ i: 0, C: u2[0], M: u2[1], I: u2[2], R: u2[3], S: l2.tagName.toLowerCase(), k: l2, $: { class: l2.className || "" } }), n2.push(f2), l2.removeAttribute(I), t3.j || (t3.j = []), d2 && u2[0] === i2 && (l2["s-si"] = d2, f2.$.class += " " + d2);
      const s3 = f2.k.getAttribute("s-sn");
      "string" == typeof s3 && ("slot-fb" === f2.S && (Vt(s3, u2[2], f2, l2, t3, n2, e2, o2, r2), d2 && l2.classList.add(d2)), f2.k["s-sn"] = s3, f2.k.removeAttribute("s-sn")), void 0 !== f2.R && (t3.j[f2.R] = f2), t3 = f2, o2 && "0" === f2.I && (o2[f2.R] = f2.k);
    }
    if (l2.shadowRoot) for (a2 = l2.shadowRoot.childNodes.length - 1; a2 >= 0; a2--) Ut(t3, n2, e2, o2, s2, l2.shadowRoot.childNodes[a2], i2, r2);
    const h2 = l2.__childNodes || l2.childNodes;
    for (a2 = h2.length - 1; a2 >= 0; a2--) Ut(t3, n2, e2, o2, s2, h2[a2], i2, r2);
  } else if (8 === l2.nodeType) u2 = l2.nodeValue.split("."), (u2[1] === i2 || "0" === u2[1]) && (c2 = u2[0], f2 = Wt({ C: u2[1], M: u2[2], I: u2[3], R: u2[4] || "0", k: l2, $: null, j: null, O: null, N: null, S: null, p: null }), "t" === c2 ? (f2.k = Pt(l2, 3), f2.k && 3 === f2.k.nodeType && (f2.p = f2.k.textContent, n2.push(f2), l2.remove(), i2 === f2.C && (t3.j || (t3.j = []), t3.j[f2.R] = f2), o2 && "0" === f2.I && (o2[f2.R] = f2.k))) : "c" === c2 ? (f2.k = Pt(l2, 8), f2.k && 8 === f2.k.nodeType && (n2.push(f2), l2.remove())) : f2.C === i2 && ("s" === c2 ? Vt(l2["s-sn"] = u2[5] || "", u2[2], f2, l2, t3, n2, e2, o2, r2) : "r" === c2 && (o2 ? l2.remove() : (s2["s-cr"] = l2, l2["s-cn"] = true))));
  else if (t3 && "style" === t3.S) {
    const n3 = Lt(null, l2.textContent);
    n3.k = l2, n3.R = "0", t3.j = [n3];
  }
  return t3;
};
var Dt = (t3, n2) => {
  if (1 === t3.nodeType) {
    const e2 = t3[C] || t3.getAttribute(C);
    e2 && n2.set(e2, t3);
    let o2 = 0;
    if (t3.shadowRoot) for (; o2 < t3.shadowRoot.childNodes.length; o2++) Dt(t3.shadowRoot.childNodes[o2], n2);
    const s2 = t3.__childNodes || t3.childNodes;
    for (o2 = 0; o2 < s2.length; o2++) Dt(s2[o2], n2);
  } else if (8 === t3.nodeType) {
    const e2 = t3.nodeValue.split(".");
    "o" === e2[0] && (n2.set(e2[1] + "." + e2[2], t3), t3.nodeValue = "", t3["s-en"] = e2[3]);
  }
};
var Wt = (t3) => __spreadValues({ i: 0, C: null, M: null, I: null, R: "0", k: null, $: null, j: null, O: null, N: null, S: null, p: null }, t3);
function Vt(t3, n2, e2, o2, s2, l2, i2, r2, c2) {
  o2["s-sr"] = true, e2.N = t3 || null, e2.S = "slot";
  const u2 = (null == s2 ? void 0 : s2.k) ? s2.k["s-id"] || s2.k.getAttribute("s-id") : "";
  if (r2 && A.document) {
    const l3 = e2.k = A.document.createElement(e2.S);
    e2.N && e2.k.setAttribute("name", t3), s2.k.shadowRoot && u2 && u2 !== e2.C ? Et(s2.k, "insertBefore")(l3, Et(s2.k, "children")[0]) : Et(Et(o2, "parentNode"), "insertBefore")(l3, o2), Ht(c2, n2, t3, o2, e2.C), o2.remove(), "0" === e2.I && (r2[e2.R] = e2.k);
  } else {
    const l3 = e2.k, i3 = u2 && u2 !== e2.C && s2.k.shadowRoot;
    Ht(c2, n2, t3, o2, i3 ? u2 : e2.C), lt(o2), i3 && s2.k.insertBefore(l3, s2.k.children[0]);
  }
  l2.push(e2), i2.push(e2), s2.j || (s2.j = []), s2.j[e2.R] = e2;
}
var Ht = (t3, n2, e2, o2, s2) => {
  var l2, i2;
  let r2 = o2.nextSibling;
  if (t3[n2] = t3[n2] || [], r2 && !(null == (l2 = r2.nodeValue) ? void 0 : l2.startsWith("s."))) do {
    !r2 || (r2.getAttribute && r2.getAttribute("slot") || r2["s-sn"]) !== e2 && ("" !== e2 || r2["s-sn"] || r2.getAttribute && r2.getAttribute("slot") || 8 !== r2.nodeType && 3 !== r2.nodeType) || (r2["s-sn"] = e2, t3[n2].push({ slot: o2, node: r2, hostId: s2 })), r2 = null == r2 ? void 0 : r2.nextSibling;
  } while (r2 && !(null == (i2 = r2.nodeValue) ? void 0 : i2.startsWith("s.")));
};
var Pt = (t3, n2) => {
  let e2 = t3;
  do {
    e2 = e2.nextSibling;
  } while (e2 && (e2.nodeType !== n2 || !e2.nodeValue));
  return e2;
};
var qt = (t3) => {
  k.length = 0, k.push(t3);
};
var zt = (t3) => {
  var n2;
  return null == (n2 = N(t3)) ? void 0 : n2.A;
};
var Jt = (t3) => {
  if (!t3) return;
  const n2 = Object.keys(t3);
  if (0 === n2.length) return;
  let e2 = false;
  for (const o3 of n2) {
    if (e2) break;
    for (const n3 of t3[o3]) if ("string" == typeof n3) {
      e2 = true;
      break;
    }
  }
  if (!e2) return t3;
  const o2 = {};
  for (const e3 of n2) o2[e3] = t3[e3].map(((t4) => "string" == typeof t4 ? { [t4]: 0 } : t4));
  return o2;
};
var Yt = class t2 {
  static fromLocalValue(n2) {
    const e2 = n2[g], o2 = m in n2 ? n2[m] : void 0;
    switch (e2) {
      case "string":
      case "boolean":
        return o2;
      case "bigint":
        return BigInt(o2);
      case "undefined":
        return;
      case "null":
        return null;
      case "number":
        return "NaN" === o2 ? NaN : "-0" === o2 ? -0 : "Infinity" === o2 ? 1 / 0 : "-Infinity" === o2 ? -1 / 0 : o2;
      case "array":
        return o2.map(((n4) => t2.fromLocalValue(n4)));
      case "date":
        return new Date(o2);
      case "map":
        const n3 = /* @__PURE__ */ new Map();
        for (const [e3, s3] of o2) {
          const o3 = "object" == typeof e3 && null !== e3 ? t2.fromLocalValue(e3) : e3, l3 = t2.fromLocalValue(s3);
          n3.set(o3, l3);
        }
        return n3;
      case "object":
        const s2 = {};
        for (const [n4, e3] of o2) s2[n4] = t2.fromLocalValue(e3);
        return s2;
      case "regexp":
        const { pattern: l2, flags: i2 } = o2;
        return new RegExp(l2, i2);
      case "set":
        const r2 = /* @__PURE__ */ new Set();
        for (const n4 of o2) r2.add(t2.fromLocalValue(n4));
        return r2;
      case "symbol":
        return Symbol(o2);
      default:
        throw new Error(`Unsupported type: ${e2}`);
    }
  }
  static fromLocalValueArray(n2) {
    return n2.map(((n3) => t2.fromLocalValue(n3)));
  }
  static isLocalValueObject(t3) {
    if ("object" != typeof t3 || null === t3) return false;
    if (!t3.hasOwnProperty(g)) return false;
    const n2 = t3[g];
    return !!Object.values(__spreadValues(__spreadValues({}, $), b)).includes(n2) && ("null" === n2 || "undefined" === n2 || t3.hasOwnProperty(m));
  }
};
var Gt;
var Zt;
var Kt;
var Qt = (t3, n2) => {
  return "string" == typeof t3 && t3.startsWith(y) ? t3 = "string" == typeof (e2 = t3) && e2.startsWith(y) ? Yt.fromLocalValue(JSON.parse((function(t4) {
    const n3 = atob(t4), e3 = new Uint8Array(n3.length);
    for (let t5 = 0; t5 < n3.length; t5++) e3[t5] = n3.charCodeAt(t5);
    return new TextDecoder().decode(e3);
  })(e2.slice(11)))) : e2 : null == t3 || Rt(t3) ? t3 : 4 & n2 ? "false" !== t3 && ("" === t3 || !!t3) : 2 & n2 ? "string" == typeof t3 ? parseFloat(t3) : "number" == typeof t3 ? t3 : NaN : 1 & n2 ? String(t3) : t3;
  var e2;
};
var Xt = (t3, n2, e2) => {
  const o2 = t3;
  return { emit: (t4) => tn(o2, n2, { bubbles: !!(4 & e2), composed: !!(2 & e2), cancelable: !!(1 & e2), detail: t4 }) };
};
var tn = (t3, n2, e2) => {
  const o2 = B.ce(n2, e2);
  return t3.dispatchEvent(o2), o2;
};
var nn = (t3, n2, e2, o2, s2, l2, i2) => {
  if (e2 === o2) return;
  let r2 = S(t3, n2), c2 = n2.toLowerCase();
  if ("class" === n2) {
    const n3 = t3.classList, s3 = rn(e2);
    let r3 = rn(o2);
    if ((t3["s-si"] || t3["s-sc"]) && i2) {
      const e3 = t3["s-sc"] || t3["s-si"];
      r3.push(e3), s3.forEach(((t4) => {
        t4.startsWith(e3) && r3.push(t4);
      })), r3 = [...new Set(r3)].filter(((t4) => t4)), n3.add(...r3);
    } else {
      let e3 = s3.filter(((t4) => t4 && !r3.includes(t4)));
      if (i2 && !(4 & l2)) {
        const n4 = ln(t3);
        e3 = e3.filter(((t4) => !n4.includes(t4)));
      }
      n3.remove(...e3), n3.add(...r3.filter(((t4) => t4 && !s3.includes(t4))));
    }
  } else if ("style" === n2) {
    for (const n3 in e2) o2 && null != o2[n3] || (n3.includes("-") ? t3.style.removeProperty(n3) : t3.style[n3] = "");
    for (const n3 in o2) e2 && o2[n3] === e2[n3] || (n3.includes("-") ? t3.style.setProperty(n3, o2[n3]) : t3.style[n3] = o2[n3]);
  } else if ("key" === n2) ;
  else if ("ref" === n2) o2 && Cn(o2, t3);
  else if (t3.__lookupSetter__(n2) || "o" !== n2[0] || "n" !== n2[1]) {
    if ("a" === n2[0] && n2.startsWith("attr:")) {
      const e3 = n2.slice(5);
      let s3;
      {
        const n3 = N(t3);
        if (n3 && n3.o && n3.o.t) {
          const t4 = n3.o.t[e3];
          t4 && t4[1] && (s3 = t4[1]);
        }
      }
      return s3 || (s3 = e3.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()), void (null == o2 || false === o2 ? false === o2 && "" !== t3.getAttribute(s3) || t3.removeAttribute(s3) : t3.setAttribute(s3, true === o2 ? "" : o2));
    }
    if ("p" === n2[0] && n2.startsWith("prop:")) {
      const e3 = n2.slice(5);
      try {
        t3[e3] = o2;
      } catch (t4) {
      }
      return;
    }
    {
      const i3 = Rt(o2);
      if ((r2 || i3 && null !== o2) && !s2) try {
        if (t3.tagName.includes("-")) t3[n2] !== o2 && (t3[n2] = o2);
        else {
          const s3 = null == o2 ? "" : o2;
          "list" === n2 ? r2 = false : null != e2 && t3[n2] === s3 || ("function" == typeof t3.__lookupSetter__(n2) ? t3[n2] = s3 : t3.setAttribute(n2, s3));
        }
      } catch (t4) {
      }
      let u2 = false;
      c2 !== (c2 = c2.replace(/^xlink\:?/, "")) && (n2 = c2, u2 = true), null == o2 || false === o2 ? (false !== o2 || "" === t3.getAttribute(n2) || 4 & l2 && !on(n2)) && (u2 ? t3.removeAttributeNS(R, n2) : t3.removeAttribute(n2)) : (!r2 || 4 & l2 || s2) && !i3 && 1 === t3.nodeType && (o2 = true === o2 ? "" : o2, u2 ? t3.setAttributeNS(R, n2, o2) : t3.setAttribute(n2, o2));
    }
  } else if (n2 = "-" === n2[2] ? n2.slice(3) : S(A, c2) ? c2.slice(2) : c2[2] + n2.slice(3), e2 || o2) {
    const s3 = n2.endsWith(cn);
    n2 = n2.replace(un, ""), e2 && B.rel(t3, n2, e2, s3), o2 && B.ael(t3, n2, o2, s3);
  }
};
var en = /* @__PURE__ */ new Set(["draggable", "contenteditable", "spellcheck"]);
var on = (t3) => en.has(t3) || t3.startsWith("aria-");
var sn = /\s/;
var ln = (n2) => {
  var e2, o2, s2;
  const l2 = N(n2);
  if (!(l2 && 2 & l2.i)) return [];
  const i2 = rn(null == (o2 = null == (e2 = l2.L) ? void 0 : e2.$) ? void 0 : o2.class);
  return i2.push(null != (s2 = t) ? s2 : "hydrated"), i2;
};
var rn = (t3) => ("object" == typeof t3 && t3 && "baseVal" in t3 && (t3 = t3.baseVal), t3 && "string" == typeof t3 ? t3.split(sn) : []);
var cn = "Capture";
var un = new RegExp(cn + "$");
var fn = (t3, n2, e2, o2) => {
  const s2 = 11 === n2.k.nodeType && n2.k.host ? n2.k.host : n2.k, l2 = t3 && t3.$ || {}, i2 = n2.$ || {};
  for (const t4 of an(Object.keys(l2))) t4 in i2 || nn(s2, t4, l2[t4], void 0, e2, n2.i, o2);
  for (const t4 of an(Object.keys(i2))) nn(s2, t4, l2[t4], i2[t4], e2, n2.i, o2);
};
function an(t3) {
  return t3.includes("ref") ? [...t3.filter(((t4) => "ref" !== t4)), "ref"] : t3;
}
var dn = false;
var hn = false;
var vn = false;
var pn = false;
var $n = [];
var bn = [];
var gn = (t3, n2, e2) => {
  var o2;
  const s2 = n2.j[e2];
  let l2, i2, r2, c2 = 0;
  if (dn || (vn = true, "slot" === s2.S && (s2.i |= s2.j ? 2 : 1)), null != s2.p) l2 = s2.k = A.document.createTextNode(s2.p);
  else if (1 & s2.i) l2 = s2.k = A.document.createTextNode(""), fn(null, s2, pn);
  else {
    if (pn || (pn = "svg" === s2.S), !A.document) throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM.");
    if (l2 = s2.k = A.document.createElementNS(pn ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", !dn && 2 & s2.i ? "slot-fb" : s2.S), pn && "foreignObject" === s2.S && (pn = false), fn(null, s2, pn), null != (u2 = Gt) && void 0 !== u2 && l2["s-si"] !== Gt && l2.classList.add(l2["s-si"] = Gt), s2.j) {
      const n3 = "template" === s2.S ? l2.content : l2;
      for (c2 = 0; c2 < s2.j.length; ++c2) i2 = gn(t3, s2, c2), i2 && n3.appendChild(i2);
    }
    "svg" === s2.S ? pn = false : "foreignObject" === l2.tagName && (pn = true);
  }
  var u2;
  return l2["s-hn"] = Kt, 3 & s2.i && (l2["s-sr"] = true, l2["s-cr"] = Zt, l2["s-sn"] = s2.N || "", l2["s-rf"] = null == (o2 = s2.$) ? void 0 : o2.ref, lt(l2), r2 = t3 && t3.j && t3.j[e2], r2 && r2.S === s2.S && t3.k && mn(t3.k), In(Zt, l2, n2.k, null == t3 ? void 0 : t3.k)), l2;
};
var mn = (t3) => {
  B.i |= 1;
  const n2 = t3.closest(Kt.toLowerCase());
  if (null != n2) {
    const e2 = Array.from(n2.__childNodes || n2.childNodes).find(((t4) => t4["s-cr"])), o2 = Array.from(t3.__childNodes || t3.childNodes);
    for (const t4 of e2 ? o2.reverse() : o2) null != t4["s-sh"] && (Mn(n2, t4, null != e2 ? e2 : null), t4["s-sh"] = void 0, vn = true);
  }
  B.i &= -2;
};
var yn = (t3, n2) => {
  B.i |= 1;
  const e2 = Array.from(t3.__childNodes || t3.childNodes);
  if (t3["s-sr"]) {
    let n3 = t3;
    for (; n3 = n3.nextSibling; ) n3 && n3["s-sn"] === t3["s-sn"] && n3["s-sh"] === Kt && e2.push(n3);
  }
  for (let t4 = e2.length - 1; t4 >= 0; t4--) {
    const o2 = e2[t4];
    o2["s-hn"] !== Kt && o2["s-ol"] && (Mn(Nn(o2).parentNode, o2, Nn(o2)), o2["s-ol"].remove(), o2["s-ol"] = void 0, o2["s-sh"] = void 0, vn = true), n2 && yn(o2, n2);
  }
  B.i &= -2;
};
var wn = (t3, n2, e2, o2, s2, l2) => {
  let i2, r2 = t3["s-cr"] && t3["s-cr"].parentNode || t3;
  for (r2.shadowRoot && r2.tagName === Kt && (r2 = r2.shadowRoot), "template" === e2.S && (r2 = r2.content); s2 <= l2; ++s2) o2[s2] && (i2 = gn(null, e2, s2), i2 && (o2[s2].k = i2, Mn(r2, i2, Nn(n2))));
};
var jn = (t3, n2, e2) => {
  for (let o2 = n2; o2 <= e2; ++o2) {
    const n3 = t3[o2];
    if (n3) {
      const t4 = n3.k;
      kn(n3), t4 && (hn = true, t4["s-ol"] ? t4["s-ol"].remove() : yn(t4, true), t4.remove());
    }
  }
};
var On = (t3, n2, e2 = false) => t3.S === n2.S && ("slot" === t3.S ? t3.N === n2.N : e2 ? (e2 && !t3.O && n2.O && (t3.O = n2.O), true) : t3.O === n2.O);
var Nn = (t3) => t3 && t3["s-ol"] || t3;
var Sn = (t3, n2, e2 = false) => {
  const o2 = n2.k = t3.k, s2 = t3.j, l2 = n2.j, i2 = n2.S, r2 = n2.p;
  let c2;
  null == r2 ? (pn = "svg" === i2 || "foreignObject" !== i2 && pn, "slot" !== i2 || dn || t3.N !== n2.N && (n2.k["s-sn"] = n2.N || "", mn(n2.k.parentElement)), fn(t3, n2, pn, e2), null !== s2 && null !== l2 ? ((t4, n3, e3, o3, s3 = false) => {
    let l3, i3, r3 = 0, c3 = 0, u2 = 0, f2 = 0, a2 = n3.length - 1, d2 = n3[0], h2 = n3[a2], v2 = o3.length - 1, p2 = o3[0], $2 = o3[v2];
    const b2 = "template" === e3.S ? t4.content : t4;
    for (; r3 <= a2 && c3 <= v2; ) if (null == d2) d2 = n3[++r3];
    else if (null == h2) h2 = n3[--a2];
    else if (null == p2) p2 = o3[++c3];
    else if (null == $2) $2 = o3[--v2];
    else if (On(d2, p2, s3)) Sn(d2, p2, s3), d2 = n3[++r3], p2 = o3[++c3];
    else if (On(h2, $2, s3)) Sn(h2, $2, s3), h2 = n3[--a2], $2 = o3[--v2];
    else if (On(d2, $2, s3)) "slot" !== d2.S && "slot" !== $2.S || yn(d2.k.parentNode, false), Sn(d2, $2, s3), Mn(b2, d2.k, h2.k.nextSibling), d2 = n3[++r3], $2 = o3[--v2];
    else if (On(h2, p2, s3)) "slot" !== d2.S && "slot" !== $2.S || yn(h2.k.parentNode, false), Sn(h2, p2, s3), Mn(b2, h2.k, d2.k), h2 = n3[--a2], p2 = o3[++c3];
    else {
      for (u2 = -1, f2 = r3; f2 <= a2; ++f2) if (n3[f2] && null !== n3[f2].O && n3[f2].O === p2.O) {
        u2 = f2;
        break;
      }
      u2 >= 0 ? (i3 = n3[u2], i3.S !== p2.S ? l3 = gn(n3 && n3[c3], e3, c3) : (Sn(i3, p2, s3), n3[u2] = void 0, l3 = i3.k), p2 = o3[++c3]) : (l3 = gn(n3 && n3[c3], e3, c3), p2 = o3[++c3]), l3 && Mn(Nn(d2.k).parentNode, l3, Nn(d2.k));
    }
    r3 > a2 ? wn(t4, null == o3[v2 + 1] ? null : o3[v2 + 1].k, e3, o3, c3, v2) : c3 > v2 && jn(n3, r3, a2);
  })(o2, s2, n2, l2, e2) : null !== l2 ? (null !== t3.p && (o2.textContent = ""), wn(o2, null, n2, l2, 0, l2.length - 1)) : e2 || null === s2 ? e2 && null !== s2 && null === l2 && (n2.j = s2) : jn(s2, 0, s2.length - 1), pn && "svg" === i2 && (pn = false)) : (c2 = o2["s-cr"]) ? c2.parentNode.textContent = r2 : t3.p !== r2 && (o2.data = r2);
};
var xn = [];
var En = (t3) => {
  let n2, e2, o2;
  const s2 = t3.__childNodes || t3.childNodes;
  for (const t4 of s2) {
    if (t4["s-sr"] && (n2 = t4["s-cr"]) && n2.parentNode) {
      e2 = n2.parentNode.__childNodes || n2.parentNode.childNodes;
      const s3 = t4["s-sn"];
      for (o2 = e2.length - 1; o2 >= 0; o2--) if (n2 = e2[o2], !n2["s-cn"] && !n2["s-nr"] && n2["s-hn"] !== t4["s-hn"] && (!n2["s-sh"] || n2["s-sh"] !== t4["s-hn"] || "" !== s3 && st(n2) === s3)) if (et(n2, s3)) {
        let e3 = xn.find(((t5) => t5.B === n2));
        hn = true, n2["s-sn"] = n2["s-sn"] || s3, e3 ? (e3.B["s-sh"] = t4["s-hn"], e3.T = t4) : (n2["s-sh"] = t4["s-hn"], xn.push({ T: t4, B: n2 })), n2["s-sr"] && xn.map(((t5) => {
          et(t5.B, n2["s-sn"]) && (e3 = xn.find(((t6) => t6.B === n2)), e3 && !t5.T && (t5.T = e3.T));
        }));
      } else xn.some(((t5) => t5.B === n2)) || xn.push({ B: n2 });
    }
    1 === t4.nodeType && En(t4);
  }
};
var kn = (t3) => {
  t3.$ && t3.$.ref && $n.push((() => t3.$.ref(null))), t3.j && t3.j.map(kn);
};
var Cn = (t3, n2) => {
  bn.push((() => t3(n2)));
};
var Mn = (t3, n2, e2, o2) => {
  if ("string" == typeof n2["s-sn"] && n2["s-sr"] && n2["s-cr"]) In(n2["s-cr"], n2, t3, n2.parentElement);
  else if ("string" == typeof n2["s-sn"]) {
    11 !== t3.getRootNode().nodeType && Ot(n2), t3.insertBefore(n2, e2);
    const { slotNode: s2 } = rt(n2);
    return s2 && !o2 && it(s2), n2;
  }
  return (null == t3 ? void 0 : t3.__insertBefore) ? t3.__insertBefore(n2, e2) : null == t3 ? void 0 : t3.insertBefore(n2, e2);
};
function In(t3, n2, e2, o2) {
  var s2, l2;
  let i2;
  if (t3 && "string" == typeof n2["s-sn"] && n2["s-sr"] && t3.parentNode && t3.parentNode["s-sc"] && (i2 = n2["s-si"] || t3.parentNode["s-sc"])) {
    const t4 = n2["s-sn"], r2 = n2["s-hn"];
    if (null == (s2 = e2.classList) || s2.add(i2 + "-s"), o2 && (null == (l2 = o2.classList) ? void 0 : l2.contains(i2 + "-s"))) {
      let n3 = (o2.__childNodes || o2.childNodes)[0], e3 = false;
      for (; n3; ) {
        if (n3["s-sn"] !== t4 && n3["s-hn"] === r2 && n3["s-sr"]) {
          e3 = true;
          break;
        }
        n3 = n3.nextSibling;
      }
      e3 || o2.classList.remove(i2 + "-s");
    }
  }
}
var Rn = (t3, n2, e2 = false) => {
  var o2, s2, l2, i2, r2;
  const c2 = t3.$hostElement$, u2 = t3.o, f2 = t3.L || Lt(null, null);
  var a2;
  const d2 = (a2 = n2) && a2.S === Bt ? n2 : At(null, null, n2);
  if (Kt = c2.tagName, u2._ && (d2.$ = d2.$ || {}, u2._.forEach((([t4, n3]) => {
    d2.$[n3] = c2[t4];
  }))), e2 && d2.$) for (const t4 of Object.keys(d2.$)) c2.hasAttribute(t4) && !["key", "ref", "style", "class"].includes(t4) && (d2.$[t4] = c2[t4]);
  if (d2.S = null, d2.i |= 4, t3.L = d2, d2.k = f2.k = c2.shadowRoot || c2, Gt = c2["s-sc"], dn = !(!(1 & u2.i) || 128 & u2.i), Zt = c2["s-cr"], hn = false, Sn(f2, d2, e2), B.i |= 1, vn) {
    En(d2.k);
    for (const t4 of xn) {
      const n3 = t4.B;
      if (!n3["s-ol"] && A.document) {
        const t5 = A.document.createTextNode("");
        t5["s-nr"] = n3, Mn(n3.parentNode, n3["s-ol"] = t5, n3, e2);
      }
    }
    for (const t4 of xn) {
      const n3 = t4.B, r3 = t4.T;
      if (1 === n3.nodeType && e2 && (n3["s-ih"] = null != (o2 = n3.hidden) && o2), r3) {
        const t5 = r3.parentNode;
        let o3 = r3.nextSibling;
        if (o3 && 1 === o3.nodeType) {
          let e3 = null == (s2 = n3["s-ol"]) ? void 0 : s2.previousSibling;
          for (; e3; ) {
            let s3 = null != (l2 = e3["s-nr"]) ? l2 : null;
            if (s3 && s3["s-sn"] === n3["s-sn"] && t5 === (s3.__parentNode || s3.parentNode)) {
              for (s3 = s3.nextSibling; s3 === n3 || (null == s3 ? void 0 : s3["s-sr"]); ) s3 = null == s3 ? void 0 : s3.nextSibling;
              if (!s3 || !s3["s-nr"]) {
                o3 = s3;
                break;
              }
            }
            e3 = e3.previousSibling;
          }
        }
        if ((!o3 && t5 !== (n3.__parentNode || n3.parentNode) || (n3.__nextSibling || n3.nextSibling) !== o3) && n3 !== o3) {
          if (Mn(t5, n3, o3, e2), 8 === n3.nodeType && n3.nodeValue.startsWith("s-nt-")) {
            const t6 = A.document.createTextNode(n3.nodeValue.replace(/^s-nt-/, ""));
            t6["s-hn"] = n3["s-hn"], t6["s-sn"] = n3["s-sn"], t6["s-sh"] = n3["s-sh"], t6["s-sr"] = n3["s-sr"], t6["s-ol"] = n3["s-ol"], t6["s-ol"]["s-nr"] = t6, Mn(n3.parentNode, t6, n3, e2), n3.parentNode.removeChild(n3);
          }
          1 === n3.nodeType && "SLOT-FB" !== n3.tagName && (n3.hidden = null != (i2 = n3["s-ih"]) && i2);
        }
        n3 && "function" == typeof r3["s-rf"] && r3["s-rf"](r3);
      } else 1 === n3.nodeType && (n3.hidden = true);
    }
  }
  if (hn && Q(d2.k), B.i &= -2, xn.length = 0, !dn && !(1 & u2.i) && c2["s-cr"]) {
    const t4 = d2.k.__childNodes || d2.k.childNodes;
    for (const n3 of t4) if (n3["s-hn"] !== Kt && !n3["s-sh"]) {
      if (e2 && null == n3["s-ih"] && (n3["s-ih"] = null != (r2 = n3.hidden) && r2), 1 === n3.nodeType) n3.hidden = true;
      else if (3 === n3.nodeType && n3.nodeValue.trim()) {
        const t5 = A.document.createComment("s-nt-" + n3.nodeValue);
        t5["s-sn"] = n3["s-sn"], Mn(n3.parentNode, t5, n3, e2), n3.parentNode.removeChild(n3);
      }
    }
  }
  Zt = void 0, $n.forEach(((t4) => t4())), $n.length = 0, bn.forEach(((t4) => t4())), bn.length = 0;
};
var An = (t3, n2) => {
  if (n2 && !t3.F && n2["s-p"]) {
    const e2 = n2["s-p"].push(new Promise(((o2) => t3.F = () => {
      n2["s-p"].splice(e2 - 1, 1), o2();
    })));
  }
};
var Ln = (t3, n2) => {
  if (t3.i |= 16, 4 & t3.i) return void (t3.i |= 512);
  An(t3, t3.U);
  const e2 = () => Bn(t3, n2);
  if (!n2) return Y(e2);
  queueMicrotask((() => {
    e2();
  }));
};
var Bn = (t3, n2) => {
  const e2 = t3.$hostElement$, o2 = e2;
  if (!o2) throw new Error(`Can't render component <${e2.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);
  let s2;
  return s2 = Hn(o2, n2 ? "componentWillLoad" : "componentWillUpdate", void 0, e2), s2 = Tn(s2, (() => Hn(o2, "componentWillRender", void 0, e2))), Tn(s2, (() => Fn(t3, o2, n2)));
};
var Tn = (t3, n2) => _n(t3) ? t3.then(n2).catch(((t4) => {
  console.error(t4), n2();
})) : n2();
var _n = (t3) => t3 instanceof Promise || t3 && t3.then && "function" == typeof t3.then;
var Fn = async (t3, n2, e2) => {
  var o2;
  const s2 = t3.$hostElement$, l2 = s2["s-rc"];
  e2 && ((t4) => {
    const n3 = t4.o, e3 = t4.$hostElement$, o3 = n3.i, s3 = Mt(e3.shadowRoot ? e3.shadowRoot : e3.getRootNode(), n3, t4.A);
    10 & o3 && (e3["s-sc"] = s3, e3.classList.add(s3 + "-h"));
  })(t3);
  Un(t3, n2, s2, e2), l2 && (l2.map(((t4) => t4())), s2["s-rc"] = void 0);
  {
    const n3 = null != (o2 = s2["s-p"]) ? o2 : [], e3 = () => Dn(t3);
    0 === n3.length ? e3() : (Promise.all(n3).then(e3).catch(e3), t3.i |= 4, n3.length = 0);
  }
};
var Un = (t3, n2, e2, o2) => {
  try {
    n2 = n2.render && n2.render(), t3.i &= -17, t3.i |= 2, Rn(t3, n2, o2);
  } catch (n3) {
    x(n3, t3.$hostElement$);
  }
  return null;
};
var Dn = (t3) => {
  const n2 = t3.$hostElement$, e2 = n2, o2 = t3.U;
  Hn(e2, "componentDidRender", void 0, n2), 64 & t3.i ? Hn(e2, "componentDidUpdate", void 0, n2) : (t3.i |= 64, Pn(n2), Hn(e2, "componentDidLoad", void 0, n2), t3.D(n2), o2 || Vn()), t3.F && (t3.F(), t3.F = void 0), 512 & t3.i && z((() => Ln(t3, false))), t3.i &= -517;
};
var Wn = (t3) => {
  var n2;
  {
    const e2 = N(t3), o2 = null == (n2 = null == e2 ? void 0 : e2.$hostElement$) ? void 0 : n2.isConnected;
    return o2 && 2 == (18 & e2.i) && Ln(e2, false), o2;
  }
};
var Vn = () => {
  var t3;
  z((() => tn(A, "appload", { detail: { namespace: "ionic" } }))), (null == (t3 = B.W) ? void 0 : t3.size) && B.W.clear();
};
var Hn = (t3, n2, e2, o2) => {
  if (t3 && t3[n2]) try {
    return t3[n2](e2);
  } catch (t4) {
    x(t4, o2);
  }
};
var Pn = (n2) => {
  var e2;
  return n2.classList.add(null != (e2 = t) ? e2 : "hydrated");
};
var qn = (t3, n2, e2, o2) => {
  const s2 = N(t3);
  if (!s2) return;
  const l2 = t3, i2 = s2.l.get(n2), r2 = s2.i, c2 = l2;
  e2 = Qt(e2, o2.t[n2][0]);
  const u2 = Number.isNaN(i2) && Number.isNaN(e2);
  if (e2 !== i2 && !u2) {
    if (s2.l.set(n2, e2), o2.V) {
      const t4 = o2.V[n2];
      t4 && t4.map(((t5) => {
        try {
          const [[o3, l3]] = Object.entries(t5);
          (128 & r2 || 1 & l3) && (c2 ? c2[o3](e2, i2, n2) : s2.H.push((() => {
            s2.P[o3](e2, i2, n2);
          })));
        } catch (t6) {
          x(t6, l2);
        }
      }));
    }
    if (2 & r2) {
      if (c2.componentShouldUpdate && false === c2.componentShouldUpdate(e2, i2, n2) && !(16 & r2)) return;
      16 & r2 || Ln(s2, false);
    }
  }
};
var zn = (t3, n2) => {
  var e2, o2;
  const s2 = t3.prototype;
  {
    t3.watchers && !n2.V && (n2.V = Jt(t3.watchers)), t3.deserializers && !n2.q && (n2.q = t3.deserializers), t3.serializers && !n2.J && (n2.J = t3.serializers);
    const l2 = Object.entries(null != (e2 = n2.t) ? e2 : {});
    l2.map((([t4, [e3]]) => {
      if (31 & e3 || 32 & e3) {
        const { get: o3, set: l3 } = w(s2, t4) || {};
        o3 && (n2.t[t4][0] |= 2048), l3 && (n2.t[t4][0] |= 4096), Object.defineProperty(s2, t4, { get() {
          return o3 ? o3.apply(this) : (n3 = t4, N(this).l.get(n3));
          var n3;
        }, configurable: true, enumerable: true }), Object.defineProperty(s2, t4, { set(o4) {
          const s3 = N(this);
          if (s3) {
            if (l3) return void 0 === (32 & e3 ? this[t4] : s3.$hostElement$[t4]) && s3.l.get(t4) && (o4 = s3.l.get(t4)), l3.apply(this, [Qt(o4, e3)]), void qn(this, t4, o4 = 32 & e3 ? this[t4] : s3.$hostElement$[t4], n2);
            qn(this, t4, o4, n2);
          }
        } });
      }
    }));
    {
      const e3 = /* @__PURE__ */ new Map();
      s2.attributeChangedCallback = function(t4, o3, i2) {
        B.jmp((() => {
          var r2;
          const c2 = e3.get(t4), u2 = N(this);
          if (this.hasOwnProperty(c2), s2.hasOwnProperty(c2) && "number" == typeof this[c2] && this[c2] == i2) return;
          if (null == c2) {
            const e4 = null == u2 ? void 0 : u2.i;
            if (u2 && e4 && !(8 & e4) && i2 !== o3) {
              const s3 = this, l3 = null == (r2 = n2.V) ? void 0 : r2[t4];
              null == l3 || l3.forEach(((n3) => {
                const [[l4, r3]] = Object.entries(n3);
                null != s3[l4] && (128 & e4 || 1 & r3) && s3[l4].call(s3, i2, o3, t4);
              }));
            }
            return;
          }
          const f2 = l2.find((([t5]) => t5 === c2)), a2 = f2 ? f2[1][0] : 0, d2 = 4 & a2;
          if (512 & a2 && 8 & a2 && !Rt(this[c2]) && (null == (h2 = this[c2]) || false === h2 ? null : true === h2 ? "" : String(h2)) === i2) return;
          var h2;
          const v2 = d2 && null === i2 && void 0 === this[c2];
          d2 && (i2 = null !== i2 && "false" !== i2);
          const p2 = Object.getOwnPropertyDescriptor(s2, c2);
          v2 || i2 == this[c2] || p2.get && !p2.set || (this[c2] = i2);
        }));
      }, t3.observedAttributes = Array.from(/* @__PURE__ */ new Set([...Object.keys(null != (o2 = n2.V) ? o2 : {}), ...l2.filter((([t4, n3]) => 31 & n3[0])).map((([t4, o3]) => {
        var s3;
        const l3 = o3[1] || t4;
        return e3.set(l3, t4), 512 & o3[0] && (null == (s3 = n2._) || s3.push([t4, l3])), l3;
      }))]));
    }
  }
  return t3;
};
var Jn = async (t3, n2, e2) => {
  let o2;
  try {
    if (!(32 & n2.i) && (n2.i |= 32, n2.i &= -1025, o2 = t3.constructor, customElements.whenDefined(t3.localName).then((() => n2.i |= 128)), o2 && o2.style)) {
      let s3;
      "string" == typeof o2.style ? s3 = o2.style : "string" != typeof o2.style && (n2.A = ((t4) => k.map(((n3) => n3(t4))).find(((t5) => !!t5)))(t3), n2.A && (s3 = o2.style[n2.A]));
      const l3 = It(e2, n2.A);
      if (!E.has(l3)) {
        const t4 = () => {
        };
        Ct(l3, s3, !!(1 & e2.i)), t4();
      }
    }
    const s2 = n2.U, l2 = () => Ln(n2, true);
    s2 && s2["s-rc"] ? s2["s-rc"].push(l2) : l2();
  } catch (e3) {
    x(e3, t3), n2.F && (n2.F(), n2.F = void 0), !n2.D || 1024 & n2.i || n2.D(t3);
  }
};
var Yn = (t3) => {
  if (!A.document) return;
  const n2 = t3["s-cr"] = A.document.createComment("");
  n2["s-cn"] = true, Mn(t3, n2, t3.firstChild);
};
var Gn = (t3, n2) => {
  const e2 = { i: n2[0], v: n2[1] };
  try {
    e2.t = n2[2], e2.Y = n2[3], e2.V = Jt(t3.V), e2.q = t3.q, e2.J = t3.J, e2._ = [], !(1 & e2.i) && 256 & e2.i ? (ct(o2 = t3.prototype), ut(o2), dt(o2), at(o2), $t(o2), ht(o2), vt(o2), pt(o2), bt(o2), gt(o2), ft(o2)) : ct(t3.prototype), (() => {
      if (!A.document) return;
      const t4 = A.document.querySelectorAll(`[${M}]`);
      let n3 = 0;
      for (; n3 < t4.length; n3++) Ct(t4[n3].getAttribute(M), t4[n3].innerHTML.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{"), true);
    })();
    const s2 = t3.prototype.connectedCallback, l2 = t3.prototype.disconnectedCallback;
    return Object.assign(t3.prototype, { __hasHostListenerAttached: false, __registerHost() {
      ((t4, n3) => {
        const e3 = { i: 0, $hostElement$: t4, o: n3, l: /* @__PURE__ */ new Map(), G: /* @__PURE__ */ new Map() };
        e3.Z = new Promise(((t5) => e3.D = t5)), t4["s-p"] = [], t4["s-rc"] = [];
        const o3 = e3;
        t4.__stencil__getHostRef = () => o3, 512 & n3.i && O(t4, e3);
      })(this, e2);
    }, connectedCallback() {
      if (!this.__hasHostListenerAttached) {
        const t4 = N(this);
        if (!t4) return;
        Kn(this, t4, e2.Y), this.__hasHostListenerAttached = true;
      }
      ((t4) => {
        if (!(1 & B.i)) {
          const n3 = N(t4);
          if (!n3) return;
          const e3 = n3.o, o3 = () => {
          };
          if (1 & n3.i) Kn(t4, n3, e3.Y), (null == n3 ? void 0 : n3.P) || (1024 & n3.i ? setTimeout((() => Jn(t4, n3, e3)), 1e3) : (null == n3 ? void 0 : n3.Z) && n3.Z.then((() => {
          })));
          else {
            let o4;
            if (n3.i |= 1, o4 = t4.getAttribute(C), o4) {
              if (1 & e3.i) {
                const n4 = Mt(t4.shadowRoot, e3, t4.getAttribute("s-mode"));
                t4.classList.remove(n4 + "-h", n4 + "-s");
              } else if (2 & e3.i) {
                const n4 = It(e3, t4.getAttribute("s-mode"));
                t4["s-sc"] = n4;
              }
              ((t5, n4, e4, o5) => {
                var s3, l3, i2, r2;
                const c2 = t5.shadowRoot, u2 = [], f2 = [], a2 = [], d2 = c2 ? [] : null, h2 = Lt(n4, null);
                let v2;
                h2.k = t5;
                {
                  const n5 = o5.o;
                  n5 && 10 & n5.i && t5["s-sc"] ? (v2 = t5["s-sc"], t5.classList.add(v2 + "-h")) : t5["s-sc"] && delete t5["s-sc"];
                }
                !A.document || B.W && B.W.size || Dt(A.document.body, B.W = /* @__PURE__ */ new Map()), t5[C] = e4, t5.removeAttribute(C), o5.L = Ut(h2, u2, f2, d2, t5, t5, e4, a2);
                let p2 = 0;
                const $2 = u2.length;
                let b2;
                for (; p2 < $2; p2++) {
                  b2 = u2[p2];
                  const e5 = b2.C + "." + b2.M, o6 = B.W.get(e5), l4 = b2.k;
                  if (c2) {
                    if ((null == (s3 = b2.S) ? void 0 : s3.toString().includes("-")) && "slot-fb" !== b2.S && !b2.k.shadowRoot) {
                      const t6 = N(b2.k);
                      if (t6) {
                        const n5 = It(t6.o, b2.k.getAttribute("s-mode")), e6 = A.document.querySelector(`style[sty-id="${n5}"]`);
                        e6 && d2.unshift(e6.cloneNode(true));
                      }
                    }
                  } else l4["s-hn"] = n4.toUpperCase(), "slot" === b2.S && (l4["s-cr"] = t5["s-cr"]);
                  "slot" === b2.S && (b2.N = b2.k["s-sn"] || b2.k.name || null, b2.j ? (b2.i |= 2, b2.k.childNodes.length || b2.j.forEach(((t6) => {
                    b2.k.appendChild(t6.k);
                  }))) : b2.i |= 1), o6 && o6.isConnected && (o6.parentElement.shadowRoot && "" === o6["s-en"] && o6.parentNode.insertBefore(l4, o6.nextSibling), o6.parentNode.removeChild(o6), c2 || (l4["s-oo"] = parseInt(b2.M))), o6 && !o6["s-id"] && B.W.delete(e5);
                }
                const g2 = [], m2 = a2.length;
                let y2, w2, j2, O2, S2 = 0, x2 = 0;
                for (; S2 < m2; S2++) if (y2 = a2[S2], y2 && y2.length) for (j2 = y2.length, w2 = 0; w2 < j2; w2++) {
                  if (O2 = y2[w2], g2[O2.hostId] || (g2[O2.hostId] = B.W.get(O2.hostId)), !g2[O2.hostId]) continue;
                  const t6 = g2[O2.hostId];
                  t6.shadowRoot && O2.node.parentElement !== t6 && t6.insertBefore(O2.node, null == (i2 = null == (l3 = y2[w2 - 1]) ? void 0 : l3.node) ? void 0 : i2.nextSibling), t6.shadowRoot && c2 || (O2.slot["s-cr"] || (O2.slot["s-cr"] = t6["s-cr"], O2.slot["s-cr"] = !O2.slot["s-cr"] && t6.shadowRoot ? t6 : (t6.__childNodes || t6.childNodes)[0]), ot(O2.node, O2.slot, false, O2.node["s-oo"] || x2), (null == (r2 = O2.node.parentElement) ? void 0 : r2.shadowRoot) && O2.node.getAttribute && O2.node.getAttribute("slot") && O2.node.removeAttribute("slot"), (E2 = O2.node) && void 0 === E2.__nextSibling && globalThis.Node && (mt(E2), wt(E2), Ot(E2), E2.nodeType === Node.ELEMENT_NODE && (yt(E2), jt(E2)))), x2 = (O2.node["s-oo"] || x2) + 1;
                }
                var E2;
                if (v2 && f2.length && f2.forEach(((t6) => {
                  t6.k.parentElement.classList.add(v2 + "-s");
                })), c2 && !c2.childNodes.length) {
                  let n5 = 0;
                  const e5 = d2.length;
                  if (e5) {
                    for (; n5 < e5; n5++) {
                      const t6 = d2[n5];
                      t6 && c2.appendChild(t6);
                    }
                    Array.from(t5.childNodes).forEach(((t6) => {
                      "string" != typeof t6["s-en"] && "string" != typeof t6["s-sn"] && (1 === t6.nodeType && t6.slot && t6.hidden ? t6.removeAttribute("hidden") : 8 !== t6.nodeType || t6.nodeValue || t6.parentNode.removeChild(t6));
                    }));
                  }
                }
                o5.$hostElement$ = t5;
              })(t4, e3.v, o4, n3);
            }
            o4 || 12 & e3.i && Yn(t4);
            {
              let e4 = t4;
              for (; e4 = e4.parentNode || e4.host; ) if (1 === e4.nodeType && e4.hasAttribute("s-id") && e4["s-p"] || e4["s-p"]) {
                An(n3, n3.U = e4);
                break;
              }
            }
            e3.t && Object.entries(e3.t).map((([n4, [e4]]) => {
              if (31 & e4 && Object.prototype.hasOwnProperty.call(t4, n4)) {
                const e5 = t4[n4];
                delete t4[n4], t4[n4] = e5;
              }
            })), Jn(t4, n3, e3);
          }
          o3();
        }
      })(this), s2 && s2.call(this);
    }, disconnectedCallback() {
      (async (t4) => {
        if (!(1 & B.i)) {
          const n3 = N(t4);
          (null == n3 ? void 0 : n3.K) && (n3.K.map(((t5) => t5())), n3.K = void 0);
        }
        kt.has(t4) && kt.delete(t4), t4.shadowRoot && kt.has(t4.shadowRoot) && kt.delete(t4.shadowRoot);
      })(this), l2 && l2.call(this);
    }, __attachShadow() {
      if (this.shadowRoot) {
        if ("open" !== this.shadowRoot.mode) throw new Error(`Unable to re-use existing shadow root for ${e2.v}! Mode is set to ${this.shadowRoot.mode} but Stencil only supports open shadow roots.`);
      } else K.call(this, e2);
    } }), Object.defineProperty(t3, "is", { value: e2.v, configurable: true }), zn(t3, e2);
  } catch (n3) {
    return x(n3), t3;
  }
  var o2;
};
var Kn = (t3, n2, e2) => {
  e2 && A.document && e2.map((([e3, o2, s2]) => {
    const l2 = Xn(A.document, t3, e3), i2 = Qn(n2, s2), r2 = te(e3);
    B.ael(l2, o2, i2, r2), (n2.K = n2.K || []).push((() => B.rel(l2, o2, i2, r2)));
  }));
};
var Qn = (t3, n2) => (e2) => {
  try {
    t3.$hostElement$[n2](e2);
  } catch (n3) {
    x(n3, t3.$hostElement$);
  }
};
var Xn = (t3, n2, e2) => 4 & e2 ? t3 : 8 & e2 ? A : 16 & e2 ? t3.body : n2;
var te = (t3) => T ? { passive: !!(1 & t3), capture: !!(2 & t3) } : !!(2 & t3);
function le(t3) {
  return t3;
}

export {
  e,
  o,
  s,
  l,
  d,
  h,
  v,
  p,
  L,
  J,
  Y,
  At,
  Bt,
  qt,
  zt,
  Xt,
  Wn,
  Gn,
  le
};
//# debugId=edcc7699-f5f8-539b-bd26-b39906b87b25
//# sourceMappingURL=chunk-NEOMKDHX.js.map
