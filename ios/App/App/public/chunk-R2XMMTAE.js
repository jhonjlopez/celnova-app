import {
  f
} from "./chunk-TNAWJ6UU.js";
import {
  Y,
  d,
  e,
  h,
  p
} from "./chunk-NEOMKDHX.js";
import {
  d as d2
} from "./chunk-DI3VEDFV.js";

// node_modules/@ionic/core/components/p-ChsJlFCQ.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var t;
var i = (e2, o, i2) => {
  const n2 = o.startsWith("animation") ? (r3 = e2, void 0 === t && (t = void 0 === r3.style.animationName && void 0 !== r3.style.webkitAnimationName ? "-webkit-" : ""), t) : "";
  var r3;
  e2.style.setProperty(n2 + o, i2);
};
var n = (e2 = [], o) => {
  if (void 0 !== o) {
    const t3 = Array.isArray(o) ? o : [o];
    return [...e2, ...t3];
  }
  return e2;
};
var r = (t3) => {
  let r3, a, s2, d4, f3, l2, c2, v2, m2, u2, p3, y2 = [], g2 = [], A2 = [], b2 = false, C2 = {}, E2 = [], h3 = [], S = {}, k2 = 0, R = false, j2 = false, w2 = true, T = false, D2 = true, F = false;
  const W2 = t3, I = [], K = [], M2 = [], P2 = [], Z = [], x2 = [], B2 = [], q = [], z2 = [], G = [], H = [], J = "function" == typeof AnimationEffect || void 0 !== d2 && "function" == typeof d2.AnimationEffect, L2 = "function" == typeof Element && "function" == typeof Element.prototype.animate && J, N = () => H, O = (e2, o) => {
    const t4 = o.findIndex(((o2) => o2.c === e2));
    t4 > -1 && o.splice(t4, 1);
  }, Q = (e2, o) => ((o?.oneTimeCallback ? K : I).push({ c: e2, o }), p3), U2 = () => {
    L2 && (H.forEach(((e2) => {
      e2.cancel();
    })), H.length = 0);
  }, V2 = () => {
    x2.forEach(((e2) => {
      e2?.parentNode && e2.parentNode.removeChild(e2);
    })), x2.length = 0;
  }, X = () => void 0 !== f3 ? f3 : c2 ? c2.getFill() : "both", Y2 = () => void 0 !== v2 ? v2 : void 0 !== l2 ? l2 : c2 ? c2.getDirection() : "normal", $ = () => R ? "linear" : void 0 !== s2 ? s2 : c2 ? c2.getEasing() : "linear", _ = () => j2 ? 0 : void 0 !== m2 ? m2 : void 0 !== a ? a : c2 ? c2.getDuration() : 0, ee = () => void 0 !== d4 ? d4 : c2 ? c2.getIterations() : 1, oe = () => void 0 !== u2 ? u2 : void 0 !== r3 ? r3 : c2 ? c2.getDelay() : 0, te = () => {
    0 !== k2 && (k2--, 0 === k2 && ((() => {
      z2.forEach(((e3) => e3())), G.forEach(((e3) => e3()));
      const e2 = w2 ? 1 : 0, o = E2, t4 = h3, n2 = S;
      P2.forEach(((e3) => {
        const r4 = e3.classList;
        o.forEach(((e4) => r4.add(e4))), t4.forEach(((e4) => r4.remove(e4)));
        for (const o2 in n2) n2.hasOwnProperty(o2) && i(e3, o2, n2[o2]);
      })), m2 = void 0, v2 = void 0, u2 = void 0, I.forEach(((o2) => o2.c(e2, p3))), K.forEach(((o2) => o2.c(e2, p3))), K.length = 0, D2 = true, w2 && (T = true), w2 = true;
    })(), c2 && c2.animationFinish()));
  }, ie = () => {
    (() => {
      B2.forEach(((e3) => e3())), q.forEach(((e3) => e3()));
      const e2 = g2, o = A2, t4 = C2;
      P2.forEach(((n2) => {
        const r4 = n2.classList;
        e2.forEach(((e3) => r4.add(e3))), o.forEach(((e3) => r4.remove(e3)));
        for (const e3 in t4) t4.hasOwnProperty(e3) && i(n2, e3, t4[e3]);
      }));
    })(), y2.length > 0 && L2 && (P2.forEach(((e2) => {
      const o = e2.animate(y2, { id: W2, delay: oe(), duration: _(), easing: $(), iterations: ee(), fill: X(), direction: Y2() });
      o.pause(), H.push(o);
    })), H.length > 0 && (H[0].onfinish = () => {
      te();
    })), b2 = true;
  }, ne = (e2) => {
    e2 = Math.min(Math.max(e2, 0), 0.9999), L2 && H.forEach(((o) => {
      o.currentTime = o.effect.getComputedTiming().delay + _() * e2, o.pause();
    }));
  }, re = (e2) => {
    H.forEach(((e3) => {
      e3.effect.updateTiming({ delay: oe(), duration: _(), easing: $(), iterations: ee(), fill: X(), direction: Y2() });
    })), void 0 !== e2 && ne(e2);
  }, ae = (e2 = false, o = true, t4) => (e2 && Z.forEach(((i2) => {
    i2.update(e2, o, t4);
  })), L2 && re(t4), p3), se = () => {
    b2 && (L2 ? H.forEach(((e2) => {
      e2.pause();
    })) : P2.forEach(((e2) => {
      i(e2, "animation-play-state", "paused");
    })), F = true);
  }, de = (e2) => new Promise(((o) => {
    e2?.sync && (j2 = true, Q((() => j2 = false), { oneTimeCallback: true })), b2 || ie(), T && (L2 && (ne(0), re()), T = false), D2 && (k2 = Z.length + 1, D2 = false);
    const t4 = () => {
      O(i2, K), o();
    }, i2 = () => {
      O(t4, M2), o();
    };
    Q(i2, { oneTimeCallback: true }), M2.push({ c: t4, o: { oneTimeCallback: true } }), Z.forEach(((e3) => {
      e3.play();
    })), L2 ? (H.forEach(((e3) => {
      e3.play();
    })), 0 !== y2.length && 0 !== P2.length || te()) : te(), F = false;
  })), fe = (e2, o) => {
    const t4 = y2[0];
    return void 0 === t4 || void 0 !== t4.offset && 0 !== t4.offset ? y2 = [{ offset: 0, [e2]: o }, ...y2] : t4[e2] = o, p3;
  };
  return p3 = { parentAnimation: c2, elements: P2, childAnimations: Z, id: W2, animationFinish: te, from: fe, to: (e2, o) => {
    const t4 = y2[y2.length - 1];
    return void 0 === t4 || void 0 !== t4.offset && 1 !== t4.offset ? y2 = [...y2, { offset: 1, [e2]: o }] : t4[e2] = o, p3;
  }, fromTo: (e2, o, t4) => fe(e2, o).to(e2, t4), parent: (e2) => (c2 = e2, p3), play: de, pause: () => (Z.forEach(((e2) => {
    e2.pause();
  })), se(), p3), stop: () => {
    Z.forEach(((e2) => {
      e2.stop();
    })), b2 && (U2(), b2 = false), R = false, j2 = false, D2 = true, v2 = void 0, m2 = void 0, u2 = void 0, k2 = 0, T = false, w2 = true, F = false, M2.forEach(((e2) => e2.c(0, p3))), M2.length = 0;
  }, destroy: (e2) => (Z.forEach(((o) => {
    o.destroy(e2);
  })), ((e3) => {
    U2(), e3 && V2();
  })(e2), P2.length = 0, Z.length = 0, y2.length = 0, I.length = 0, K.length = 0, b2 = false, D2 = true, p3), keyframes: (e2) => {
    const o = y2 !== e2;
    return y2 = e2, o && ((e3) => {
      L2 && N().forEach(((o2) => {
        const t4 = o2.effect;
        if (t4.setKeyframes) t4.setKeyframes(e3);
        else {
          const i2 = new KeyframeEffect(t4.target, e3, t4.getTiming());
          o2.effect = i2;
        }
      }));
    })(y2), p3;
  }, addAnimation: (e2) => {
    if (null != e2) if (Array.isArray(e2)) for (const o of e2) o.parent(p3), Z.push(o);
    else e2.parent(p3), Z.push(e2);
    return p3;
  }, addElement: (o) => {
    if (null != o) if (1 === o.nodeType) P2.push(o);
    else if (o.length >= 0) for (let e2 = 0; e2 < o.length; e2++) P2.push(o[e2]);
    else h("createAnimation - Invalid addElement value.");
    return p3;
  }, update: ae, fill: (e2) => (f3 = e2, ae(true), p3), direction: (e2) => (l2 = e2, ae(true), p3), iterations: (e2) => (d4 = e2, ae(true), p3), duration: (e2) => (L2 || 0 !== e2 || (e2 = 1), a = e2, ae(true), p3), easing: (e2) => (s2 = e2, ae(true), p3), delay: (e2) => (r3 = e2, ae(true), p3), getWebAnimations: N, getKeyframes: () => y2, getFill: X, getDirection: Y2, getDelay: oe, getIterations: ee, getEasing: $, getDuration: _, afterAddRead: (e2) => (z2.push(e2), p3), afterAddWrite: (e2) => (G.push(e2), p3), afterClearStyles: (e2 = []) => {
    for (const o of e2) S[o] = "";
    return p3;
  }, afterStyles: (e2 = {}) => (S = e2, p3), afterRemoveClass: (e2) => (h3 = n(h3, e2), p3), afterAddClass: (e2) => (E2 = n(E2, e2), p3), beforeAddRead: (e2) => (B2.push(e2), p3), beforeAddWrite: (e2) => (q.push(e2), p3), beforeClearStyles: (e2 = []) => {
    for (const o of e2) C2[o] = "";
    return p3;
  }, beforeStyles: (e2 = {}) => (C2 = e2, p3), beforeRemoveClass: (e2) => (A2 = n(A2, e2), p3), beforeAddClass: (e2) => (g2 = n(g2, e2), p3), onFinish: Q, isRunning: () => 0 !== k2 && !F, progressStart: (e2 = false, o) => (Z.forEach(((t4) => {
    t4.progressStart(e2, o);
  })), se(), R = e2, b2 || ie(), ae(false, true, o), p3), progressStep: (e2) => (Z.forEach(((o) => {
    o.progressStep(e2);
  })), ne(e2), p3), progressEnd: (e2, o, t4) => (R = false, Z.forEach(((i2) => {
    i2.progressEnd(e2, o, t4);
  })), void 0 !== t4 && (m2 = t4), T = false, w2 = true, 0 === e2 ? (v2 = "reverse" === Y2() ? "normal" : "reverse", "reverse" === v2 && (w2 = false), L2 ? (ae(), ne(1 - o)) : (u2 = (1 - o) * _() * -1, ae(false, false))) : 1 === e2 && (L2 ? (ae(), ne(o)) : (u2 = o * _() * -1, ae(false, false))), void 0 === e2 || c2 || de(), p3) };
};

