export let   restoreState = (key) => {
    let stateAsString = localStorage.getItem(key);
    if (stateAsString != null) {
        return JSON.parse(stateAsString);
    } else return null
};
