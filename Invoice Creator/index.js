const washBtn = document.getElementById("car-wash")
const mowBtn = document.getElementById("mow-lawn")
const pullBtn = document.getElementById("pull-weeds")
const serviceContainer = document.getElementById("selected-services")
const removeWash = document.getElementById("remove-wash")
const removeMow = document.getElementById("remove-mow")
const removePull = document.getElementById("remove-pull")
const sumEl = document.getElementById("sum")
const notesEl = document.getElementById("notes")
const clearBtn = document.getElementById("clear-btn")

let wash = true
let mow = true
let pull = true
let serviceArr = []
let costArr = []
let cost = 0

washBtn.addEventListener("click", function() {
    if (wash) {
        addEl(0, wash, "Wash Car", 10, "shift")}
        wash = false
})

mowBtn.addEventListener("click", function() {
    if (mow) 
    {addEl(1, mow, "Mow Lawn", 20, "splice")}
    mow = false
})

pullBtn.addEventListener("click", function() {
    if (pull) 
    {addEl(2, pull, "Pull Weeds", 30, "pop")}
    pull = false
})

clearBtn.addEventListener("click", function() {
    cost = 0
    serviceArr = []
    wash = true
    mow = true
    pull = true
    render()
})

function addEl(position, service, serviceDesc, price, method) {
        service = `<div class="service">
                    <div class="service-left">
                        <p>${serviceDesc}</p>
                        <button class="remove-btn" onclick="${method}()">Remove</button>
                    </div>
                    <p>$${price}</p>
                </div>`
        if (pull === false && wash === true) {
            serviceArr.unshift(service)
            } else {
                serviceArr.splice(position, 0, service)
            }
        cost += price
        render()
}

function render() {
    let display = ""
    for (let i = 0; i < serviceArr.length; i++) {
        display += serviceArr[i] 
    }
    notesEl.innerHTML = `
                            <h5>NOTES</h5>
                            <p>We accept cash, credit card, or PayPal</p>
                        `
    sumEl.textContent = cost
    serviceContainer.innerHTML = display
}

function shift() {
    serviceArr.shift()
    wash = true
    cost -= 10
    render()
}

function pop() {
    serviceArr.pop()
    pull = true
    cost -= 30
    render()
}

function splice() {
    if (pull === true) {
        serviceArr.pop()
    } else if (wash === false) {
        serviceArr.splice(1, 1)
    } else {
        serviceArr.shift()
    }
    mow = true
    cost -= 20
    render()
}