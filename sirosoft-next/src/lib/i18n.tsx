"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { MotionConfig } from "framer-motion";
import hu from "../../messages/hu.json";
import en from "../../messages/en.json";

export type Locale = "hu" | "en";

const messages: Record<Locale, unknown> = { hu, en };

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Resolve a dot-separated key. Returns strings, arrays or objects from the message files. */
  t: (key: string) => any;
};

const I18nContext = createContext<I18nContextValue>({
  locale: "hu",
  setLocale: () => {},
  t: (key) => key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("hu");

  useEffect(() => {
    const stored = window.localStorage.getItem("sirotech-locale");
    if (stored === "en" || stored === "hu") setLocaleState(stored);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem("sirotech-locale", next);
    document.documentElement.lang = next;
  }, []);

  const t = useCallback(
    (key: string) => {
      const value = key
        .split(".")
        .reduce<any>((obj, part) => (obj == null ? obj : obj[part]), messages[locale]);
      return value ?? key;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
