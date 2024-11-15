import { button } from "./button.js";
export const buttonContainer = (buttons) => {
  const element = document.createElement("div");
  buttons.forEach((text) => {
    element.appendChild(button(text));
  });
  return element;
};
