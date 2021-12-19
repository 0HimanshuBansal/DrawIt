import React from 'react';
import './StickyNote.css';

const StickyNote = (props) => {
    const idNote = `sticky-note-${props.idkey}`;
    const idContent = `sticky-content-${props.idkey}`;

    // useEffect(() => {
    //     const note = document.getElementById("sticky-note");
    //     note.onmousedown = function (event) {
    //         dragNote(note, event);
    //     }

    //     note.ondragstart = function () {
    //         return false;
    //     };
    // }, [])

    // function dragNote(note, event) {
    //     let shiftX = event.clientX - note.getBoundingClientRect().left;
    //     let shiftY = event.clientY - note.getBoundingClientRect().top;

    //     note.style.position = 'absolute';
    //     note.style.zIndex = 1000;

    //     moveAt(event.pageX, event.pageY);
    //     function moveAt(pageX, pageY) {
    //         note.style.left = pageX - shiftX + 'px';
    //         note.style.top = pageY - shiftY + 'px';
    //     }

    //     function onMouseMove(event) {
    //         moveAt(event.pageX, event.pageY);
    //     }

    //     document.addEventListener('mousemove', onMouseMove);

    //     note.onmouseup = function () {
    //         document.removeEventListener('mousemove', onMouseMove);
    //         note.onmouseup = null;
    //     };
    // };

    const minimiseNote = () => {
        const minNote = document.getElementById(idNote);
        const minContent = document.getElementById(idContent);
        if (minNote.style.height === '15rem' || minNote.style.height === "") {
            // console.log("if : ", minNote.style.height);
            minNote.style.height = '4.4rem';
            minContent.style.height = '2.2rem';
        } else {
            // console.log("else : ", minNote.style.height);
            minNote.style.height = '15rem';
            minContent.style.height = '12.8rem';
        }
    }

    const deleteNote = () => {
        const delNote = document.getElementById(idNote);
        delNote.remove();
    }
    return (
        <div className='sticky-note' id={idNote}>
            <div className='sticky-header' id='sticky-header'>
                <div className='sticky-save' onClick={() => { minimiseNote() }}></div>
                <div className='sticky-close' onClick={() => { deleteNote() }}></div>
            </div>
            <div className='sticky-content' id={idContent}>
                <textarea></textarea>
            </div>
        </div>
    )
}

export default StickyNote;