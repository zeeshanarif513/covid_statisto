
import * as Actions from '../ActionTypes'

const INITIAL_STATE = {
    countryIsLoading: false,
    countryError: undefined,
    countryData: {}
}

const CountryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case Actions.COUNTRY_SERVICE_PENDING:
            return Object.assign(
                {},
                state,
                {
                    countryIsLoading: true,
                }
            );
        case Actions.COUNTRY_SERVICE_ERROR:
            return Object.assign(
                {},
                state,
                {
                    countryIsLoading: false,
                    countryError: action.error
                }
            );
        case Actions.COUNTRY_SERVICE_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    countryIsLoading: false,
                    countryData: action.data
                }
            );
        default:
            return state;
    }
}

export default CountryReducer;