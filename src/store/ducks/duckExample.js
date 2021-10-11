import { createReducer, createActions } from 'reduxsauce'

/* Initial State */
export const INITIAL_STATE = {
  text: '',
  error: '',
}

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  getText: ['resolve', 'reject'],
  setText: ['text'],
  setError: ['error'],
})

export const ExampleTypes = Types
export default Creators

/* Methods */
export const setText = (state = INITIAL_STATE, { text }) => ({
  ...state,
  text,
})

export const setError = (state = INITIAL_STATE, { error }) => ({
  ...state,
  error,
})

/* Reducers */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_TEXT]: setText,
  [Types.SET_ERROR]: setError,
})
