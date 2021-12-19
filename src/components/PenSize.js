import React from 'react';
import './PenSize.css'

const PenSize = () => {
    return (
        <div className='pen-tool'>
            <div className='pen-size'>
                <input className='pen-size-slider' type="range"  defaultValue={10} min={1} max={100} />
            </div>
        </div>
    )
}

export default PenSize;