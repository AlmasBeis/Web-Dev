def big_diff(nums):
    a = nums[0]
    b = a
    for i in nums:
        a = max(i, a)
        b = min(i, b)
    return (a - b)
