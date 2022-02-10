// caeser cipher, each letter is moved left over three 

function encipher(string) {
    let safeStr = string.toLowerCase()
    let abc = ",abcdefghijklmnopqrstuvwxyz "
    let rtnStr = ""

    for (let i = 0; i < safeStr.length; i++) {
        let currentLetter = safeStr[i]
        console.log(currentLetter)
        let letterIndex = abc.indexOf(currentLetter)
        console.log(letterIndex)
        let rtnLetter
        if (letterIndex + 3 > 26) {
            rtnLetter = abc[(letterIndex + 3) - 27]
        } else {
            rtnLetter = abc[letterIndex + 3]
        }
        console.log(rtnLetter)
        rtnStr += rtnLetter
        
    }

    console.log(`answer: ${rtnStr}`)
    return rtnStr
}

encipher("I love cryptography")

function decipher(string) {
    let safeStr = string.toLowerCase()
    let abc = "abcdefghijklmnopqrstuvwxyz "
    let rtnStr = ""

    for (let i = 0; i < safeStr.length; i++) {
        let currentLetter = safeStr[i]
        console.log(currentLetter)
        let letterIndex = abc.indexOf(currentLetter)
        console.log(letterIndex)
        let rtnLetter
        if (letterIndex - 3 < 0) {
            rtnLetter = abc[(letterIndex - 3) + 27]
        } else {
            rtnLetter = abc[letterIndex - 3]
        }
        console.log(rtnLetter)
        rtnStr += rtnLetter
    }

    console.log(`answer: ${rtnStr}`)
    return rtnStr
}

decipher(encipher("I love cryptography"))