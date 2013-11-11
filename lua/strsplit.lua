local split = function(str, sep)
    local keys = {}
    for w in string.gmatch(str, "[^" .. sep .. "]+") do
        table.insert(keys, w);
    end
    return keys
end
return split("HOGE.FUGA", ".")
