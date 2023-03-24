def min (a, b, c, d):
    first=a if a<b else b
    second=c if c<d else d
    return(first if first<second else second)

a=input().split()
print(min(a[0],a[1],a[2],a[3]))
