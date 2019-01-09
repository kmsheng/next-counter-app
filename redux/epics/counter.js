import { ofType } from 'redux-observable'
import { of } from 'rxjs';
import { map, delay, takeUntil, mergeMap } from 'rxjs/operators'
import { ADD_ASYNC, ADD, CANCEL_ADD_ASYNC } from '../modules/counter'

export const countAsync = action$ => {

  return action$.pipe(
    ofType(ADD_ASYNC),
    mergeMap(action => {
      return of(action).pipe(
        delay(3000),
        map(() => ({type: ADD})),
        takeUntil(action$.ofType(CANCEL_ADD_ASYNC))
      )
    })
  )
};
