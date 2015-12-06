var express = require('express')
  , app = express()
  , count = 0


app.post('/incr', function( req, res ){
	++count;
	res.status(201).send(''+count);
});

app.post('/decr', function( req, res ){
	if( count <= 0){
		return res.status(400).send('count already at lowest value');
	}
	res.status(201).send('' + ( --count ));
});

app.listen( 3000 ,function( err ){
	console.log( 'app running: %s',  'http://0.0.0.0:3000');
})
