// @ts-check
'use strict';

const SEND_EVENT_HUB = true;
const SEND_SERVICE_BUS = false;
const SEND_STORAGE_QUEUE = false;
const MESSAGE_COUNT = 1000;

const eventhub = require('./eventhub');
const servicebusqueue = require('./servicebusqueue');
const storagequeue = require('./storagequeue');

(async () => {
    if (SEND_EVENT_HUB) {
        console.log('sending event hub messages...');
        await eventhub(MESSAGE_COUNT);
    }

    if (SEND_SERVICE_BUS) {
        console.log('sending service bus messages...');
        await servicebusqueue(MESSAGE_COUNT);
    }

    if (SEND_STORAGE_QUEUE) {
        console.log('sending storage queue messages...');
        await storagequeue(MESSAGE_COUNT);
    }
})();
