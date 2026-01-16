export function maskedNumber(number = "0000000000000000"){
    const cleaned = number.replace(/\s+/g, "")

    return `•••• •••• •••• ${cleaned.slice(-4)}`
}