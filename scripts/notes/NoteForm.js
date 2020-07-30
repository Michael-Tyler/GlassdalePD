import { saveNote } from "./NoteDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteTitle = document.querySelector("#note--title")
        const noteAuthor = document.querySelector("#note--author")
        const noteContent = document.querySelector("#note--content")

        // Make a new object representation of a note
        const newNote = {
                noteTitle: noteTitle.value,
                noteAuthor: noteAuthor.value,
                noteContent: noteContent.value,
                timestamp: Date.now()
            }
            // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id="note--title" placeholder="Title" />
        <input type="text" id = "note--author" placeholder = "Your name here" />
        <textarea id="note--content" placeholder="Note text here"></textarea>

        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}