n = int(input())
arr = list(map(int, input().split()))
arr.sort()
for i in arr:
    if i < max(arr):
        n = i
print(n)