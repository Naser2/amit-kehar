import { siteArticles as allData } from './data.js'

export async function getAllMotions() {
  console.log('ART', allData)
  let items = await Promise.all(
    allData.filter((i) => {
      return i.type === 'motion'
    })
  )
  console.log('FinalDATA', items)
  return items
}
