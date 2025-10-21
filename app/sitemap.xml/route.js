import { products } from '@/lib/products'
import { site } from '@/lib/site'

export async function GET(){
  const urls = [
    '', 'products', 'about', 'contact',
    'policies/privacy', 'policies/terms', 'policies/refund', 'policies/shipping', 'policies/warranty',
    'checkout', 'thank-you'
  ]
  const pages = urls.map(u => `<url><loc>${site.url}/${u}</loc></url>`).join('')
  const items = products.map(p => `<url><loc>${site.url}/products/${p.id}</loc></url>`).join('')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages}
    ${items}
  </urlset>`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}
