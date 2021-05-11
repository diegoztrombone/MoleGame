let count = 0
const mole1 = document.querySelector("#topo1")
const mole2 = document.querySelector("#topo2")
const counter = document.querySelector("#counter")

const moleArr = [mole1, mole2]

let moleInterval = setInterval(() => {
    moleArr.forEach((_, index) => {
        moleVisibility(moleArr[index])
    })
    
}, 2000)


function moleInit () {
    // let i = Math.floor(Math.random()*moleArr.length)
    moleArr.forEach((_, index) => {
        moleArr[index].style.visibility="visible"
        moleEvent(moleArr[index]) 
        
    }
    )          
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
                    
                    /*moleInterval = setInterval(() => {
                        moleArr.forEach((_, index) => {
                            moleVisibility(moleArr[index])
                        })
                        
                    }, 2000) */
                      
                }}, 5000)
        }             
    })
    
}

moleInit()


function stopInterval () {
    console.log("parar")
    clearInterval(moleInterval)
    
}










// const mole2 = document.querySelector("#topo2")
// const moleArr = [mole1, mole2]
/*

*/









/*
mole1.addEventListener("click", (event) => {
    if (event) {
        console.log("HOlA")
        mole1.style.visibility="hidden"
    }
} )

mole2.addEventListener("click", (event) => {
    if (event) {
        console.log("HOlA")
        mole2.style.visibility="hidden"
    }
} )

*/



// EJEMPLO 2
/*
mole2.addEventListener("click", (event) => {
    if (event) {
        console.log("HOlA")
        mole2.remove(1)
    }
} )

mole1.addEventListener("click", (event) => {
    if (event) {
        console.log("HOlA")
        mole1.remove(1)

*/


/*
function moleHidde (event) {
    if (event) {
        console.log("hola")
      mole.remove(1)
    }


}

*/