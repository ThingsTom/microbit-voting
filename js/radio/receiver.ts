radio.setGroup(0)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
basic.showString("R")

let a = 0
let b = 0
let ids: string[]
let votes: string[]

function isDigit(s: string) {
    for (let i = 0; i < s.length; i++) {
        if (!("0123456789".includes(s[i]))) {
            return false
        }
    }
    return true
}

radio.onReceivedString(function (receivedString: string) {
    let id = receivedString.substr(0, receivedString.length - 2)
    let vote = receivedString.substr(-1, 1)

    if (receivedString == "done") {
        for (let i = 0; i < votes.length; i++) {
            if (votes[i] == "a" || votes[i] == "A") {
                a++
            } else if (votes[i] == "b" || votes[i] == "B") {
                b++
            }
        }
        if (a == b) {
            basic.showString("DRAW")
        } else if (a > b) {
            basic.showString("A")
        } else {
            basic.showString("B")
        }
    }
    if (receivedString == "clear") {
        basic.showString("R")
        a = 0
        b = 0
    }
    if (isDigit(id) && vote.length == 1) {
        let index = ids.indexOf(id)
        if (index == -1) {
            ids.push(id)
            votes.push(vote)
        } else {
            votes[index] = vote
        }
    }
})
