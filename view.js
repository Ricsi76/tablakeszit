import { trElemKeszitoFuggveny } from "./javascript/controllers/trElemKeszit.js";
import { thElemKeszitoFuggveny } from "./javascript/controllers/thElemKeszit.js";
import { tdElemKeszitoFuggveny } from "./javascript/controllers/tdElemKeszit.js";
import { fejlec, tartalom } from "./javascript/model.js";

let tabla = document.createElement("table");

// Fejléc
let fejSor = trElemKeszitoFuggveny();
fejSor.appendChild(thElemKeszitoFuggveny(fejlec[0]));
fejSor.appendChild(thElemKeszitoFuggveny(fejlec[1]));
tabla.appendChild(fejSor);

// Első sor
let elsoSor = trElemKeszitoFuggveny();
elsoSor.appendChild(tdElemKeszitoFuggveny(tartalom[0]));
elsoSor.appendChild(tdElemKeszitoFuggveny(tartalom[1]));
tabla.appendChild(elsoSor);

let test = document.body;
test.appendChild(tabla);
