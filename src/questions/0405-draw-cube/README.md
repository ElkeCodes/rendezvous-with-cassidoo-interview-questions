# Draw cube

## Interview question

https://buttondown.com/cassidoo/archive/imagination-is-more-important-than-knowledge/

Write a function that draws an ASCII art cube of given height n.

Example:

> drawCube(2)
"
  +----+
 /    /|
+----+ |
|    | +
|    |/
+----+
"

> drawCube(4)
"
   +--------+
  /        /|
 /        / |
+--------+  |
|        |  |
|        |  +
|        | /
|        |/
+--------+
"

## Notes

Compiled with 
`npx tsc src/days/0405-draw-cube/draw-cube.ts --target es5 --module esnext --lib esnext,dom`