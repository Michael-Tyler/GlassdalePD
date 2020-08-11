import { CriminalsList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionsSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js"
import "./notes/NoteList.js"
import { HideNoteButton } from "./notes/HIdeNotesButton.js"
import { WitnessButton } from "./Witnesses/WitnessButton.js"
import { getWitnesses, useWitnesses } from "./Witnesses/WitnessDataProvider.js"
import "./Witnesses/WitnessList.js"

// getWitnesses().then(() => {
//     const witnessArray = useWitnesses()
//     console.log(witnessArray)
// })
WitnessButton()
NoteForm()
CriminalsList()
ConvictionSelect()
OfficerSelect()
ShowNoteButton()
HideNoteButton()