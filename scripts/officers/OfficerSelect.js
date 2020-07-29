import { useOfficers, getOfficers } from "./OfficerProvider.js"


const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {

        // Define a custom event
        const OfficerSelectedEvent = new CustomEvent("officerSelected", {
            detail: {
                officerName: changeEvent.target.value
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(OfficerSelectedEvent)
    }
})

const render = officerCollection => {
        contentTarget.innerHTML = `
        <select class ="dropdown" id = "officerSelect">
        <option value = "0">Please select an officer...</option>
        ${
            officerCollection.map(
                officerObject => {
                    return `<option value = "${officerObject.name}">${officerObject.name}</option>`
                }
            ).join("")
        }
        </select>
    `
}

export const OfficerSelect = () => {
    getOfficers().then(() => {
        const Officers = useOfficers()

        render(Officers)
    })
}