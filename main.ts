basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B))) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A))) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.clearScreen()
    }
})
