import { useCriminals, getCriminals } from "./CriminalDataProvider.js"
import { CriminalsHTMLConverter } from "./CriminalHTMLConverter.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"

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

eventHub.addEventListener("officerSelect", OfficerSelectedEvent => {
    // How can you access the officer name that was selected by the user?
    const OfficerName = OfficerSelectedEvent.name
        // How can you get the criminals that were arrested by that officer?
    const criminals = useCriminals()
    const foundOfficerObject = criminals.find(
        criminalObject => {
            if (criminalObject.arrestingOfficer === officerName) {
                return OfficerName
            }
        }
    )
    const filteredOfficers = useCriminals().filter(
            (CurrentOfficerObject) => {
                return foundOfficerObject.name === CurrentOfficerObject.name

            }
        )
        //render(filteredOfficers)
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
    `

}



export const CriminalsList = () => {

    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            render(criminalArray)
        })
}