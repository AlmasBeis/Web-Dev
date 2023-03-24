def xor(a,b):
    return(1 if a!=b else 0)

a=input().split()
print(xor(int(a[0]),int(a[1])))