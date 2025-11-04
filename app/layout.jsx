import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
 
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { site, defaultImages } from '@/lib/site'
import ConsentBanner from '@/components/ConsentBanner'
import AdsTagInjector from '@/app/components/AdsTagInjector'
import { JsonLdOrganization, JsonLdWebSite } from '@/components/JsonLd'
import Headers from '@/components/Headers'

export const metadata = {
  metadataBase: new URL(site.url),
  title: { template: '%s | ' + site.name, default: site.name },
  description: `${site.name} — ร้านค้าสมาร์ทโฟนและอุปกรณ์เสริม`,
  openGraph: {
    type: 'website',
    title: site.name,
    url: site.url,
    images: defaultImages.og
  },
  other: {
    'google-site-verification': site.googleVerification || undefined,
    'msvalidate.01': site.bingVerification || undefined,
    'fb:app_id': site.facebookAppId || undefined
  }
}

export default function RootLayout({ children }){
  return (
    <html lang="th">
      <body>
          <Headers/>
        <Header/>
       
        <AdsTagInjector/>
        <JsonLdOrganization/>
        <JsonLdWebSite/>
        {children}
        <Footer/>
        <ConsentBanner/>
      </body>
    </html>
  )
}
