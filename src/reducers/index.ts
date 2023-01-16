import { combineReducers } from "redux";
import { crudReducer } from "./crudReducer";

const rootReducer= combineReducers({crudReducer});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
