var redis = require('redis');

var cl = redis.createClient();
var ping = function(cl, n, max, begin){
    if(n >= max){
        var end = process.uptime();
        console.log('ping : %d', end - begin);
        cl.quit();
        return;
    }
    cl.ping(function(err, val){
        ping(cl, n + 1, max, begin);
    });
}

var MAX = 50;
var begin = process.uptime();
ping(cl, 0, MAX, begin);
