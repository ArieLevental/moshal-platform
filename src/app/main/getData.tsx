export default async  function getData(path='') {
    const res = await fetch(`http://127.0.0.1:3000/api/${path}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }