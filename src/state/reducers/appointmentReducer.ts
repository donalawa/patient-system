import { ActionTypes } from "../types/actionTypes";
import { AppointmentActionTypes, AppointmentListActionTypes } from '../types/appointmentTypes';

const initialState = { appointments: [], loading: false };

export const appointmentListReducer =  (
    state = initialState,
    action: AppointmentListActionTypes
) => {
    switch(action.type) {
        case ActionTypes.GET_APPOINTMENTS:
            // API CALL GET ALL APPOINTMENTS
            return {
                ...state,
                loading: false,
                appointments: action.payload.appointments
            }
        case ActionTypes.GET_APPOINTMENTS_REQUEST:
            return {
                ...state,
                loading: true
        }
        default:
            return  state;
    }
}


export const appointmentReducer =  (
    state = initialState,
    action: AppointmentActionTypes
) => {
    switch(action.type) {
        case ActionTypes.ADD_APPOINTMENT_REQUEST:
            return {...state, loading: true}
        case ActionTypes.ADD_APPOINTMENT:
            return  {
                ...state,
                loading: false,
                appointments: [...state.appointments, action.payload]
            }
        case ActionTypes.GET_APPOINTMENT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.GET_APPOINTMENT:
            return {
                ...state,
                appointment: action.payload,
                loading: false
            }
        default:
            return state;
    }
};