
// handling squares
function Squares({value}) {

    // handles clicks
    function handleClick() {
        console.log("Clicked!");
    };


    return <button className="square" onClick={handleClick}>{value}</button>;
}



function Board() {
    return (
        // board spaces
    <div className="board">
        <div className="board-row">
            <Squares value="1"  />
            <Squares value="2"/>
            <Squares value="3"/>
        </div>

        <div className="board-row">
            <Squares value="4"/>
            <Squares value="5"/>
            <Squares value="6"/>
        </div>

        <div className="board-row">
            <Squares value="7"/>
            <Squares value="8"/>
            <Squares value="9"/>
        </div>
    </div>
    );
}



export default Board;