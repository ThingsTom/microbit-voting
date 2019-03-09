radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
basic.showString("C")

function clear() {
    radio.sendString("clear")
}

input.onGesture(Gesture.Shake, function () {
    clear()
})

basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("done")
    }
    if (input.buttonIsPressed(Button.B)) {
        clear()
    }
})