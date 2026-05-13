// Cal.com popup embed loader + trigger.
// Replace CAL_LINK with the real cal.com username/event slug.
export const CAL_LINK = "clockout/free-assessment";

let initialized = false;

export function initCal() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  (function (C: any, A: string, L: string) {
    let p = function (a: any, ar: any) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api: any = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window as any, "https://app.cal.com/embed/embed.js", "init");

  (window as any).Cal("init", { origin: "https://cal.com" });
  (window as any).Cal("ui", {
    theme: "dark",
    styles: { branding: { brandColor: "#22c55e" } },
    hideEventTypeDetails: false,
  });
}

export function openCal() {
  if (typeof window === "undefined") return;
  initCal();
  (window as any).Cal("modal", { calLink: CAL_LINK, config: { layout: "month_view" } });
}
