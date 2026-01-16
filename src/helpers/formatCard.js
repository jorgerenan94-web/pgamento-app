export function formatCardNumber(number){
    return number.replace(/(.{4})/g, "$1 ").trim()
}