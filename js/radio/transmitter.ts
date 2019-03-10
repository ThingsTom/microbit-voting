radio.setGroup(0)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
basic.showString("T")

let transmit = false

function clear() {
    transmit = true
    basic.showString("T")
}

input.onGesture(Gesture.Shake, function () {
    clear()
})

radio.onReceivedString(function (receivedString: string) {
    if (receivedString == "clear") {
        clear()
    }
})

transmit = true
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && transmit) {
        radio.sendString("1:a")
        transmit = false
        basic.showString("S")
    }
    if (input.buttonIsPressed(Button.B) && transmit) {
        radio.sendString("1:b")
        transmit = false
        basic.showString("S")
    }
})
