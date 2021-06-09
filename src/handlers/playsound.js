/* import { data } from "../data.js";
import { isWord } from "../logic/is-word.js";
import { sortStrings } from "../logic/sort-strings.js";
import { updateList } from "../procedures/update-list.js";
*/

/**
 * @param {Event} e - The event triggered when the user clicks the button.
 */

export const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");
};

export const removeTransition = (e) => {
  if (e.propertyName !== "transform") return; // skip it if it's not a transform
  this.classList.remove("playing");
};
