def alarm_clock(day, vacation):
    days = "7:00"
    ends = "10:00"
    if vacation:
        days = "10:00"
        ends = "off"
    if 0 < day < 6:
        return days
    else:
        return ends
