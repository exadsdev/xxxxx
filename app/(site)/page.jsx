import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/lib/site'
import { products } from '@/lib/products'


export default function Page(){
  return (
    <>

    <main>
      <section className="py-5 hero">
        <div className="container-xl">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <h1 className="display-5 fw-bold mb-3">{site.name}</h1>
              <p className="lead">สมาร์ทโฟนคุ้มค่า บริการหลังการขายชัดเจน โปร่งใส ถูกต้องตามนโยบาย Google Ads</p>
              <div className="d-flex gap-2">
                <Link href="/products" className="btn btn-primary btn-lg">ดูสินค้า</Link>
                <Link href="/contact" className="btn btn-outline-primary btn-lg">ติดต่อเรา</Link>
              </div>
              <div className="d-flex gap-2 mt-4 flex-wrap">
                <span className="badge-trust">นโยบายชัดเจน</span>
                <span className="badge-trust">ช่องทางติดต่อครบถ้วน</span>
                <span className="badge-trust">ข้อมูลสินค้าถูกต้อง</span>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <Image src="/logo.png" width={280} height={280} alt="brand" priority />
            </div>
          </div>
        </div>
      </section>


      {/* ข้อความชักชวน / Selling Points */}
      <section className="py-5 bg-light">
        <div className="container-xl">
          <h2 className="h4 mb-3">ข้อความชักชวน</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <ul className="mb-3">
                <li>ร้านขายโทรศัพท์มือถือราคาถูกยี่ห้อ PG</li>
                <li>โทรศัพท์มือถือระบบแอนดรอยด์</li>
                <li>ร้านขายโทรศัพท์มือถือราคาถูก PG เว็บตรงจากต่างประเทศ 100%</li>
                <li>หน้าจอความกว้าง 6 นิ้ว ความละเอียดหน้าจอ HD</li>
                <li>เล่นเกมลื่น ไม่มีสะดุด แบตอึดทน</li>
                <li>ปลดล็อคหน้าจอด้วยระบบสแกนหน้า</li>
                <li>สมาร์ทโฟน 4G รองรับ 2 ซิม 4G</li>
                <li>PG เว็บตรง ช่วงโปรโมชั่นแรงๆ</li>
                <li>PG เว็บตรงเว็บไซต์จากสิงค์โปร</li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="p-3 border rounded-3 bg-white small">
                <p className="mb-2"><strong>โทรศัพท์มือถือ PG ข้อมูลจำเพาะของสินค้า</strong></p>
                <p className="mb-2">โทรศัพท์มือถือ PG ราคาถูก • PG เว็บตรงช่วงโปรโมชั่นแรงๆ • เรามีโปรโมชั่นมากมาย</p>
                <p className="mb-2">หน้าจอกว้าง 6 นิ้ว • รองรับ 2 ซิม 4G • ปลดล็อคหน้าจอด้วยระบบสแกนหน้า</p>
                <p className="mb-2">สมาร์ทโฟน 4G • ความละเอียดหน้าจอ HD • เล่นเกมลื่น แบตอึดทน</p>
                <p className="mb-0">PG เว็บตรงจากต่างประเทศ 100% • เว็บไซต์จากสิงค์โปร • PG เว็บตรง 100%</p>
              </div>
            </div>
          </div>

          <details className="mt-4">
            <summary className="mb-2">อ่านต่อ: เนื้อหาเพิ่มเติม</summary>
            <div className="small text-secondary">
              <p>มือถือ RAM 4 GB รุ่นแรก: Motorola One Action ออกแบบเพื่อการถ่ายภาพเอาท์ดอร์ กล้องมุมกว้างพิเศษ 16MP มุมมอง 117° ระบบกันสั่น EIS (ตัวอย่างข้อความอ้างอิง) *</p>
              <p>สมาร์ทโฟน 4G หน้าจอความกว้าง 6 นิ้ว ความละเอียดหน้าจอ HD เล่นเกมลื่นไม่มีสะดุด แบตอึดทน PG เว็บตรง ช่วงโปรโมชั่น เว็บไซต์จากสิงค์โปร</p>
            </div>
          </details>
        </div>
      </section>

      <section className="py-5">
        <div className="container-xl">
          <h2 className="h3 mb-4">สินค้าแนะนำ</h2>
          <div className="row g-4">
            {products.map(p => (
              <div className="col-md-6 col-lg-4" key={p.id}>
                <div className="card h-100">
                  <Image className="card-img-top" src={p.image} alt={p.name} width={800} height={420}/>
                  <div className="card-body d-flex flex-column">
                    <h3 className="h5">{p.name}</h3>
                    <p className="text-secondary small flex-grow-1">{p.short}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-semibold">{p.price.toLocaleString()} {p.currency}</span>
                      <Link href={`/products/${p.id}`} className="btn btn-sm btn-primary">ดูรายละเอียด</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
     </>
  )
}
