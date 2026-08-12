export const gtag = (...args: unknown[]) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag(...args);
  }
};

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const trackOutboundLink = (url: string, label?: string) => {
  gtag("event", "click", {
    event_category: "outbound",
    event_label: label ?? url,
    transport_type: "beacon",
  });
};
