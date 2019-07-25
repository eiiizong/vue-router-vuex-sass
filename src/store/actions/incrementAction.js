import { INCREMENT } from '../actionTypes'

const incrementAction = store => {
  setTimeout(() => {
    console.log('延时分发 action')
    store.commit(INCREMENT)
  }, 1000)
}

export default incrementAction
