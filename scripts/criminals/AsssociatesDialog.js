import { useCriminals } from "./CriminalDataProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("associatesClicked", customEvent => {
            const contentTarget = document.querySelector(".associatesDialog")
            const criminalId = customEvent.detail.chosenCriminal
            const targetCriminal = useCriminals().find(
                (criminal) => criminal.id === parseInt(criminalId)
            )

            contentTarget.innerHTML = `${
        targetCriminal.known_associates.map(associate => {
            return `
            <h4>${associate.name}</h4>
            <div>${associate.alibi}</div>
            `
        }).join("")
    }
    <button id="close-dialog">Close</button>`
    contentTarget.showModal()
})

eventHub.addEventListener("click", clickEvent =>{
    if (clickEvent.target.id === ("close-dialog")){
        const contentTarget = document.querySelector(".associatesDialog")
        contentTarget.close()
    }
})




export const AssociatesDialog = () => {
    return `
    <dialog class="associatesDialog">
    
    </dialog>
    `
}