# IP Address in range

## Interview question

https://buttondown.com/cassidoo/archive/the-truth-is-everyones-going-to-hurt-you-you-just/

Given an IPv4 address and a netmask in CIDR notation, return a boolean specifying whether the IP address is inside the given range.

Example:

$ inRange("192.168.4.27", "192.168.0.0/16")
$ true

$ inRange("192.168.4.27", "192.168.1.0/24")
$ false
