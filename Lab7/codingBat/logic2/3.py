def make_chocolate(small, big, goal):
    max_big = goal//5
    if max_big < big:
        remaining_min = goal - max_big*5
    else: remaining_min = goal - big * 5
    if remaining_min<=small:
        return remaining_min
    return -1