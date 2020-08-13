import { saveNote } from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteText = document.querySelector("#note--Text")
        const noteAuthor = document.querySelector("#note--author")
        const noteCriminal = document.querySelector("#criminalSelect")

        const criminalId = parseInt(noteCriminal.value)
        const author = noteAuthor.value
        const content = noteText.value

        if (criminalId !== 0 && author !== "" && content !== "") {
            // Make a new object representation of a note
            const newNote = {
                    noteText: noteText.value,
                    noteAuthor: noteAuthor.value,
                    criminalId: parseInt(noteCriminal.value),
                    timestamp: Date.now()
                }
                // Change API state and application state
            saveNote(newNote)
        } else {
            window.alert("Please fill out entire form")
        }
    }
})

const render = (criminalCollection) => {

        contentTarget.innerHTML = `
    <select class="dropdown" id="criminalSelect">
    <option value ="0">Please Select a Criminal...</option>
    ${
        criminalCollection.map(
            criminalObject => {
                return `<option value="${criminalObject.id}">${criminalObject.name}</option>`
            }
        ).join("")
    }
        <input type="text" id ="note--author" placeholder = "Your name here" />
        <textarea id="note--Text" placeholder="Note text here"></textarea>

        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    getCriminals().then(() =>{
        render(useCriminals())
    })
        
}