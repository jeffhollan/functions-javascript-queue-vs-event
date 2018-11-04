const sleep = require('../Shared/utils');

module.exports = async function(context, message) {
    try {
        context.log('JavaScript service bus queue fired for message: ', message);
        context.log({...message, status: 'started'});
        await sleep(message['timeout']);
        context.log({...message, status: 'finished'});
    }
    catch(err) {
        console.log(err);
    }
};