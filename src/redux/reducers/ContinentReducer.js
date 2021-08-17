
import * as Actions from '../ActionTypes'

const INITIAL_STATE = {
    continentIsLoading: false,
    continentError: undefined,
    continentData: []
}

const ContinentReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case Actions.CONTINENT_SERVICE_PENDING:
            return Object.assign(
                {},
                state,
                {
                    continentIsLoading: true,
                }
            );
        case Actions.CONTINENT_SERVICE_ERROR:
            return Object.assign(
                {},
                state,
                {
                    continentIsLoading: false,
                    continentError: action.error
                }
            );
        case Actions.CONTINENT_SERVICE_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    continentIsLoading: false,
                    continentData: action.data
                }
            );
        default:
            return state;
    }
}

export default ContinentReducer;