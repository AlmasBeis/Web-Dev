def sleep_in(weekday, vacation):
    if vacation:
        return True
    elif not weekday:
        return True
    else:
        return False


print(sleep_in(False, True))