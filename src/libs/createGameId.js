const createGameId =()=>{
    let id=0;
    return ()=>id++
}
const getGameId = createGameId();

export { getGameId };