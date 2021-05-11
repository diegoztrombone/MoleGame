let count = 0
const mole1 = document.querySelector("#topo1")
const counter = document.querySelector("#counter")

let moleInterval = setInterval(
    () => {
        moleVisibility(mole1)
    }, 2000
)

function moleInit (node) {
    node.style.visibility="visible"
    moleEvent(node)                 
}

function moleVisibility (node) {
    
    if (node.style.visibility === "visible") {
        console.log ("adios topo")
        return node.style.visibility = "hidden"
    }
    if (node.style.visibility === "hidden") {
        console.log("hola topo")
        return node.style.visibility = "visible"
    }        
}
function moleEvent (node) {
    node.addEventListener("click", (event) => {
        if (event) {
            node.style.visibility="hidden"
            console.log("topo a la luna")
            count++
            counter.innerHTML=`<p>Número de topos enviados a la luna: ${count}</p>` 
            stopInterval()   
            setTimeout(() => {
                node.style.visibility="visible"
                console.log("aparece topo")
                if (node.style.visibility === "visible") {
                    console.log("vuelve a empezar el intervalo")
                    moleInterval = setInterval(() => {
                        moleVisibility(mole1)    
                    }, 2000) 
                      
                }}, 5000)
        }             
    })
    
}

function stopInterval () {
    console.log("parar")
    clearInterval(moleInterval)
    
}

moleInit(mole1)