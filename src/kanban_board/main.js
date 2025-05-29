const todoNotes = document.getElementById("todoNotes");
const progressNotes = document.getElementById("progressNotes");
const finishedNotes = document.getElementById("finishedNotes");

const newTodoNote = document.getElementById("newTodoNote");
const newProgressNote = document.getElementById("newProgressNote");
const newFinishedNote = document.getElementById("newFinishedNote");

let notes = JSON.parse(localStorage.getItem("kanbanNotes")) || [];

function saveNotes() {
    localStorage.setItem("kanbanNotes", JSON.stringify(notes));
}

function createNoteElement(id, text, column) {
    const note = document.createElement("div");
    note.className = "note card mb-3";
    note.draggable = true;
    note.dataset.id = id;
    note.dataset.column = column;

    note.innerHTML = `
        <div class="card-body">
          <p class="mb-0">${text}</p>
        </div>
      `;

    note.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", id);
    });

    return note;
}

function renderNotes() {
    todoNotes.innerHTML = "";
    progressNotes.innerHTML = "";
    finishedNotes.innerHTML = "";

    notes.forEach(note => {
        const el = createNoteElement(note.id, note.text, note.column);
        if (note.column === "todo") todoNotes.appendChild(el);
        else if (note.column === "progress") progressNotes.appendChild(el);
        else if (note.column === "finished") finishedNotes.appendChild(el);
    });
}

function addNewNote(column) {
    const text = window.prompt("Enter a new note:");
    if (!text || text.trim() === "") return alert("Note cannot be empty.");
    const id = Date.now().toString();

    const note = { id, text, column };
    notes.push(note);
    saveNotes();
    renderNotes();
}

newTodoNote.addEventListener("click", () => addNewNote("todo"));
newProgressNote.addEventListener("click", () => addNewNote("progress"));
newFinishedNote.addEventListener("click", () => addNewNote("finished"));

document.querySelectorAll(".droppable-area").forEach(area => {
    area.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    });

    area.addEventListener("drop", (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const note = notes.find(n => n.id === id);
        if (!note) return;

        note.column = area.dataset.column;
        saveNotes();
        renderNotes();
    });
});

renderNotes();