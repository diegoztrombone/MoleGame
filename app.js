let count = 0
let level = 0
let min =  1500
let max = 3000
let fail = 0
let flag = false


// const mole = {
//     node: document.querySelector("#topo1"),
//     visible: false,
//     id: -1,
// }

const mole = [
    {
        node: document.querySelector("#topo1"),
        visible: false,
        id: -1,
    },
    {
        node: document.querySelector("#topo2"),
        visible: false,
        id: -1,
    },
    {
        node: document.querySelector("#topo3"),
        visible: false,
        id: -1,
    },
    {
        node: document.querySelector("#topo4"),
        visible: false,
        id: -1,
    }
]





const counter = document.querySelector("#counter")
const failCounter = document.querySelector("#failCounter")
const stopButton = document.querySelector("#stop").addEventListener("click", function() {
    restart(mole)
})
const startButton = document.querySelector("#start").addEventListener("click", function() {
    start(mole)
})

const failScreen = document.querySelector("#topoWrapper")





function getLevel (mole, level) {
    clearInterval(mole.id)
    
    init(mole)
    if (level > (level-5)) {
        console.log("nivel subiendo")
         max -= 75
         min -= 75
    }
    if (level > 10) {
        console.log("nivel plus")
        max -= 200
        min -= 200
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
            flag = false 
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
    
    
    mole.node.addEventListener('click', function() {
        myEvent(mole)
    })
    
    failScreen.addEventListener('click', fault)
    
    
}


function myEvent (mole) {
    flag = true
    count++
    console.log("> Click número", count)
    mole.node.style.visibility = 'hidden'
    counter.innerHTML = `<p>Número de topos enviados a la luna: ${count}</p>`
    if (count % 5 === 0) {
        level++
        getLevel(mole, level)
        console.log(">>>>LEVEL UP", level)
    }

}
function fault() {
    if (flag === true) {
        console.log("no es fallo")
    } else {
        fail ++
        failCounter.innerHTML = `<p>Número de fallos: ${fail}</p>`
        console.log("fallos totales: ", fail)
        flag = false
    }
    
    
}

function stop (mole) {
    
    console.log("PARADA")
    clearInterval(mole.id)
    mole.node.removeEventListener('click', function() {myEvent(mole)}  )
    failScreen.removeEventListener('click', function() {fault(mole)})
    delete mole.node
    

    // mole.node.style.visibility = 'hidden'
    
}
function start (mole) {
    mole.forEach((_, index) => {
        if (mole[index].id > -1) {
            restart(mole[index])
            
    
        } else {
            
            init(mole[index])
        }
    })
  
}

function restart (mole) {
    mole.forEach((_, index) => {
    stop (mole[index])
    count = 0
    fail = 0
    mole[index].visible = false
    flag = false
    mole[index].id = -1
    level = 0
    min =  1200
    max = 2500
    })
    
}





