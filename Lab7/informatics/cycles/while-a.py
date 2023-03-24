import math
a=int(input())
x=1
while x<=a:
    if(math.sqrt(x).is_integer()):
        print(x)
    x+=1
