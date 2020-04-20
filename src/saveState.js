export let saveState=(key, state)=> {
    let stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString);
};
