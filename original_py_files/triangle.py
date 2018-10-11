
#################################################
#########   UPSIDE DOWN TRIANGLE ################
#################################################

#height: 2 width: 3   height: 3 width: 5   height: 4 width: 7  (5, 9)  (6, 11)
# 3 + 2 = 5  4 + 3 = 7 n+(n-1)  2n-1
height = int(input("What is the height of the triangle? "))
num = int(2*height - 1)
# making a variable init_num that stores the original number
init_num = num

while num > 0:
    #filtering the odd numbers
    if num % 2 == 1:
        # this section is for the original number with no spaces
        if init_num == num:
            #creating a counter a_num
            a_num = num
            while a_num > 0:
                print('*', end=(' '))
                a_num -= 1
        else:
            #b_num is another counter for numbers less than original number
            b_num = num
            # x_num is the number of spaces needed
            x_num = int((init_num - b_num)/2)
            while b_num >= 0:
                #Puts spaces before the stars
                if b_num > b_num - x_num:
                    while x_num > 0:
                        print(' ', end=(' '))
                        x_num -= 1
                # Fills stars after the spaces        
                else:
                    print('*', end=(' '))
                b_num -= 1    
    num -= 1
    # makes a new line
    print()

        