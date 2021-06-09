/**
 * @param {Event} e - The event triggered after button's effects were played.
 */

export const removeTransition = (e) => {
  if (e.propertyName !== "transform") return; // skip it if it's not a transform
  const target = e.currentTarget;
  target.classList.remove("playing");
};
