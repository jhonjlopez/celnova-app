import {
  A,
  r
} from "./chunk-R2XMMTAE.js";

// node_modules/@ionic/core/components/p-CRb2xRCz.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var o = (o2, r2) => {
  const a = "40px", s = "back" === r2.direction, n = r2.leavingEl, e = A(r2.enteringEl), c = e.querySelector("ion-toolbar"), p = r();
  if (p.addElement(e).fill("both").beforeRemoveClass("ion-page-invisible"), s ? p.duration((r2.duration ?? 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)") : p.duration((r2.duration ?? 0) || 280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform", `translateY(${a})`, "translateY(0px)").fromTo("opacity", 0.01, 1), c) {
    const i = r();
    i.addElement(c), p.addAnimation(i);
  }
  if (n && s) {
    p.duration((r2.duration ?? 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
    const o3 = r();
    o3.addElement(A(n)).onFinish(((t) => {
      1 === t && o3.elements.length > 0 && o3.elements[0].style.setProperty("display", "none");
    })).fromTo("transform", "translateY(0px)", `translateY(${a})`).fromTo("opacity", 1, 0), p.addAnimation(o3);
  }
  return p;
};

export {
  o
};
//# debugId=8626d7e7-624b-57cd-bd7d-b1d8e9548695
//# sourceMappingURL=chunk-DGEZ3XMP.js.map
