function typeWriter(event,phrases){
    if(event.innerHTML === ""){
        const textArray = phrases[0].split('')
        textArray.forEach((letra,i) => {
            setTimeout(()=>{
                event.innerHTML += letra
            },100*i)
        })
    }else if(event.innerHTML === phrases[0]){
        const textArray = phrases[1].split('')
        event.innerHTML = ""
        textArray.forEach((letra,i) => {
            setTimeout(()=>{
                event.innerHTML += letra
            },100*i)
        })
    }else if(event.innerHTML === phrases[1]){
        const textArray = phrases[2].split('')
        event.innerHTML = ""
        textArray.forEach((letra,i) => {
            setTimeout(()=>{
                event.innerHTML += letra
            },100*i)
        })
    }else if(event.innerHTML === phrases[2]){
        const textArray = phrases[0].split('')
        event.innerHTML = ""
        textArray.forEach((letra,i) => {
            setTimeout(()=>{
                event.innerHTML += letra
            },100*i)
        })
    }else{
        const textArray = phrases[0]
    }

}

const phraseHeader = ["FullStack Developer","Front-end Developer","Back-End Developer"]
const phraseElementDOOM = document.querySelector("#phraseEditor")
typeWriter(phraseElementDOOM,phraseHeader)
window.setInterval(()=>{
    typeWriter(phraseElementDOOM,phraseHeader)},6000)