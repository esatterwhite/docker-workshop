var express = require( 'express' )
  , redis = require( 'redis' )
  , app = express()
  , client
  ;

client = redis.createClient( /*port*/, /*host*/ );

app.post('/incr', function( req, res ){
	client.incr('docker:count', function(err, count){
        res.status(201).send(''+count);
    })
});

app.post('/decr', function( req, res ){
    client.decr('docker:count', function( err, count ){
        if( count <= 0 || err){
            return res.status(400).send('count already at lowest value');
        }
        res.status(201).send('' + ( --count ));
    })
});

app.listen( 3000 ,function( err ){
	console.log( 'app running: %s',  'https://0.0.0.0:3000');
});
