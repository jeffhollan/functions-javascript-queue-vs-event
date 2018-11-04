// @ts-check
const { EventHubClient } = require('@azure/event-hubs');
 
const client = EventHubClient.createFromConnectionString(process.env['EventHubsConnectionString'], 'events');
 

module.exports = async function(count) {
    
}