import { useCriminals, getCriminals } from "./CriminalDataProvider.js"
import { CriminalsHTMLConverter } from "./CriminalHTMLConverter.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeSelected", (crimeSelectedEvent) => {
    //GOAL: filter displayed criminals by the crime that was chosen

    //Which crime was chosen?????
    const crimeThatWasSelected = crimeSelectedEvent.detail.crimeId //9 "theft"

    //getConvictions().then(() => {

    //get actual crime name. number is not enough.criminal
    const arrayOfCrimes = useConvictions()
    const foundCrimeObject = arrayOfCrimes.find(
            (crime) => { //parseInt to turn the string into a number (attempt if string was "nine" would return NaN)
                return parseInt(crimeThatWasSelected) === crime.id
            }
        ) // {id 9, name "theft"}
    console.log(foundCrimeObject)
        // Filter criminal array to only criminal that have a matching `conviction` propert value
    const allCriminals = useCriminals()

    const filteredCriminals = allCriminals.filter(
        (currentCriminalObject) => {
            return foundCrimeObject.name === currentCriminalObject.conviction
        }
    )

    render(filteredCriminals)
        //})
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