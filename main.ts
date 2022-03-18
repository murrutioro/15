input.onGesture(Gesture.ScreenUp, function () {
    basic.showArrow(ArrowNames.NorthWest)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
})
basic.forever(function () {
	
})
