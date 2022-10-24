
import Appointment from "../../interfaces/AppointmentInterface"
import { ActionTypes } from "./actionTypes"
/**
 * Appointment List
 */
export interface AppointmentListState {
    appointments: Appointment[],
    loading: boolean
}

interface AppointmentsRequestAction  {
    type: typeof ActionTypes.GET_APPOINTMENTS_REQUEST
}

interface AppointmentListGetAction  {
    type: typeof ActionTypes.GET_APPOINTMENTS,
    payload: {
        appointments: Appointment[]
    }
}

export type AppointmentListActionTypes = AppointmentsRequestAction | AppointmentListGetAction;


/*
    Appointment Item
*/

export type AppointmentState = {
    appointment: Appointment,
    loading: boolean
};

// interface 
interface AddAppointmentRequestAction {
    type: typeof ActionTypes.ADD_APPOINTMENT_REQUEST
}

interface  AddAppointmentAction {
    type: typeof ActionTypes.ADD_APPOINTMENT,
    payload: Appointment
}

interface UpdateAppointmentRequest {
    type: typeof ActionTypes.UPDATE_APPOINTMENT_REQUEST
}

interface UpdateAppointmentAction  {
    type: typeof ActionTypes.UPDATE_APPOINTMENT
}

interface AppointmentReadModeAction {
    type: typeof ActionTypes.APPOINTMENT_READ_MODE
}

interface UpdateAppointmentModeAction {
    type: typeof ActionTypes.UPDATE_APPOINTMENT_MODE
}

interface ResetAppointmentTableAction {
    type: typeof ActionTypes.RESET_TABLE_MODE
}

interface AppointmentRequestAction {
    type: typeof ActionTypes.GET_APPOINTMENT_REQUEST
}

interface AppointmentGetAction {
    type: typeof ActionTypes.GET_APPOINTMENT,
    payload: Appointment
}


export type AppointmentActionTypes = AppointmentRequestAction | AppointmentGetAction | AddAppointmentAction | AddAppointmentRequestAction | AppointmentReadModeAction | ResetAppointmentTableAction | UpdateAppointmentModeAction | UpdateAppointmentAction | UpdateAppointmentRequest;