import { siteArticles } from './data.js'

export async function getMotion(id) {
  console.log('Motion-ID', id)
  let item = siteArticles.find((i) => i.id == id)
  console.log('MOTION ITEM', item)
  return item
}
