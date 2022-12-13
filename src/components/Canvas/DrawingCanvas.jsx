import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { Button } from "react-bootstrap";


function DrawingCanvas(props) {

    const saveCanvasData = props.saveCanvasData

    const canvas = useRef(null)

    const [color, setColor] = useState('black')
    const [Radius, setRadius] = useState(4)

    const handleSave = (e) => {
        e.preventDefault();
        const savedDrawing = canvas.current.getSaveData()
        saveCanvasData(savedDrawing)
    }
    const clear = (e) => {
        e.preventDefault();
        canvas.current.clear()
    }

    const undo = (e) => {
        e.preventDefault();
        canvas.current.undo()
    }

    const changeColor = (e) => {
        setColor(e.target.value)
    }



    return (
        <div>
            <div class="container">
                <div className="canvasDraw">
                    <CanvasDraw
                        style={{ border: '1px solid', borderRadius: '20px' }}
                        hideGrid={true}
                        canvasWidth={300}
                        canvasHeight={300}
                        ref={canvas}
                        lazyRadius={0}
                        brushColor={color}
                        brushRadius={Radius}

                    />
                    <div>
                        <input id="color-input" onChange={changeColor} type='color'></input>
                    </div>
                    <button onClick={handleSave}>
                        Save Drawing
                    </button>
                    <button onClick={clear}>
                        Clear Canvas
                    </button>
                    <button onClick={undo}>
                        Undo Stroke
                    </button>

                </div>

            </div>
        </div >
    )
}

export default DrawingCanvas
