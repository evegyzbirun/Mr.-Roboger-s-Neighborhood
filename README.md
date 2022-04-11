## Mr.-Roboger-s-Neighborhood

#### by _**(Evgeny Zbirun)**_

#### The application replaces numbers with word(s).



#### the project link to github: https://github.com/evegyzbirun/Mr.-Roboger-s-Neighborhood

## Technologies Used:
* VS code
* Git console
* JavaScript
* Html 
* jQuery

## Setup instructions

1. download from github link
2. unzip
3. open with Visual Studio Code or some other editor that reads Html, Css and JavaScript.
4. open index.html with live server.
5. input number.
6. Click submit to see the result.


## Known bugs
 non

## License

MIT

Copyright (c) 4/11/2022 Evgeny Zbirun

## what does it do? 
### The application replaces numbers with words. Every number with (1, 2, 3) the application will replaces with words in certain order: from greatest to lowest. (1 = "Beep!", 2 = "Boop!", 3 = "Won't you be my neighbor?"). It returns a string array.

### Tests:

1. Code: numbers(18); Expect output: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", '4', '5', '6', '7', '8', '9', "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!"];

 2. Code: numbers(32); Expect output: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", '4', '5', '6', '7', '8', '9', "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", '"Boop!"', "Boop!", "Won't you be my neighbor?", "Boop!", "Boop!", "Boop!","Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?"];
