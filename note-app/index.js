const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");

getNotes().forEach((note) => {
    const noteEl = createNote(note.id, note.content);
    appEl.insertBefore(noteEl, btnEl);
})

function createNote(id, content){
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;

    //double click triggers deleteNote()
    element.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to delete this note?");
        if(warning){
            deleteNote(id, element);
        }
    });
    //input triggers updateNote()
    element.addEventListener("input", ()=>{
        updateNote(id, element.value);
    });

    return element;
}

function deleteNote(id, element){
    const notes = getNotes().filter((note)=>note.id != id);
    saveNote(notes);
    appEl.removeChild(element);
}

function updateNote(id, content){
    const notes = getNotes();
    //The filter() method creates a new array filled with elements that pass a test provided by a function.
    const target = notes.filter((note) => note.id == id)[0];
    //think of that target.content is revised but saveNote is invoked without content parameter
    //target.content is kinda a pointer, referencing the original value
    //thus the original value is changed after revising target.content 
    target.content = content; 
    saveNote(notes);
}

function addNote(){
    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() * 1000000),
        content: "",
    };
    const noteEl = createNote(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl);
    
    notes.push(noteObj);

    saveNote(notes);
}

function saveNote(notes){
    //JSON is not object, is string! remember it is a notation
    localStorage.setItem("note-app", JSON.stringify(notes));
}

function getNotes(){
    //parse the notation to generate an object using in application level
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}

btnEl.addEventListener("click", addNote);