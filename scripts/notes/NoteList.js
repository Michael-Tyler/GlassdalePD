import { getNotes, useNotes } from "./NoteDataProvider.js"
import { NoteHTMLConverter } from "./NoteHTMLConverter.js"


const contentTarget = document.querySelector(".noteList")
const noteTarget = document.querySelector(".noteList")
const eventhub = document.querySelector(".container")

eventhub.addEventListener("showNotesClicked", customEvent => {
    console.log("heard notes")
    NoteList()

})

eventhub.addEventListener("noteStateChanged", () => {
    render(useNotes())
})

eventhub.addEventListener("HideNotesClicked", customEvent => {
    return noteTarget.innerHTML = ``
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