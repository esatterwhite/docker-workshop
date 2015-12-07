var fs = require('fs')
  , express = require( 'express' )
  , redis = require( 'redis' )
  , app = express()
  , client
  , config
  , LOWER_BOUND
  ;

client = redis.createClient(6379, 'redis');
config = require('/etc/config/app.json');
LOWER_BOUND = config.lower_bound || 0;

console.log('LOWER_BOUND set to %s', LOWER_BOUND)

app.post('/incr', function( req, res ){
	client.incr('docker:count', function(err, count){
        res.status(201).send(""+count);
    });
});

app.post('/decr', function( req, res ){
    client.decr('docker:count', function( err, count ){
        if( count <= LOWER_BOUND || err ){
            err && console.log( err )
            client.del('docker:count');
            return res.status(400).send('count already at lowest value');
        }
        res.status(201).send('' + count);
    });
});

app.listen( 3000, function( err ){
	console.log( 'app running: %s',  'https://0.0.0.0:3000');
});
