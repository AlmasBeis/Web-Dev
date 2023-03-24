def caught_speeding(speed, is_birthday):
    i=0
    if is_birthday:
         i = 5
    if speed <= 60+i:
        return 0
    elif speed <= 80+i:
        return 1
    else: return 2
