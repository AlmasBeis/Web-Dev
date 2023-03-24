def count_evens(nums):
    ans = 0
    for i in nums:
        if i % 2 == 0:
            ans += 1
    return (ans)
