import sys
a=int(input())
while a>1:
    if a%2==1:
        print("NO")
        sys.exit()
    else:
        a=a/2
print("YES")