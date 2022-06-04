type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void
}

// this is intersection type which can use both methods
type UIWidget = Draggable & Resizable

let chatbox: UIWidget = {
    drag: () => { },
    resize: () => { },
}