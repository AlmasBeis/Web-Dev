def string_splosion(str):
    res = ""
    for i in range(1,len(str) + 1):
        res += str[:i]
    return res


print(string_splosion("Code"))