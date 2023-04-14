import { stills } from './data.js'

export async function getAllStills() {
  console.log('STILLS', stills)
  let items = await Promise.all(
    stills.filter((i) => {
      return i.type === 'still'
    })
  )
  console.log('FFound Still', items)
  return items
}
