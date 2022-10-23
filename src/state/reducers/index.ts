import { appointmentListReducer, appointmentReducer } from "./appointmentReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    appointment: appointmentReducer,
    appointmentList: appointmentListReducer
})


export default reducers;

export type  State  = ReturnType<typeof reducers>