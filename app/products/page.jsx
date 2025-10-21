import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'

export const metadata = { title: 'สินค้า' }

export default function Page({ searchParams }){
  const q = (searchParams?.q || '').toLowerCase()
  const list = q ? products.filter(p => (p.name+p.short).toLowerCase().includes(q)) : products
  return (
    <main className="container-xl py-5">
      <h1 className="h2 mb-4">สินค้า</h1>
      <form className="mb-4" action="/products">
        <div className="input-group">
          <input name="q" className="form-control" placeholder="ค้นหาสินค้า" defaultValue={q}/>
          <button className="btn btn-primary" type="submit">ค้นหา</button>
        </div>
      </form>
      <div className="row g-4">
        {list.map(p => (
          <div className="col-md-6 col-lg-4" key={p.id}>
            <div className="card h-100">
              <Image className="card-img-top" src={p.image} alt={p.name} width={800} height={420}/>
              <div className="card-body d-flex flex-column">
                <h2 className="h5">{p.name}</h2>
                <p className="small text-secondary flex-grow-1">{p.short}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-semibold">{p.price.toLocaleString()} {p.currency}</span>
                  <Link href={`/products/${p.id}`} className="btn btn-sm btn-primary">ดูรายละเอียด</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
