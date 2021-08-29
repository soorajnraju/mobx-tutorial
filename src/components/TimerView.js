import { observer } from "mobx-react"

import Timer from "../model/Timer"

const myTimer = new Timer()

// Build a "user interface" that uses the observable state.
const TimerView = observer(() => (
    <button onClick={() => myTimer.reset()}>Seconds passed: {myTimer.secondsPassed}</button>
))

export default TimerView;