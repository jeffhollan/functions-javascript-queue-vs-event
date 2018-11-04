// @ts-check
const { EventHubClient } = require('@azure/event-hubs');
 
module.exports = async function(count, batch) {
    const client = EventHubClient.createFromConnectionString(process.env['EventHubsConnectionString'], 'events');
    for(let x = 1; x <= count; x++){
        let message = {
            id: x,
            batch: batch,
            timeout: x % 10 != 0 ? 1000 : 10000
        };
        await client.send({ body: message });
    }
    console.log(`Delivered ${count} messages to event hub`);
}