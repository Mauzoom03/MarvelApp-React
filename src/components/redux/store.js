import { legacy_createStore as createStore, combineReducers,applyMiddleware  } from "redux";
// crateStore --> apodo que le damos a la funcion legacy_createStore//
import  authReducer  from "./reducers/auth.reducer";
import { thunk } from "redux-thunk";

const reducer = combineReducers({
    auth: authReducer,
    //city: cityReducer , en caso que necesite otros datos en el almacen//
});

const store = createStore(reducer,applyMiddleware(thunk)); 

export default store;