import api from "./apiClient";
import Appointment from "../interfaces/AppointmentInterface";
import { ApiResponse } from "apisauce";

class AppointmentService {
    getAllAppointments(): Promise<any>  {
        return api.get<Array<Appointment>>('/appointments');
    }
}


export default new AppointmentService();