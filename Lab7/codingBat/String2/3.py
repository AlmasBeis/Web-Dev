def count_hi(str):
    count1 = 0
    for i in range(len(str) - 1):
        if str[i:i + 2] == "hi":
            count1 += 1
    return count1

