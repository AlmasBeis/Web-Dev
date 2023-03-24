def array_front9(nums):
    for i in range(len(nums)):
        if i < 4:
            if nums[i] == 9:
                return True
        else:
            return False
    return False
