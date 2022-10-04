input.onButtonPressed(Button.AB, function () {
    Num += randint(1, 100) + randint(1, 100)
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
})
let Num = 0
basic.forever(function () {
    basic.showNumber(Num)
})
