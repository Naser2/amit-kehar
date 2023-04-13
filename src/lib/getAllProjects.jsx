import { siteArticles as allData } from './data.js'
async function sortData(allData) {
  console.log('DATA', allData)
  return allData.filter((a) => {
    a.tag === 'art'
  })
}
export async function getAllProjects() {
  //   let art = await glob(['.js'], {
  //     cwd: path.join(process.cwd(), 'src/lib/data'),
  //   })
  //   console.log('ART', allData)
  let items = await Promise.all(
    allData.filter((i) => {
      return i.type !== 'art'
    })
  )
  //   console.log('FinalDATA', items)
  return items
}
