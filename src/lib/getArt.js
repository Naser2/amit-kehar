import { siteArticles } from './data.js'
async function sortData(allData) {
  console.log('DATA', allData)
  return allData.filter((a) => {
    a.tag === 'art'
  })
}
export async function getArt(id) {
  //   let art = await glob(['.js'], {
  //     cwd: path.join(process.cwd(), 'src/lib/data'),
  //   })
  // console.log('ART-ID---->', id)
  // let item = await Promise.all(
  //   siteArticles.filter((i) => {
  //     i.id === id
  //   })
  // )
  console.log('ART-ID---->', id)
  // let item = siteArticles.find((i) => i.id === id)
  let item = siteArticles.find((i) => i.id == id)

  console.log('ART-ITEM--->', item)
  return item
}
