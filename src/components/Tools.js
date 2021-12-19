import React from 'react'
import './Tools.css'

import Black from '../media/BlackPencil.png'
import Red from '../media/RedPencil.png'
import Blue from '../media/BluePencil.png'
import Yellow from '../media/YellowPencil.png'
import Green from '../media/GreenPencil.png'
import Custom from '../media/color-wheel.png'
import Eraser from '../media/Eraser.png'
import StickyNotePng from '../media/StickyNote.png'

const Tools = (props) => {
    return (
        <>
            <div className='tools-container'>
                <div className='tool'><img src={Black} alt="Black Pen" /></div>
                <div className='tool'><img src={Red} alt="Red Pen" /></div>
                <div className='tool'><img src={Blue} alt="Blue Pen" /></div>
                <div className='tool'><img src={Custom} alt="Eraser" /></div>
                <div className='tool'><img src={Eraser} alt="Eraser" /></div>
                <div className='tool note' onClick={() => { props.createNote() }}>
                    <img src={StickyNotePng} alt="Note" style={{ borderRadius: "0", padding: "0.5rem" }} />
                </div>
            </div>
        </>
    )
}

export default Tools