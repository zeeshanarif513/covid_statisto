
import * as Actions from '../ActionTypes'

const INITIAL_STATE = {
    countriesAreLoading: false,
    countriesError: undefined,
    countriesData: []
}

const AllCountriesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case Actions.ALL_COUNTRIES_SERVICE_PENDING:
            return Object.assign(
                {},
                state,
                {
                    countriesAreLoading: true,
                }
            );
        case Actions.ALL_COUNTRIES_SERVICE_ERROR:
            return Object.assign(
                {},
                state,
                {
                    countriesAreLoading: false,
                    countriesError: action.error
                }
            );
        case Actions.ALL_COUNTRIES_SERVICE_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    countriesAreLoading: false,
                    countriesData: action.data
                }
            );
        default:
            return state;
    }
}

export default AllCountriesReducer;