import { useCriminals, getCriminals } from "./criminalDataProvider.js"
import { CriminalsHTMLConverter } from "./criminalHTMLConverter.js";

const contentTarget = document.querySelector(".criminalsContainer")

export const CriminalsList = () => {

    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            let CriminalsHTMLRepresentation = ""
            criminalArray.forEach(criminal => {
                CriminalsHTMLRepresentation += CriminalsHTMLConverter(criminal)
            })
            contentTarget.innerHTML = `
            <h2 class= "criminalTitle">Glassdale Convicted Criminals</h2>
            <article class="criminalList">
                ${ CriminalsHTMLRepresentation }
            </article>
        `
        })
}