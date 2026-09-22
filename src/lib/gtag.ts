export const gtag = (...args: unknown[]) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag(...args);
  }
};

// Generic event tracker (kept for backwards compatibility)
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

// Strict SIROTECH GA4 Custom Events
type SirotechCustomEvents =
  | { name: "generate_lead"; params: { lead_source?: string; form_type: string; customer_type: string; request_type: string; project_type?: string; service?: string; region?: string; cta_location: string; source_site: string; landing_page: string } }
  | { name: "form_start"; params: { form_type: string } }
  | { name: "form_step_complete"; params: { form_type: string; step_name: string; step_number: number } }
  | { name: "form_error"; params: { form_type: string; error_type: string } }
  | { name: "phone_click"; params: { cta_location: string; page_type: string; service?: string; request_type?: string } }
  | { name: "email_click"; params: { cta_location: string; page_type: string } }
  | { name: "cta_click"; params: { cta_label: string; cta_location: string; cta_type: string; page_type: string } }
  | { name: "request_type_select"; params: { request_type: string } }
  | { name: "customer_type_select"; params: { customer_type: string } }
  | { name: "project_type_select"; params: { project_type: string } }
  | { name: "service_select"; params: { service: string } }
  | { name: "outbound_division_click"; params: { destination_brand: string; context: string; cta_location: string } };

export const trackCustomEvent = (event: SirotechCustomEvents) => {
  gtag("event", event.name, event.params);
};
