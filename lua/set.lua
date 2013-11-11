-- hello.lua
local message = 'hello, world'
return redis.call('SET', KEYS[1], ARGV[1])
