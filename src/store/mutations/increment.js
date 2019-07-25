import { INCREMENT } from '../actionTypes'

const mutation = {
  [INCREMENT]: function (state) {
    return state.count++
  }
}

export default mutation.INCREMENT
