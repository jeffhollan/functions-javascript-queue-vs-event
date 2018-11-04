const sleep = require('../Shared/utils');

module.exports = async function (context, eventHubMessages) {
    context.log(`JavaScript event hub trigger function called for message array ${eventHubMessages}`);
    
    for (const message of eventHubMessages) {
        context.log({...message, status: 'started'});
        await sleep(message['timeout']);
        context.log({...message, status: 'finished'});
    }
};