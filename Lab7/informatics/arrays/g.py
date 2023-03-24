n=int(input())
a=input().split()
for i in range(int(len(a)/2)):
    x=a[i]
    a[i]=a[-i-1]
    a[-i-1]=x
for i in a:
    print(i,end=" ")