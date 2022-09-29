function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 1000
let result = ""
for(let i = 0; i < STAR_COUNT; i++){
    result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`
}
console.log(result.substring(0, result.length - 1))