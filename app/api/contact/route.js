export async function POST(req){
  const data = await req.formData()
  const name = String(data.get('name') || '')
  const email = String(data.get('email') || '')
  const message = String(data.get('message') || '')
  // TODO: wire to email/LINE/DB
  console.log('CONTACT_FORM', { name, email, message })
  return new Response('OK', { status: 200 })
}
