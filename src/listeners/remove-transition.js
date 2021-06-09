import { removeTransition } from "../handlers/remove-transition.js";

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
