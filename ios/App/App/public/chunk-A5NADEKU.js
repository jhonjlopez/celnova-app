import {
  n
} from "./chunk-TNAWJ6UU.js";
import {
  v
} from "./chunk-NEOMKDHX.js";

// node_modules/@ionic/core/components/p-D5_mEbGJ.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var r = "ion-content";
var e = ".ion-content-scroll-host";
var t = `${r}, ${e}`;
var n2 = (o) => "ION-CONTENT" === o.tagName;
var a = async (s) => n2(s) ? (await new Promise(((r2) => n(s, r2))), s.getScrollElement()) : s;
var i = (o) => o.querySelector(e) || o.querySelector(t);
var l = (o) => o.closest(t);
var f = (o) => o.querySelector(e);
var u = (o) => {
  if (n2(o)) return o.querySelector("ion-refresher");
  const s = o.closest(r);
  if (null === s) return null;
  const e2 = f(s);
  return null !== e2 && e2.contains(o) ? s.querySelector("ion-refresher") : null;
};
var c = (o, s) => n2(o) ? o.scrollToTop(s) : Promise.resolve(o.scrollTo({ top: 0, left: 0, behavior: "smooth" }));
var h = (o, s, r2, e2) => n2(o) ? o.scrollByPoint(s, r2, e2) : Promise.resolve(o.scrollBy({ top: r2, left: s, behavior: e2 > 0 ? "smooth" : "auto" }));
var m = (o) => v(o, r);
var p = (o) => {
  if (n2(o)) {
    const s = o.scrollY;
    return o.scrollY = false, s;
  }
  return o.style.setProperty("overflow", "hidden"), true;
};
var d = (o, s) => {
  n2(o) ? o.scrollY = s : o.style.removeProperty("overflow");
};

export {
  n2 as n,
  a,
  i,
  l,
  u,
  c,
  h,
  m,
  p,
  d
};
//# debugId=5268f161-9583-58fd-8faa-bfa07c1617b3
//# sourceMappingURL=chunk-A5NADEKU.js.map
