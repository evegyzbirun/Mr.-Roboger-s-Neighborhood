# Describe: numbers()

## Test: "It should take input number and return an array  from 0 to user's inputted number"
## Code: numbers(5);
## Expected Output: [0, 1, 2, 3, 4, 5]


# Describe: newNumbers()
## Test:  "It should check the array for 1, 2, 3 and replace them with words"
## Code: replace();
## Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]



# Describe: scanNumbers()
## Test:  "It should check the array for 1, 2, 3 in every double or more element of an array and if element has any of the 3 elements we taking the highest of them and replace with teh word(if we have 14 we replace it on "Beep!", but if we have 23 we replace it with "Won't you be my neighbor?"  ) (1 ="Beep!"; 2 = "Boop!",3 = "Won't you be my neighbor?").
## Code: scanNumbers(16);
## Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7,8, 9, "Beep!", "Boop!", "Won't you be my neighbor?", "Boop!", "Beep!", "Beep!"  ]