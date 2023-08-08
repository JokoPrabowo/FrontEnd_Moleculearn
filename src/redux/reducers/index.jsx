import { combineReducers } from "redux";

import authReducers from "./authReducers";
import questionReducers from "./questionReducers";
import scoreReducres from "./scoreReducers"
import compoundReducers from "./compoundReducers";

export default combineReducers({
    auth: authReducers,
    questions: questionReducers,
    score: scoreReducres,
    compound: compoundReducers,
})