import { call, put, takeEvery } from 'redux-saga/effects'

import ExampleActions, { ExampleTypes } from '@/store/ducks/duckExample'

export function* getText({ resolve = () => {}, reject = () => {} }) {
  try {
    yield put(ExampleActions.setText('Template created by: JardelFelp'))
    yield call(resolve)
  } catch (e) {
    yield put(ExampleActions.setError(e.message))
    yield call(reject, e.message)
  }
}

export const exampleLinks = [takeEvery(ExampleTypes.GET_TEXT, getText)]
