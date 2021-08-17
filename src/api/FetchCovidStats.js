import axios from 'axios';
import {END_POINT} from './Constants';

export async function fetchCountryStats(country) {
    try {
        const response = await axios.get(END_POINT + 'countries/' + country);
        
        if(response.data) {
            console.log("API response using axios");
            return response.data;
        }
        else {
            return "no data found."
        }
    } catch (error) {
        return false
    }
}

export async function fetchWorldStats() {
    try {
        const response = await axios.get(END_POINT + 'all');
        
        if(response.data) {
            console.log("API response using axios");
            return response.data;
        }
        else {
            return "no data found."
        }
    } catch (error) {
        return false
    }
}

export async function fetchWorldCovidHistory() {
    try {
        const response = await axios.get(END_POINT + 'historical/all?lastdays=all');
        
        if(response.data) {
            console.log("API response using axios");
            return response.data;
        }
        else {
            return "no data found."
        }
    } catch (error) {
        return false
    }
}

export async function fetchCountryCovidHistory(country) {
    try {
        const response = await axios.get(END_POINT + 'historical/' + country + '?lastdays=all');
        
        if(response.data) {
            console.log("API response using axios");
            return response.data;
        }
        else {
            return "no data found."
        }
    } catch (error) {
        return false
    }
}

export async function fetchContinentStats() {
    try {
        const response = await axios.get(END_POINT + 'continents');
        
        if(response.data) {
            console.log("API response using axios");
            return response.data;
        }
        else {
            return "no data found."
        }
    } catch (error) {
        return false
    }
}

export async function fetchAllCountriesStats() {
    try {
        const response = await axios.get(END_POINT + 'countries');
        
        if(response.data) {
            console.log("API response using axios");
            return response.data;
        }
        else {
            return "no data found."
        }
    } catch (error) {
        return false
    }
}
