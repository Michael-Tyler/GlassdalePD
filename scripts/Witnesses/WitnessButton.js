const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessContainer")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "witnessButton") {
        const witnessClickEvent = new CustomEvent("witnessButtonClicked")
        eventHub.dispatchEvent(witnessClickEvent)
    }
})

export const WitnessButton = () => {

    contentTarget.innerHTML += `<button id="witnessButton">Witness statements</button>`
}