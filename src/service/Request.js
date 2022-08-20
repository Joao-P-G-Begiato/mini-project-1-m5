export async function consumeApi(url){
    const req = await fetch(url)
    return req.json()
}