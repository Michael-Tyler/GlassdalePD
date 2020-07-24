import { CriminalsList } from "./criminals/criminalList.js"
import { OfficersList } from "./officers/officerList.js"
import { ConvictionSelect } from "./convictions/ConvictionsSelect.js";

ConvictionSelect()
OfficersList()
CriminalsList()
    // import { getCriminals, useCriminals } from "./criminals/criminalDataProvider.js";

// getCriminals().then(() => {
//     let criminals = useCriminals()
//     console.log(criminals)
// })