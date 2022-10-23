import { Action } from 'redux';
import  { ThunkAction } from 'redux-thunk';
import { AppointmentListState } from './appointmentTypes';

export interface RootState {
        appointmentList: AppointmentListState
}

export  type AppThunk<ReturnType =  void> = ThunkAction<
        ReturnType,
        RootState,
        unknown,
        Action<string>
>;