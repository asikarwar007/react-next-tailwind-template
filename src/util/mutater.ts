export async function mutater(url, payload:any) {
  console.log(payload);
  
  await fetch(url, {
    method: 'POST',
    body: payload
  })
}