#3 Strikes
def squares_with_three(n):
    return sum([1 for i in range(1,n+1) if str(i*i).count('3') > 0])