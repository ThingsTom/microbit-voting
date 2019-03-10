radio.setGroup(0)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
basic.showString("C")

function clear() {
    radio.sendString("clear")
    basic.showString("C")
}

input.onGesture(Gesture.Shake, function () {
    clear()
})

basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("done")
        basic.showString("S")
    }
    if (input.buttonIsPressed(Button.B)) {
        clear()
    }
})
