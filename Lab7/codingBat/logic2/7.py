def close_far(a, b, c):
    if abs(a-b) <= 1:
        if abs(c-a) >= 2 and abs(c-b) >= 2:
            return True
        else: return False
    if abs(a-c) <= 1:
        if abs(b-a) >= 2 and abs(b-c) >= 2:
            return True
        else: return False

    return False

