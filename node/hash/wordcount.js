var redis = require('redis');

var key = 'hogehash';

var job = [
    'redmag',
    'blackmag',
    'whitemag',
    'fighter',
    'monk'
];

var n = 0;
var u = function(i){
    return job[i % job.length];
}
var lists = [
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++),
    u(n++)
];

var cl = redis.createClient();

cl.del(key);

lists.forEach(function(o){
    cl.hincrby(key, o, 1);
});
cl.hgetall(key, function(err, val){
    console.log(val);
});



