def in1to10(n, outside_mode):
    if not outside_mode:
        return 1 <= n <= 10
    return 1 >= n or n >= 10
