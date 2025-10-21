import Image from 'next/image'
import { site } from '@/lib/site'

export const metadata = { title: 'เกี่ยวกับเรา' }

export default function Page(){
  return (
    <main className="container-xl py-5 container-narrow">
      <h1 className="h2 mb-3">เกี่ยวกับเรา</h1>
      <p>เว็บไซต์นี้จัดทำขึ้นเพื่อจำหน่ายสมาร์ทโฟนและอุปกรณ์เสริม โดยยึดหลักความโปร่งใส ให้ข้อมูลตรงตามจริง และสอดคล้องกับนโยบายของ Google Ads</p>
      <div className="d-flex align-items-center gap-3 my-4">
        <Image src="/logo.svg" alt="logo" width={56} height={56}/>
        <div>
          <div className="fw-semibold">{site.name}</div>
          <div className="text-secondary small">{site.address}</div>
        </div>
      </div>
      <ul>
        <li>ข้อมูลติดต่อชัดเจน (ที่อยู่ เบอร์โทร อีเมล)</li>
        <li>นโยบายการใช้งาน ความเป็นส่วนตัว การคืนเงินและการรับประกัน</li>
        <li>รายละเอียดสินค้า ราคา เงื่อนไข และวิธีการชำระเงิน</li>
      </ul>
    
      <div className="mt-4 p-3 border rounded-3 bg-light">
        <div className="fw-semibold mb-1">บริษัทนิติบุคคล</div>
        <div className="small">ชื่อบริษัท: {site.companyName}</div>
        <div className="small">เลขทะเบียนนิติบุคคล: {site.companyRegNo}</div>
        <div className="small">ที่ตั้ง: {site.companyAddress}</div>
      </div>
    
    </main>
  )
}
