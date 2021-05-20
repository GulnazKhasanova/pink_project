import { http } from './http'

export const all = async () => {
  let { data } = await http.get('cart')
  return data
}

export const add = async (item) => {
  let {
    data: { result },
  } = await http.post(`cart/add`, item)
  return result
}

export const inc = async (item) => {
  let {
    data: { result },
  } = await http.put(`cart/inc/${item.id}`)
  return result
}

export const dec = async (item) => {
  let {
    data: { result },
  } = await http.put(`cart/dec/${item.id}`, item)
  return result
}

export const del = async (item) => {
  let {
    data: { result },
  } = await http.delete(`cart/del/${item.id}`)
  return result
}