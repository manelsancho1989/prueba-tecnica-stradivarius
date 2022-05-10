import {
    ADD_MEETUP,
    ADD_MEETUP_SUCCESS,
    ADD_MEETUP_ERROR,
    BEGIN_DOWNLOAD_MEETUP,
    DOWNLOAD_MEETUP_SUCCESS,
    DOWNLOAD_MEETUP_ERROR,
    BEGIN_UPDATE_MEETUP,
    UPDATE_SUCCESS,
    UPDATE_ERROR,
    GET_FAVORITE_MEETUP,
    GET_FAVORITE_MEETUP_SUCCES,
    GET_FAVORITE_MEETUP_ERROR
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

//Select and Update to favorites
export function updateMeetUpAction(id) {
    return async (dispatch) => {
        dispatch(beginUpdateMeetUp());
        try {
            const response = await axiosClient.get('/meetup', { params: { id: id } });
            let responseData = response.data[0];
            responseData.favorite = true;
            const update = await axiosClient.put(`/meetup/${id}`, responseData);
            dispatch(getMeetUpUpdate(update))
        } catch (error) {
            dispatch(updateMeetUpError());
        }
    }
}
const beginUpdateMeetUp = () => ({
    type: BEGIN_UPDATE_MEETUP,
    payload: true
});

const getMeetUpUpdate = update => ({
    type: UPDATE_SUCCESS,
    payload: update
});

const updateMeetUpError = () => ({
    type: UPDATE_ERROR,
    payload: true
});

//Get favorites MeetUps
export function getFavoritesMeetUpAction() {
    return async (dispatch) => {
        dispatch(getFavoriteMeetUp());
        try {
            const response = await axiosClient.get('/meetup', { params: { favorite: true } });
            dispatch(getFavoriteMeetUpSucces(response.data));
        } catch (error) {
            dispatch(favoriteMeetUpError());
        }
    }
}

const getFavoriteMeetUp = () => ({
    type: GET_FAVORITE_MEETUP,
    payload: true
});

const getFavoriteMeetUpSucces = favorite => ({
    type: GET_FAVORITE_MEETUP_SUCCES,
    payload: favorite
});

const favoriteMeetUpError = () => ({
    type: GET_FAVORITE_MEETUP_ERROR,
    payload: true
});