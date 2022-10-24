import api from "../../services/apiClient";
import { ActionTypes } from "../types/actionTypes";
import Appointment from "../../interfaces/AppointmentInterface";
import { AppThunk } from "../types/rootTypes";

// GET APPOINTMENTS
export const getAppointments = ():AppThunk => async(dispatch) => {
    dispatch({ type: ActionTypes.GET_APPOINTMENTS_REQUEST});

    try {
        const res = await api.get('/appointments');

        dispatch({
            type: ActionTypes.GET_APPOINTMENTS,
            payload: {
                appointments: res.data
            }
        })
    } catch (error) {
        console.log("ERROR GETTING APPOINTMENTS")
    }

}

// ADD APPOINTMENT 

export const addAppointment = (appointment: Appointment): AppThunk =>  async (dispatch)  => {
    dispatch({ type: ActionTypes.ADD_APPOINTMENT_REQUEST});

    try {
        const  res = await api.post('/appointment', JSON.stringify(appointment));

        dispatch({
            type: ActionTypes.ADD_APPOINTMENT,
            payload: appointment
        })
    } catch (error) {
        console.log("Error Adding Appointment");
        console.log(error);
    }
}

// GET SINGLE APPOINTMENT

export const getSingleAppointment = (id: string): AppThunk => async(dispatch) => {
    dispatch({ type: ActionTypes.GET_APPOINTMENT_REQUEST});

    try {
        const res = await api.get(`/appointment/${id}`);

        dispatch({
            type: ActionTypes.GET_APPOINTMENT,
            payload: {
                appointment: res.data
            }
        })
    } catch (error) {
        console.log("Error Getting Appointment")
    }
}

export const  updateAppointment = (id: string, data: Appointment): AppThunk => async(dispatch) => {

        dispatch({
            type: ActionTypes.UPDATE_APPOINTMENT_REQUEST
        })

        try {
            const res = await api.patch(`/appointment/${id}`, JSON.stringify(data));

            dispatch({
                type: ActionTypes.UPDATE_APPOINTMENT
            })
        } catch (error) {
            console.log(error)
            console.log("Error Updating Appointment")
        }

   
}

export const appointmentReadMode = ():AppThunk => (dispatch) => {
    dispatch({type: ActionTypes.APPOINTMENT_READ_MODE});
}   

export const updateAppointmentMode = ():AppThunk => (dispatch) => {
    dispatch({type: ActionTypes.UPDATE_APPOINTMENT_MODE})
}

export const resetAppointmentTableMode = ():AppThunk => (dispatch) => {
    dispatch({type: ActionTypes.RESET_TABLE_MODE});
}