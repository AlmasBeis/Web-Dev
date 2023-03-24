def centered_average(nums):
    nums.sort()
    sum = 0
    for i in range(1, len(nums) - 1):
        sum += nums[i]
    return (sum // (len(nums) - 2))
