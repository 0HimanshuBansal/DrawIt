import React from 'react';
import './PenSize.css'

const PenSize = () => {
    const showSize = () => {
        console.log(document.getElementById('pen-size-slider').value);
    }
    return (
        <div className='pen-tool'>
            <div className='pen-size'>
                <input
                    className='pen-size-slider'
                    id='pen-size-slider'
                    type="range"
                    defaultValue={10} min={1} max={100}
                    onChange={() => { showSize() }}
                />
            </div>
        </div>
    )
}

export default PenSize;