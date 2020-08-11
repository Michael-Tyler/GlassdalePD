const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {
        const [prompt, criminalId] = clickEvent.target.id.split("--")

        const alibiEvent = new CustomEvent("associatesClicked", {
            detail: {
                chosenCriminal: criminalId
            }
        })
        eventHub.dispatchEvent(alibiEvent)
    }
})


export const CriminalsHTMLConverter = (criminalObj) => {
    return `
    <section class="criminals">
        <h3 class="criminal__name">${criminalObj.name}</h3>
        <p class="criminal__age">Age: ${criminalObj.age}</p>
        <p class="criminal__conviction">Crime: ${criminalObj.conviction}</p>
        <div class="criminal__incarceration">
            <p>Term start:${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Term end:${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        </div>
        <button id="associates--${criminalObj.id}">Associate Alibis</button>
        
    </section>
    `
}