import { useEffect } from "react"
import Timer from "../model/Timer"

const myTimer = new Timer()

export default () => {
    useEffect(() => {
        // Update the 'Seconds passed: X' text every second.
        setInterval(() => {
            myTimer.increase()
        }, 1000)
    })

    return null;
}