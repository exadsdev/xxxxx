'use client'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/lib/site'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const nav = [
  { href: '/', label: 'หน้าแรก' },
  { href: '/products', label: 'สินค้า' },
  { href: '/about', label: 'เกี่ยวกับเรา' },
  { href: '/contact', label: 'ติดต่อเรา' }
]

export default function Header(){
  const pathname = usePathname()
  useEffect(()=>{ import('bootstrap/dist/js/bootstrap.bundle.min.js') }, [pathname])
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container-xl">
        <Link className="navbar-brand d-flex align-items-center gap-2" href="/">
          <Image src={site.logo} alt="logo" width={36} height={36}/>
          <span className="fw-semibold">{site.name}</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMain">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {nav.map(i => (
              <li className="nav-item" key={i.href}>
                <Link className={`nav-link ${pathname===i.href?'active':''}`} href={i.href}>{i.label}</Link>
              </li>
            ))}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">นโยบาย</a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item" href="/policies/privacy">นโยบายความเป็นส่วนตัว</Link></li>
                <li><Link className="dropdown-item" href="/policies/terms">เงื่อนไขการใช้บริการ</Link></li>
                <li><Link className="dropdown-item" href="/policies/refund">การรับประกัน/คืนเงิน</Link></li>
                <li><Link className="dropdown-item" href="/policies/shipping">การจัดส่งและการชำระเงิน</Link></li>
                <li><Link className="dropdown-item" href="/policies/warranty">การรับประกันสินค้า</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
