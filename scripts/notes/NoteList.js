import { getNotes, useNotes } from "./NoteDataProvider.js"
import { NoteHTMLConverter } from "./NoteHTMLConverter.js"

const contentTarget = document.querySelector(".noteList")
const newTarget = document.querySelector(".noteList")
const eventhub = document.querySelector(".container")

eventhub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

eventhub.addEventListener("HideNotesClicked", customEvent => {
    return newTarget.innerHTML = ``
})

export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map(
        (currentNote) => {
            return NoteHTMLConverter(currentNote)
        }
    ).join("")
    contentTarget.innerHTML = allNotesConvertedToStrings
}