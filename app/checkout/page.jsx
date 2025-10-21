export const metadata = { title: 'ชำระเงิน' }
export default function Page(){
  return (
    <main className="container-xl py-5 container-narrow">
      <h1 className="h2 mb-3">ชำระเงิน</h1>
      <p>หน้านี้เป็นตัวอย่างสำหรับ Landing โฆษณา (รองรับ Conversion Tracking) — ใส่ช่องทางชำระเงินจริงภายหลัง</p>
      <form action="/thank-you" className="row g-3">
        <div className="col-md-6">
          <label className="form-label">ชื่อ-นามสกุล</label>
          <input className="form-control" required/>
        </div>
        <div className="col-md-6">
          <label className="form-label">เบอร์โทร</label>
          <input className="form-control" required/>
        </div>
        <div className="col-12">
          <label className="form-label">ที่อยู่จัดส่ง</label>
          <textarea className="form-control" rows="4" required></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-primary">สั่งซื้อ</button>
        </div>
      </form>
    </main>
  )
}
