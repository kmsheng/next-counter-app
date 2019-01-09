export const ADD_ASYNC = 'counter/ADD_ASYNC'
export const ADD = 'counter/ADD'
export const CANCEL_ADD_ASYNC = 'counter/CANCEL_ADD_ASYNC'

export const add = () => ({type: ADD})
export const addAsync = () => ({type: ADD_ASYNC})
export const cancelAddAsync = () => ({type: CANCEL_ADD_ASYNC})

const initialState = {
  count: 0
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {...state, count: state.count + 1}
    default:
      return state
  }
}
