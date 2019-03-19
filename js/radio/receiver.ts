let list: number[] = []
let votes: number[] = []
let receivedString = ""
let option = "A" //change to B to program B receiver
let index = 0
let a = 0

radio.setGroup(0)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)

radio.onReceivedValue(function (name, value) {
    if (name == "update") {
        index = votes.indexOf(value)
        if (index >= 0) {
            a += 0 - 1
            votes.removeAt(index)
        }
    }
})

input.onGesture(Gesture.Shake, function () {
    a = 0
    basic.showNumber(a)
})

basic.forever(function () {
    receivedString = radio.receivedString()
    if (receivedString == option) {
        if (votes.indexOf(radio.receivedPacket(RadioPacketProperty.SerialNumber)) == -1) {
            a += 1
            votes.push(radio.receivedPacket(RadioPacketProperty.SerialNumber))
            radio.sendValue("update", radio.receivedPacket(RadioPacketProperty.SerialNumber))
        }
    }
    if (receivedString == "clear") {
        index = votes.indexOf(radio.receivedPacket(RadioPacketProperty.SerialNumber))
        if (index != -1) {
            a += 0 - 1
            votes.removeAt(index)
        }
    }
    basic.showNumber(a)
})
