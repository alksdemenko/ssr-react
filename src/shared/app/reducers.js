import { combineReducers } from 'redux';

import playlistsReducer from '../playlists/reducer';
import about from '../about/reducers';

const rootReducer = combineReducers({
    playlists: playlistsReducer,
    about
});

export default rootReducer;
