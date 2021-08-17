
import * as Actions from '../ActionTypes'

const INITIAL_STATE = {
    worldIsLoading: false,
    worldError: undefined,
    worldData: {}
}

const WorldReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case Actions.WORLD_SERVICE_PENDING:
            return Object.assign(
                {},
                state,
                {
                    worldIsLoading: true,
                }
            );
        case Actions.WORLD_SERVICE_ERROR:
            return Object.assign(
                {},
                state,
                {
                    worldIsLoading: false,
                    worldError: action.error
                }
            );
        case Actions.WORLD_SERVICE_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    worldIsLoading: false,
                    worldData: action.data
                }
            );
        default:
            return state;
    }
}

export default WorldReducer;