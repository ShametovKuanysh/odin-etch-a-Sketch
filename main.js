// default settings
let num = 16
let mode = "black"

// Buttons
const btnSize = document.createElement("button")
btnSize.classList.add("btn")
btnSize.innerHTML = "Enter size"
btnSize.addEventListener("click", ev => {
    let n = prompt("Enter size between 1 and 100", 16)
    if (typeof n != "number" && n > 0 && n < 101){
        num = n
        loadDivs()
    }
})

const btnColorBlack = document.createElement("button")
btnColorBlack.classList.add("btn")
btnColorBlack.innerHTML = "black/white"
btnColorBlack.addEventListener("click", ev => {
    mode = "black"
    loadDivs()
})

const btnColor = document.createElement("button")
btnColor.classList.add("btn")
btnColor.innerHTML = "Random colors"
btnColor.addEventListener("click", ev => {
    mode = "color"
    loadDivs()
})

const bbb = document.getElementById("bbb")
bbb.style.display = "flex"
bbb.style.justifyContent = "center"
bbb.appendChild(btnSize)
bbb.appendChild(btnColorBlack)
bbb.appendChild(btnColor)


// main function
function loadDivs(){
    const container = document.getElementById("container")
    container.innerHTML = ""
    for (i = 0; i < num * num; i++){
        const div = document.createElement("div")
        div.classList.add("item")
        div.style.width = `calc(100% / ${num})`
        div.style.height = `calc(100% / ${num})`
    
        div.addEventListener("mouseover", ev => {
            if (mode == "color"){
                let curBr = div.dataset.brightness || 100
                curBr = parseInt(curBr) - 10;
                if (curBr <= 100) {
                    div.style.filter = `brightness(${curBr}%)`;
                    div.dataset.brightness = curBr;
                }
            }
            red = Math.floor(mode == "color" ? Math.random()*255 : 0)
            green = Math.floor(mode == "color" ? Math.random()*255 : 0)
            blue = Math.floor(mode == "color" ? Math.random()*255 : 0)
            div.style.backgroundColor = `rgb(${red},${green},${blue})`
            div.style.transition = ".5s"
        })
    
        
        container.appendChild(div)
    }
    
}

loadDivs()

