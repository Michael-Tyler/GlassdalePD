import { CriminalsList } from "./criminals/CriminalList.js"
import { OfficersList } from "./officers/OfficerList.js"
import { ConvictionSelect } from "./convictions/ConvictionsSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { saveNote } from "./notes/NoteDataProvider.js";
import { ShowNoteButton } from "./notes/ShowNotesButton.js"
import "./notes/NoteList.js"
import { HideNoteButton } from "./notes/HIdeNotesButton.js"
NoteForm()
CriminalsList()
ConvictionSelect()
    //OfficersList()
OfficerSelect()
ShowNoteButton()
HideNoteButton()