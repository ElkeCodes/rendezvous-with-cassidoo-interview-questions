# Wordle guess

## Data

Tags: #matching, #string
Newsletter: https://buttondown.com/cassidoo/archive/the-time-is-always-right-to-do-what-is-right-dr/

## Interview question

Using the rules of Wordle, given a guessWord and a solutionWord, return a set of emojis returned from the guessWord.

Example:

```python
let solutionWord = "fudge"

$ wordleGuess("reads", solutionWord)
$ "⬛🟨⬛🟨⬛"

$ wordleGuess("lodge", solutionWord)
$ "⬛⬛🟩🟩🟩"
```