const actionCreator = (type, ...argsNames) => (...args) => {
    const action = { type }
    argsNames.forEach((argName, index) => { action[argName] = args[index] })
    return action;
}
export {actionCreator}



