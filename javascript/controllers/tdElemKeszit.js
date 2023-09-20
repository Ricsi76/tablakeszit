function tdElemKeszitoFuggveny(adat) {
  let tdElem = document.createElement("td");
  tdElem.innerText = adat;

  return tdElem;
}

export { tdElemKeszitoFuggveny };
