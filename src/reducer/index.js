import { combineReducers } from "redux";

import dataPersonelReducer from "./dataPersonnel";
import dataUserReducer from "./dataUser";

const allReducer = combineReducers({
    dataPersonelReducer,
    dataUserReducer
})

export default allReducer