//squares has all the x,o,nu.   Is array with length of 9
//Returns object with results(null,x,o) and lines(position of the winner array with length of 3)
const calculateWinner = (squares)=>{
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    //We love functional programming but in this case for is better(faster for big calc and brakes)
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            //We have a winner=>squares[a]=squares[b]=squares[c] in the position of lines[0],lines[1],lines[2]
            return { winner:squares[a], winnerLine:lines[i] }
        }
    }
    //We dont have a winner case
    return { winner: null, winnerLine:null };
}

export { calculateWinner }