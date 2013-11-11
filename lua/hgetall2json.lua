return cjson.encode(redis.call('HGETALL', KEYS[1]))
