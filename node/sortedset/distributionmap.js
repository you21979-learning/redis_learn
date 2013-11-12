var redis = require('redis');

var u = function(id,lv){
    return {
        id : id,
        lv : lv
    };
}

var member = [
    u('user1', 1),
    u('user2', 50),
    u('user3', 20),
    u('user4', 22),
    u('user5', 27),
    u('user6', 18),
    u('user7', 32),
    u('user8', 1)
];
var key = 'hogedist';
var cl = redis.createClient();

cl.del(key);

var m = cl.multi();
// set
member.forEach(function(s){
    m.zadd(key, s.lv, s.id);
});
var f = function(min, max){
    m.zrangebyscore(key, min, max, function(err, val){
        console.log('%d-%d:%d', min, max, val.length);
    });
}
f(0,9);
f(10,19);
f(20,29);
f(30,39);
f(40,49);
f(50,59);
m.exec(function(err, result){
    console.log('done');
});
cl.quit();
