input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        basic.pause(100)
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        basic.pause(100)
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})
