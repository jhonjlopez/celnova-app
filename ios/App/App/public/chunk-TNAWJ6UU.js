import {
  d
} from "./chunk-DI3VEDFV.js";

// node_modules/@ionic/core/components/p-Dj4J3LkD.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var r = (r2) => {
  for (let t = r2; t; t = t.parentElement) {
    const r3 = t.getAttribute("dir")?.toLowerCase();
    if ("rtl" === r3) return true;
    if ("ltr" === r3) return false;
  }
  return "rtl" === r2.ownerDocument?.dir?.toLowerCase();
};

// node_modules/@ionic/core/components/p-CUQjkOdi.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var n = (a, i) => {
  a.componentOnReady ? a.componentOnReady().then(((a2) => i(a2))) : f((() => i(a)));
};
var o = (a) => void 0 !== a.componentOnReady;
var s = (a, i = []) => {
  const e = {};
  return i.forEach(((i2) => {
    a.hasAttribute(i2) && (null !== a.getAttribute(i2) && (e[i2] = a.getAttribute(i2)), a.removeAttribute(i2));
  })), e;
};
var l = ["role", "aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-braillelabel", "aria-brailleroledescription", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colindextext", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-description", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowindextext", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"];
var u = (a) => s(a, l);
var d2 = (a, i, e, r2) => a.addEventListener(i, e, r2);
var c = (a, i, e, r2) => a.removeEventListener(i, e, r2);
var p = (i, e, r2, t) => {
  const n2 = d?.document;
  if (!n2 || !i || "undefined" == typeof ResizeObserver) return () => {
  };
  const o2 = n2.createElement("div");
  o2.style.cssText = `position:fixed;visibility:hidden;pointer-events:none;top:0;left:0;width:0;height:var(${e},0px);`, i.appendChild(o2);
  let s2 = t;
  const l2 = new ResizeObserver(((a) => {
    const { height: i2 } = a[0].contentRect;
    void 0 !== s2 && i2 !== s2 && r2(i2), s2 = i2;
  }));
  return l2.observe(o2), () => {
    l2.disconnect(), o2.remove();
  };
};
var m = (a, i = a) => a.shadowRoot || i;
var f = (a) => "function" == typeof __zone_symbol__requestAnimationFrame ? __zone_symbol__requestAnimationFrame(a) : "function" == typeof requestAnimationFrame ? requestAnimationFrame(a) : setTimeout(a);
var b = (a) => {
  if (a.focus(), a.classList.contains("ion-focusable")) {
    const i = a.closest("ion-app");
    i && i.setFocus([a]);
  }
};
var w = (a, i, e) => Math.max(a, Math.min(i, e));
var y = (a) => {
  if (a) {
    const i = a.changedTouches;
    if (i && i.length > 0) {
      const a2 = i[0];
      return { x: a2.clientX, y: a2.clientY };
    }
    if (void 0 !== a.pageX) return { x: a.pageX, y: a.pageY };
  }
  return { x: 0, y: 0 };
};
var k = (a, i) => {
  if (a ??= {}, i ??= {}, a === i) return true;
  const e = Object.keys(a);
  if (e.length !== Object.keys(i).length) return false;
  for (const r2 of e) {
    if (!(r2 in i)) return false;
    if (a[r2] !== i[r2]) return false;
  }
  return true;
};

export {
  r,
  n,
  o,
  s,
  u,
  d2 as d,
  c,
  p,
  m,
  f,
  b,
  w,
  y,
  k
};
//# debugId=51ba87de-5c4b-52bf-9e21-563f42076587
//# sourceMappingURL=chunk-TNAWJ6UU.js.map
