export const CriminalsHTMLConverter = (criminalObj) => {
    return `
    <section class="criminal">
        <h3 class="criminal__name">${criminalObj.name}</h3>
        <p class="criminal__age">Age: ${criminalObj.age}</p>
        <p class="criminal__conviction">Crime: ${criminalObj.conviction}</p>
        <div class="criminal__incarceration">
            <p>Term start:${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Term end:${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        </div>
    </section>
    `
}