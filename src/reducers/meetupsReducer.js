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

const initialState = {
    meetups: [],
    error: null,
    loading: false,
    updateMeetUp: null,
    favorites: ''
}

export default function meetupsReducer(state = initialState, action) {
    switch (action.type) {
        case BEGIN_DOWNLOAD_MEETUP:
        case BEGIN_UPDATE_MEETUP:
        case ADD_MEETUP:
        case GET_FAVORITE_MEETUP:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_MEETUP_SUCCESS:
            return {
                ...state,
                loading: false,
                meetups: [...state.meetups, action.payload]
            }
        case DOWNLOAD_MEETUP_ERROR:
        case ADD_MEETUP_ERROR:
        case UPDATE_ERROR:
        case GET_FAVORITE_MEETUP_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DOWNLOAD_MEETUP_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                meetups: action.payload
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                updateMeetUp: action.payload
            }

        case GET_FAVORITE_MEETUP_SUCCES:
            return {
                ...state,
                loading: false,
                favorites: action.payload
            }

        default:
            return state;
    }
}