import {
  a,
  h,
  l
} from "./chunk-A5NADEKU.js";
import {
  c,
  d as d2,
  n,
  r
} from "./chunk-TNAWJ6UU.js";
import "./chunk-NEOMKDHX.js";
import {
  e,
  t
} from "./chunk-KQQH3YTO.js";
import {
  d,
  o
} from "./chunk-DI3VEDFV.js";
import "./chunk-GOMI4DH3.js";

// node_modules/@ionic/core/components/p-BWbz71uB.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var l2 = /* @__PURE__ */ new WeakMap();
var f = (o2, t2, n2, i = 0, a2 = false) => {
  l2.has(o2) !== n2 && (n2 ? w(o2, t2, i, a2) : p(o2, t2));
};
var w = (o2, t2, n2, i = false) => {
  const a2 = t2.parentNode, e2 = t2.cloneNode(false);
  e2.classList.add("cloned-input"), e2.tabIndex = -1, i && (e2.disabled = true);
  const r2 = r(o2);
  e2.style.insetInlineStart = r2 ? a2.offsetWidth - t2.offsetLeft - t2.offsetWidth + "px" : `${t2.offsetLeft}px`, a2.appendChild(e2), l2.set(o2, e2);
  const s = r2 ? 9999 : -9999;
  o2.style.pointerEvents = "none", t2.style.transform = `translate3d(${s}px,${n2}px,0) scale(0)`;
};
var p = (o2, t2) => {
  const n2 = l2.get(o2);
  n2 && (l2.delete(o2), n2.remove()), o2.style.pointerEvents = "", t2.style.transform = "";
};
var m = "input, textarea, [no-blur], [contenteditable]";
var b = "$ionPaddingTimer";
var h2 = (o2, t2, n2) => {
  const i = o2[b];
  i && clearTimeout(i), t2 > 0 ? o2.style.setProperty("--keyboard-offset", `${t2}px`) : o2[b] = setTimeout((() => {
    o2.style.setProperty("--keyboard-offset", "0px"), n2 && n2();
  }), 120);
};
var y = (o2, t2, n2) => {
  o2.addEventListener("focusout", (() => {
    t2 && h2(t2, 0, n2);
  }), { once: true });
};
var S = 0;
var D = "data-ionic-skip-scroll-assist";
var M = (o2) => {
  if (document.activeElement === o2) return;
  const t2 = o2.getAttribute("id"), n2 = o2.closest(`label[for="${t2}"]`), i = document.activeElement?.closest(`label[for="${t2}"]`);
  null !== n2 && n2 === i || (o2.setAttribute(D, "true"), o2.focus());
};
var x = async (o2, t2, a2, e2, r2, s, d3 = false, c2 = 0, u = true) => {
  if (!a2 && !e2) return;
  const l3 = ((o3, t3, n2, i) => ((o4, t4, n3, i2) => {
    const a3 = o4.top, e3 = o4.bottom, r3 = t4.top, s2 = r3 + 15, d4 = Math.min(t4.bottom, i2 - n3) - 50 - e3, c3 = s2 - a3, u2 = Math.round(d4 < 0 ? -d4 : c3 > 0 ? -c3 : 0), l4 = Math.min(u2, a3 - r3), f2 = Math.abs(l4);
    return { scrollAmount: l4, scrollDuration: Math.min(400, Math.max(150, f2 / 0.3)), scrollPadding: n3, inputSafeY: 4 - (a3 - s2) };
  })((o3.closest("ion-item,[ion-item]") ?? o3).getBoundingClientRect(), t3.getBoundingClientRect(), n2, i))(o2, a2 || e2, r2, c2);
  if (a2 && Math.abs(l3.scrollAmount) < 4) return M(t2), void (s && null !== a2 && (h2(a2, S), y(t2, a2, (() => S = 0))));
  if (f(o2, t2, true, l3.inputSafeY, d3), M(t2), s && a2 && (S = l3.scrollPadding, h2(a2, S)), "undefined" != typeof window) {
    let e3;
    const r3 = async () => {
      void 0 !== e3 && clearTimeout(e3), window.removeEventListener("ionKeyboardDidShow", d4), window.removeEventListener("ionKeyboardDidShow", r3), a2 && await h(a2, 0, l3.scrollAmount, l3.scrollDuration), f(o2, t2, false, l3.inputSafeY), document.activeElement === t2 && M(t2), s && y(t2, a2, (() => S = 0));
    }, d4 = () => {
      window.removeEventListener("ionKeyboardDidShow", d4), window.addEventListener("ionKeyboardDidShow", r3);
    };
    if (a2) {
      const o3 = await a(a2);
      if (u && l3.scrollAmount > o3.scrollHeight - o3.clientHeight - o3.scrollTop) return "password" === t2.type ? (l3.scrollAmount += 50, window.addEventListener("ionKeyboardDidShow", d4)) : window.addEventListener("ionKeyboardDidShow", r3), void (e3 = setTimeout(r3, 1e3));
    }
    r3();
  }
};
var K = async (n2, i) => {
  if (void 0 === o) return;
  const u = "ios" === i, l3 = "android" === i, w2 = n2.getNumber("keyboardHeight", 290), p2 = n2.getBoolean("scrollAssist", true), b2 = n2.getBoolean("hideCaretOnScroll", u), h3 = n2.getBoolean("inputBlurring", false), y2 = n2.getBoolean("scrollPadding", true), S2 = Array.from(o.querySelectorAll("ion-input, ion-textarea")), M2 = /* @__PURE__ */ new WeakMap(), K2 = /* @__PURE__ */ new WeakMap(), j = await e.getResizeMode(), k = async (t2) => {
    await new Promise(((o2) => n(t2, o2)));
    const n3 = t2.shadowRoot || t2, i2 = n3.querySelector("input") || n3.querySelector("textarea"), c2 = l(t2), u2 = c2 ? null : t2.closest("ion-footer");
    if (i2) {
      if (c2 && b2 && !M2.has(t2)) {
        const o2 = ((o3, t3, n4) => {
          if (!n4 || !t3) return () => {
          };
          const i3 = (n5) => {
            var i4;
            (i4 = t3) === i4.getRootNode().activeElement && f(o3, t3, n5);
          }, a2 = () => f(o3, t3, false), s = () => i3(true), d3 = () => i3(false);
          return d2(n4, "ionScrollStart", s), d2(n4, "ionScrollEnd", d3), t3.addEventListener("blur", a2), () => {
            c(n4, "ionScrollStart", s), c(n4, "ionScrollEnd", d3), t3.removeEventListener("blur", a2);
          };
        })(t2, i2, c2);
        M2.set(t2, o2);
      }
      if ("date" !== i2.type && "datetime-local" !== i2.type && (c2 || u2) && p2 && !K2.has(t2)) {
        const n4 = ((t3, n5, i3, a2, e2, r2, s, c3 = false) => {
          const u3 = r2 && (void 0 === s || s.mode === t.None);
          let l4 = false;
          const f2 = void 0 !== d ? d.innerHeight : 0, w3 = (o2) => {
            false !== l4 ? x(t3, n5, i3, a2, o2.detail.keyboardHeight, u3, c3, f2, false) : l4 = true;
          }, p3 = () => {
            l4 = false, d?.removeEventListener("ionKeyboardDidShow", w3), t3.removeEventListener("focusout", p3);
          }, m2 = async () => {
            n5.hasAttribute(D) ? n5.removeAttribute(D) : (x(t3, n5, i3, a2, e2, u3, c3, f2), d?.addEventListener("ionKeyboardDidShow", w3), t3.addEventListener("focusout", p3));
          };
          return t3.addEventListener("focusin", m2), () => {
            t3.removeEventListener("focusin", m2), d?.removeEventListener("ionKeyboardDidShow", w3), t3.removeEventListener("focusout", p3);
          };
        })(t2, i2, c2, u2, w2, y2, j, l3);
        K2.set(t2, n4);
      }
    }
  };
  h3 && (() => {
    let o2 = true, t2 = false;
    const n3 = document;
    d2(n3, "ionScrollStart", (() => {
      t2 = true;
    })), n3.addEventListener("focusin", (() => {
      o2 = true;
    }), true), n3.addEventListener("touchend", ((i2) => {
      if (t2) return void (t2 = false);
      const a2 = n3.activeElement;
      if (!a2) return;
      if (a2.matches(m)) return;
      const e2 = i2.target;
      e2 !== a2 && (e2.matches(m) || e2.closest(m) || (o2 = false, setTimeout((() => {
        o2 || a2.blur();
      }), 50)));
    }), false);
  })();
  for (const o2 of S2) k(o2);
  o.addEventListener("ionInputDidLoad", ((o2) => {
    k(o2.detail);
  })), o.addEventListener("ionInputDidUnload", ((o2) => {
    ((o3) => {
      if (b2) {
        const t2 = M2.get(o3);
        t2 && t2(), M2.delete(o3);
      }
      if (p2) {
        const t2 = K2.get(o3);
        t2 && t2(), K2.delete(o3);
      }
    })(o2.detail);
  }));
};
export {
  K as startInputShims
};
//# debugId=9c94280e-c457-53aa-98a9-eca088fc7f18
//# sourceMappingURL=p-BWbz71uB-WVCDEF6L.js.map
