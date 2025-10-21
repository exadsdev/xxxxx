import Script from 'next/script'
import { site } from '@/lib/site'

export function JsonLdOrganization(){
  const data = {
    "@context":"https://schema.org",
    "@type":"Organization",
    "name": site.name,
    "legalName": site.companyName,
    "identifier": {"@type":"PropertyValue","propertyID":"registrationNumber","value": site.companyRegNo},
    "address": {"@type":"PostalAddress","streetAddress": site.companyAddress,"addressCountry":"TH"},
    "url": site.url,
    "logo": site.logo,
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": site.phone,
      "contactType": "customer service",
      "areaServed": "TH"
    }]
  }
  return <Script id="ld-org" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}/>
}

export function JsonLdWebSite(){
  const data = {
    "@context":"https://schema.org",
    "@type":"WebSite",
    "name": site.name,
    "legalName": site.companyName,
    "identifier": {"@type":"PropertyValue","propertyID":"registrationNumber","value": site.companyRegNo},
    "address": {"@type":"PostalAddress","streetAddress": site.companyAddress,"addressCountry":"TH"},
    "url": site.url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${site.url}/products?q={search_term_string}`,
      "query-input":"required name=search_term_string"
    }
  }
  return <Script id="ld-website" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}/>
}

export function JsonLdProduct({product}){
  if(!product) return null
  const data = {
    "@context":"https://schema.org",
    "@type":"Product",
    "name": product.name,
    "image": [product.image],
    "description": product.short,
    "brand": {"@type":"Brand","name":"PG Phone"},
    "offers": {
      "@type":"Offer",
      "priceCurrency": product.currency,
      "price": product.price,
      "availability":"https://schema.org/InStock",
      "url": `${site.url}/products/${product.id}`
    }
  }
  return <Script id={`ld-prod-${product.id}`} type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}/>
}

export function JsonLdBreadcrumb({items}){
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((it, idx)=>({
      "@type":"ListItem", "position": idx+1,
      "name": it.name, "item": it.item
    }))
  }
  return <Script id="ld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}/>
}
