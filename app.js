let count = 0
const mole1 = document.querySelector("#topo1")
const counter = document.querySelector("#counter")

const mole = {
    node: mole1,
    visible: false,
    id: -1,
}

function getRandom() {
    return Math.floor(Math.random() * 2000)
}

function init(mole) {
    mole.id = setInterval(
        () => {
            console.info('> id: ', mole.id)
            moleVisibility(mole)
        }, getRandom()
    )
    setEvent(mole)
}


// function moleInit (node) {
//     node.style.visibility="visible"
//     moleEvent(node)                 
// }

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
        console.info('> Hola!')
    })
}

init(mole)

// function moleEvent (node) {
//     node.addEventListener("click", (event) => {
//         if (event) {
//             node.style.visibility="hidden"
//             console.log("topo a la luna")
//             count++
//             counter.innerHTML=`<p>Número de topos enviados a la luna: ${count}</p>` 
//             stopInterval(moleInterval)   
//             setTimeout(() => {
//                 node.style.visibility="visible"
//                 console.log("aparece topo")
//                 if (node.style.visibility === "visible") {
//                     console.log("vuelve a empezar el intervalo")
//                     moleInterval = setInterval(() => {
//                         moleVisibility(mole1)    
//                     }, 2000) 
                      
//                 }}, 5000)
//         }             
//     })
    
// }

// function stopInterval (id) {
//     console.log("parar")
//     clearInterval(id)
// }

// moleInit(mole1)