// @ts-check
const serviceBus = require('azure-sb');
const {promisify} = require('util');

module.exports = async function(count, batch) {
    const sbService = serviceBus.createServiceBusService(process.env['ServiceBusConnectionString']);
    const sendQueueMessageAsync = promisify(sbService.sendQueueMessage.bind(sbService));
    for(let x = 1; x <= count; x++){
        try {
            let message = {
                id: x,
                batch: batch,
                timeout: x % 10 != 0 ? 1000 : 10000
            };
            await sendQueueMessageAsync('queue', JSON.stringify(message));
        }
        catch(err) {
            console.log(`id ${x} batch ${batch} had exception ${err}`);
        }
        
    }
    console.log(`Delivered ${count} messages to service bus queue`);
}