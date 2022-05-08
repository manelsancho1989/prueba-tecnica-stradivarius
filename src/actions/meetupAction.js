import {
    ADD_MEETUP,
    ADD_MEETUP_SUCCESS,
    ADD_MEETUP_ERROR,
    BEGIN_DOWNLOAD_MEETUP,
    DOWNLOAD_MEETUP_SUCCESS,
    DOWNLOAD_MEETUP_ERROR
} from '../utils/constants';

import axiosClient from '../config/axios';

//Add new meetup
export function createNewMeetUp(meetUp) {
    return async (dispatch) => {

        dispatch(addMeetUp());

        try {
            //Insert in the Api
            await axiosClient.post('/meetup', meetUp);

            //If everything its ok update state
            dispatch(addMeetUpExit(meetUp));
        } catch (error) {
            //If have error
            console.log(error);
            dispatch(addMeetUpError(true));
        }
    }
}

const addMeetUp = () => ({
    type: ADD_MEETUP,
    payload: true
});

//If product is saved in database
const addMeetUpExit = meetUp => ({
    type: ADD_MEETUP_SUCCESS,
    payload: meetUp
});

const addMeetUpError = stateError => ({
    type: ADD_MEETUP_ERROR,
    payload: stateError
});


//Download meetup from data base
export function getMeetUp() {
    return async (dispatch) => {
        dispatch(downloadMeetUp());
        try {
            const response = await axiosClient.get('/meetup');
            dispatch(dowloadMeetUpSucces(response.data));
        } catch (error) {
            console.log(error);
            dispatch(downloadMeetUpError());
        }
    }
}

const downloadMeetUp = () => ({
    type: BEGIN_DOWNLOAD_MEETUP,
    payload: true
});

const dowloadMeetUpSucces = meetUp => ({
    type: DOWNLOAD_MEETUP_SUCCESS,
    payload: meetUp
});

const downloadMeetUpError = () => ({
    type: DOWNLOAD_MEETUP_ERROR,
    payload: true
});