input.onButtonPressed(Button.A, function () {
    bluetooth.advertiseUrl(
        "https://makecode.com#A",
        7,
        false
    )
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    bluetooth.advertiseUrl(
        "https://makecode.com#B",
        7,
        false
    )
    basic.showLeds(`
        # # # # .
        # . . . #
        # # # # .
        # . . . #
        # # # # .
        `)
})
