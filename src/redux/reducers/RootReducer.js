import { combineReducers } from 'redux';

import CountryReducer from './CountryReducer';
import WorldReducer from './WorldReducer';
import CountryHistoryReducer from './CountryHistoryReducer';
import WorldHistoryReducer from './WorldHistoryReducer';
import ContinentReducer from './ContinentReducer';
import AllCountriesReducer from './AllCountriesReducer';
const AppReducers = combineReducers({
    CountryReducer,
    WorldReducer,
    CountryHistoryReducer,
    WorldHistoryReducer,
    ContinentReducer,
    AllCountriesReducer
});

const RootReducer = (state, action) => {
    return AppReducers(state, action);
}

export default RootReducer;