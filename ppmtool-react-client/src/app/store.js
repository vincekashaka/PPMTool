// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import { errorReducer } from '../reducers/errorReducer';

// const rootReducer = combineReducers({
//   // here we will be adding reducers
//   errors: errorReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   devTools: process.env.NODE_ENV !== 'production',
// });
// export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const initialState = {};
const middleware = [thunk];

let store;

if (window.navigator.userAgent.includes('Chrome')) {
  store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}

export default store;
