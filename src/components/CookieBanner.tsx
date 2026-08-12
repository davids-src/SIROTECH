'use client';

import { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';
import { gtag } from '@/lib/gtag';
import { useI18n } from '@/lib/i18n';

const STORAGE_KEY = 'sirotech_cookie_consent';

export default function CookieBanner() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'accepted') {
      gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
      // Load FB Pixel if available
      loadFbPixel();
    }
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function loadFbPixel() {
    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
    if (!pixelId || typeof window === 'undefined') return;
    if ((window as any).fbq) return; // already loaded
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
      document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${pixelId}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);
  }

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
    gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
    loadFbPixel();
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
    gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-3xl mx-auto bg-surface rounded-2xl shadow-2xl border border-line p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="bg-[#E8271A]/10 p-2.5 rounded-full">
            <Cookie className="h-5 w-5 text-[#E8271A]" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-ink mb-1">{t('cookie.title')}</p>
          <p className="text-xs text-muted leading-relaxed">
            {t('cookie.body')}{' '}
            <a href="/adatvedelem" className="underline hover:text-ink">
              {t('cookie.bodyLink')}
            </a>.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={decline}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-muted hover:text-ink border border-line rounded-lg hover:bg-surface transition-colors"
          >
            <X className="h-3.5 w-3.5" />
            {t('cookie.decline')}
          </button>
          <button
            onClick={accept}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-[#E8271A] text-white rounded-lg hover:bg-[#c91f15] transition-colors"
          >
            <Check className="h-3.5 w-3.5" />
            {t('cookie.accept')}
          </button>
        </div>
      </div>
    </div>
  );
}
