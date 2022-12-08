import CanvasDraw from "react-canvas-draw";
import { useRef } from "react";
function DisplayCanvas({ canvasData }) {
    const data = useRef(null)
    data?.current?.loadSaveData(canvasData)
    console.log({ data })
    return (
        <div>
            <CanvasDraw
                ref={data}
                hideGrid={true}
                disabled={true}

            />
        </div >
    )
}

export default DisplayCanvas
