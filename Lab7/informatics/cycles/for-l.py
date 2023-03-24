a=input()
ans=0
for i in range(len(a)):
    ans+=int(a[-i-1])*(2**i)
print(ans)
