export const OfficersHTMLConverter = (OfficerObj) => {
    return `
    <section class="officers">
        <h3 class="officer__name">${OfficerObj.name}</h3>
    </section>
    `
}