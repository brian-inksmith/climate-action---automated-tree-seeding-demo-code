input.onButtonPressed(Button.A, function () {
    servos.setServoPosition(AnalogPin.P0, Position.MIDDLE)
    for (let index = 0; index < 4; index++) {
        motor.turnLeft(25)
        basic.pause(2000)
        motor.stop()
        servos.setServoPosition(AnalogPin.P0, Position.HALF_DOWN)
        basic.pause(500)
        servos.setServoPosition(AnalogPin.P0, Position.MIDDLE)
        seedsDropped += 1
        basic.showNumber(seedsDropped)
    }
})
// resets the seedsDropped variable to zero
input.onButtonPressed(Button.AB, function () {
    seedsDropped = 0
    basic.showNumber(seedsDropped)
})
// clears display
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
let seedsDropped = 0
seedsDropped = 0
