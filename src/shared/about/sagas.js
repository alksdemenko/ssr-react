import  {all, call, put, takeEvery} from 'redux-saga/effects';
import * as aboutActions from '../about/actions';
import axios from 'axios';


const request = async api => {
    return await axios(api)
};

function* fetchAboutPage() {
    try {
        // const response = yield call(request, "https://newsapi.org/v1/articles?source=the-next-web&apiKey=5476179b3d5b4a6db7ee287ad7b1685b");
        const response = yield call(request, "http://topa-dev.bigdropinc.net/wp-json/wp-api-menus/v2/menus/24");
        // const data = response.data.articles;
        console.log('response', response);
        const data = response.data;

        yield put(aboutActions.responseNewsApi(data))
    } catch (e) {
        console.log(e);
    }
}

export function* watchAboutSaga() {
    yield takeEvery("REQUEST_NEWS_API", fetchAboutPage)
}