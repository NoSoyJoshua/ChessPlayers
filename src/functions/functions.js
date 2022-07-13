import axios from 'axios';

export const getPlayerInfo = async (playerId) => {
    try {
        let playerInfo = await axios.get(`https://fide-ratings-scraper.herokuapp.com/player/${playerId}/info`);
        let resCode = playerInfo.status;
        return [resCode, playerInfo.data];
    }
    catch (error) {
        let resCode = error.response.status;
        return [resCode, {errorCode: error.response.status, errorMessage: error.response.data.reason}];
    }
}