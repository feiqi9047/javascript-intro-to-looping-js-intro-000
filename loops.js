function forLoop(array){
  for (let i = 0; i<25; i++) {
  if (i===1){
    console.log("I am " + i + " strange loop.");
  }else{
    console.log("I am " + i + " strange loops.");
  }
}
return array
}

function whileLoop(n){
  let countdown = n
  while (countdown > 0){
    console.log(--countdown);
  }
  return "done"
}

function doWhileLoop(array){
  function incrementVariable() {
  i = i - 1;
  }
  do {('${array}'); incrementVariable();} while (array.length>0 && incrementVariable())
return array
}