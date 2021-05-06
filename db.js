const {Client} = require('pg');
const DB_URI = 'postgresql:///coordinates'

const client = new Client(DB_URI);

client.connect();

module.exports = client;