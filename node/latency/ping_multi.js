var redis = require('redis');

var cl = redis.createClient();
var count = 0;

var MAX = 50;
var begin = process.uptime();
var m = cl.multi();
for(var i = 0; i<MAX; ++i){
    ++count;
    m.ping(function(err, val){
        --count;
        if( count === 0){
            var end = process.uptime();
            console.log('ping : %d', end - begin);
        }
    });
}
m.exec(function(err,result){
    console.log('done');
});
cl.quit();
