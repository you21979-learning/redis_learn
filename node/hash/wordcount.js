var redis = require('redis');

var key = 'jobmap';
var Chara = function(lv, job){
    this.lv = lv;
    this.job = job;
}

var job = [
    'redmag',
    'blackmag',
    'whitemag',
    'fighter',
    'monk'
];

var u = function(i){
    return new Chara( i, job[i % job.length] );
}
var lists = [];
for(var i=0; i<10001; ++i) lists.push(u(i));

var cl = redis.createClient();

cl.del(key);

var m = cl.multi();

lists.forEach(function(o){
    m.hincrby(key, o.job, 1);
});
m.hgetall(key, function(err, val){
    console.log(val);
});
m.exec(function(err, result){
    console.log('done');
});
cl.quit();


