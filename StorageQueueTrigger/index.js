const sleep = require('../Shared/utils');

module.exports = async function (context, message) {
    context.log('JavaScript storage queue fired for message: ', message);
    context.log({...message, status: 'started'});
    await sleep(message['duration']);
    context.log({...message, status: 'finished'});
};