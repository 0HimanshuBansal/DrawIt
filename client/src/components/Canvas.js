import React, { useEffect, useState } from 'react'
import './Canvas.css'

const Canvas = (props) => {
    // const [strokeColor, setStrokeColor] = useState("black");
    //    const [strokeWidth, setStrokeWidth] = useState("2");
    var mouseDown = false;
    //    const [mouseDown, setMouseDown] = useState(false);

    const initCanvas = () => {
        const canvas = document.getElementById('myCanvas');
        const black = document.getElementById('black');
        const red = document.getElementById('red');
        const blue = document.getElementById('blue');
        const eraser = document.getElementById('eraser');
        const size = document.getElementById('pen-size-slider');
        const pointer = document.getElementById('pointer');
        var isEraser = false;

        pointer.style.top = `${window.innerHeight / 2 - size.value / 2}px`;
        pointer.style.left = `${window.innerWidth / 2 - size.value / 2}px`;
        // const strokeWidth = document.getElementById('pen-size-slider').value;

        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;

        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const pen = canvas.getContext('2d');
        pen.scale(2, 2);
        pen.strokeStyle = 'black';
        pen.lineCap = 'round'

        canvas.addEventListener("mousedown", (event) => {
            // setMouseDown(true);
            pen.lineWidth = size.value;
            mouseDown = true;
            pen.beginPath();
            pen.moveTo(event.clientX, event.clientY);
        })

        canvas.addEventListener("mousemove", (event) => {
            if (mouseDown) {
                pen.lineTo(event.clientX, event.clientY);
                pen.stroke();
            }
        })

        canvas.addEventListener("mouseup", () => {
            mouseDown = false;
            // setMouseDown(false);
        })

        black.addEventListener("click", () => {
            pen.globalCompositeOperation = "source-over";
            pen.strokeStyle = "black";
        })
        red.addEventListener("click", () => {
            pen.globalCompositeOperation = "source-over";
            pen.strokeStyle = "red";
        })
        blue.addEventListener("click", () => {
            pen.globalCompositeOperation = "source-over";
            pen.strokeStyle = "blue";
        })
        eraser.addEventListener("click", () => {
            pen.globalCompositeOperation = "destination-out";
            isEraser = true;
        })

        size.addEventListener('mousedown', () => {
            pointer.style.display = 'block';
            pointer.style.backgroundColor = isEraser ? 'white' : pen.strokeStyle;
        })

        size.addEventListener('mousemove', () => {
            pointer.style.top = `${window.innerHeight / 2 - size.value / 2}px`;
            pointer.style.left = `${window.innerWidth / 2 - size.value / 2}px`;

            pointer.style.height = `${size.value}px`;
            pointer.style.width = `${size.value}px`;
        })

        size.addEventListener('mouseup', () => {
            pointer.style.display = 'none';
        })
    }

    useEffect(() => {
        initCanvas();
    }, [])

    return (
        <div className='myCanvas'>
            <div id='pointer'></div>
            <canvas id='myCanvas' />
        </div>
    )
}

export default Canvas;