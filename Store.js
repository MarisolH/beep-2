import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import Reactotron from './ReactotronConfig'

let store = Reactotron.createStore(
	rootReducer,
	applyMiddleware(thunk)
);

export default store;