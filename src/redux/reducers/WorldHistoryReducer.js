
import * as Actions from '../ActionTypes'

const INITIAL_STATE = {
    worldHistoryIsLoading: false,
    worldHistoryError: undefined,
    worldHistoryData: {}
}

const WorldHistoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case Actions.WORLD_HISTORICAL_SERVICE_PENDING:
            return Object.assign(
                {},
                state,
                {
                    worldHistoryIsLoading: true,
                }
            );
        case Actions.WORLD_HISTORICAL_SERVICE_ERROR:
            return Object.assign(
                {},
                state,
                {
                    worldHistoryIsLoading: false,
                    worldHistoryError: action.error
                }
            );
        case Actions.WORLD_HISTORICAL_SERVICE_SUCCESS:
            
            return Object.assign(
                {},
                state,
                {
                    worldHistoryIsLoading: false,
                    worldHistoryData: action.data
                }
            );
        default:
            return state;
    }
}

export default WorldHistoryReducer;