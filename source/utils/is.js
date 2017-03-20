// @flow
import symbols from '../consts/symbols'


type isType = (u: any) => boolean


export const list: isType = u => u.__type__ === symbols.list


export const map: isType = u => u.__type__ === symbols.map


// one day when we can refine the outer scopec in flow
// export const array: isType = u => Array.isArray(u)


export const object: isType = u => u === Object(u)

export const primitive: isType = u => u !== Object(u)


export default {
  list,
  map,
  // array,
  object,
  primitive,
}
