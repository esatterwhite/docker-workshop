var fs = require('fs')
  , express = require( 'express' )
  , redis = require( 'redis' )
  , app = express()
  , client
  , config
  ;

client = redis.createClient( /*port*/ /*, host*/ );
// config = JSON.parse( fs.readfileSync() )

app.post('/incr', function( req, res ){
	client.incr('docker:count', function(err, count){
        res.status(201).send(count);
    });
});

app.post('/decr', function( req, res ){
    client.decr('docker:count', function( err, count ){
        if( count <= 0 || err ){
            cli.del('docker:count');
            return res.status(400).send('count already at lowest value');
        }
        res.status(201).send(count);
    });
});

app.listen( 3000, function( err ){
	console.log( 'app running: %s',  'https://0.0.0.0:3000');
});
