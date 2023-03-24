def make_bricks(small, big, goal):
    max_big = goal //5
    if max_big <= big:
        remaining_length = goal - max_big * 5
    else:
        remaining_length = goal - big * 5
    return remaining_length <= small
