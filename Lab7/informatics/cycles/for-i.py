import math
x=int(input())
ans=0
for i in range (1,int(math.sqrt(x))+1):
    if x%i==0:
        ans= ans+1 if x/i==i else ans+2
print(ans)