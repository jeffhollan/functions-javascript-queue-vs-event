// @ts-check
const azStorage = require('azure-storage');
const {promisify} = require('util');

module.exports = async function(count, batch) {
    const queueClient = azStorage.createQueueService(process.env['AzureWebJobsStorage']);
    
    const createMessageAsync = promisify(queueClient.createMessage.bind(queueClient));
    for(let x = 1; x <= count; x++){
        try {
            let message = {
                id: x,
                batch: batch,
                timeout: x % 10 != 0 ? 1000 : 10000
            };
            await createMessageAsync('queue', JSON.stringify(message));
        }
        catch(err) {
            console.log(`id ${x} batch ${batch} had exception ${err}`);
        }
        
    }
    console.log(`Delivered ${count} messages to storage queue`);
}