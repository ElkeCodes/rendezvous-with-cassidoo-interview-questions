# Repeated substring

## Interview question

https://buttondown.com/cassidoo/archive/never-discourage-anyone-who-continually-makes/

Given strings n and m, find the minimum number of times n has to be repeated such that m is a substring of it (and if it's not possible, return -1).

Example:
> repeatedSubstring('abcd', 'cdabcdab')
> 3 // When you repeat n 3 times, it becomes 'abcdabcdabcd', and m isn't a substring of n when it's repeated less than 3 times

> repeatedSubstring('ab', 'cab')
> -1