import * as ActionTypes from '../ActionTypes';
import * as covidAPI from '../../api/FetchCovidStats';

//country data action
export const CountryServiceActionPending = () => (
    {
        type: ActionTypes.COUNTRY_SERVICE_PENDING
    }
)

export const CountryServiceActionError = (error) => (
    {
        type: ActionTypes.COUNTRY_SERVICE_ERROR,
        error: error
    }
)

export const CountryServiceActionSuccess = (data) => (
    {
        type: ActionTypes.COUNTRY_SERVICE_SUCCESS,
        data: data
    }
)

//world data action
export const WorldServiceActionPending = () => (
    {
        type: ActionTypes.WORLD_SERVICE_PENDING
    }
)

export const WorldServiceActionError = (error) => (
    {
        type: ActionTypes.WORLD_SERVICE_ERROR,
        error: error
    }
)

export const WorldServiceActionSuccess = (data) => (
    {
        type: ActionTypes.WORLD_SERVICE_SUCCESS,
        data: data
    }
)

//country historical data action
export const CountryHistoricalServiceActionPending = () => (
    {
        type: ActionTypes.COUNTRY_HISTORICAL_SERVICE_PENDING
    }
)

export const CountryHistoricalServiceActionError = (error) => (
    {
        type: ActionTypes.COUNTRY_HISTORICAL_SERVICE_ERROR,
        error: error
    }
)

export const CountryHistoricalServiceActionSuccess = (data) => (
    {
        type: ActionTypes.COUNTRY_HISTORICAL_SERVICE_SUCCESS,
        data: data
    }
)

//world historical data action
export const WorldHistoricalServiceActionPending = () => (
    {
        type: ActionTypes.WORLD_HISTORICAL_SERVICE_PENDING
    }
)

export const WorldHistoricalServiceActionError = (error) => (
    {
        type: ActionTypes.WORLD_HISTORICAL_SERVICE_ERROR,
        error: error
    }
)

export const WorldHistoricalServiceActionSuccess = (data) => (
    {
        type: ActionTypes.WORLD_HISTORICAL_SERVICE_SUCCESS,
        data: data
    }
)

//continent data action
export const ContinentServiceActionPending = () => (
    {
        type: ActionTypes.CONTINENT_SERVICE_PENDING
    }
)

export const ContinentServiceActionError = (error) => (
    {
        type: ActionTypes.CONTINENT_SERVICE_ERROR,
        error: error
    }
)

export const ContinentServiceActionSuccess = (data) => (
    {
        type: ActionTypes.CONTINENT_SERVICE_SUCCESS,
        data: data
    }
)

//all countries data action
export const AllCountriesServiceActionPending = () => (
    {
        type: ActionTypes.ALL_COUNTRIES_SERVICE_PENDING
    }
)

export const AllCountriesServiceActionError = (error) => (
    {
        type: ActionTypes.ALL_COUNTRIES_SERVICE_ERROR,
        error: error
    }
)

export const AllCountriesServiceActionSuccess = (data) => (
    {
        type: ActionTypes.ALL_COUNTRIES_SERVICE_SUCCESS,
        data: data
    }
)

export const fetchCountryStats = (country) => {
    return async dispatch => {
        dispatch(CountryServiceActionPending());
        const data = await covidAPI.fetchCountryStats(country)
        if(data) {
            dispatch(CountryServiceActionSuccess(data));
        }
        else {
            error = "Error while fetching data"
            dispatch(CountryServiceActionError(error));
        }
    }
}

export const fetchWorldStats = () => {
    return async dispatch => {
        
        dispatch(WorldServiceActionPending());
        const data = await covidAPI.fetchWorldStats()
        if(data) {
            dispatch(WorldServiceActionSuccess(data));
        }
        else {
            error = "Error while fetching data"
            dispatch(WorldServiceActionError(error));
        }
    }
}

export const fetchCountryCovidHistory = (country) => {
    return async dispatch => {
        dispatch(CountryHistoricalServiceActionPending());
        const data = await covidAPI.fetchCountryCovidHistory(country)
        if(data) {
            dispatch(CountryHistoricalServiceActionSuccess(data));
        }
        else {
            error = "Error while fetching data"
            dispatch(CountryHistoricalServiceActionError(error));
        }
    }
}

export const fetchWorldCovidHistory = () => {
    return async dispatch => {
        dispatch(WorldHistoricalServiceActionPending());
        const data = await covidAPI.fetchWorldCovidHistory()
        if(data) {
            dispatch(WorldHistoricalServiceActionSuccess(data));
        }
        else {
            error = "Error while fetching data"
            dispatch(WorldHistoricalServiceActionError(error));
        }
    }
}

export const fetchContinentStats = () => {
    return async dispatch => {
        dispatch(ContinentServiceActionPending());
        const data = await covidAPI.fetchContinentStats()
        if(data) {
            dispatch(ContinentServiceActionSuccess(data));
        }
        else {
            error = "Error while fetching data"
            dispatch(ContinentServiceActionError(error));
        }
    }
}

export const    fetchAllCountriesStats = () => {
    return async dispatch => {
        dispatch(AllCountriesServiceActionPending());
        const data = await covidAPI.fetchAllCountriesStats()
        if(data) {
            dispatch(AllCountriesServiceActionSuccess(data));
        }
        else {
            error = "Error while fetching data"
            dispatch(AllCountriesServiceActionError(error));
        }
    }
}