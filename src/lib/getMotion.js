import { data as allData } from './data.js'
async function sortData(allData) {
  console.log('DATA', allData)
  return allData.filter((a) => {
    a.tag === 'art'
  })
}
export async function getMotion(id) {
  console.log('Motion-ID', id)
  let item = await Promise.all(
    allData.filter((i) => {
      return i.id == id
    })
  )
  console.log('Motion Item', item)
  return item
}
