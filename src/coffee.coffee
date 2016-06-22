# Assignment:
number   = 42
opposite = true

# Conditions:
number = -42 if opposite

# Functions:
square = (x) -> x * x

# Arrays:
list = [1, 2, 3, 4, 5]

# Objects:
math =
root:   Math.sqrt
square: square
cube:   (x) -> x * square x

# Splats:
winner = "bob"
runners = ["alice", "bob", "carol"]
race = (winner, runners...) ->
console.log winner, runners

# Existence:
alert "I knew it!" if elvis?

# Array comprehensions:
cubes = (math.cube num for num in list)

setTimeout (() -> console.log("hello from coffee!")), 1000
