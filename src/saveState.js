export let saveState=(key, state)=> {
    let stateAsString = JSON.stringify(state);
    localStorage.removeItem(key);
    localStorage.setItem(key, stateAsString);
};
