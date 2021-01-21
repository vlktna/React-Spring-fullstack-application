export function getCurrentTime() {
    return `${getDate()} ${getTime()}`
}
function getTime() {
    let date = new Date()
    return `${validateTime(date.getHours())}:${validateTime(date.getMinutes())}`
}

function validateTime(time) {
    if (String(time).length < 2) {
        console.log(String(time).length)
        return `0${time}`
    } else return time
}

function getDate() {
    let date = new Date()
    return `${date.getDate()}-${getMonthName(date)}-${date.getFullYear()}`
}

function getMonthName(date) {
    let days = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP',
        'OCT', 'NOV', 'DEC'];
    return days[date.getMonth()];
}

