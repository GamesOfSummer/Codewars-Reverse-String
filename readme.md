Reverse Strings

Complete the solution so that it reverses the string passed into it. 

https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript


My Answer -

```
    return str.split('').reduce((all:string, x:string) => {return (x + all).toString()}, '');
```

Ie - split into an array, run a reducer method to append backwards


Other cool answers - 

Oh. There is a reverse method. Huh. Guess I reinvented the wheel on that one...

Interesting note - `[...str]` turns a string into an array, apprently? That's rad!