import Image from 'next/image'
import Link from 'next/link'
import { bySlug } from '@/lib/products'
import { site } from '@/lib/site'
import { JsonLdBreadcrumb, JsonLdProduct } from '@/components/JsonLd'

export async function generateMetadata({ params }) {
  const p = await params
  const slug = Array.isArray(p?.slug) ? p.slug[0] : (p?.slug ?? '')
  const product = bySlug(String(slug))
  if (!product) return { title: 'ไม่พบสินค้า' }
  return {
    title: product.name,
    description: product.short,
    openGraph: { images: [{ url: product.image, width: 1200, height: 630 }] }
  }
}

export default async function Page({ params }) {
  const p = await params
  const slug = Array.isArray(p?.slug) ? p.slug[0] : (p?.slug ?? '')
  const product = bySlug(String(slug))
  if (!product) {
    return <main className="container-xl py-5">ไม่พบสินค้า</main>
  }

  const crumbs = [
    { name: 'หน้าแรก', item: `${site.url}` },
    { name: 'สินค้า', item: `${site.url}/products` },
    { name: product.name, item: `${site.url}/products/${product.id}` }
  ]

  return (
    <main className="container-xl py-5">
      <JsonLdBreadcrumb items={crumbs} />
      <JsonLdProduct product={product} />
      <div className="row g-4">
        <div className="col-md-6">
          <Image src={product.image} alt={product.name} width={900} height={600} />
        </div>
        <div className="col-md-6">
          <h1 className="h2">{product.name}</h1>
          <p className="text-secondary">{product.short}</p>
          <ul>
            {product.features?.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <div className="h4 my-3">
            {product.price.toLocaleString()} {product.currency}
          </div>
          <div className="d-flex gap-2">
            <Link href="/checkout" className="btn btn-primary">
              สั่งซื้อ
            </Link>
            <Link href="/contact" className="btn btn-outline-primary">
              ติดต่อสอบถาม
            </Link>
          </div>
          <hr className="my-4" />
          <p className="small text-secondary">{product.description}</p>
        </div>
      </div>
    </main>
  )
}
