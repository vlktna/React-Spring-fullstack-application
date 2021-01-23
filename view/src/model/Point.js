export function createTargetDot(x, y, r) {
    const plot = document.getElementById("plot")
    const target = document.createElementNS("http://www.w3.org/2000/svg", "circle")

    target.setAttribute("cx", calculateX(x, r))
    target.setAttribute("cy", calculateY(y, r))
    target.setAttribute("valueX", x)
    target.setAttribute("valueY", y)
    target.setAttribute("valueR", r)
    target.setAttribute("r", "7")
    target.setAttribute("fill", calculateColor(calculateResult(x, y, r)))
    target.setAttribute("style", "visibility: visible")
    target.setAttribute("class", "target-dot");
    plot.appendChild(target)
}

export function updateTargetDot(target, r){
    const x = target.getAttribute("valueX")
    const y = target.getAttribute("valueY")
    target.parentNode.removeChild(target);
    createTargetDot(x, y, r)
}

export function deleteTargetDot(target){
    target.parentNode.removeChild(target);
}

function calculateX(x, r) {
    return String(300.0 + x * 250.0 / r)
}

function calculateY(y, r) {
    return String(300.0 - y * 250.0 / r)
}

function calculateColor(result) {
    return result ? "#9fdaa8" : "#f19ea6"
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
    return (y <= (Number(x) + Number(r))) && (x <= 0) && (y >= 0)
}
