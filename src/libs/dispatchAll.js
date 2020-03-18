const dispatchAll = (dispatch, ...actions) => actions.forEach(action => dispatch(action))

export { dispatchAll }