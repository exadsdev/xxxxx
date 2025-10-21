export const metadata = { title: 'ติดต่อเรา' }

export default function Page(){
  return (
    <main className="container-xl py-5 container-narrow">
      <h1 className="h2 mb-3">ติดต่อเรา</h1>
      <p className="text-secondary">กรอกแบบฟอร์มด้านล่าง หรือส่งอีเมล/ติดต่อช่องทางที่สะดวก</p>
      <form className="row g-3" method="post" action="/api/contact">
        <div className="col-md-6">
          <label className="form-label">ชื่อ</label>
          <input name="name" className="form-control" required/>
        </div>
        <div className="col-md-6">
          <label className="form-label">อีเมล</label>
          <input type="email" name="email" className="form-control" required/>
        </div>
        <div className="col-12">
          <label className="form-label">ข้อความ</label>
          <textarea name="message" className="form-control" rows="5" required></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-primary">ส่งข้อความ</button>
        </div>
      </form>
      <p className="mt-3 small text-secondary">* แบบฟอร์มนี้เป็นตัวอย่าง สามารถเชื่อมอีเมล/LINE OA ภายหลังได้</p>
    </main>
  )
}
