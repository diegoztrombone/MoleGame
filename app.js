let count = 0
let level = 0
let min =  500
let max = 3000
let fail = 0
let flag = false

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
const levelCounter = document.querySelector("#levelCounter")
const stopButton = document.querySelector("#stop").addEventListener("click", function() {
    stop(mole)
})
const startButton = document.querySelector("#start").addEventListener("click", function() {
    start(mole)
})

const failScreen = document.querySelector("#topoWrapper")





function getLevel (mole, level) {
    
    if (level > (level-5)) {
        console.log("nivel subiendo")
         max -= 100
         min -= 75
    }
    if (min <= 150 || max <= 500) {
        max = 500
        min = 150
    }

    
}


function init(mole) { 
    function getRandom(min, max) {
        console.log("Horqulla de velocidad", min, max)
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    console.log(">>>ID ANTES: ", mole.id, mole)
    mole.id = setInterval(
        () => {
            moleVisibility(mole)
            console.log(">>>>ID DURANTE: ", mole.id, mole)  
            console.log("Velocidad:",getRandom(min, max))
            flag = false 
        }, getRandom(min, max)
    
    
    
    )}

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

function setEvent() {
    
    
    mole[0].node.addEventListener('click', function() {myEvent(0)})
    mole[1].node.addEventListener('click', function() {myEvent(1)})
    mole[2].node.addEventListener('click', function() {myEvent(2)})
    mole[3].node.addEventListener('click', function() {myEvent(3)})

    failScreen.addEventListener('click', fault)
    
    
}


function myEvent (a) {
    mole[a].node.style.visibility = "hidden"
    countMeter()
    
    
}

function countMeter () {
    count++
    counter.innerHTML = `<p>Número de topos enviados a la luna: ${count}</p>`
    console.log("> Click número", count)
    flag = true
    
    if (count % 5 === 0) {
        level++
        getLevel(mole, level)
        levelCounter.innerHTML = `<p>Estás en el nivel ${level}</p>`
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

function start (mole) {
    
    for (i=0; i < mole.length; i++ ) {
        if (mole.id > -1) {
            stop(mole)
        } else
        init(mole[i]) 
    }   
}

function reAssing (mole) {
    mole[0].node = document.querySelector("#topo1")
    mole[1].node = document.querySelector("#topo2")
    mole[2].node = document.querySelector("#topo3")
    mole[3].node = document.querySelector("#topo4")
}
function stop (a) {
    console.log(">>>>>>>STOP")
    for (i=0; i < a.length; i++) {
        console.log("ID DE LA PARADA:", a[i].id)
        clearInterval(a[i].id)
        console.log("ID DESPUES DEL CLEAR:", a[i].id)
        a[i].node.style.visibility = "hidden"
        a[i].visible = false
        delete a[i].node
        reAssing(a)
    }
failScreen.removeEventListener('click', function() {fault(mole)})
min =  1200
max = 2500 
level = 0 
flag = false
count = 0
fail = 0
failCounter.innerHTML = `<p>Número de fallos: ${fail}</p>`
counter.innerHTML = `<p>Número de topos enviados a la luna: ${count}</p>`
levelCounter.innerHTML = `<p>Estás en el nivel 0</p>`
}
setEvent()





