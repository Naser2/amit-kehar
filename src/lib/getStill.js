import { stills } from './data.js'

export async function getStill(id) {
  console.log('ART-ID---->', id)

  let item = stills.find((i) => i.id == id)

  console.log('ART-ITEM--->', item)
  return item
}
