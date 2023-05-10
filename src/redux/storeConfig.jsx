import CounterReducer from "./CounterReducer"
import { combineReducers, createStore } from 'redux'


const Reducer = combineReducers ({
    CounterReducer
})

const store = createStore(Reducer)

export default store