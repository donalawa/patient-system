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