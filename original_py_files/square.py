num = int(input('How big is the square? '))

row = 0
while row < num:
    col = 0
    while col < num:
        print('*', end= '')
        col += 1
    row += 1
    print()    