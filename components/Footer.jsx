import Link from 'next/link'
import { site } from '@/lib/site'

export default function Footer(){
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container-xl py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="mb-3">{site.name}</h5>
            <p className="mb-2">ที่อยู่: {site.address}</p>
            <p className="mb-2">โทร: {site.phone}</p>
            <p className="mb-2">อีเมล: {site.email}</p>
            <p className="mb-2 small text-secondary">นิติบุคคล: {site.companyName} • ทะเบียน: {site.companyRegNo}</p>
          </div>
          <div className="col-md-4">
            <h6 className="mb-3">ลิงก์สำคัญ</h6>
            <ul className="list-unstyled">
              <li><Link href="/about" className="text-decoration-none text-light">เกี่ยวกับเรา</Link></li>
              <li><Link href="/contact" className="text-decoration-none text-light">ติดต่อเรา</Link></li>
              <li><Link href="/products" className="text-decoration-none text-light">สินค้า</Link></li>
              <li><Link href="/sitemap.xml" className="text-decoration-none text-light">Sitemap</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="mb-3">ความโปร่งใส</h6>
            <ul className="list-unstyled">
              <li><Link href="/policies/privacy" className="text-decoration-none text-light">Privacy Policy</Link></li>
              <li><Link href="/policies/terms" className="text-decoration-none text-light">Terms of Service</Link></li>
              <li><Link href="/policies/refund" className="text-decoration-none text-light">Refund Policy</Link></li>
              <li><Link href="/policies/shipping" className="text-decoration-none text-light">Shipping & Payment</Link></li>
              <li><Link href="/policies/warranty" className="text-decoration-none text-light">Warranty</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-top border-secondary mt-4 pt-3 small text-secondary">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
