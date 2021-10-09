/* FUNÇÃO DE SCRIPT NO HEADER*/

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


/*ALTERNATE BODY SKILLS */
const skills = document.querySelectorAll(".skillsHeader")

skills.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        const bodySkills = element.parentNode.childNodes[3];
        const arrow = element.childNodes[5].childNodes[3];
        if(bodySkills.classList.contains("closeSkills")){
            arrow.classList.add('arrowTransform')
            bodySkills.classList.remove('closeSkills')
        }else{
            arrow.classList.remove("arrowTransform")
            bodySkills.classList.add('closeSkills')
        }
    })
})


/*QUALIFICATIONS*/
const worksSection = document.querySelector("#workController")
const graduationSection = document.querySelector("#educationController")
const containerQualifications = document.querySelectorAll(".containerQualification")
worksSection.addEventListener("click",(e)=>{
    if(worksSection.classList.contains("activeControllerQualification")===false){
        graduationSection.classList.remove("activeControllerQualification")
        worksSection.classList.add("activeControllerQualification")
        containerQualifications[0].classList.remove("dataActive")
        containerQualifications[1].classList.add("dataActive")
    }
})
graduationSection.addEventListener("click",(e)=>{
    if(graduationSection.classList.contains("activeControllerQualification")===false){
        worksSection.classList.remove("activeControllerQualification")
        graduationSection.classList.add("activeControllerQualification")
        containerQualifications[1].classList.remove("dataActive")
        containerQualifications[0].classList.add("dataActive")
    }
})