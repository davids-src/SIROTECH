export interface AttributionData {
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  gclid?: string | null;
  gbraid?: string | null;
  wbraid?: string | null;
  landing_page?: string | null;
  referrer?: string | null;
  timestamp?: string;
}

const FIRST_TOUCH_KEY = "sirotech_first_touch";
const LAST_TOUCH_KEY = "sirotech_last_touch";

const ATTRIBUTION_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
];

export const captureAttribution = (urlParams: URLSearchParams, currentPathname: string) => {
  if (typeof window === "undefined") return;

  const hasNewAttribution = ATTRIBUTION_PARAMS.some((param) => urlParams.has(param));
  
  const currentData: AttributionData = {
    landing_page: currentPathname,
    referrer: document.referrer || null,
    timestamp: new Date().toISOString(),
  };

  ATTRIBUTION_PARAMS.forEach((param) => {
    if (urlParams.has(param)) {
      (currentData as any)[param] = urlParams.get(param);
    }
  });

  // First touch is only written if it doesn't exist
  if (!localStorage.getItem(FIRST_TOUCH_KEY)) {
    localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(currentData));
  }

  // Last touch is overwritten if there are new URL parameters, or if it doesn't exist
  if (hasNewAttribution || !localStorage.getItem(LAST_TOUCH_KEY)) {
    localStorage.setItem(LAST_TOUCH_KEY, JSON.stringify(currentData));
  }
};

export const getAttributionData = (): { firstTouch: AttributionData | null; lastTouch: AttributionData | null } => {
  if (typeof window === "undefined") return { firstTouch: null, lastTouch: null };

  const first = localStorage.getItem(FIRST_TOUCH_KEY);
  const last = localStorage.getItem(LAST_TOUCH_KEY);

  return {
    firstTouch: first ? JSON.parse(first) : null,
    lastTouch: last ? JSON.parse(last) : null,
  };
};
