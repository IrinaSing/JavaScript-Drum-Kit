/* import { data } from "../data.js";
import { isWord } from "../logic/is-word.js";
import { sortStrings } from "../logic/sort-strings.js";
import { updateList } from "../procedures/update-list.js";
*/

/**
 * @param {Event} e - The event triggered after button's effects were played.
 */

export const removeTransition = (e) => {
  if (e.propertyName !== "transform") return; // skip it if it's not a transform
  const target = e.currentTarget;
  target.classList.remove("playing");
};
