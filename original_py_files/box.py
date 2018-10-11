# height = 4
# width = 6
# WIDTH = 6

# while height > 0:
#     while width > 0:
#         if height == 4 or height == 1:
#             print('*', end='')
#             width -= 1
#         else:
#             if width == 6 or width == 1:
#                 print('*', end='')
#             else:
#                 print(' ', end='')
#             width -= 1
#     print() # new line after nested loop
#     height -= 1    
#     width = WIDTH     

height = int(input('What is the height? '))
width = int(input('What is the width? '))
row = 0

while row < height:
    col = 0
    while col < width:
        if row == height-1 or row == 0:
            print('*', end = '')
        else:
            if col == 0:
                print('*', end='')
            elif col == width-1:
                print('*', end='')
            else: 
                print(' ', end='')
        col += 1
    row += 1 
    print()  