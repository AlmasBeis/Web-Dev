def same_first_last(nums):
    if len(nums)<1:
        return False
    return nums[0] == nums[len(nums) - 1]


print(same_first_last([1, 2, 3, 1]))
