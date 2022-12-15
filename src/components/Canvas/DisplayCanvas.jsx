import CanvasDraw from "react-canvas-draw";
import { useRef } from "react";
function DisplayCanvas({ canvasData }) {
    const data = useRef(null)
    data?.current?.loadSaveData(canvasData)

    return (
        <div>
            <CanvasDraw
                canvasWidth={320}
                canvasHeight={320}
                ref={data}
                hideGrid={true}
                disabled={true}

            />
        </div >
    )
}

export default DisplayCanvas
