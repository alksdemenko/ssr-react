const initialState = {
    news: [],
    responseIsReady: false
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case "RESPONSE_NEWS_API":
            return Object.assign({}, state, {news: action.data, responseIsReady: true})
        default:
            return state
    }
}
