export const NoteHTMLConverter = (noteObject) => {
    return `
    <section class = "notes">
    <div> Author: ${noteObject.noteAuthor}</div>
    <div> Title: ${noteObject.noteTitle}</div>
    <div>${noteObject.noteContent}</div>
    <div class="note--timestamp">Date: ${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
    </section>
    `
}