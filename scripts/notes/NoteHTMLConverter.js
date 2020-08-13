// export const NoteHTMLConverter = (noteObject) => {
//     return `
//     <section class = "notes">
//     <div> Author: ${noteObject.noteAuthor}</div>
//     <div> Title: ${noteObject.noteTitle}</div>
//     <div>${noteObject.noteContent}</div>
//     <div class="note--timestamp">Date: ${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
//     </section>
//     `
// }

export const NoteHTMLConverter = (noteObject, criminalObject) => {

    return `
    <section class="note">
        <h2>Note about ${criminalObject.name}</h2>
        ${noteObject.noteText}
        <h5>${noteObject.noteAuthor}</h5>
        <div class="note--timestamp">Date: ${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
    </section>
`
}