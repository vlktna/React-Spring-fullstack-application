export function createTargetDot(x, y, r) {
    const target = document.getElementById("target-dot")
    target.setAttribute("cx", calculateX(x, r))
    target.setAttribute("cy", calculateY(y, r))
    target.setAttribute("r", "10")
    target.setAttribute('fill', calculateColor(calculateResult(x, y, r)))
}

function calculateX(x, r) {
    return String(300.0 + x * 250.0 / r)
}

function calculateY(y, r) {
    return String(300.0 - y * 250.0 / r)
}

// let target = document.getElementById('target-dot')
// target.setAttribute('r', '10')
// target.setAttribute('cx', String(calcX))
// target.setAttribute('cy', String(calcY))
// target.setAttribute('fill', this.color)

export function calculateColor(result) {
    return result ? '#9fdaa8' : '#f19ea6'
}

export function calculateResult(x, y, r) {
    return (checkRectangle(x, y, r) || checkQuarterCircle(x, y, r) || checkTriangle(x, y, r))
}

function checkRectangle(x, y, r) {
    return (0 >= x) && (0 >= y) && (-r <= x) && (-r <= y)

}

function checkQuarterCircle(x, y, r) {
    return (x * x + y * y <= r * r / 4) && (x >= 0) && (y >= 0)
}

function checkTriangle(x, y, r) {
    return (y <= Number(x + r)) && (x <= 0) && (y >= 0)
}

//
// static update() {
//     if (this.result) {
//         this.r = Number(document.getElementById('form:valueR').value)
//         this.calculateResult()
//         this.calculateColor()
//         this.calculateCoordinates()
//     }
// }
//

