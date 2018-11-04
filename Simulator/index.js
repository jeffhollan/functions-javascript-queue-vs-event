// @ts-check
'use strict';
const eventhub = require('./eventhub');
const servicebusqueue = require('./servicebusqueue');
const storagequeue = require('./storagequeue');
const fs = require('fs');
const {promisify} = require('util');

const SEND_EVENT_HUB = true;
const SEND_SERVICE_BUS = false;
const SEND_STORAGE_QUEUE = false;
const MESSAGE_COUNT = 1000;
const BATCH_ID = -1;

(async () => {
    await setEnvironment();

    if (SEND_EVENT_HUB) {
        console.log('sending event hub messages...');
        await eventhub(MESSAGE_COUNT, BATCH_ID);
    }

    if (SEND_SERVICE_BUS) {
        console.log('sending service bus messages...');
        await servicebusqueue(MESSAGE_COUNT, BATCH_ID);
    }

    if (SEND_STORAGE_QUEUE) {
        console.log('sending storage queue messages...');
        await storagequeue(MESSAGE_COUNT, BATCH_ID);
    }
})();

async function setEnvironment() {
    const readFileAsync = promisify(fs.readFile);
    const settings = JSON.parse(
        await readFileAsync('local.settings.json', { encoding: 'utf8'})
    );
    for(var property in settings['Values']) {
        process.env[property] = settings['Values'][property];
    }
}
