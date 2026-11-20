import {
  e,
  h
} from "./chunk-NEOMKDHX.js";
import {
  d
} from "./chunk-DI3VEDFV.js";

// node_modules/@ionic/core/components/p-CohRJRIu.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var n = () => e.get("experimentalCloseWatcher", false) && void 0 !== d && "CloseWatcher" in d;
var i = () => {
  document.addEventListener("backbutton", (() => {
  }));
};
var r = [];
var a;
var c = (t) => {
  r.push(t);
};
var s = () => {
  a?.();
};
var l = () => {
  const e2 = document;
  let i2 = false;
  const c2 = () => {
    if (i2) return;
    let t = 0, n2 = [];
    const r2 = new CustomEvent("ionBackButton", { bubbles: false, detail: { register(e3, o) {
      n2.push({ priority: e3, handler: o, id: t++ });
    } } });
    e2.dispatchEvent(r2);
    const a2 = () => {
      if (n2.length > 0) {
        let t2 = { priority: Number.MIN_SAFE_INTEGER, handler: () => {
        }, id: -1 };
        n2.forEach(((e3) => {
          e3.priority >= t2.priority && (t2 = e3);
        })), i2 = true, n2 = n2.filter(((e3) => e3.id !== t2.id)), (async (t3) => {
          try {
            if (t3?.handler) {
              const e3 = t3.handler(a2);
              null != e3 && await e3;
            }
          } catch (t4) {
            h("[ion-app] - Exception in startHardwareBackButton:", t4);
          }
        })(t2).then((() => i2 = false));
      }
    };
    a2();
  };
  if (e2.addEventListener("backbutton", c2), n()) {
    let e3;
    a = () => {
      if (!r.some(((t) => t()))) return e3?.destroy(), void (e3 = void 0);
      void 0 === e3 && (e3 = new d.CloseWatcher(), e3.onclose = () => {
        e3 = void 0, c2(), a?.();
      });
    }, a();
  }
};
var d2 = 100;
var u = 99;

export {
  n,
  i,
  c,
  s,
  l,
  d2 as d,
  u
};
//# debugId=247355e0-5b57-5286-8be5-41a7470b6274
//# sourceMappingURL=chunk-T3YAKHVB.js.map
