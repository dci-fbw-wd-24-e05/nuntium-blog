/* const body = document.querySelector("body"); */
export const button = (text) => {
  const element = document.createElement("button");
  element.textContent = text;
  return element;
};
