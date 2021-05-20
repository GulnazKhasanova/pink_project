import { http } from './http'

export const all = async () => {

  let { data } = await http.get('products') // test
  return data

}

