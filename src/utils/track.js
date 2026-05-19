export function trackEvent(name, payload = {}) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: name, timestamp: new Date().toISOString(), ...payload })
}
