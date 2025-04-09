# HashMap reimplemented

## Interview question

https://buttondown.com/cassidoo/archive/the-early-bird-gets-the-first-worm-but-the-wisest/

Implement a hashmap from scratch without any existing libraries in your preferred language.

A hashmap should:

- Be empty when initialized
- Have the function put(int key, int value) which inserts a (key, value) pair into the hashmap. If the key already exists, update the corresponding value.
- Have the function get(int key) which returns the value to which the specified key is mapped, or -1 if there’s no mapping for the key.
- Have the function remove(key) which removes the key and its value if it exists in the map.

## Notes
I've  made 2 versions:
- with a closure, inspired by my days of writing Scheme
- with a class