import radio
from microbit import *

radio.on()
radio.config(group=0, power=7)
display.show("C")

while True:
    if button_a.was_pressed():
        radio.send('done')
    if button_b.was_pressed() or accelerometer.was_gesture("shake"):
        radio.send('clear')
