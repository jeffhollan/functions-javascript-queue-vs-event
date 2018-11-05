const sleep = require('../Shared/utils');

module.exports = async function (context, message) {
    context.log('JavaScript storage queue fired for message: ', message);
    context.log(JSON.stringify({...message, status: 'started'}));
    await sleep(message['timeout']);
    context.log(JSON.stringify({...message, status: 'finished'}));
};