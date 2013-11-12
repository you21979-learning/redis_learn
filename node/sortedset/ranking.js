var redis = require('redis');

var member = [
    'user1',
    'user2',
    'user3',
    'user4',
    'user5',
    'user6',
    'user7',
    'user8'
];
var key = 'hogerank';
var r = function(){
    var i = Math.random() * member.length|0;
    return member[i]
}
var cl = redis.createClient();

cl.del(key);

var m = cl.multi();
// random score
for(var i=0;i<1000;++i){
    m.zincrby(key, Math.random() * 100|0, r());
}
// show score
member.forEach(function(s){
    m.zscore(key, s, function(err, val){
        console.log(s + ':' + val);
    });
});
// show ranking
m.zrange(key, 0, member.length, function(err, val){
    val.forEach(function(s, i){
        console.log('no.%d:%s', i+1, s);
    });
});
m.exec(function(err, result){
    console.log('done');
});
cl.quit();
