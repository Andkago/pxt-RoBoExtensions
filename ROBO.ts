
//% color="#AA278D"
namespace ROBO {
    //% block
    export function Venstre(Tid: number, Fart: number): void {
        pins.digitalWritePin(DigitalPin.P5, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.analogWritePin(AnalogPin.P0, Fart * 100)
        pins.analogWritePin(AnalogPin.P1, Fart * 100)
        basic.pause(Tid * 1000)
        stop()
    }
    //% block
    export function HarJegNoeForanMeg(): boolean {


        return true
    }



    //% block
    export function SpillLyd(Tid: number): void {
        pins.analogSetPitchPin(AnalogPin.P9)
        music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Forever)
        basic.pause(Tid)
    }
    //% block
    export function Fremover(Tid: number, Fart: number): void {
        pins.digitalWritePin(DigitalPin.P5, 1)
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.analogWritePin(AnalogPin.P0, Fart * 95)
        pins.analogWritePin(AnalogPin.P1, Fart * 100)
        basic.pause(Tid * 1000)
        stop()
    }
    //% block
    export function Bakover(Tid: number, Fart: number): void {
        pins.digitalWritePin(DigitalPin.P5, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P0, Fart * 100)
        pins.analogWritePin(AnalogPin.P1, Fart * 100)
        basic.pause(Tid * 1000)
        stop()
    } 
    //% block
    export function FortsettFremover(Fart: number): void {
        pins.digitalWritePin(DigitalPin.P5, 1)
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.analogWritePin(AnalogPin.P0, Fart * 100)
        pins.analogWritePin(AnalogPin.P1, Fart * 100)
    }
    //% block
    export function Høyre(Tid: number, Fart: number): void {
        pins.digitalWritePin(DigitalPin.P5, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P0, Fart * 100)
        pins.analogWritePin(AnalogPin.P1, Fart * 100)
        basic.pause(Tid * 1000)
        stop()
    }
    //% block
    export function SvingTilVenstre(Tid: number, Fart: number): void {
        pins.digitalWritePin(DigitalPin.P5, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.analogWritePin(AnalogPin.P0, Fart * 80)
        pins.analogWritePin(AnalogPin.P1, Fart * 100)
        basic.pause(Tid * 1000)
        stop()
    }
    //% block
    export function FortsettBakover(Fart: number): void {
        pins.digitalWritePin(DigitalPin.P5, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P0, Fart * 100)
        pins.analogWritePin(AnalogPin.P1, Fart * 100)
    }
    //% block
    export function SvingTilHøyre(Tid: number, Fart: number): void {
        pins.digitalWritePin(DigitalPin.P5, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P0, Fart * 100)
        pins.analogWritePin(AnalogPin.P1, Fart * 80)
        basic.pause(Tid * 1000)
        stop()
    }
    //% block  
    export function stop(): void {
        pins.digitalWritePin(DigitalPin.P5, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
    }
}