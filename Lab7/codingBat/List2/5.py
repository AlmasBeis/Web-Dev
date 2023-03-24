def sum67(nums):
    aftsix = False
    sum = 0
    for i in nums:
        if aftsix:
            if i == 7:
                aftsix = False
        else:
            if i == 6:
                aftsix = True
            else:
                sum += i
    return (sum)
