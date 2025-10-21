export const site = {
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || 'PG UBPAKORN CO., LTD.',
  companyRegNo: process.env.NEXT_PUBLIC_COMPANY_REGNO || '0505565022903',
  companyAddress: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || '284 หมู่ที่ 3 ตำบลสันผักหวาน อำเภอหางดง จ.เชียงใหม่ 50230',
  name: process.env.NEXT_PUBLIC_NAME || 'PG Phone',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mypgphone.com',
  logo: process.env.NEXT_PUBLIC_BRAND_LOGO || '/logo.svg',
  phone: process.env.NEXT_PUBLIC_PHONE || '',
  line: process.env.NEXT_PUBLIC_LINE || '',
  email: process.env.NEXT_PUBLIC_EMAIL || '',
  address: process.env.NEXT_PUBLIC_ADDRESS || 'Bangkok, Thailand',
  ogImage: '/og-default.jpg',
  ga4: process.env.NEXT_PUBLIC_GA4_ID || '',
  gtag: process.env.NEXT_PUBLIC_GTAG_ID || '',
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  bingVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
  facebookAppId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ''
}

export const defaultImages = {
  og: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }]
}
