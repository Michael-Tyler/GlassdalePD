const targetContent = document.querySelector(".noteHideListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === 'HideNotes') {
        const customEvent = new CustomEvent("HideNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const HideNoteButton = () => {
    targetContent.innerHTML += "<button id='HideNotes'>Hide Notes</button>"
}