import {
    ADD_MEETUP,
    ADD_MEETUP_SUCCESS,
    ADD_MEETUP_ERROR,
    BEGIN_DOWNLOAD_MEETUP,
    DOWNLOAD_MEETUP_SUCCESS,
    DOWNLOAD_MEETUP_ERROR
} from '../utils/constants';

const initialState = {
    meetups: [],
    error: null,
    loading: false
}

export default function meetupsReducer(state = initialState, action) {
    switch (action.type) {
        case BEGIN_DOWNLOAD_MEETUP:
        case ADD_MEETUP:
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
        default:
            return state;
    }
}