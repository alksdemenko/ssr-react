import {
    FETCH_GISTS__SUCCEEDED,
} from './actions';

const initialState = {};

const homeReducers = (previousState = initialState, action) => {
    switch (action.type) {

        case FETCH_GISTS__SUCCEEDED:
            return action.payload.gists;

        case "RESPONSE_NEWS_API":
            return action.data;

        default:
            return previousState;
    }
};

export default homeReducers;
