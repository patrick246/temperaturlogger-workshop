const fs = require('fs');
let data = require('../data/temperatures.json');
module.exports = {
    store(date, temperature) {
        data[date] = temperature;
        fs.writeFileSync('./data/temperatures.json', JSON.stringify(data));
    },
    get(date) {
        if(date === undefined)
            return data;
        return data[date];
    }
}