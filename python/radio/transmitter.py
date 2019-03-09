import radio
from microbit import *

radio.on()
radio.config(power=7)
display.show("T")

transmit = True
while True:
    incoming = radio.receive()
    if button_a.was_pressed() and transmit:
        radio.send("1:a")
        transmit = False
    if button_b.was_pressed() and transmit:
        radio.send("1:b")
        transmit = False
    if accelerometer.was_gesture("shake") or incoming == "clear":
        transmit = True
