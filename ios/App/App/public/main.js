import {
  Capacitor,
  Component,
  IonApp,
  IonRouterOutlet,
  IonicRouteStrategy,
  PreloadAllModules,
  RouteReuseStrategy,
  bootstrapApplication,
  provideIonicAngular,
  provideRouter,
  registerPlugin,
  setClassMetadata,
  withComponentInputBinding,
  withPreloading,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-KJ25GGEE.js";
import "./chunk-A5NADEKU.js";
import "./chunk-SZRJRYTN.js";
import "./chunk-DGEZ3XMP.js";
import "./chunk-R2XMMTAE.js";
import "./chunk-T3YAKHVB.js";
import "./chunk-TNAWJ6UU.js";
import "./chunk-3JURHGCQ.js";
import "./chunk-NEOMKDHX.js";
import "./chunk-B2FR76ZV.js";
import "./chunk-KQQH3YTO.js";
import "./chunk-DI3VEDFV.js";
import "./chunk-GOMI4DH3.js";

// node_modules/@capacitor/status-bar/dist/esm/definitions.js
var Style;
(function(Style2) {
  Style2["Dark"] = "DARK";
  Style2["Light"] = "LIGHT";
  Style2["Default"] = "DEFAULT";
})(Style || (Style = {}));
var Animation;
(function(Animation2) {
  Animation2["None"] = "NONE";
  Animation2["Slide"] = "SLIDE";
  Animation2["Fade"] = "FADE";
})(Animation || (Animation = {}));

// node_modules/@capacitor/status-bar/dist/esm/index.js
var StatusBar = registerPlugin("StatusBar");

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    if (Capacitor.isNativePlatform()) {
      void this.configureStatusBar();
    }
  }
  async configureStatusBar() {
    await StatusBar.setOverlaysWebView({ overlay: false });
    await StatusBar.setBackgroundColor({ color: "#f7f8fc" });
    await StatusBar.setStyle({ style: Style.Light });
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-app");
        \u0275\u0275element(1, "ion-router-outlet");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [IonApp, IonRouterOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [IonApp, IonRouterOutlet], template: "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 11 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "home",
    loadComponent: () => import("./home.page-E3AZMGLH.js").then((m) => m.HomePage)
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules), withComponentInputBinding())
  ]
});
//# debugId=0e4f1233-369d-5290-bd44-8d00e0193101
//# sourceMappingURL=main.js.map
