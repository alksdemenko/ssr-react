export const FETCH_GISTS_REQUESTED = 'FETCH_GISTS_REQUESTED';
export const FETCH_GISTS__SUCCEEDED = 'FETCH_GISTS__SUCCEEDED';
export const FETCH_GISTS__FAILED = 'FETCH_GISTS__FAILED';


export const requestNewsApi = () => ({type: "REQUEST_NEWS_API"});
export const responseNewsApi = data => ({type: "RESPONSE_NEWS_API", data});

export const fetchGists = () => ({
    type: FETCH_GISTS_REQUESTED,
    payload: {},
});

export const receiveGists = payload => ({
    type: FETCH_GISTS__SUCCEEDED,
    payload,
});
