basic.showIcon(IconNames.Umbrella)
OLED.init(128, 64)
basic.forever(function () {
    OLED.writeStringNewLine("Umiditatea este: " + tinkercademy.MoistureSensor(AnalogPin.P1))
    if (tinkercademy.MoistureSensor(AnalogPin.P1) < 50) {
        OLED.writeStringNewLine("Uda-ma!")
        music.playTone(262, music.beat(BeatFraction.Whole))
        tinkercademy.LED(DigitalPin.P2, OnOff.On)
    } else {
        OLED.writeStringNewLine("Nu ma uda!")
        tinkercademy.LED(DigitalPin.P3, OnOff.On)
    }
    basic.pause(500)
    tinkercademy.LED(DigitalPin.P2, OnOff.Off)
    tinkercademy.LED(DigitalPin.P3, OnOff.Off)
    OLED.clear()
})
