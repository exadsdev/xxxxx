'use client'
import { site } from '@/lib/site'
import Script from 'next/script'
export default function AdsTagInjector(){
  if(!site.ga4 && !site.gtag) return null
  return (
    <>
      {site.ga4 ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4}`} strategy="afterInteractive"/>
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${site.ga4}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ): null}
      {site.gtag ? (
        <Script id="ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('config', '${site.gtag}');
          `}
        </Script>
      ): null}
    </>
  )
}
