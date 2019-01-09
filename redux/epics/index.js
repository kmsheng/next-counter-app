import { combineEpics } from 'redux-observable'
import * as counterEpics from './counter'

export default combineEpics(
  ...Object.values(counterEpics)
);
