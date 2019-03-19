import radio
from microbit import *

radio.on()
radio.config(group=0, power=7)
display.show("R")

a = 0
b = 0
votes = {}
while True:
    incoming = radio.receive()
    # expected data to be one of: done, clear or vote (format id:vote e.g 1:a)
    data = str(incoming).split(":", -1)

    if data[0] == "done":
        for id, vote in votes.items():
            if vote.lower() == "a":
                a += 1
            elif vote.lower() == "b":
                b += 1
        if a == b:
            display.scroll("DRAW", wait=False, loop=True)
        elif a > b:
            display.show("A")
        else:
            display.show("B")
    if data[0] == "clear":
        display.show("R")
        a = 0
        b = 0
    if data[0].isdigit() and len(data) == 2:
        votes[data[0]] = data[1]