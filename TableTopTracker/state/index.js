import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import AppReducer from "./app/reducer";
import ModalReducer from "./modal/reducer";
import CollectionsReducer from "./collections/reducer";

const rootReducer = combineReducers({
  app: AppReducer,
  modal: ModalReducer,
  collections: CollectionsReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);