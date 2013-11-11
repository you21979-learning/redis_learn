table.join = function (tbl, sep)
    local ret
    for n, v in pairs(tbl) do
        local seg = tostring(v)
        if ret == nil then
           ret = seg
        else
           ret = ret .. sep .. seg
        end
    end
    return ret
end

local lists = {}
for key,value in pairs(redis.call('HGETALL', KEYS[1])) do
    local j = '"' .. key .. '" : "' .. value .. '"'
    table.insert(lists, j)
end
return '{' .. table.join(lists, ',') .. '}' 
