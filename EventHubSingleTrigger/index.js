const sleep = require('../Shared/utils');

module.exports = async function (context, message) {
    context.log('JavaScript event hub fired for message: ', message);
    context.log({...message, status: 'started'});
    await sleep(message['timeout']);
    context.log({...message, status: 'finished'});
};