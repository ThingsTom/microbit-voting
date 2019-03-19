input.onButtonPressed(Button.A, function () {
    bluetooth.advertiseUrl(
        "https://makecode.com#A",
        7,
        false
    )
    basic.showString("A")
})
input.onButtonPressed(Button.B, function () {
    bluetooth.advertiseUrl(
        "https://makecode.com#B",
        7,
        false
    )
    basic.showString("B")
})
input.onGesture(Gesture.Shake, function () {
    bluetooth.stopAdvertising()
    basic.clearScreen()
})
