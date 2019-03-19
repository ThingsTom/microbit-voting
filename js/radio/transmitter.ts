radio.setGroup(0)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)

input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
    basic.showString("A")
})

input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
    basic.showString("B")
})

input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("clear")
})
