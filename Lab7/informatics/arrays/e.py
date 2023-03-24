import sys
n=int(input())
a=input().split()
for i in range(1,len(a)):
    if int(a[i])>=0 and int(a[i-1])>=0 or int(a[i])<0 and int(a[i-1])<0:
        print("YES")
        sys.exit()
print("NO")