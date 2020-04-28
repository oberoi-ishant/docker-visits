const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  host: 'redis-server', // container name in docker-compose
  port: 6379 // default port usually used with redis
});

// Initialise the visits count
client.set('visits', 0);

app.get('/', (req, res) => {
  // process.exit(0);
  client.get('visits', (err, visits) => {
    res.status(200).send("Numder of visits: " + visits.toString());
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('listening 8081. Check docker-compose for port mapping');
});