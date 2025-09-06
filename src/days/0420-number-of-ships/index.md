# Number of ships in Battleship

## Data

Tags: #grouping
Newsletter: https://buttondown.com/cassidoo/archive/inspiration-is-applying-what-youve-received-derek/

## Interview question

Imagine a simplified version of the game Battleship played on a 2D grid. The grid represents the sea, and each cell can either be empty (.) or contain a part of a ship (X). Ships are placed horizontally or vertically, and there are no adjacent ships. Given a grid, count the number of battleships in it. Extra credit: can you make a layout generator for the game given these rules?

Example:

```
const ships = [
  ['X', 'X', '.', 'X'],
  ['.', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
  ['.', '.', '.', '.'],
];

numberOfShips(ships)
> 2
```