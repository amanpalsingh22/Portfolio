export function trackEvent(name, props) {
  if (typeof window === "undefined" || typeof window.plausible !== "function") {
    return;
  }

  window.plausible(name, props ? { props } : undefined);
}
