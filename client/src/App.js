import React, { useState } from "react";
import Canvas from './components/Canvas'
import Tools from './components/Tools'
import StickyNote from './components/StickyNote'
import './App.css'
import PenSize from "./components/PenSize";
const App = () => {
  const [notes, setNotes] = useState([]);

  const createNote = () => {
    const id = notes.length;
    setNotes(notes.concat(<StickyNote key={id} idkey={id} />));

    setTimeout(() => {
      const note = document.getElementById(`sticky-note-${id}`);
      note.onmousedown = function (event) {
        dragNote(note, event);
      }

      note.ondragstart = function () {
        return false;
      };

    }, 10);
  }

  function dragNote(note, event) {
    let shiftX = event.clientX - note.getBoundingClientRect().left;
    let shiftY = event.clientY - note.getBoundingClientRect().top;

    note.style.position = 'absolute';
    note.style.zIndex = 1000;
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      note.style.left = pageX - shiftX + 'px';
      note.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);

    note.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove);
      note.onmouseup = null;
    };
  };

  return (
    <div className="app">
      <Tools createNote={createNote} />
      <PenSize />
      <Canvas />
      {notes}
    </div>
  );
}

export default App;
