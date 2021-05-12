let count = 0
const mole1 = document.querySelector("#topo1")
const mole2 = document.querySelector("#topo2")
const mole3 = document.querySelector("#topo3")
const mole4 = document.querySelector("#topo4")
const mole5 = document.querySelector("#topo5")
const mole6 = document.querySelector("#topo6")
const counter = document.querySelector("#counter")

mole1.style.visibility = "hidden"
mole2.style.visibility = "hidden"
mole3.style.visibility = "hidden"
mole4.style.visibility = "hidden"
mole5.style.visibility = "hidden"
mole6.style.visibility = "hidden"

let levelAmount = 3000

let level = 1

const mole = [
{
    node: mole1,
    visible: false,
    id: -1,
    
},
{
    node: mole2,
    visible: false,
    id: -1,
    
},
{
    node: mole3,
    visible: false,
    id: -1,
    
},
{
    node: mole4,
    visible: false,
    id: -1,
    
},
{
    node: mole5,
    visible: false,
    id: -1,
    
},
{
    node: mole6,
    visible: false,
    id: -1,
    
}
]

function getRandom() {
    let m = Math.floor(Math.random() * levelAmount)
    return m
}

function init(mole) {
    mole.forEach((_, index) => {
        mole[index].id = setInterval(
            () => {
                console.info('> id: ', mole[index].id)
                moleVisibility(mole[index])
            }, getRandom()
        )
        setEvent(mole[index])    
    });
    
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
        console.info('> Topo mandado a la luna!')
        mole.node.style.visibility = "hidden"
        count++
        counter.innerHTML=`<p>Número de topos enviados a la luna: ${count}</p>` 
        if (count === 10) {
            moleStop(mole)
            console.log("nuevo nivel")   
        }
    })
}

function moleStop(mole) {
    for (item of mole.id) {
        console.log("hola se acabo")
        clearInterval(item)
    }
}




const button = document.querySelector("#button").addEventListener("click", () => init(mole))


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