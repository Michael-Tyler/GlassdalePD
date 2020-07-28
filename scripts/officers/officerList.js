import { OfficersHTMLConverter } from "./OfficerHtml.js"
import { useOfficers, getOfficers } from "./OfficerProvider.js"

const contentTarget = document.querySelector(".officersContainer")

export const OfficersList = () => {
    getOfficers()
        .then(() => {
            const officerArray = useOfficers()
            let OfficersHTMLRepresntation = ""
            officerArray.forEach(officer => {
                OfficersHTMLRepresntation += OfficersHTMLConverter(officer)
            })
            contentTarget.innerHTML = `
            <h2 class="officerTitle">Glassdale Officers</h2>
            <article class="officerList">
            ${OfficersHTMLRepresntation}
            </article>
            `
        })
}