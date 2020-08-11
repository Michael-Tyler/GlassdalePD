export const WitnessHTMLConverter = (witnessObj) => {
    return `
    <div class="witnessWrapper">
    <h4>Name: ${witnessObj.name}</h4>
    <div>Statement: ${witnessObj.statements}<div>
    </div>
    `
}