const axios = require('axios');

const getExchangeRate = async (from, to) => {
    try{
        const res = await axios.get(`http://api.fixer.io/latest?base=${from}`);
        const rate = res.data.rates[to];
        if(rate){
            return rate;
        }else{
            throw new Error(`Unable to get exchange rate for ${from} and ${to}`);
        }
    }catch(e){
        throw new Error(`Unable to get exchange rate for ${from} and ${to}`);
    }
}

module.exports = {
    getExchangeRate
}