export const metadata = { title: 'นโยบายความเป็นส่วนตัว' }
export default function Page(){
  return (
    <main className="container-xl py-5 container-narrow">
      <h1 className="h2 mb-3">นโยบายความเป็นส่วนตัว</h1>
      <p>เอกสารฉบับนี้อธิบายประเภทข้อมูลที่เราเก็บ ใช้งาน และวิธีปกป้องข้อมูลของคุณ</p>
      <h2 className="h5 mt-4">ข้อมูลที่เก็บ</h2>
      <ul>
        <li>ข้อมูลที่คุณกรอกในแบบฟอร์ม</li>
        <li>ข้อมูลการใช้งานเว็บไซต์ (เช่น คุกกี้)</li>
      </ul>
      <h2 className="h5 mt-4">วัตถุประสงค์</h2>
      <ul>
        <li>ให้บริการและติดต่อกลับ</li>
        <li>วัดผลและปรับปรุงประสิทธิภาพโฆษณา</li>
      </ul>
    </main>
  )
}
