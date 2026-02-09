# Get Leyland numbers

## Interview question

https://buttondown.com/cassidoo/archive/8-you-can-have-a-plan-but-you-have-to-be-flexible/

Write a function that returns the first n Leyland numbers in ascending order. A Leyland number is defined as x^y + y^x for integers x > 1 and y > 1.

Examples:

```js
getLeylandNumbers(1)[8];

getLeylandNumbers(5)[(8, 17, 32, 54, 57)];
```

## Notes

### Table of leyland numbers

| n   | x   | y   | leyland number |
| --- | --- | --- | -------------- |
| 1   | 2   | 2   | 8              |
| 2   | 2   | 3   | 17             |
| 3   | 2   | 4   | 32             |
| 4   | 3   | 3   | 54             |
| 5   | 2   | 5   | 57             |
| 6   | 2   | 6   | 100            |
| 7   | 3   | 4   | 145            |
| 8   | 2   | 7   | 177            |
| 9   | 2   | 8   | 320            |
| 10  | 3   | 5   | 368            |
| 11  | 4   | 4   | 512            |
| 12  | 2   | 9   | 593            |
| 13  | 3   | 6   | 945            |

### How it works
```
getLeylandNumbers(n)
-> generate n^2 amount of numbers (n^2 as an upper limit because it just felt right... there is probably a good explanation or even a better limit)
-> get next n^2 numbers
-> sort them 
-> only take n first
```

### Sources

https://oeis.org/A076980
https://oeis.org/A076980/list
http://villemin.gerard.free.fr/aNombre/TYPDENOM/Leyland.htm
https://www.numbersaplenty.com/set/Leyland_number/