import { useState } from "react";

// handling squares
function Squares() {
    //stores state of squares
    const [val, setVal] = useState(null);

    // handles clicks
    function handleClick() {
        setVal("X");
        console.log(val);
    };


    return <button className="square" onClick={handleClick}>{val}</button>;
}



function Board() {
    return (
        // board spaces
    <div className="board">
        <div className="board-row">
            <Squares  />
            <Squares />
            <Squares />
        </div>

        <div className="board-row">
            <Squares />
            <Squares />
            <Squares />
        </div>

        <div className="board-row">
            <Squares />
            <Squares />
            <Squares />
        </div>
    </div>
    );
}



export default Board;