import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootReducer from './modules'
import rootEpic from './epics'

export default function initStore(initialState) {

  const epicMiddleware = createEpicMiddleware()
  const reduxMiddleware = applyMiddleware(epicMiddleware)
  const store = createStore(rootReducer, initialState, reduxMiddleware)

  epicMiddleware.run(rootEpic)

  return store
}
