export let   restoreState = (key, defaultState) => {
    let state = defaultState;
    let stateAsString = localStorage.getItem(key);
    if (stateAsString != null) {
        state = JSON.parse(stateAsString);
    }
    return state;
};
