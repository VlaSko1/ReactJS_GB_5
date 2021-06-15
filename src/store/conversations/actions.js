import { CHANG_VALUE } from './types'

export const changValue = (e) => {
  {
    (paramses) => {
      const { match } = paramses
      const { params } = match // :roomId передаем в Route


      return {
        type: CHANG_VALUE, payload: { e, params }
      }

    }
  }
}