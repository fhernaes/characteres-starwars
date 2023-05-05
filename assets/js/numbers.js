import { getData } from "./api.js";

export const generateNumbers = function* (min, max) {
    let count = min;
    while (count <= max) {
      try {
        const data = yield getData(count);
        count++;
      } catch (error) {
        console.error(error);
      }
    }
  };
export const identifyNumbers = (element) => {
    const [min, max] = element.innerText.split('-').map(numStr => parseInt(numStr.trim()));
    return [min, max];
  };