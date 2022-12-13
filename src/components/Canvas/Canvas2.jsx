import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { Button } from "react-bootstrap";


function Canvas2({ setData }) {
    // const { setData } = setData

    const firstCanvas = useRef(null)
    const secondCanvas = useRef(null)
    const [color, setColor] = useState('black')
    const [Radius, setRadius] = useState(4)

    const handleClick = () => {
        const savedDrawing = firstCanvas.current.getSaveData()
        setData(savedDrawing)

        secondCanvas.current.loadSaveData(savedDrawing);
    }
    const clear = (e) => {
        e.preventDefault();
        firstCanvas.current.clear()
    }

    const undo = (e) => {
        e.preventDefault();

        firstCanvas.current.undo()
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
                        ref={firstCanvas}
                        lazyRadius={0}
                        brushColor={color}
                        brushRadius={Radius}

                    />

                    <button onClick={handleClick}>
                        Save Drawing
                    </button>
                    <button onClick={clear}>
                        Clear Canvas
                    </button>
                    <button onClick={undo}>
                        Undo Stroke
                    </button>
                </div>

                <div>

                    <CanvasDraw
                        ref={secondCanvas}

                        hideGrid={true}
                        disabled={true}


                    />
                </div>

            </div>
        </div >
    )
}

export default Canvas2
