const  cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
  cats.push("Ralph");
}
function destructivelyPrependCat(){
  cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
  cats.pop();
}
function destructivelyRemoveFirstCat(){
  cats.shift();
}
function appendCat(){
  const newcats = [...cats,"Broom"];
  return newcats;
}

function prependCat(){
  const newprecats = ["Arnold",...cats];
  return newprecats;
}
function removeLastCat(){
  const removeLast = cats.slice();
  removeLast.pop();
  return removeLast;
}
function removeFirstCat(){
  const removeFirst = cats.slice();
  removeFirst.shift();
  return removeFirst;
}