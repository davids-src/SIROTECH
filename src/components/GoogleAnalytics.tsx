'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { SITE } from '@/lib/config';
import { gtag } from '@/lib/gtag';

const STORAGE_KEY = 'sirotech_cookie_consent';

function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!SITE.ga) return;
    const url =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    gtag('config', SITE.ga, { page_path: url });
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!SITE.ga) return;

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      if (href.startsWith('tel:')) {
        gtag('event', 'click_to_call', {
          event_category: 'Contact',
          event_label: href,
          value: 1,
        });
      } else if (href.startsWith('mailto:')) {
        gtag('event', 'click_to_email', {
          event_category: 'Contact',
          event_label: href,
          value: 1,
        });
      } else if (
        href.startsWith('https://') &&
        !href.includes('sirotech.hu')
      ) {
        gtag('event', 'click_outbound', {
          event_category: 'Outbound',
          event_label: href,
        });
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return null;
}

export default function GoogleAnalytics() {
  if (!SITE.ga) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${SITE.ga}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};

          var consent = 'denied';
          try {
            if (localStorage.getItem('${STORAGE_KEY}') === 'accepted') {
              consent = 'granted';
            }
          } catch(e) {}

          window.gtag('consent', 'default', {
            'analytics_storage': consent,
            'ad_storage': consent,
            'ad_user_data': consent,
            'ad_personalization': consent
          });

          window.gtag('js', new Date());
          window.gtag('config', '${SITE.ga}', {
            send_page_view: false
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
    </>
  );
}
