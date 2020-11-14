export const toLocalStorage = (stateName, state) => {
  localStorage.setItem(stateName, state);
};
export const fromLocalStorage = (stateName) => {
  const state = localStorage.getItem(stateName);
  return state;
};
export const objectToLocalStorage = (stateName, state) => {
  localStorage.setItem(stateName, JSON.stringify(state));
};
export const objectFromLocalStorage = (stateName) => {
  const state = JSON.parse(localStorage.getItem(stateName));
  return state;
};
