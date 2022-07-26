const rwClient = require('./client.js');

const tweet = async () => {
    try {

        const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        let datenow = new Date();

        const today = weekdays[datenow.getDay()];

        await rwClient.v1.tweet(`Starting my ${today} on a high note #${today}Vibes.`);
    } catch (e) {
        console.error(e);
    }
};

tweet();