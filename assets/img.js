const images = [{"Me & Bro": "images/bro.jpg", "width": "default", "height": 400}, {"When I was little": "images/snoozin.jpg", "width": 300, "height": 250}, {"My House": "images/house.jpg", "width": "default", "height": 400}]

function checkIfExists(position) {
    
    if (document.getElementById("img " + position)) {
        return true;
    } else {return false;}
}

function changeImg(position) {
    let allImgs = document.getElementsByClassName("images")[0].children
    let counterThing = document.getElementById("counter")

    for (const [index, element] of Object.entries(allImgs)) {
        
        if (element.id.includes("img")) {
            
            if (element.style.display === "") {
                
                element.style.display = "none"
                
            } else {
                if (element.id == "img " + position) {
                    
                    element.style.display = ""
                    
                }
            
            }
        } else if (element.id.includes("controls")) {
            
            if (element.style.display === "") {
                
                element.style.display = "none"
                
            } else {
                if (element.id == "controls " + position) {
                    
                    element.style.display = ""
                    
                }
            }
        }
    }

    counterThing.textContent = (position + 1) + "/" + images.length
}

function firstLoad() {
    
    for (let [index, obj] of Object.entries(images)) {
        for (const [key, value] of Object.entries(obj)) {
            
            if (index == 0) {
                if (key == "width" || key == "height") {
                    continue;
                }
                const whereToAdd = document.getElementById("addhere")
                
                let counterMsg = document.getElementById("counter")

                let surroundingDiv = document.createElement("div")
                surroundingDiv.id = "img " + index

                let title = document.createElement("h2")
                let img = document.createElement("img")
                title.textContent = key;
                title.style.marginTop = "0";
                img.src = value;
                if (obj.width != "default") {
                    img.width = obj.width;
                }
                img.height = obj.height;
            
                surroundingDiv.appendChild(title)
                surroundingDiv.appendChild(img)

                let divButtons = document.createElement("div")
                divButtons.id = "controls " + index
                divButtons.className = "controls"

                let prev = document.createElement("button")
                let next = document.createElement("button")
                
                prev.textContent = "Previous Image"
                next.textContent = "Next Image"

                index = Number(index)
                
                if ((index - 1) < 0 && !(checkIfExists(index - 1))) {
                    prev.onclick = function() {alert("That image doesn't exist!");}
                } else {
                    prev.onclick = function() {changeImg((index - 1))}
                }
                
                
                if ((index + 1) >= images.length) {
                    next.onclick = function() {alert("That image doesn't exist!");}
                } else {
                    next.onclick = function() {changeImg((index + 1))}
                }

                divButtons.appendChild(prev)
                divButtons.appendChild(next)

                whereToAdd.appendChild(surroundingDiv)
                surroundingDiv.after(divButtons)
                counterMsg.textContent = "1/" + images.length
                
                
                
                

            } else {
                if (key == "width" || key == "height") {
                    continue;
                }
                const whereToAdd = document.getElementById("addhere")
    
                let surroundingDiv = document.createElement("div")
                surroundingDiv.id = "img " + index
                surroundingDiv.style = "display:none;"
                let title = document.createElement("h2")
                let img = document.createElement("img")
                title.textContent = key;
                title.style.marginTop = "0";
                img.src = value
                if (obj.width != "default") {
                    img.width = obj.width;
                }
                img.height = obj.height;
                
                surroundingDiv.appendChild(title)
                surroundingDiv.appendChild(img)

                let divButtons = document.createElement("div")
                divButtons.className = "controls"
                divButtons.id = "controls " + index
                divButtons.style = "display:none;"

                let prev = document.createElement("button")
                let next = document.createElement("button")

                prev.textContent = "Previous Image"
                next.textContent = "Next Image"

                index = Number(index)
                
                if ((index - 1) < 0 && !(checkIfExists(index - 1))) {
                    prev.onclick = function() {alert("That image doesn't exist!");}
                } else {
                    prev.onclick = function() {changeImg((index - 1))}
                }
                
                
                if ((index + 1) >= images.length) {
                    next.onclick = function() {alert("That image doesn't exist!");}
                } else {
                    next.onclick = function() {changeImg((index + 1))}
                }

                divButtons.appendChild(prev)
                divButtons.appendChild(next)

                whereToAdd.appendChild(surroundingDiv)
                surroundingDiv.after(divButtons)

                
                
                
                
            }
        }
        
        

    }
}

document.addEventListener("DOMContentLoaded", firstLoad);