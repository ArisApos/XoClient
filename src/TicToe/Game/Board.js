import React from 'react'
import { SquareContainer } from './'

const arr = Array(3).fill(null),
      renderSquareX = (x,gameId) => arr.map((el, index) => <SquareContainer key={index+x} gameId={gameId} i={index + x} /> ),
      paint = ()=>{ node.classList.toggle("mystyle") }

let node;// We use the initializing way for demonstration purposes

let Board = ({gameId})=>{
    return (
      <div className="gameBoard">
        <div
          ref={nodeEl => { if(nodeEl) node = nodeEl; }}
          onClick={paint}
          className="boardRow"
        >
          {renderSquareX(0,gameId)}
        </div>
        <div className="boardRow">{renderSquareX(3,gameId)}</div>
        <div className="boardRow">{renderSquareX(6, gameId)}</div>
      </div>
    );
}
Board = React.memo(Board);
export { Board }
// export { Board, node, paint } we can pas functions, elements, from Component=>Component with export like the props 