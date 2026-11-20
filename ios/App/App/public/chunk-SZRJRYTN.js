import {
  A,
  r
} from "./chunk-R2XMMTAE.js";
import {
  r as r2
} from "./chunk-TNAWJ6UU.js";

// node_modules/@ionic/core/components/p-D_U0pDe5.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var a = (t) => document.querySelector(`${t}.ion-cloned-element`);
var s = (t) => t.shadowRoot || t;
var e = (t) => {
  const o = "ION-TABS" === t.tagName ? t : t.querySelector("ion-tabs"), n = "ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";
  if (null != o) {
    const t2 = o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
    return null != t2 ? t2.querySelector(n) : null;
  }
  return t.querySelector(n);
};
var r3 = (t, o) => {
  const n = "ION-TABS" === t.tagName ? t : t.querySelector("ion-tabs");
  let a2 = [];
  if (null != n) {
    const t2 = n.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
    null != t2 && (a2 = t2.querySelectorAll("ion-buttons"));
  } else a2 = t.querySelectorAll("ion-buttons");
  for (const t2 of a2) {
    const n2 = t2.closest("ion-header"), a3 = n2 && !n2.classList.contains("header-collapse-condense-inactive"), s2 = t2.querySelector("ion-back-button"), e2 = t2.classList.contains("buttons-collapse");
    if (null !== s2 && ("start" === t2.slot || "" === t2.slot) && (e2 && a3 && o || !e2)) return s2;
  }
  return null;
};
var i = (t, n, e2, r4, i2, l2, c2, p, $) => {
  const d = n ? `calc(100% - ${i2.right + 4}px)` : i2.left - 4 + "px", m = n ? "right" : "left", b = n ? "left" : "right", u = n ? "right" : "left";
  let y = 1, X = 1, x = `scale(${X})`;
  const h = "scale(1)";
  if (l2 && c2) {
    const t2 = l2.textContent?.trim() === p.textContent?.trim();
    y = $.width / c2.width, X = ($.height - f) / c2.height, x = t2 ? `scale(${y}, ${X})` : `scale(${X})`;
  }
  const g = s(r4).querySelector("ion-icon").getBoundingClientRect(), k = n ? g.width / 2 - (g.right - i2.right) + "px" : i2.left - g.width / 2 + "px", w = n ? `-${window.innerWidth - i2.right}px` : `${i2.left}px`, v = `${$.top}px`, T = `${i2.top}px`, j = e2 ? [{ offset: 0, transform: `translate3d(${w}, ${T}, 0)` }, { offset: 1, transform: `translate3d(${k}, ${v}, 0)` }] : [{ offset: 0, transform: `translate3d(${k}, ${v}, 0)` }, { offset: 1, transform: `translate3d(${w}, ${T}, 0)` }], A2 = e2 ? [{ offset: 0, opacity: 1, transform: h }, { offset: 1, opacity: 0, transform: x }] : [{ offset: 0, opacity: 0, transform: x }, { offset: 1, opacity: 1, transform: h }], B = e2 ? [{ offset: 0, opacity: 1, transform: "scale(1)" }, { offset: 0.2, opacity: 0, transform: "scale(0.6)" }, { offset: 1, opacity: 0, transform: "scale(0.6)" }] : [{ offset: 0, opacity: 0, transform: "scale(0.6)" }, { offset: 0.6, opacity: 0, transform: "scale(0.6)" }, { offset: 1, opacity: 1, transform: "scale(1)" }], C = r(), D = r(), I = r(), J = a("ion-back-button"), L = s(J).querySelector(".button-text"), N = s(J).querySelector("ion-icon");
  J.text = r4.text, J.mode = r4.mode, J.icon = r4.icon, J.color = r4.color, J.disabled = r4.disabled, J.style.setProperty("display", "block"), J.style.setProperty("position", "fixed"), D.addElement(N), C.addElement(L), I.addElement(J), I.beforeStyles({ position: "absolute", top: "0px", [u]: "0px" }).beforeAddWrite((() => {
    r4.style.setProperty("display", "none"), J.style.setProperty(m, d);
  })).afterAddWrite((() => {
    r4.style.setProperty("display", ""), J.style.setProperty("display", "none"), J.style.removeProperty(m);
  })).keyframes(j), C.beforeStyles({ "transform-origin": `${m} top` }).keyframes(A2), D.beforeStyles({ "transform-origin": `${b} center` }).keyframes(B), t.addAnimation([C, D, I]);
};
var l = (t, n, s2, e2, r4, i2, l2, c2, p) => {
  const $ = n ? "right" : "left", d = n ? `calc(100% - ${r4.right}px)` : `${r4.left}px`, m = `${r4.top}px`;
  let b = n ? `-${window.innerWidth - l2.right - 8}px` : `${l2.x + 8}px`, u = 0.5;
  const y = "scale(1)";
  let X = `scale(${u})`;
  if (c2 && p) {
    b = n ? `-${window.innerWidth - p.right - 8}px` : p.x - 8 + "px";
    const t2 = c2.textContent?.trim() === e2.textContent?.trim();
    u = p.height / (i2.height - f), X = t2 ? `scale(${p.width / i2.width}, ${u})` : `scale(${u})`;
  }
  const x = l2.top + l2.height / 2 - r4.height * u / 2 + "px", h = s2 ? [{ offset: 0, opacity: 0, transform: `translate3d(${b}, ${x}, 0) ${X}` }, { offset: 0.1, opacity: 0 }, { offset: 1, opacity: 1, transform: `translate3d(0px, ${m}, 0) ${y}` }] : [{ offset: 0, opacity: 0.99, transform: `translate3d(0px, ${m}, 0) ${y}` }, { offset: 0.6, opacity: 0 }, { offset: 1, opacity: 0, transform: `translate3d(${b}, ${x}, 0) ${X}` }], g = a("ion-title"), k = r();
  g.innerText = e2.innerText, g.size = e2.size, g.color = e2.color, k.addElement(g), k.beforeStyles({ "transform-origin": `${$} top`, height: `${r4.height}px`, display: "", position: "relative", [$]: d }).beforeAddWrite((() => {
    e2.style.setProperty("opacity", "0");
  })).afterAddWrite((() => {
    e2.style.setProperty("opacity", ""), g.style.setProperty("display", "none");
  })).keyframes(h), t.addAnimation(k);
};
var c = (a2, c2) => {
  try {
    const f2 = "cubic-bezier(0.32,0.72,0,1)", p = "opacity", $ = "transform", d = "0%", m = 0.8, b = r2(a2), u = b ? "-99.5%" : "99.5%", y = b ? "33%" : "-33%", X = c2.enteringEl, x = c2.leavingEl, h = "back" === c2.direction, g = X.querySelector(":scope > ion-content"), k = X.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"), w = X.querySelectorAll(":scope > ion-header > ion-toolbar"), v = r(), T = r();
    if (v.addElement(X).duration((c2.duration ?? 0) || 540).easing(c2.easing || f2).fill("both").beforeRemoveClass("ion-page-invisible"), x && null != a2) {
      const t = r();
      t.addElement(a2), v.addAnimation(t);
    }
    if (g || 0 !== w.length || 0 !== k.length ? (T.addElement(g), T.addElement(k)) : T.addElement(X.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")), v.addAnimation(T), h ? T.beforeClearStyles([p]).fromTo("transform", `translateX(${y})`, `translateX(${d})`).fromTo(p, m, 1) : T.beforeClearStyles([p]).fromTo("transform", `translateX(${u})`, `translateX(${d})`), g) {
      const t = s(g).querySelector(".transition-effect");
      if (t) {
        const n = t.querySelector(".transition-cover"), a3 = t.querySelector(".transition-shadow"), s2 = r(), e2 = r(), r4 = r();
        s2.addElement(t).beforeStyles({ opacity: "1", display: "block" }).afterStyles({ opacity: "", display: "" }), e2.addElement(n).beforeClearStyles([p]).fromTo(p, 0, 0.1), r4.addElement(a3).beforeClearStyles([p]).fromTo(p, 0.03, 0.7), s2.addAnimation([e2, r4]), T.addAnimation([s2]);
      }
    }
    const j = X.querySelector("ion-header.header-collapse-condense"), { forward: A2, backward: B } = ((t, o, n, a3, c3) => {
      const f3 = r3(a3, n), p2 = e(c3), $2 = e(a3), d2 = r3(c3, n), m2 = null !== f3 && null !== p2 && !n, b2 = null !== $2 && null !== d2 && n;
      if (m2) {
        const a4 = p2.getBoundingClientRect(), e2 = f3.getBoundingClientRect(), r4 = s(f3).querySelector(".button-text"), c4 = r4?.getBoundingClientRect(), $3 = s(p2).querySelector(".toolbar-title").getBoundingClientRect();
        l(t, o, n, p2, a4, $3, e2, r4, c4), i(t, o, n, f3, e2, r4, c4, p2, $3);
      } else if (b2) {
        const a4 = $2.getBoundingClientRect(), e2 = d2.getBoundingClientRect(), r4 = s(d2).querySelector(".button-text"), c4 = r4?.getBoundingClientRect(), f4 = s($2).querySelector(".toolbar-title").getBoundingClientRect();
        l(t, o, n, $2, a4, f4, e2, r4, c4), i(t, o, n, d2, e2, r4, c4, $2, f4);
      }
      return { forward: m2, backward: b2 };
    })(v, b, h, X, x);
    if (w.forEach(((t) => {
      const n = r();
      n.addElement(t), v.addAnimation(n);
      const a3 = r();
      a3.addElement(t.querySelector("ion-title"));
      const e2 = r(), r4 = Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")), i2 = t.closest("ion-header"), l2 = i2?.classList.contains("header-collapse-condense-inactive");
      let c3;
      c3 = r4.filter(h ? (t2) => {
        const o = t2.classList.contains("buttons-collapse");
        return o && !l2 || !o;
      } : (t2) => !t2.classList.contains("buttons-collapse")), e2.addElement(c3);
      const f3 = r();
      f3.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));
      const $2 = r();
      $2.addElement(s(t).querySelector(".toolbar-background"));
      const m2 = r(), X2 = t.querySelector("ion-back-button");
      if (X2 && m2.addElement(X2), n.addAnimation([a3, e2, f3, $2, m2]), e2.fromTo(p, 0.01, 1), f3.fromTo(p, 0.01, 1), h) l2 || a3.fromTo("transform", `translateX(${y})`, `translateX(${d})`).fromTo(p, 0.01, 1), f3.fromTo("transform", `translateX(${y})`, `translateX(${d})`), m2.fromTo(p, 0.01, 1);
      else {
        j || a3.fromTo("transform", `translateX(${u})`, `translateX(${d})`).fromTo(p, 0.01, 1), f3.fromTo("transform", `translateX(${u})`, `translateX(${d})`), $2.beforeClearStyles([p, "transform"]);
        const t2 = i2?.translucent;
        if (t2 ? $2.fromTo("transform", b ? "translateX(-100%)" : "translateX(100%)", "translateX(0px)") : $2.fromTo(p, 0.01, "var(--opacity)"), A2 || m2.fromTo(p, 0.01, 1), X2 && !A2) {
          const t3 = r();
          t3.addElement(s(X2).querySelector(".button-text")).fromTo("transform", b ? "translateX(-100px)" : "translateX(100px)", "translateX(0px)"), n.addAnimation(t3);
        }
      }
    })), x) {
      const t = r(), a3 = x.querySelector(":scope > ion-content"), e2 = x.querySelectorAll(":scope > ion-header > ion-toolbar"), r4 = x.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");
      if (a3 || 0 !== e2.length || 0 !== r4.length ? (t.addElement(a3), t.addElement(r4)) : t.addElement(x.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")), v.addAnimation(t), h) {
        t.beforeClearStyles([p]).fromTo("transform", `translateX(${d})`, b ? "translateX(-100%)" : "translateX(100%)");
        const o = A(x);
        v.afterAddWrite((() => {
          "normal" === v.getDirection() && o.style.setProperty("display", "none");
        }));
      } else t.fromTo("transform", `translateX(${d})`, `translateX(${y})`).fromTo(p, 1, m);
      if (a3) {
        const n = s(a3).querySelector(".transition-effect");
        if (n) {
          const a4 = n.querySelector(".transition-cover"), s2 = n.querySelector(".transition-shadow"), e3 = r(), r5 = r(), i2 = r();
          e3.addElement(n).beforeStyles({ opacity: "1", display: "block" }).afterStyles({ opacity: "", display: "" }), r5.addElement(a4).beforeClearStyles([p]).fromTo(p, 0.1, 0), i2.addElement(s2).beforeClearStyles([p]).fromTo(p, 0.7, 0.03), e3.addAnimation([r5, i2]), t.addAnimation([e3]);
        }
      }
      e2.forEach(((t2) => {
        const n = r();
        n.addElement(t2);
        const a4 = r();
        a4.addElement(t2.querySelector("ion-title"));
        const e3 = r(), r5 = t2.querySelectorAll("ion-buttons,[menuToggle]"), i2 = t2.closest("ion-header"), l2 = i2?.classList.contains("header-collapse-condense-inactive"), c3 = Array.from(r5).filter(((t3) => {
          const o = t3.classList.contains("buttons-collapse");
          return o && !l2 || !o;
        }));
        e3.addElement(c3);
        const f3 = r(), m2 = t2.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");
        m2.length > 0 && f3.addElement(m2);
        const u2 = r();
        u2.addElement(s(t2).querySelector(".toolbar-background"));
        const X2 = r(), x2 = t2.querySelector("ion-back-button");
        if (x2 && X2.addElement(x2), n.addAnimation([a4, e3, f3, X2, u2]), v.addAnimation(n), X2.fromTo(p, 0.99, 0), e3.fromTo(p, 0.99, 0), f3.fromTo(p, 0.99, 0), h) {
          l2 || a4.fromTo("transform", `translateX(${d})`, b ? "translateX(-100%)" : "translateX(100%)").fromTo(p, 0.99, 0), f3.fromTo("transform", `translateX(${d})`, b ? "translateX(-100%)" : "translateX(100%)"), u2.beforeClearStyles([p, "transform"]);
          const t3 = i2?.translucent;
          if (t3 ? u2.fromTo("transform", "translateX(0px)", b ? "translateX(-100%)" : "translateX(100%)") : u2.fromTo(p, "var(--opacity)", 0), x2 && !B) {
            const t4 = r();
            t4.addElement(s(x2).querySelector(".button-text")).fromTo("transform", `translateX(${d})`, `translateX(${(b ? -124 : 124) + "px"})`), n.addAnimation(t4);
          }
        } else l2 || a4.fromTo("transform", `translateX(${d})`, `translateX(${y})`).fromTo(p, 0.99, 0).afterClearStyles([$, p]), f3.fromTo("transform", `translateX(${d})`, `translateX(${y})`).afterClearStyles([$, p]), X2.afterClearStyles([p]), a4.afterClearStyles([p]), e3.afterClearStyles([p]);
      }));
    }
    return v;
  } catch (t) {
    throw t;
  }
};
var f = 10;

export {
  s,
  c
};
//# debugId=71734513-b7fe-5a4d-94d4-c7590350673e
//# sourceMappingURL=chunk-SZRJRYTN.js.map
