import { useCriminals, getCriminals } from "./CriminalDataProvider.js"
import { CriminalsHTMLConverter } from "./CriminalHTMLConverter.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { AssociatesDialog } from "./AsssociatesDialog.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeSelected", (crimeSelectedEvent) => {
    //GOAL: filter displayed criminals by the crime that was chosen
    //Which crime was chosen?????
    const crimeThatWasSelected = crimeSelectedEvent.detail.crimeId
        //get actual crime name. number is not enough.
    const foundCrimeObject = useConvictions().find(
            (crime) => { //parseInt to turn the string into a number (attempt if string was "nine" would return NaN)
                return parseInt(crimeThatWasSelected) === crime.id
            }
        ) // {id 9, name "theft"}
        // Filter criminal array to only criminal that have a matching `conviction` propert value

    const filteredCriminals = useCriminals().filter(
        (currentCriminalObject) => {
            return foundCrimeObject.name === currentCriminalObject.conviction
        }
    )

    render(filteredCriminals)

})

eventHub.addEventListener("officerSelected", OfficerSelectedEvent => {
    // GOAL filter display of criminals by the arresting officer that was chosen

    //which officer was chosen
    const officerChosen = OfficerSelectedEvent.detail.officerName
    const filteredByOfficer = useCriminals().filter(
        (currentCriminal) => {
            return currentCriminal.arrestingOfficer === officerChosen
        }
    )
    render(filteredByOfficer)
        // filter criminal array based on whats chosen
})

const render = (arrayOfCriminals) => {
    let CriminalsHTMLRepresentation = ""

    arrayOfCriminals.forEach(criminal => {
        CriminalsHTMLRepresentation += CriminalsHTMLConverter(criminal)
    })

    contentTarget.innerHTML = `
    <h2 class= "criminalTitle">Glassdale Convicted Criminals</h2>
    <article class="criminalList">
        ${ CriminalsHTMLRepresentation }
    </article>
        ${AssociatesDialog()}
    `

}



export const CriminalsList = () => {

    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            render(criminalArray)
        })
}