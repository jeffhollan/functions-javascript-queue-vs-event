const sleep = require('../Shared/utils');

module.exports = async function(context, message) {
    context.log('JavaScript service bus queue fired for message: ', message);
    context.log({...message, status: 'started'});
    await sleep(message['duration']);
    context.log({...message, status: 'finished'});
};