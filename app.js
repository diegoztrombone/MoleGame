let count = 0
let level = 0
let min =  1200
let max = 2500


const mole = {
    node: document.querySelector("#topo1"),
    visible: false,
    id: -1,
}

const counter = document.querySelector("#counter")
const stopButton = document.querySelector("#stop").addEventListener("click", function() {
    restart(mole)
})
const startButton = document.querySelector("#start").addEventListener("click", function() {
    start(mole)
})





function getLevel (mole, level) {
    clearInterval(mole.id)
    console.log(mole.id)
    init(mole)
    if (level > (level-5)) {
         max -= 200
         min -= 50
    }
    if (level > 10) {
        max -= 400
        min -= 100
    }
}
function getRandom(min, max) {
    console.log("Horqulla de velocidad", min, max)
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function init(mole) {
    mole.id = setInterval(
        () => {
            console.info('Intervalo funcionado')
            moleVisibility(mole)
            console.log("Velocidad actual ", getRandom(min, max))
        }, getRandom(min, max)
    )
    
    setEvent(mole)
}

function moleVisibility (mole) {
    if(mole.visible) {
        console.log ("adios topo")
        mole.node.style.visibility = 'hidden'
        mole.visible = !mole.visible // false
    } else {
        console.log("hola topo")
        mole.node.style.visibility = 'visible'
        mole.visible = !mole.visible // true
    }        
}

function setEvent(mole) {
    mole.node.addEventListener('click', myEvent)
    
}

function myEvent () {
    count++
    console.log("> Click número", count)
    mole.node.style.visibility = 'hidden'
    if (count % 5 === 0) {
        level++
        getLevel(mole, level)
        console.log(">>>>LEVEL UP", level)
    }  

}

function stop (mole) {
    console.log("PARADA")
    clearInterval(mole.id)
    mole.node.removeEventListener('click', myEvent)
    mole.node.style.visibility = 'hidden'
    
}
function start (mole) {
    if (mole.id > -1) {
        restart(mole)
        

    } else init(mole)
    
}

function restart (mole) {
    stop (mole)
    count = 0
    mole.visible = false
    mole.id = -1
    level = 0
    min =  1200
    max = 2500
}