// node_modules/@ionic/core/components/p-LkEGRiq0.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var t2 = "ionViewWillEnter";
var r2 = "ionViewDidEnter";
var s = "ionViewWillLeave";
var c = "ionViewDidLeave";
var l = "ionViewWillUnload";
var u = (n2) => {
  n2.tabIndex = -1, n2.focus();
};
var d3 = (n2) => null !== n2.offsetParent;
var p2 = "ion-last-focus";
var f2 = (e2) => {
  if (e.get("focusManagerPriority", false)) {
    const n2 = document.activeElement;
    null !== n2 && e2?.contains(n2) && n2.setAttribute(p2, "true");
  }
};
var w = (i2) => {
  const a = e.get("focusManagerPriority", false);
  if (Array.isArray(a) && !i2.contains(document.activeElement)) {
    const n2 = i2.querySelector(`[${p2}]`);
    if (n2 && d3(n2)) return void u(n2);
    for (const n3 of a) switch (n3) {
      case "content":
        const a2 = i2.querySelector('main, [role="main"]');
        if (a2 && d3(a2)) return void u(a2);
        break;
      case "heading":
        const o = i2.querySelector('h1, [role="heading"][aria-level="1"]');
        if (o && d3(o)) return void u(o);
        break;
      case "banner":
        const t3 = i2.querySelector('header, [role="banner"]');
        if (t3 && d3(t3)) return void u(t3);
        break;
      default:
        d(`Unrecognized focus manager priority value ${n3}`);
    }
    u(i2);
  }
};
var v = (n2) => new Promise(((e2, a) => {
  Y((() => {
    const i2 = B(n2);
    m(n2, i2), b(n2).then(((i3) => {
      i3.animation && i3.animation.destroy(), g(n2), e2(i3);
    }), ((e3) => {
      g(n2), a(e3);
    })).finally((() => {
      z(i2, false);
    }));
  }));
}));
var m = (n2, e2) => {
  const i2 = n2.enteringEl, a = n2.leavingEl;
  f2(a), x(i2, a, n2.direction), z(e2, true), n2.showGoBack ? i2.classList.add("can-go-back") : i2.classList.remove("can-go-back"), M(i2, false), i2.style.setProperty("pointer-events", "none"), a && (M(a, false), a.style.setProperty("pointer-events", "none"));
};
var b = async (n2) => {
  const e2 = await h2(n2);
  return e2 && p.isBrowser ? y(e2, n2) : P(n2);
};
var g = (n2) => {
  const e2 = n2.enteringEl, i2 = n2.leavingEl;
  e2.classList.remove("ion-page-invisible"), e2.style.removeProperty("pointer-events"), void 0 !== i2 && (i2.classList.remove("ion-page-invisible"), i2.style.removeProperty("pointer-events")), w(e2);
};
var h2 = async (n2) => {
  if (n2.leavingEl && n2.animated && 0 !== n2.duration) return n2.animationBuilder ? n2.animationBuilder : "ios" === n2.mode ? (await import("./p-D_U0pDe5-VR3AO63B.js")).iosTransitionAnimation : (await import("./p-CRb2xRCz-P4LG76OU.js")).mdTransitionAnimation;
};
var y = async (n2, e2) => {
  await k(e2, true);
  const i2 = n2(e2.baseEl, e2);
  V(e2.enteringEl, e2.leavingEl);
  const a = await j(i2, e2);
  return e2.progressCallback && e2.progressCallback(void 0), a && D(e2.enteringEl, e2.leavingEl), { hasCompleted: a, animation: i2 };
};
var P = async (e2) => {
  const i2 = e2.enteringEl, a = e2.leavingEl, o = e.get("focusManagerPriority", false);
  return await k(e2, o), V(i2, a), D(i2, a), { hasCompleted: true };
};
var k = async (n2, e2) => {
  (void 0 !== n2.deepWait ? n2.deepWait : e2) && await Promise.all([L(n2.enteringEl), L(n2.leavingEl)]), await C(n2.viewIsReady, n2.enteringEl);
};
var C = async (n2, e2) => {
  n2 && await n2(e2);
};
var j = (n2, e2) => {
  const i2 = e2.progressCallback, a = new Promise(((e3) => {
    n2.onFinish(((n3) => e3(1 === n3)));
  }));
  return i2 ? (n2.progressStart(true), i2(n2)) : n2.play(), a;
};
var V = (n2, e2) => {
  E(e2, s), E(n2, t2);
};
var D = (n2, e2) => {
  E(n2, r2), E(e2, c);
};
var E = (n2, e2) => {
  if (n2) {
    const i2 = new CustomEvent(e2, { bubbles: false, cancelable: false });
    n2.dispatchEvent(i2);
  }
};
var U = () => new Promise(((n2) => f((() => f((() => n2()))))));
var L = async (n2) => {
  const e2 = n2;
  if (e2) {
    if (null != e2.componentOnReady) {
      if (null != await e2.componentOnReady()) return;
    } else if (null != e2.__registerHost) {
      const n3 = new Promise(((n4) => f(n4)));
      return void await n3;
    }
    await Promise.all(Array.from(e2.children).map(L));
  }
};
var M = (n2, e2) => {
  e2 ? (n2.setAttribute("aria-hidden", "true"), n2.classList.add("ion-page-hidden")) : (n2.hidden = false, n2.removeAttribute("aria-hidden"), n2.classList.remove("ion-page-hidden"));
};
var W = (n2) => (n2.style.setProperty("pointer-events", "none"), () => {
  setTimeout((() => n2.style.removeProperty("pointer-events")));
});
var x = (n2, e2, i2) => {
  void 0 !== n2 && (n2.style.zIndex = "back" === i2 ? "99" : "101"), void 0 !== e2 && (e2.style.zIndex = "100");
};
var z = (n2, e2) => {
  if (!n2) return;
  const i2 = "header-transitioning";
  e2 ? n2.classList.add(i2) : n2.classList.remove(i2);
};
var A = (n2) => {
  if (n2.classList.contains("ion-page")) return n2;
  return n2.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs") || n2;
};
var B = (n2) => {
  if ("ios" !== n2.mode) return null;
  const e2 = "back" === n2.direction ? n2.leavingEl : n2.enteringEl;
  return e2 ? e2.querySelector("ion-header") : null;
};

export {
  r,
  t2 as t,
  r2,
  s,
  c,
  l,
  v,
  U,
  L,
  W,
  A
};
//# debugId=bf911abb-6d3d-5d1d-83fb-72811af79a8a
//# sourceMappingURL=chunk-R2XMMTAE.js.map
