let count = 0
let level = 0
let min =  1000
let max = 4000
const mole1 = document.querySelector("#topo1")
const counter = document.querySelector("#counter")
const button = document.querySelector("#myBtn")



const mole = {
    node: mole1,
    visible: false,
    id: -1,
}

// function getLevel (level) {
//     if (level > (level-1)) {
//         return max -= 300
//     }
//     if (level > 5) {
//         max -= 200
//         min -= 50
//     }
// }
// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

function init(mole) {
    mole.id = setInterval(
        () => {
            console.info('Intervalo funcionado')
            moleVisibility(mole)
        }, 1000
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
        // getLevel(level)
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
        init(mole)

    } else init(mole)
    
}

function restart (mole) {
    stop (mole)
    count = 0
    mole.visible = false
    mole.id = -1
    level = 0
}




