import { home } from "./home.js";
import { contact } from "./contact.js";
import { menu } from "./menu.js";
document
  .querySelector(`.nav-right > button:nth-child(1)`)
  .addEventListener(`click`, home);

document
  .querySelector(`.nav-right > button:nth-child(2)`)
  .addEventListener(`click`, contact);

document
  .querySelector(`.nav-right > button:nth-child(3)`)
  .addEventListener(`click`, menu);

home();
