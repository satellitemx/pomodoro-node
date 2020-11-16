const UITimer = document.querySelector(".timer")
const UINotice = document.querySelector(".notice")

const formatTimer = remaining => {
    const minutes = Math.floor(remaining / 60).toString().padStart(2, "0")
    const seconds = (remaining % 60).toString().padStart(2, "0")
    return `${minutes}:${seconds}`
}

const updateInterval = setInterval(() => {
    UITimer.innerText = formatTimer(timer)
    switch (state) {
        case TimerState.COUNTING: UINotice.innerText = ""; break
        case TimerState.PAUSED: UINotice.innerHTML = "CLICK ⬆ TO START"; break
        default: break
    }
    if (timer === 0) {
        const timesUpNotification = new Notification("Times Up!", {
            body: "Congratulations and please have a break."
        })
        timer = 25 * 60
        state = TimerState.PAUSED
    }
}, 1000)

const timerInterval = setInterval(() => {
    if (state === TimerState.COUNTING) {
        timer -= 1
    }
}, 1000)

const TimerState = {
    PAUSED: "paused",
    COUNTING: "counting"
}

let timer = 25 * 60 // seconds
let state = TimerState.PAUSED

UITimer.onclick = () => {
    state = TimerState.COUNTING
}

navigator.permissions.query({
    name: "notifications"
})