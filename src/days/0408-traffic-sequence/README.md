# Is valid traffic sequence

## Interview question

https://buttondown.com/cassidoo/archive/our-feelings-are-our-most-genuine-paths-to/

Given an array of strings representing a sequence of traffic light states ("red" for stop, "green" for go, "yellow" for slow), write a function that returns true if the sequence could represent a valid state machine for a standard traffic light. The only valid transitions are: red to green, green to yellow, and yellow to red.

Example:

> isValidTrafficSequence(["red", "green", "yellow", "red", "green"])
> true

> isValidTrafficSequence(["red", "yellow", "green"]);
> false

> isValidTrafficSequence([])
> true
