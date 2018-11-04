

module.exports = async function (context, eventHubMessages) {
    context.log(`JavaScript event hub trigger function called for message array ${eventHubMessages}`);
    
    eventHubMessages.forEach(async (message, index) => {
        context.log({...message, status: 'started'});
        await sleep(message['duration']);
        context.log({...message, status: 'finished'});
    });
};