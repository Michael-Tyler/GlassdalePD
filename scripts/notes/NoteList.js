import { getNotes, useNotes } from "./NoteDataProvider.js"
import { useCriminals } from "../criminals/CriminalDataProvider.js"
import { NoteHTMLConverter } from "./NoteHTMLConverter.js"


const contentTarget = document.querySelector(".noteList")
const noteTarget = document.querySelector(".noteList")
const eventhub = document.querySelector(".container")

eventhub.addEventListener("showNotesClicked", customEvent => {
    NoteList()

})

eventhub.addEventListener("noteStateChanged", () => {
    const notes = useNotes()
    const criminals = useCriminals()
    render(notes, criminals)
})

eventhub.addEventListener("HideNotesClicked", customEvent => {
    return noteTarget.innerHTML = ``
})

export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            const allCriminals = useCriminals()

            render(allNotes, allCriminals)
        })
}

const render = (notes, criminals) => {
    contentTarget.innerHTML = notes.map(note => {
        // Find the related criminal

        const relatedCriminal = criminals.find(criminal => criminal.id === note.criminalId)
        return NoteHTMLConverter(note, relatedCriminal)

    })
}

// const render = (noteArray) => {
//     const allNotesConvertedToStrings = noteArray.map(
//         (currentNote) => {
//             return NoteHTMLConverter(currentNote)
//         }
//     ).join("")
//     contentTarget.innerHTML = allNotesConvertedToStrings
// }