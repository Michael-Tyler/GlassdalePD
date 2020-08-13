import { getWitnesses, useWitnesses } from "./WitnessDataProvider.js"
import { WitnessHTMLConverter } from "./WitnessHTMLConverter.js"


const contentTarget = document.querySelector(".witnessContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("witnessButtonClicked", customEvent => {
    witnessList()
})

const witnessList = () => {
    getWitnesses()
        .then(() => {
            const allWittnesses = useWitnesses()
            render(allWittnesses)
        })
}

const render = (arrayOfWitnesses) => {
    const allWitnessesConvertedToStrings = arrayOfWitnesses.map(
        (currentWitness) => {
            return WitnessHTMLConverter(currentWitness)
        }
    ).join("")
    contentTarget.innerHTML += allWitnessesConvertedToStrings
}