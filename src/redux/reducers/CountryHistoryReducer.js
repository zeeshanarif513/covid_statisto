
import * as Actions from '../ActionTypes'

const INITIAL_STATE = {
    countryHistoryIsLoading: false,
    countryHistoryError: undefined,
    countryHistoryData: {}
}

const CountryHistoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case Actions.COUNTRY_HISTORICAL_SERVICE_PENDING:
            return Object.assign(
                {},
                state,
                {
                    countryHistoryIsLoading: true,
                }
            );
        case Actions.COUNTRY_HISTORICAL_SERVICE_ERROR:
            return Object.assign(
                {},
                state,
                {
                    countryHistoryIsLoading: false,
                    countryHistoryError: action.error
                }
            );
        case Actions.COUNTRY_HISTORICAL_SERVICE_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    countryHistoryIsLoading: false,
                    countryHistoryData: action.data
                }
            );
        default:
            return state;
    }
}

export default CountryHistoryReducer;