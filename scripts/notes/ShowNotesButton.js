const targetContent = document.querySelector(".noteListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "ShowNotes") {
        const customEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowNoteButton = () => {
    targetContent.innerHTML += "<button id='ShowNotes'>Show Notes</button>"
}