import { makeAutoObservable } from "mobx"

// Model the application state.
// Using singleton
class Timer {
    secondsPassed = 0

    constructor() {
        if (Timer._instance) {
            return Timer._instance
        }
        Timer._instance = this;

        makeAutoObservable(this)
    }

    increase() {
        this.secondsPassed += 1
    }

    reset() {
        this.secondsPassed = 0
    }
}

export default Timer;