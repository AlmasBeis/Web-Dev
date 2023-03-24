
def print_formatted(n):
    for i in range(1, n + 1):
        print(i, format(i, 'o'), format(i, 'X'), format(i, 'b'))


n = int(input())
print_formatted(n)