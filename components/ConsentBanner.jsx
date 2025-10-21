'use client'
import { useEffect, useState } from 'react'

export default function ConsentBanner(){
  const [show, setShow] = useState(false)
  useEffect(()=>{
    const c = localStorage.getItem('consent')
    if(!c) setShow(true)
  },[])
  function accept(){
    localStorage.setItem('consent', 'granted')
    setShow(false)
    // reload analytics if needed
    if(typeof window !== 'undefined' && window.gtag){
      window.gtag('consent', 'update', { ad_user_data: 'granted', ad_personalization: 'granted', ad_storage: 'granted', analytics_storage: 'granted' })
    }
  }
  if(!show) return null
  return (
    <div className="cookie-banner">
      <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 justify-content-between">
        <div>เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของคุณและวัดผลโฆษณา</div>
        <div className="d-flex gap-2">
          <button onClick={accept} className="btn btn-primary btn-sm">ยอมรับทั้งหมด</button>
          <button onClick={()=>setShow(false)} className="btn btn-outline-light btn-sm">ปิด</button>
        </div>
      </div>
    </div>
  )
}
